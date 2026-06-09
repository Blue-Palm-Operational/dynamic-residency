import { getDb, initDb } from '../utils/db'
import { createTransporter, getAdminEmails, getFrom } from '../utils/mailer'

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const phone = formData.get('phone') as string
  const email = formData.get('email') as string
  const taxResidence = formData.get('taxResidence') as string
  const passport1File = formData.get('passportFile1') as File | null
  const passport2File = formData.get('passportFile2') as File | null

  if (!name || !surname || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Pflichtfelder fehlen' })
  }

  await initDb()
  const pool = getDb()
  const [result] = await pool.execute(
    `INSERT INTO registrations (name, surname, phone, email, tax_residence) VALUES (?, ?, ?, ?, ?)`,
    [name, surname, phone || '', email, taxResidence || ''],
  ) as any[]
  const insertId = result.insertId

  const transporter = createTransporter()
  const from = getFrom()
  const adminEmails = getAdminEmails()

  const attachments: any[] = []
  for (const [file, label] of [[passport1File, 'Reisepass 1'], [passport2File, 'Reisepass 2']] as [File | null, string][]) {
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer())
      attachments.push({ filename: `${label} - ${file.name}`, content: buffer })
    }
  }

  const adminHtml = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a1525;color:#e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#8B2535,#C84865);padding:32px 40px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Neue Interessenregistrierung</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Dynamic Residency</p>
      </div>
      <div style="padding:32px 40px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#94a3b8;font-size:13px;width:160px;">Name</td><td style="padding:10px 0;color:#fff;font-size:14px;font-weight:600;">${name} ${surname}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">E-Mail</td><td style="padding:10px 0;color:#fff;font-size:14px;">${email}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Telefon</td><td style="padding:10px 0;color:#fff;font-size:14px;">${phone || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Steuerlicher Wohnsitz</td><td style="padding:10px 0;color:#fff;font-size:14px;">${taxResidence || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Reisepass 1</td><td style="padding:10px 0;color:#fff;font-size:14px;">${passport1File?.name || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">Reisepass 2</td><td style="padding:10px 0;color:#fff;font-size:14px;">${passport2File?.name || '—'}</td></tr>
          <tr style="border-top:1px solid rgba(255,255,255,0.07);"><td style="padding:10px 0;color:#94a3b8;font-size:13px;">ID</td><td style="padding:10px 0;color:#64748b;font-size:12px;">#${insertId}</td></tr>
        </table>
      </div>
      <div style="padding:20px 40px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.07);">
        <p style="margin:0;font-size:11px;color:#475569;">Dynamic Residency · Dynamic Works · ${new Date().toLocaleString('de-AT')}</p>
      </div>
    </div>
  `

  const confirmHtml = `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0a1525;color:#e2e8f0;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#8B2535,#C84865);padding:32px 40px;">
        <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Vielen Dank, ${name}.</h1>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Wir haben Ihre Registrierung erhalten.</p>
      </div>
      <div style="padding:32px 40px;">
        <p style="color:#94a3b8;font-size:15px;line-height:1.7;">
          Unser Team wird sich in Kürze bei Ihnen melden, um Ihre Situation zu besprechen und den nächsten Schritt zu klären.
        </p>
        <p style="color:#94a3b8;font-size:15px;line-height:1.7;">
          Bitte antworten Sie nicht auf diese E-Mail — für Rückfragen verwenden Sie direkt <a href="mailto:info@dynamicworks.email" style="color:#E5232F;">info@dynamicworks.email</a>.
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
  `

  await Promise.all([
    transporter.sendMail({
      from,
      to: adminEmails,
      subject: `[Dynamic Residency] Neue Registrierung: ${name} ${surname}`,
      html: adminHtml,
      attachments,
    }),
    transporter.sendMail({
      from,
      replyTo: `"Bitte nicht antworten" <no-reply@dynamicworks.email>`,
      to: email,
      subject: 'Ihre Registrierung bei Dynamic Residency',
      html: confirmHtml,
    }),
  ])

  return { ok: true, id: insertId }
})
