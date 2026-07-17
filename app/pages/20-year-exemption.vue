<template>
  <main class="exemption-page">
    <div class="split-hero">
      <section class="hero-copy">
        <div class="eyebrow">{{ $t('exemption.hero.eyebrow') }}</div>
        <h1>{{ $t('exemption.hero.title') }}</h1>
        <div class="divider"></div>
        <p class="lead">{{ $t('exemption.hero.lead') }}</p>
        <p class="small">{{ $t('exemption.hero.small') }}</p>
        <div class="cta-link-wrap"><NuxtLink class="btn primary btn-inline" :to="localePath('/about')">{{ $t('exemption.hero.cta') }}</NuxtLink></div>
      </section>
      <div class="hero-image" :style="{ backgroundImage: `url('/v2/images/about/istanbul-bosphorus-seaview.webp')` }"></div>
    </div>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.framework.eyebrow') }}</div>
        <h2>{{ $t('exemption.framework.title') }}</h2>
        <p class="lead">{{ $t('exemption.framework.lead') }}</p>
        <p>{{ $t('exemption.framework.body1') }}</p>
        <p>{{ $t('exemption.framework.body2') }}</p>
        <div class="note"><strong>{{ $t('exemption.framework.noteTitle') }}</strong><br />{{ $t('exemption.framework.noteBody') }}</div>
        <div class="cta-link-wrap" style="margin-top: 16px"><a class="btn primary btn-inline" href="https://gib.gov.tr/mevzuat/kanun/433/teblig/11874" target="_blank" rel="noopener noreferrer">{{ $t('exemption.framework.cta') }}</a></div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.quickFacts.eyebrow') }}</div>
        <h2>{{ $t('exemption.quickFacts.title') }}</h2>
        <div class="meta-grid">
          <div class="meta-row" v-for="(row, i) in quickFactRows" :key="i">
            <strong>{{ row.q }}</strong>
            <span>{{ row.a }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.incomeStreams.eyebrow') }}</div>
        <h2>{{ $t('exemption.incomeStreams.title') }}</h2>
        <div class="icon-list-grid">
          <article class="icon-list-card" v-for="(item, i) in incomeStreamItems" :key="i">
            <div class="icon-list-icon" v-html="incomeIcons[i]"></div>
            <p>{{ item }}</p>
          </article>
        </div>
        <p style="margin-top: 18px">{{ $t('exemption.incomeStreams.outro') }}</p>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.eligibility.eyebrow') }}</div>
        <h2>{{ $t('exemption.eligibility.title') }}</h2>
        <div class="number-list">
          <div class="number-item" v-for="item in eligibilityItems" :key="item.number">
            <div class="number">{{ item.number }}</div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.sourceClassification.eyebrow') }}</div>
        <h2>{{ $t('exemption.sourceClassification.title') }}</h2>
        <ul class="checklist">
          <li v-for="(item, i) in sourceClassificationItems" :key="i">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.whySignificant.eyebrow') }}</div>
        <h2>{{ $t('exemption.whySignificant.title') }}</h2>
        <p>{{ $t('exemption.whySignificant.lead') }}</p>
        <div class="card-grid">
          <div class="card" v-for="(card, i) in whySignificantCards" :key="i">
            <div class="card-title">{{ card.title }}</div>
            <p>{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.whatNot.eyebrow') }}</div>
        <h2>{{ $t('exemption.whatNot.title') }}</h2>
        <ul class="checklist">
          <li v-for="(item, i) in whatNotItems" :key="i">{{ item }}</li>
        </ul>
        <p style="margin-top: 18px">{{ $t('exemption.whatNot.outro') }}</p>
      </div>
    </section>

    <section class="section dark">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.individualVsCompany.eyebrow') }}</div>
        <h2>{{ $t('exemption.individualVsCompany.title') }}</h2>
        <p>{{ $t('exemption.individualVsCompany.body1') }}</p>
        <p>{{ $t('exemption.individualVsCompany.body2') }}</p>
        <ul class="checklist">
          <li v-for="(item, i) in individualVsCompanyItems" :key="i">{{ item }}</li>
        </ul>
        <p style="margin-top: 18px">{{ $t('exemption.individualVsCompany.outro') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.profiles.eyebrow') }}</div>
        <h2>{{ $t('exemption.profiles.title') }}</h2>
        <div class="card-grid">
          <div class="card redline" v-for="(card, i) in profileCards" :key="i">
            <div class="card-title">{{ card.title }}</div>
            <p>{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.application.eyebrow') }}</div>
        <h2>{{ $t('exemption.application.title') }}</h2>
        <p>{{ $t('exemption.application.body1') }}</p>
        <p>{{ $t('exemption.application.body2') }}</p>
        <ul class="checklist">
          <li v-for="(item, i) in applicationItems" :key="i">{{ item }}</li>
        </ul>
        <p style="margin-top: 18px">{{ $t('exemption.application.outro') }}</p>
        <div class="note">
          <strong>{{ $t('exemption.application.noteTitle') }}</strong><br />
          {{ $t('exemption.application.noteBody') }}
          <div class="cta-link-wrap"><a class="btn primary btn-inline" href="https://gib.gov.tr/mevzuat/kanun/433/teblig/11874" target="_blank" rel="noopener noreferrer">{{ $t('exemption.application.noteCta') }}</a></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.widerDecision.eyebrow') }}</div>
        <h2>{{ $t('exemption.widerDecision.title') }}</h2>
        <p>{{ $t('exemption.widerDecision.intro') }}</p>
        <ul class="checklist">
          <li v-for="(item, i) in widerDecisionItems" :key="i">{{ item }}</li>
        </ul>
        <div class="note" style="margin-top: 18px">
          <strong>{{ $t('exemption.widerDecision.noteTitle') }}</strong><br />
          {{ $t('exemption.widerDecision.noteBody') }}
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="cta-box">
          <div class="eyebrow">{{ $t('exemption.cta.eyebrow') }}</div>
          <h2>{{ $t('exemption.cta.title') }}</h2>
          <p>{{ $t('exemption.cta.body1') }}</p>
          <p>{{ $t('exemption.cta.body2') }}</p>
          <a class="btn primary" href="#" @click.prevent="openCalendly">{{ $t('exemption.cta.cta') }}</a>
          <p class="small" style="margin-top: 16px">{{ $t('exemption.cta.small1') }}</p>
          <p class="small">{{ $t('exemption.cta.small2') }}</p>
        </div>
      </div>
    </section>

    <section class="section soft" id="terms">
      <div class="container">
        <div class="eyebrow">{{ $t('exemption.terms.eyebrow') }}</div>
        <h2>{{ $t('exemption.terms.title') }}</h2>
        <p>{{ $t('exemption.terms.body1') }}</p>
        <p>{{ $t('exemption.terms.body2') }}</p>
        <div class="meta-grid">
          <div class="meta-row" v-for="(row, i) in termsRows" :key="i">
            <strong>{{ row.label }}</strong>
            <span>{{ row.value }}</span>
          </div>
        </div>
        <p class="small" style="margin-top: 16px">{{ $t('exemption.terms.small') }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const localePath = useLocalePath()
const { openCalendly } = useCalendly()

const quickFactRows = computed(() => (tm('exemption.quickFacts.rows') as any[]).map((r) => ({ q: rt(r.q), a: rt(r.a) })))
const incomeStreamItems = computed(() => (tm('exemption.incomeStreams.items') as any[]).map((i) => rt(i)))
const eligibilityItems = computed(() => (tm('exemption.eligibility.items') as any[]).map((i) => ({ number: rt(i.number), title: rt(i.title), desc: rt(i.desc) })))
const sourceClassificationItems = computed(() => (tm('exemption.sourceClassification.items') as any[]).map((i) => rt(i)))
const whySignificantCards = computed(() => (tm('exemption.whySignificant.cards') as any[]).map((c) => ({ title: rt(c.title), desc: rt(c.desc) })))
const whatNotItems = computed(() => (tm('exemption.whatNot.items') as any[]).map((i) => rt(i)))
const individualVsCompanyItems = computed(() => (tm('exemption.individualVsCompany.items') as any[]).map((i) => rt(i)))
const profileCards = computed(() => (tm('exemption.profiles.cards') as any[]).map((c) => ({ title: rt(c.title), desc: rt(c.desc) })))
const applicationItems = computed(() => (tm('exemption.application.items') as any[]).map((i) => rt(i)))
const widerDecisionItems = computed(() => (tm('exemption.widerDecision.items') as any[]).map((i) => rt(i)))
const termsRows = computed(() => (tm('exemption.terms.rows') as any[]).map((r) => ({ label: rt(r.label), value: rt(r.value) })))

const incomeIcons = [
  '<svg viewBox="0 0 32 32"><rect height="18" rx="2" width="18" x="7" y="7"></rect><path d="M11 12h10M11 16h10M11 20h6"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M5 15l11-9 11 9v12H5zM12 27v-8h8v8"></path></svg>',
  '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"></circle><path d="M16 10v12M12 13h6a3 3 0 010 6h-6"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M6 23l6-7 4 4 9-11"></path><path d="M20 9h5v5"></path></svg>',
  '<svg viewBox="0 0 32 32"><circle cx="16" cy="11" r="4"></circle><path d="M8 27c0-6 3-10 8-10s8 4 8 10M11 22h10"></path></svg>',
  '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"></circle><path d="M6 16h20M16 6c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10"></path></svg>',
]
</script>

<style scoped>
.exemption-page :deep(.icon-list-icon svg) {
  width: 28px;
  height: 28px;
  stroke: var(--navy);
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.split-hero {
  display: flex;
  flex-direction: column;
}
.split-hero .hero-image {
  order: 1;
  height: auto;
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  background-color: var(--soft);
}
.split-hero .hero-copy {
  order: 2;
  padding: 52px 20px 60px;
}

@media (min-width: 1025px) {
  .split-hero {
    display: grid;
    grid-template-columns: minmax(0, 47.5%) minmax(0, 52.5%);
    min-height: calc(100vh - 78px);
    position: relative;
    overflow: hidden;
  }
  .split-hero::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 47.5%;
    width: 16px;
    transform: translateX(-8px);
    background: var(--red);
    z-index: 3;
  }
  .split-hero .hero-copy {
    order: 1;
    padding: clamp(52px, 6vh, 82px) clamp(54px, 7vw, 112px) clamp(44px, 6vh, 76px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .split-hero .hero-image {
    order: 2;
    height: 100%;
    aspect-ratio: auto;
    min-height: calc(100vh - 78px);
  }
  .split-hero h1 {
    font-size: clamp(2.8rem, 4vw, 4.6rem);
    line-height: 0.97;
    letter-spacing: -0.047em;
    max-width: 760px;
  }
  .split-hero .lead {
    max-width: 650px;
  }
  .split-hero .small {
    max-width: 650px;
  }
}

.note {
  padding: 18px;
  border-left: 4px solid var(--red);
  background: #fff6f6;
  border-radius: 10px;
}
.btn-inline {
  width: 100%;
  margin-top: 4px;
  text-decoration: none !important;
}
.cta-link-wrap {
  margin-top: 18px;
}

.meta-grid {
  display: grid;
  gap: 10px;
}
.meta-row {
  display: grid;
  grid-template-columns: 1fr;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
}
.meta-row strong {
  color: var(--navy);
  margin-bottom: 4px;
  display: block;
}

.icon-list-grid {
  display: grid;
  gap: 12px;
}
.icon-list-card {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 14px;
  align-items: center;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 22px rgba(13, 29, 54, 0.05);
}
.icon-list-icon {
  width: 52px;
  height: 52px;
  border-radius: 13px;
  background: var(--soft);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
}
.icon-list-card p {
  margin: 0;
  color: #354157;
  font-size: 0.94rem;
}

.number-list {
  display: grid;
  gap: 12px;
}
.number-item {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 14px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: #fff;
}
.number {
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;
  color: var(--red);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}
.checklist li {
  position: relative;
  padding: 9px 0 9px 22px;
  border-bottom: 1px solid var(--line);
}
.checklist li:last-child {
  border-bottom: 0;
}
.checklist li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 17px;
  width: 7px;
  height: 7px;
  background: var(--red);
}

.card-title {
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 7px;
}
.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(13, 29, 54, 0.05);
}
.card.redline {
  border-left: 4px solid var(--red);
}
.card-grid {
  display: grid;
  gap: 14px;
}

.cta-box {
  background: var(--navy);
  color: #fff;
  border-radius: 18px;
  padding: 26px 20px;
}
.cta-box p {
  color: #d8e0eb;
}
.cta-box .btn {
  display: inline-flex;
  width: 100%;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
}

@media (min-width: 981px) {
  .meta-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
  .meta-row {
    padding: 20px;
    min-height: 100px;
  }
  .icon-list-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
  .icon-list-card {
    min-height: 120px;
    padding: 22px;
  }
  .icon-list-icon {
    width: 60px;
    height: 60px;
  }
  .number-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
  .number-item {
    min-height: 230px;
    padding: 24px;
    grid-template-columns: 72px 1fr;
  }
  .number {
    font-size: 2.7rem;
  }
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
  .btn-inline {
    width: auto;
  }
  .cta-link-wrap {
    display: flex;
  }
  .cta-box {
    padding: 46px;
    max-width: 1000px;
    margin: 0 auto;
  }
  .cta-box .btn {
    width: auto;
    min-width: 260px;
  }
}
</style>
