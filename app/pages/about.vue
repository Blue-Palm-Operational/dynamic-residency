<template>
  <main class="about-page">
    <div class="hero-split">
      <section class="hero-copy">
        <div class="eyebrow">{{ $t('about.hero.eyebrow') }}</div>
        <h1>{{ $t('about.hero.title') }}</h1>
        <div class="divider"></div>
        <p class="lead">{{ $t('about.hero.lead') }}</p>
        <p>{{ $t('about.hero.body1') }}</p>
        <p>{{ $t('about.hero.body2') }}</p>
        <p class="small">{{ $t('about.hero.small') }}</p>
      </section>
      <div class="hero-image" :style="{ backgroundImage: `url('/v2/images/20-year exemption/businessman-and-child-overlooking-istanbul-skyline.webp')` }"></div>
    </div>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('about.whatIs.eyebrow') }}</div>
        <h2>{{ $t('about.whatIs.title') }}</h2>
        <p>{{ $t('about.whatIs.body1') }}</p>
        <p>{{ $t('about.whatIs.body2') }}</p>
        <p>{{ $t('about.whatIs.body3') }}</p>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('about.whyExists.eyebrow') }}</div>
        <h2>{{ $t('about.whyExists.title') }}</h2>
        <p>{{ $t('about.whyExists.body1') }}</p>
        <p>{{ $t('about.whyExists.body2') }}</p>
        <p>{{ $t('about.whyExists.body3') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('about.questions.eyebrow') }}</div>
        <h2>{{ $t('about.questions.title') }}</h2>
        <div class="icon-list-grid">
          <article class="icon-list-card" v-for="(item, i) in questionItems" :key="i">
            <div class="icon-list-icon" v-html="questionIcons[i]"></div>
            <p>{{ item }}</p>
          </article>
        </div>
        <p style="margin-top: 18px">{{ $t('about.questions.outro') }}</p>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="card navy">
          <div class="card-title">{{ $t('about.exemptionTeaser.title') }}</div>
          <p>{{ $t('about.exemptionTeaser.body') }}</p>
          <div class="cta-link-wrap"><NuxtLink class="btn primary btn-inline" :to="localePath('/20-year-exemption')">{{ $t('about.exemptionTeaser.cta') }}</NuxtLink></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('about.howItWorks.eyebrow') }}</div>
        <h2>{{ $t('about.howItWorks.title') }}</h2>
        <div class="number-list">
          <div class="number-item" v-for="step in howItWorksSteps" :key="step.number">
            <div class="number">{{ step.number }}</div>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="note" style="margin-top: 18px">{{ $t('about.howItWorks.note') }}</div>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('about.different.eyebrow') }}</div>
        <h2>{{ $t('about.different.title') }}</h2>
        <div class="card-grid">
          <div class="card" v-for="(card, i) in differentCards" :key="i">
            <div class="card-title">{{ card.title }}</div>
            <p>{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section dark">
      <div class="container">
        <div class="eyebrow">{{ $t('about.realOperations.eyebrow') }}</div>
        <h2>{{ $t('about.realOperations.title') }}</h2>
        <p>{{ $t('about.realOperations.body1') }}</p>
        <p>{{ $t('about.realOperations.body2') }}</p>
        <p>{{ $t('about.realOperations.body3') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('about.founderSection.eyebrow') }}</div>
        <h2>{{ $t('about.founderSection.title') }}</h2>
        <p>{{ $t('about.founderSection.body1') }}</p>
        <p>{{ $t('about.founderSection.body2') }}</p>
        <p>{{ $t('about.founderSection.body3') }}</p>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('about.whoHelps.eyebrow') }}</div>
        <h2>{{ $t('about.whoHelps.title') }}</h2>
        <div class="card-grid">
          <div class="card redline" v-for="(card, i) in whoHelpsCards" :key="i">
            <div class="card-title">{{ card.title }}</div>
            <p>{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="eyebrow">{{ $t('about.whatNot.eyebrow') }}</div>
        <h2>{{ $t('about.whatNot.title') }}</h2>
        <ul class="checklist">
          <li v-for="(item, i) in whatNotItems" :key="i">{{ item }}</li>
        </ul>
        <p style="margin-top: 18px">{{ $t('about.whatNot.outro') }}</p>
      </div>
    </section>

    <section class="section soft">
      <div class="container">
        <div class="eyebrow">{{ $t('about.principles.eyebrow') }}</div>
        <h2>{{ $t('about.principles.title') }}</h2>
        <div class="number-list">
          <div class="number-item" v-for="item in principlesItems" :key="item.number">
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
        <div class="eyebrow">{{ $t('about.faq.eyebrow') }}</div>
        <h2>{{ $t('about.faq.title') }}</h2>
        <div class="faq">
          <details v-for="(item, i) in faqItems" :key="i" :open="i === 0">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="cta-box">
          <div class="eyebrow">{{ $t('about.cta.eyebrow') }}</div>
          <h2>{{ $t('about.cta.title') }}</h2>
          <p>{{ $t('about.cta.body') }}</p>
          <a class="btn primary" href="#" @click.prevent="openCalendly">{{ $t('about.cta.cta') }}</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const localePath = useLocalePath()
const { openCalendly } = useCalendly()

const questionItems = computed(() => (tm('about.questions.items') as any[]).map((i) => rt(i)))
const howItWorksSteps = computed(() => (tm('about.howItWorks.steps') as any[]).map((s) => ({ number: rt(s.number), title: rt(s.title), desc: rt(s.desc) })))
const differentCards = computed(() => (tm('about.different.cards') as any[]).map((c) => ({ title: rt(c.title), desc: rt(c.desc) })))
const whoHelpsCards = computed(() => (tm('about.whoHelps.cards') as any[]).map((c) => ({ title: rt(c.title), desc: rt(c.desc) })))
const whatNotItems = computed(() => (tm('about.whatNot.items') as any[]).map((i) => rt(i)))
const principlesItems = computed(() => (tm('about.principles.items') as any[]).map((i) => ({ number: rt(i.number), title: rt(i.title), desc: rt(i.desc) })))
const faqItems = computed(() => (tm('about.faq.items') as any[]).map((i) => ({ q: rt(i.q), a: rt(i.a) })))

const questionIcons = [
  '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="10"></circle><path d="M16 9v7l5 3"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M5 24h22M8 21l5-6 4 3 7-9"></path><circle cx="24" cy="9" r="2"></circle></svg>',
  '<svg viewBox="0 0 32 32"><rect height="16" rx="2" width="22" x="5" y="8"></rect><path d="M11 8V5h10v3M5 14h22"></path></svg>',
  '<svg viewBox="0 0 32 32"><circle cx="11" cy="12" r="4"></circle><circle cx="22" cy="13" r="3"></circle><path d="M4 27c0-5 3-8 7-8s7 3 7 8M17 27c0-4 2-7 5-7s6 3 6 7"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M7 27V7h18v20M11 11h4M18 11h3M11 16h4M18 16h3M11 21h10"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M6 9h20v14H6zM10 6h12v3M10 23v3M22 23v3"></path><path d="M11 14h10M11 18h7"></path></svg>',
  '<svg viewBox="0 0 32 32"><path d="M8 25h16M10 25V12l6-5 6 5v13M14 17h4M14 21h4"></path></svg>',
]
</script>

<style scoped>
.about-page :deep(.icon-list-icon svg) {
  width: 28px;
  height: 28px;
  stroke: var(--navy);
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hero-split {
  display: flex;
  flex-direction: column;
}
.hero-copy {
  order: 2;
  padding: 52px 20px 60px;
}
.hero-image {
  order: 1;
  height: auto;
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  background-color: var(--soft);
}

@media (min-width: 1025px) {
  .hero-split {
    display: grid;
    grid-template-columns: minmax(0, 48%) minmax(0, 52%);
    min-height: calc(100vh - 78px);
    overflow: hidden;
  }
  .hero-copy {
    order: 1;
    position: relative;
    padding: clamp(44px, 5vw, 84px) clamp(44px, 5.8vw, 110px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-copy::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 100%;
    background: var(--red);
  }
  .hero-copy h1 {
    max-width: 650px;
    font-size: clamp(3rem, 4.2vw, 5rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }
  .hero-copy .lead,
  .hero-copy p:not(.small) {
    max-width: 590px;
  }
  .hero-image {
    order: 2;
    height: 100%;
    aspect-ratio: auto;
    min-height: calc(100vh - 78px);
  }
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
.card.navy {
  background: var(--navy);
  color: #fff;
  border-color: var(--navy);
}
.card.navy .card-title {
  color: #fff;
}
.card.redline {
  border-left: 4px solid var(--red);
}
.card-grid {
  display: grid;
  gap: 14px;
}
.btn-inline {
  width: 100%;
  margin-top: 4px;
  text-decoration: none !important;
}
.cta-link-wrap {
  margin-top: 18px;
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

.note {
  padding: 18px;
  border-left: 4px solid var(--red);
  background: #fff6f6;
  border-radius: 10px;
}

.faq {
  display: grid;
  gap: 10px;
}
.faq details {
  border: 1px solid var(--line);
  border-radius: 13px;
  background: #fff;
  padding: 0 16px;
}
.faq summary {
  cursor: pointer;
  list-style: none;
  padding: 16px 0;
  font-weight: 800;
  color: var(--navy);
  font-family: 'Cairo', sans-serif;
}
.faq summary::-webkit-details-marker {
  display: none;
}
.faq details p {
  padding-bottom: 16px;
  color: #4b566c;
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
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
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
    min-height: 190px;
    padding: 24px;
    grid-template-columns: 72px 1fr;
  }
  .number {
    font-size: 2.7rem;
  }
  .faq {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
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
