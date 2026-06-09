import nodemailer from 'nodemailer'

export function createTransporter() {
  const config = useRuntimeConfig()

  return nodemailer.createTransport({
    host: config.mailHost,
    port: Number(config.mailPort),
    secure: Number(config.mailPort) === 465,
    auth: {
      user: config.mailUsername,
      pass: config.mailPassword,
    },
  })
}

export function getAdminEmails(): string[] {
  const config = useRuntimeConfig()
  return (config.adminEmails as string).split(',').map(e => e.trim()).filter(Boolean)
}

export function getFrom(): string {
  const config = useRuntimeConfig()
  return `"Dynamic Residency" <${config.mailFrom}>`
}
