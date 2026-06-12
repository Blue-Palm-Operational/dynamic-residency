<template>
  <section class="bg-[#051228] py-24" id="register">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <!-- Left: Beschreibung -->
        <div>
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-wide mb-5">
            {{ $t('register.title') }}
          </h2>
          <p class="text-white/60 text-base leading-relaxed mb-6">
            {{ $t('register.description') }}
          </p>
          <ul class="space-y-2 mb-6">
            <li v-for="(bullet, i) in registerBullets" :key="i" class="flex items-start gap-3">
              <span class="mt-2 w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
              <span class="text-white/70 text-sm leading-relaxed">{{ bullet }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: Formular -->
        <div class="bg-[#0d1a2d] rounded-3xl p-8 md:p-10">

          <!-- Form -->
            <!-- Success state -->
            <div v-if="submitted" class="flex flex-col items-center text-center py-8">
              <div class="w-14 h-14 rounded-full bg-brand-red/15 flex items-center justify-center mb-5">
                <svg class="w-7 h-7 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-white font-bold text-xl mb-2">{{ $t('register.successTitle') }}</h3>
              <p class="text-white/60 text-sm leading-relaxed">{{ $t('register.successText') }}</p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.name') }}</span>
                  <input v-model="form.name" type="text" required class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.surname') }}</span>
                  <input v-model="form.surname" type="text" required class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.phone') }}</span>
                  <input v-model="form.phone" type="tel" class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.email') }}</span>
                  <input v-model="form.email" type="email" required class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.passport1') }}</span>
                  <input v-model="form.passport1" type="text" class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
                <label class="flex flex-col gap-1.5">
                  <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.passport2') }}</span>
                  <input v-model="form.passport2" type="text" class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </label>
              </div>
              <label class="flex flex-col gap-1.5">
                <span class="text-white/40 text-xs tracking-widest uppercase">{{ $t('register.fields.taxResidence') }}</span>
                <input v-model="form.taxResidence" type="text" class="w-full bg-[#0a1525] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
              </label>
              <p v-if="formError" class="text-red-400 text-xs">{{ formError }}</p>
              <button
                type="submit"
                :disabled="submitting"
                class="w-full py-4 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-colors tracking-widest uppercase shadow-lg mt-2"
              >
                <span v-if="submitting" class="flex items-center justify-center gap-2">
                  <span class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Wird gesendet…
                </span>
                <span v-else>{{ $t('register.cta') }}</span>
              </button>

            </form>
        </div>
      </div>

      <p class="text-white/50 text-sm leading-relaxed text-center mt-10">{{ $t('newsletter.subtext') }}</p>

      <!-- Calendly Widget -->
      <div id="next-session" class="mt-14 pt-10 border-t border-white/10">
        <div
          class="calendly-inline-widget rounded-2xl overflow-hidden w-full"
          data-url="https://calendly.com/dynamic-works-international/new-meeting?hide_gdpr_banner=1&background_color=071525&text_color=ffffff&primary_color=e5232f"
          style="width:100%;height:700px;"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const registerBullets = computed(() => (tm('newsletter.bullets') as any[]).map(b => rt(b)))

useHead({
  script: [{ src: 'https://assets.calendly.com/assets/external/widget.js', async: true }],
  link: [{ rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css' }],
})

const form = reactive({ name: '', surname: '', phone: '', email: '', passport1: '', passport2: '', taxResidence: '' })
const submitting = ref(false)
const submitted = ref(false)
const formError = ref('')

async function handleSubmit() {
  submitting.value = true
  formError.value = ''
  try {
    await $fetch('/api/register', { method: 'POST', body: { ...form } })
    submitted.value = true
  } catch (e: any) {
    formError.value = e?.data?.statusMessage || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
  } finally {
    submitting.value = false
  }
}
</script>
