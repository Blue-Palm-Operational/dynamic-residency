<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="$emit('close')" />

        <!-- Modal card -->
        <div class="relative z-10 w-full max-w-md bg-white rounded-2xl border border-[var(--line)] shadow-2xl overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-7 py-5 border-b border-[var(--line)] bg-[var(--navy)]">
            <div>
              <p class="text-white/50 text-xs uppercase tracking-widest mb-0.5">{{ packageTier }}</p>
              <h3 class="text-white font-bold text-lg">{{ packageName }}</h3>
            </div>
            <div class="text-right">
              <span class="text-white font-bold text-2xl">{{ packagePrice }}</span>
              <p class="text-white/40 text-xs mt-0.5">{{ $t('payment.vatNote') }}</p>
            </div>
          </div>

          <!-- Close button -->
          <button
            @click="$emit('close')"
            class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Body -->
          <div class="px-7 py-6">
            <!-- Loading state -->
            <div v-if="loading" class="flex flex-col items-center justify-center py-10 gap-3">
              <div class="w-8 h-8 border-2 border-[var(--red)] border-t-transparent rounded-full animate-spin" />
              <p class="text-[var(--muted)] text-sm">{{ $t('payment.loading') }}</p>
            </div>

            <!-- Error state -->
            <div v-else-if="error" class="py-6 text-center">
              <p class="text-red-600 text-sm mb-4">{{ error }}</p>
              <button @click="initStripe" class="text-[var(--red)] text-sm underline">{{ $t('payment.retry') }}</button>
            </div>

            <!-- Stripe Payment Element -->
            <div v-show="!loading && !error">
              <div id="payment-element" class="mb-5" />

              <button
                @click="handleSubmit"
                :disabled="paying"
                class="w-full py-4 text-sm font-bold text-white bg-[var(--red)] hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors tracking-wide uppercase"
              >
                <span v-if="paying" class="flex items-center justify-center gap-2">
                  <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {{ $t('payment.processing') }}
                </span>
                <span v-else>{{ $t('payment.payNow', { price: packagePrice }) }}</span>
              </button>

              <p class="text-[var(--muted)] text-xs text-center mt-4">
                {{ $t('payment.secureNotice') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js'
import type { Stripe, StripeElements } from '@stripe/stripe-js'

const props = defineProps<{
  open: boolean
  packageId: string
  packageName: string
  packageTier: string
  packagePrice: string
  customerEmail?: string
  customerName?: string
}>()

defineEmits(['close'])

const config = useRuntimeConfig()

let stripe: Stripe | null = null
let elements: StripeElements | null = null

const loading = ref(true)
const paying = ref(false)
const error = ref('')

const initStripe = async () => {
  loading.value = true
  error.value = ''

  try {
    stripe = await loadStripe(config.public.stripePublishableKey)
    if (!stripe) throw new Error('Stripe could not be loaded')

    const { clientSecret } = await $fetch<{ clientSecret: string }>('/api/create-payment-intent', {
      method: 'POST',
      body: { packageId: props.packageId },
    })

    elements = stripe.elements({ clientSecret, appearance: stripeAppearance })

    const paymentElement = elements.create('payment')
    paymentElement.mount('#payment-element')
    paymentElement.on('ready', () => { loading.value = false })
  } catch (e: any) {
    error.value = e.message || 'Error loading payment form'
    loading.value = false
  }
}

const handleSubmit = async () => {
  if (!stripe || !elements) return
  paying.value = true
  error.value = ''

  const params = new URLSearchParams()
  if (props.customerEmail) params.set('customer_email', props.customerEmail)
  if (props.customerName) params.set('customer_name', props.customerName)
  const returnUrl = `${window.location.origin}/payment-success?${params.toString()}`

  const { error: stripeError } = await stripe.confirmPayment({
    elements,
    confirmParams: { return_url: returnUrl },
  })

  if (stripeError) {
    error.value = stripeError.message || 'Payment failed'
    paying.value = false
  }
}

watch(() => props.open, (val) => {
  if (val) {
    nextTick(() => initStripe())
  } else {
    loading.value = true
    error.value = ''
    paying.value = false
  }
})

const stripeAppearance = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary: '#ed1c24',
    colorBackground: '#ffffff',
    colorText: '#172033',
    colorTextSecondary: '#667085',
    colorDanger: '#dc2626',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '10px',
    spacingUnit: '4px',
  },
  rules: {
    '.Input': {
      border: '1px solid #dbe2eb',
      backgroundColor: '#f4f6f9',
      color: '#172033',
    },
    '.Input:focus': {
      border: '1px solid #ed1c24',
      boxShadow: '0 0 0 2px rgba(237,28,36,0.15)',
    },
    '.Label': { color: '#667085', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase' },
  },
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>
