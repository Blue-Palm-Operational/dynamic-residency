import Stripe from 'stripe'
import { getDb, initDb } from '../utils/db'
import { createTransporter, getAdminEmails, getFrom } from '../utils/mailer'

const packageLabels: Record<string, string> = {
  basis: 'Basis — Ein Vermögensthema im Fokus',
  unternehmer: 'Unternehmer — Mehrere Vermögensarten',
  familyOffice: 'Family Office — Komplexe Strukturen',
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { paymentIntentId, customerEmail, customerName } = body

  if (!paymentIntentId) {
    throw createError({ statusCode: 400, statusMessage: 'Fehlende Payment Intent ID' })
  }

  // Verify payment with Stripe
  const stripe = new Stripe(config.stripeSecretKey)
  const pi = await stripe.paymentIntents.retrieve(paymentIntentId)

  if (pi.status !== 'succeeded') {
    throw createError({ statusCode: 400, statusMessage: 'Zahlung nicht abgeschlossen' })
  }

  const packageId = pi.metadata?.packageId || 'basis'
  const packageLabel = packageLabels[packageId] || packageId
  const amountFormatted = `€ ${(pi.amount / 100).toLocaleString('de-AT')}`

  // Save to DB (ignore duplicates via UNIQUE constraint on payment_intent_id)
  await initDb()
  const pool = getDb()
  try {
    await pool.execute(
      `INSERT IGNORE INTO payments (payment_intent_id, package_id, package_name, amount_cents, currency, customer_email, customer_name)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [pi.id, packageId, packageLabel, pi.amount, pi.currency, customerEmail || '', customerName || ''],
    )
  } catch (_) {}

  const transporter = createTransporter()
  const from = getFrom()
  const adminEmails = getAdminEmails()

  const adminHtml = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a1525;color:#e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#1c5c1c,#2d8a2d);padding:32px 40px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">✓ Zahlung eingegangen</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Dynamic Residency</p>
      </div>
      <div style="padding:32px 40px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#94a3b8;font-size:13px;width:160px;">Paket</td><td style="padding:10px 0;color:#fff;font-size:14px;font-weight:600;">${packageLabel}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Betrag</td><td style="padding:10px 0;color:#4ade80;font-size:18px;font-weight:700;">${amountFormatted}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Kunde</td><td style="padding:10px 0;color:#fff;font-size:14px;">${customerName || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">E-Mail</td><td style="padding:10px 0;color:#fff;font-size:14px;">${customerEmail || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Stripe ID</td><td style="padding:10px 0;color:#64748b;font-size:12px;">${pi.id}</td></tr>
        </table>
      </div>
      <div style="padding:20px 40px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.07);">
        <p style="margin:0;font-size:11px;color:#475569;">Dynamic Residency · Dynamic Works · ${new Date().toLocaleString('de-AT')}</p>
      </div>
    </div>
  `

  const customerHtml = customerEmail ? `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a1525;color:#e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#8B2535,#C84865);padding:32px 40px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Ihre Buchung ist bestätigt${customerName ? `, ${customerName.split(' ')[0]}` : ''}.</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Dynamic Residency · Strukturanalyse</p>
      </div>
      <div style="padding:32px 40px;">
        <div style="background:rgba(255,255,255,0.04);border-radius:10px;padding:20px 24px;margin-bottom:28px;">
          <p style="margin:0 0 4px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Gebuchtes Paket</p>
          <p style="margin:0;color:#fff;font-size:16px;font-weight:700;">${packageLabel}</p>
          <p style="margin:6px 0 0;color:#E5232F;font-size:22px;font-weight:700;">${amountFormatted} <span style="color:#64748b;font-size:13px;font-weight:400;">zzgl. USt.</span></p>
        </div>
        <p style="color:#94a3b8;font-size:15px;line-height:1.7;">
          Vielen Dank für Ihre Buchung. Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen, um den ersten Termin zu vereinbaren und die nächsten Schritte zu besprechen.
        </p>
        <p style="color:#94a3b8;font-size:15px;line-height:1.7;">
          Bitte antworten Sie nicht auf diese E-Mail — für Rückfragen wenden Sie sich direkt an <a href="mailto:info@dynamicworks.email" style="color:#E5232F;">info@dynamicworks.email</a>.
        </p>
        <div style="margin-top:28px;padding:20px;background:rgba(229,35,47,0.07);border-left:3px solid #E5232F;border-radius:0 8px 8px 0;">
          <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.6;">
            <strong style="color:#fff;">Stand Juni 2026.</strong> Das beschriebene türkische Steuerregime beruht auf einer im April 2026 angekündigten Gesetzesinitiative, die sich im parlamentarischen Verfahren befindet; maßgeblich sind die finale Gesetzesfassung und die Verwaltungspraxis.
          </p>
        </div>
      </div>
      <div style="padding:20px 40px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.07);">
        <p style="margin:0;font-size:11px;color:#475569;">© 2026 Dynamic Works · Bitte nicht auf diese Mail antworten.</p>
      </div>
    </div>
  ` : null

  const mailJobs = [
    transporter.sendMail({
      from,
      to: adminEmails,
      subject: `[Dynamic Residency] ✓ Zahlung ${amountFormatted} — ${packageId}`,
      html: adminHtml,
    }),
  ]

  if (customerEmail && customerHtml) {
    mailJobs.push(
      transporter.sendMail({
        from,
        replyTo: `"Bitte nicht antworten" <no-reply@dynamicworks.email>`,
        to: customerEmail,
        subject: 'Ihre Buchungsbestätigung — Dynamic Residency',
        html: customerHtml,
      }),
    )
  }

  await Promise.all(mailJobs)

  return { ok: true }
})
