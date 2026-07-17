const CALENDLY_URL =
  'https://calendly.com/dynamic-works-international/new-meeting?hide_gdpr_banner=1&background_color=ffffff&text_color=172033&primary_color=ed1c24'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

let scriptLoaded = false

function loadCalendlyAssets() {
  if (scriptLoaded || !import.meta.client) return
  scriptLoaded = true

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://assets.calendly.com/assets/external/widget.css'
  document.head.appendChild(link)

  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.head.appendChild(script)
}

export function useCalendly() {
  if (import.meta.client) loadCalendlyAssets()

  function openCalendly() {
    if (!import.meta.client) return
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      return
    }
    // Script may still be loading on first click — retry briefly.
    let attempts = 0
    const interval = setInterval(() => {
      attempts++
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL })
        clearInterval(interval)
      } else if (attempts > 20) {
        clearInterval(interval)
        window.open(CALENDLY_URL, '_blank')
      }
    }, 150)
  }

  return { openCalendly }
}
