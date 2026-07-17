import Stripe from 'stripe'

const packageAmounts: Record<string, number> = {
  expertConsultation: 39000,        // € 390
  strategicResidencyReview: 99000,  // € 990
  crossBorderStructureReview: 299000 // € 2,990
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)

  const body = await readBody(event)
  const { packageId } = body

  const amount = packageAmounts[packageId]
  if (!amount) {
    throw createError({ statusCode: 400, statusMessage: 'Ungültiges Paket' })
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'eur',
    automatic_payment_methods: { enabled: true },
    metadata: { packageId }
  })

  return { clientSecret: paymentIntent.client_secret }
})
