<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6">
    <div class="max-w-md w-full text-center">
      <div class="w-16 h-16 rounded-full bg-[var(--red)]/10 flex items-center justify-center mx-auto mb-6">
        <svg class="w-8 h-8 text-[var(--red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-[var(--navy)] mb-4" style="font-family: 'Cairo', sans-serif">Zahlung erfolgreich</h1>
      <p class="text-[var(--muted)] leading-relaxed mb-8">
        Vielen Dank für Ihre Buchung. Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet. Unser Team meldet sich innerhalb von 24 Stunden.
      </p>
      <NuxtLink
        to="/"
        class="inline-block px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white bg-[var(--red)] hover:opacity-90 rounded-lg transition-opacity"
      >
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

onMounted(async () => {
  const paymentIntentId = route.query.payment_intent as string
  if (!paymentIntentId) return

  // Extract email/name from Stripe redirect URL if available
  const customerEmail = route.query.customer_email as string || ''
  const customerName = route.query.customer_name as string || ''

  try {
    await $fetch('/api/payment-notify', {
      method: 'POST',
      body: { paymentIntentId, customerEmail, customerName },
    })
  } catch (_) {
    // Silent fail — payment already confirmed by Stripe
  }
})
</script>
