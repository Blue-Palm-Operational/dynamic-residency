<template>
  <main id="top" class="landing">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">{{ $t('home.hero.eyebrow') }}</div>
          <h1>{{ $t('home.hero.title') }}</h1>
          <div class="divider"></div>
          <p class="lead">{{ $t('home.hero.lead') }}</p>
          <p>{{ $t('home.hero.body') }}</p>
          <div class="btn-row">
            <a class="btn primary" href="#contact">{{ $t('home.hero.cta') }}</a>
          </div>
          <div class="hero-note">{{ $t('home.hero.note') }}</div>
        </div>
        <div
          class="hero-media"
          role="img"
          :aria-label="$t('home.hero.imageAlt')"
          :style="{ backgroundImage: `url('/v2/images/landing page/boardroom-meeting-with-bosphorus-view.webp')` }"
        ></div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="container positioning">
        <div
          class="editorial-image"
          role="img"
          :aria-label="$t('home.about.imageAlt')"
          :style="{ backgroundImage: `url('/v2/images/landing page/executive-by-the-window-istanbul-.webp')` }"
        ></div>
        <div>
          <div class="eyebrow">{{ $t('home.about.eyebrow') }}</div>
          <h2>{{ $t('home.about.title') }}</h2>
          <p><strong>{{ $t('home.about.lead') }}</strong></p>
          <p>{{ $t('home.about.body1') }}</p>
          <p>{{ $t('home.about.body2') }}</p>
          <div class="statement">
            {{ $t('home.about.statement1') }}<br />
            <span class="accent">{{ $t('home.about.statement2') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- OPPORTUNITY -->
    <section class="section soft" id="opportunity">
      <div class="container opportunity-grid">
        <div>
          <div class="eyebrow">{{ $t('home.opportunity.eyebrow') }}</div>
          <h2>{{ $t('home.opportunity.title') }}</h2>
          <p>{{ $t('home.opportunity.body1') }}</p>
          <p>{{ $t('home.opportunity.body2') }}</p>
          <ul class="bullet-list">
            <li v-for="(item, i) in $tm('home.opportunity.list')" :key="i">{{ $rt(item) }}</li>
          </ul>
          <div class="notice">
            <div class="notice-badge">!</div>
            <div><strong>{{ $t('home.opportunity.noticeTitle') }}</strong> {{ $t('home.opportunity.noticeBody') }}</div>
          </div>
          <div class="btn-row"><a class="btn primary" :href="localePath('/20-year-exemption')">{{ $t('home.opportunity.cta') }}</a></div>
        </div>
        <div class="visual-card">
          <img :alt="$t('home.opportunity.imageAlt')" src="/v2/images/landing page/couple-searching-opportunities-in-istanbul.webp" />
        </div>
      </div>
    </section>

    <!-- WHO WE HELP -->
    <section class="section" id="who-we-help">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">{{ $t('home.whoWeHelp.eyebrow') }}</div>
          <h2>{{ $t('home.whoWeHelp.title') }}</h2>
          <p>{{ $t('home.whoWeHelp.subtitle') }}</p>
        </div>
        <div class="audience-slider-wrap">
          <div class="audience-slider" ref="audienceSliderEl">
            <article class="audience-slide" v-for="item in whoWeHelpItems" :key="item.number">
              <div class="audience-slide-top">
                <img class="audience-icon-img" :src="`/v2/icons/${item.icon}.svg`" alt="" />
                <span class="audience-number">{{ item.number }}</span>
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </article>
          </div>
          <div class="audience-controls">
            <button aria-label="Previous card" class="audience-arrow" type="button" @click="slideAudience(-1)">←</button>
            <div aria-hidden="true" class="audience-dots">
              <span v-for="(item, i) in whoWeHelpItems" :key="i" :class="{ active: i === audienceIndex }"></span>
            </div>
            <button aria-label="Next card" class="audience-arrow" type="button" @click="slideAudience(1)">→</button>
          </div>
        </div>
        <div class="audience-strip">{{ $t('home.whoWeHelp.strip') }}</div>
      </div>
    </section>

    <!-- HOW WE WORK -->
    <section class="section soft" id="how-we-work">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">{{ $t('home.howWeWork.eyebrow') }}</div>
          <h2>{{ $t('home.howWeWork.title') }}</h2>
        </div>
        <div class="process-board process-board-v2">
          <div class="process-route-v2">
            <article class="process-card-v2" v-for="step in howWeWorkSteps" :key="step.index">
              <div class="process-index-wrap"><span class="process-index">{{ step.index }}</span><span class="process-line-dot"></span></div>
              <div class="process-copy-v2">
                <div class="process-label">{{ step.label }}</div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.desc }}</p>
              </div>
            </article>
          </div>
          <div class="process-legal">{{ $t('home.howWeWork.legal') }}</div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">{{ $t('home.services.eyebrow') }}</div>
          <h2>{{ $t('home.services.title') }}</h2>
        </div>
        <div class="services-layout">
          <div class="service-group service-group-consultation">
            <div class="service-group-heading">
              <span>{{ $t('home.services.consultationGroup.heading') }}</span>
              <b class="service-tier-tag">{{ $t('home.services.consultationGroup.tag') }}</b>
              <small>{{ $t('home.services.consultationGroup.small') }}</small>
            </div>
            <div class="service-pair">
              <article class="service-row">
                <div>
                  <div class="service-kicker">{{ $t('home.services.consultationGroup.intro.kicker') }}</div>
                  <h3>{{ $t('home.services.consultationGroup.intro.title') }}</h3>
                  <p>{{ $t('home.services.consultationGroup.intro.desc') }}</p>
                </div>
                <div class="service-row-action">
                  <div class="service-price">{{ $t('home.services.consultationGroup.intro.price') }}</div>
                  <a href="#contact">{{ $t('home.services.consultationGroup.intro.cta') }}</a>
                </div>
              </article>
              <article class="service-row">
                <div>
                  <div class="service-kicker">{{ $t('home.services.consultationGroup.expert.kicker') }}</div>
                  <h3>{{ $t('home.services.consultationGroup.expert.title') }}</h3>
                  <p>{{ $t('home.services.consultationGroup.expert.desc') }}</p>
                </div>
                <div class="service-row-action">
                  <div class="service-price">{{ $t('home.services.consultationGroup.expert.price') }}</div>
                  <a href="#" @click.prevent="openModal('expertConsultation', 'home.services.consultationGroup.expert')">{{ $t('home.services.consultationGroup.expert.cta') }}</a>
                </div>
              </article>
            </div>
          </div>

          <div class="service-group service-group-review">
            <div class="service-group-heading">
              <span>{{ $t('home.services.reviewGroup.heading') }}</span>
              <b class="service-tier-tag">{{ $t('home.services.reviewGroup.tag') }}</b>
              <small>{{ $t('home.services.reviewGroup.small') }}</small>
            </div>
            <div class="service-pair">
              <article class="service-row">
                <div>
                  <div class="service-kicker">{{ $t('home.services.reviewGroup.strategic.kicker') }}</div>
                  <h3>{{ $t('home.services.reviewGroup.strategic.title') }}</h3>
                  <p>{{ $t('home.services.reviewGroup.strategic.desc') }}</p>
                </div>
                <div class="service-row-action">
                  <div class="service-price">{{ $t('home.services.reviewGroup.strategic.price') }}</div>
                  <a href="#" @click.prevent="openModal('strategicResidencyReview', 'home.services.reviewGroup.strategic')">{{ $t('home.services.reviewGroup.strategic.cta') }}</a>
                </div>
              </article>
              <article class="service-row">
                <div>
                  <div class="service-kicker">{{ $t('home.services.reviewGroup.crossBorder.kicker') }}</div>
                  <h3>{{ $t('home.services.reviewGroup.crossBorder.title') }}</h3>
                  <p>{{ $t('home.services.reviewGroup.crossBorder.desc') }}</p>
                </div>
                <div class="service-row-action">
                  <div class="service-price">{{ $t('home.services.reviewGroup.crossBorder.price') }}</div>
                  <a href="#" @click.prevent="openModal('crossBorderStructureReview', 'home.services.reviewGroup.crossBorder')">{{ $t('home.services.reviewGroup.crossBorder.cta') }}</a>
                </div>
              </article>
            </div>
          </div>

          <article class="service-complex service-complex-premium">
            <div>
              <div class="service-kicker">{{ $t('home.services.complex.kicker') }}</div>
              <div class="service-tier-tag service-tier-tag-dark">{{ $t('home.services.complex.tag') }}</div>
              <h3>{{ $t('home.services.complex.title') }}</h3>
              <p>{{ $t('home.services.complex.desc') }}</p>
            </div>
            <div class="service-row-action">
              <div class="service-price">{{ $t('home.services.complex.price') }}</div>
              <a href="#contact">{{ $t('home.services.complex.cta') }}</a>
            </div>
          </article>
        </div>
        <p class="price-note">{{ $t('home.services.note') }}</p>
      </div>
    </section>

    <!-- FOUNDER -->
    <section class="section founder-profile-section">
      <div class="container">
        <div class="section-head founder-profile-head">
          <div class="eyebrow">{{ $t('home.founder.eyebrow') }}</div>
          <h2>{{ $t('home.founder.title') }}</h2>
        </div>
        <div class="founder-profile-card">
          <div class="founder-profile-image">
            <img :alt="$t('home.founder.imageAlt')" src="/v2/images/landing page/founder-ceo.webp" />
          </div>
          <div class="founder-profile-copy">
            <div class="founder-name">{{ $t('home.founder.name') }}</div>
            <p>
              <template v-for="(line, i) in $tm('home.founder.roleLines')" :key="i">
                {{ $rt(line) }}<br v-if="i < ($tm('home.founder.roleLines') as any[]).length - 1" />
              </template>
            </p>
            <p>{{ $t('home.founder.bio') }}</p>
            <div class="founder-social">
              <a aria-label="Stephan Westermayer on LinkedIn" class="linkedin-btn" href="https://www.linkedin.com/in/stephan-westermayer/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.79v2.19h.07c.67-1.27 2.3-2.6 4.74-2.6C22.67 7.59 24 10.9 24 15.2V24h-5v-7.8c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.11V24H8V8z" fill="currentColor"></path>
                </svg>
                <span>{{ $t('home.founder.linkedin') }}</span>
              </a>
            </div>
            <div class="founder-origin-story">
              <p v-for="(p, i) in $tm('home.founder.origin')" :key="i">{{ $rt(p) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CREDIBILITY -->
    <section class="section dark">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">{{ $t('home.credibility.eyebrow') }}</div>
          <h2>{{ $t('home.credibility.title') }}</h2>
          <p>{{ $t('home.credibility.body1') }}</p>
          <p>{{ $t('home.credibility.body2') }}</p>
        </div>
        <div class="credential-grid">
          <article class="credential" v-for="(item, i) in credibilityItems" :key="i">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
        <div class="btn-row"><a class="btn light" href="https://dynamicworks.group" target="_blank" rel="noopener noreferrer">{{ $t('home.credibility.cta') }}</a></div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section" id="contact">
      <div class="container">
        <div class="section-head">
          <div class="eyebrow">{{ $t('home.cta.eyebrow') }}</div>
          <h2>{{ $t('home.cta.title') }}</h2>
          <p>{{ $t('home.cta.body') }}</p>
          <div class="btn-row">
            <a class="btn primary" href="#" @click.prevent="openCalendly">{{ $t('home.cta.ctaPrimary') }}</a>
            <a class="btn light" href="#services">{{ $t('home.cta.ctaSecondary') }}</a>
          </div>
          <div class="cta-meta">{{ $t('home.cta.meta') }}</div>
        </div>
      </div>
    </section>

    <PaymentModal
      :open="modalOpen"
      :package-id="selectedPackage"
      :package-name="selectedName"
      :package-tier="selectedTier"
      :package-price="selectedPrice"
      @close="modalOpen = false"
    />
  </main>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const { openCalendly } = useCalendly()
const localePath = useLocalePath()

const whoWeHelpItems = computed(() => (tm('home.whoWeHelp.items') as any[]).map((item) => ({
  number: rt(item.number),
  title: rt(item.title),
  desc: rt(item.desc),
  icon: rt(item.icon),
})))

const howWeWorkSteps = computed(() => (tm('home.howWeWork.steps') as any[]).map((s) => ({
  index: rt(s.index),
  label: rt(s.label),
  title: rt(s.title),
  desc: rt(s.desc),
})))

const credibilityItems = computed(() => (tm('home.credibility.items') as any[]).map((it) => ({
  title: rt(it.title),
  desc: rt(it.desc),
})))

// Audience slider
const audienceSliderEl = ref<HTMLElement | null>(null)
const audienceIndex = ref(0)

function slideAudience(direction: number) {
  const slider = audienceSliderEl.value
  if (!slider) return
  const card = slider.querySelector('.audience-slide') as HTMLElement | null
  if (!card) return
  const gap = 14
  slider.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' })
}

function updateAudienceDots() {
  const slider = audienceSliderEl.value
  if (!slider) return
  const card = slider.querySelector('.audience-slide') as HTMLElement | null
  if (!card) return
  const index = Math.round(slider.scrollLeft / (card.offsetWidth + 14))
  audienceIndex.value = Math.max(0, Math.min(index, whoWeHelpItems.value.length - 1))
}

onMounted(() => {
  const slider = audienceSliderEl.value
  if (slider) {
    slider.addEventListener('scroll', updateAudienceDots, { passive: true })
    window.addEventListener('resize', updateAudienceDots)
  }
})

// Payment modal
const modalOpen = ref(false)
const selectedPackage = ref('')
const selectedName = ref('')
const selectedTier = ref('')
const selectedPrice = ref('')

function openModal(packageId: string, key: string) {
  selectedPackage.value = packageId
  selectedName.value = t(`${key}.title`)
  selectedTier.value = t(`${key}.kicker`)
  selectedPrice.value = t(`${key}.price`)
  modalOpen.value = true
}
</script>

<style scoped>
.accent {
  color: var(--red);
}

/* HERO */
.hero {
  background: #fff;
  border-bottom: 1px solid var(--line);
}
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(380px, 0.98fr);
  align-items: stretch;
  min-height: 720px;
}
.hero-copy {
  padding: 100px 70px 76px max(40px, calc((100vw - var(--container)) / 2));
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}
.hero-media {
  position: relative;
  min-height: 720px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--soft);
}
.hero-media::before {
  content: '';
  position: absolute;
  left: -16px;
  top: 44px;
  bottom: 44px;
  width: 16px;
  background: var(--red);
}
.hero-media::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 44%;
  height: 12px;
  background: var(--navy);
}
.hero-note {
  margin-top: 30px;
  font-size: 0.9rem;
  color: var(--muted);
}

@media (max-width: 980px) {
  .hero-grid {
    display: flex;
    flex-direction: column;
    min-height: auto;
  }
  .hero-media {
    order: 1;
    min-height: 340px;
  }
  .hero-copy {
    order: 2;
    padding: 56px 24px 48px;
  }
  .hero-media::before {
    left: 18px;
    top: -12px;
    bottom: auto;
    width: calc(100% - 36px);
    height: 12px;
  }
}
@media (max-width: 700px) {
  h1 { font-size: 2.9rem; }
  .hero-media { min-height: 300px; }
}

/* TWO-COLUMN EDITORIAL SECTIONS */
.positioning,
.opportunity-grid,
.founder-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.editorial-image {
  min-height: 460px;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  background-size: cover;
  background-position: center;
  position: relative;
}
.editorial-image::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8px;
  background: var(--red);
}
.statement {
  margin-top: 26px;
  padding: 20px 22px;
  border-left: 5px solid var(--red);
  background: var(--soft);
  font-weight: 800;
  color: var(--navy);
}
.visual-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.visual-card img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}
.bullet-list {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}
.bullet-list li {
  position: relative;
  padding: 9px 0 9px 24px;
  border-bottom: 1px solid var(--line);
}
.bullet-list li::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  background: var(--red);
  left: 0;
  top: 18px;
}
.notice {
  margin-top: 24px;
  border: 1px solid var(--red);
  background: #fff;
  border-radius: 14px;
  padding: 18px 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
}
.notice-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--red);
  color: #fff;
  font-weight: 900;
}

@media (max-width: 980px) {
  .positioning,
  .opportunity-grid,
  .founder-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .editorial-image {
    min-height: 300px;
  }
}

/* WHO WE HELP — carousel */
.audience-slider-wrap {
  position: relative;
}
.audience-slider {
  display: flex;
  gap: 14px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 2px 2px 14px;
  scrollbar-width: none;
}
.audience-slider::-webkit-scrollbar {
  display: none;
}
.audience-slide {
  flex: 0 0 calc(100% - 34px);
  min-height: 250px;
  scroll-snap-align: start;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px 20px 24px;
  box-shadow: 0 10px 28px rgba(13, 29, 54, 0.07);
  position: relative;
  overflow: hidden;
}
.audience-slide::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--red);
}
.audience-slide:nth-child(even)::before {
  background: var(--navy);
}
.audience-slide-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
}
.audience-icon-img {
  width: 58px;
  height: 58px;
}
.audience-number {
  font-size: 2.3rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: #d7dde7;
}
.audience-slide h3 {
  font-size: 1.2rem;
  margin-bottom: 11px;
  color: var(--navy);
}
.audience-slide p {
  font-size: 0.95rem;
  margin-bottom: 0;
  color: #4b566c;
}
.audience-controls {
  display: grid;
  grid-template-columns: 42px 1fr 42px;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
}
.audience-arrow {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--navy);
  font-size: 1.15rem;
  cursor: pointer;
}
.audience-dots {
  display: flex;
  justify-content: center;
  gap: 7px;
}
.audience-dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #cfd6e0;
  transition: 0.2s ease;
}
.audience-dots span.active {
  width: 20px;
  border-radius: 99px;
  background: var(--red);
}
.audience-strip {
  margin-top: 24px;
  background: var(--navy);
  color: #fff;
  border-radius: 14px;
  padding: 18px 22px;
  font-weight: 800;
  text-align: center;
}

@media (min-width: 981px) {
  .audience-slider {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    overflow: visible;
    padding: 0;
  }
  .audience-slide {
    min-width: 0;
    width: auto;
    flex: none;
    min-height: 260px;
  }
  .audience-controls {
    display: none;
  }
}

/* PROCESS */
.process-board-v2 {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 12px 34px rgba(13, 29, 54, 0.06);
}
.process-route-v2 {
  display: grid;
  grid-template-columns: 1fr;
}
.process-card-v2 {
  position: relative;
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 18px;
  padding: 26px 22px;
  border-bottom: 1px solid var(--line);
  background: #fff;
}
.process-card-v2:last-child {
  border-bottom: 0;
}
.process-card-v2::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4px;
  background: var(--navy);
}
.process-card-v2:nth-child(2)::before,
.process-card-v2:nth-child(4)::before {
  background: var(--red);
}
.process-index-wrap {
  display: block;
}
.process-index {
  display: inline-flex;
  align-items: flex-end;
  font-size: 2.65rem;
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -0.06em;
  color: var(--navy);
}
.process-card-v2:nth-child(2) .process-index,
.process-card-v2:nth-child(4) .process-index {
  color: var(--red);
}
.process-line-dot {
  display: none;
}
.process-copy-v2 h3 {
  font-size: 1.07rem;
  margin-bottom: 7px;
}
.process-copy-v2 p {
  color: #4b566c;
  font-size: 0.91rem;
}
.process-label {
  font-size: 0.64rem;
  color: var(--red);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 7px;
}
.process-legal {
  padding: 18px 22px;
  background: var(--soft);
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.9rem;
}

@media (min-width: 981px) {
  .process-route-v2 {
    grid-template-columns: repeat(4, 1fr);
  }
  .process-card-v2 {
    display: block;
    min-height: 320px;
    padding: 34px 28px 32px;
    border-right: 1px solid var(--line);
    border-bottom: 0;
  }
  .process-card-v2:last-child {
    border-right: 0;
  }
  .process-card-v2::before {
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
    width: auto;
    height: 4px;
  }
  .process-index-wrap {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 42px;
  }
  .process-line-dot {
    display: block;
    flex: 1;
    height: 1px;
    background: var(--line);
    position: relative;
  }
  .process-line-dot::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--red);
    transform: translateY(-50%);
  }
  .process-index {
    font-size: 2.8rem;
  }
  .process-copy-v2 h3 {
    font-size: 1.2rem;
  }
  .process-copy-v2 p {
    font-size: 0.95rem;
  }
  .process-label {
    font-size: 0.72rem;
  }
  .process-legal {
    padding: 20px 28px;
  }
}

/* SERVICES */
.services-layout {
  display: grid;
  gap: 20px;
}
.service-featured {
  background: var(--navy);
  color: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.service-badge {
  background: var(--red);
  color: #fff;
  padding: 9px 17px;
  font-size: 0.64rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.service-kicker {
  color: var(--red);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  margin-bottom: 8px;
}
.service-price {
  font-size: 1.7rem;
  font-weight: 900;
  color: var(--red);
  line-height: 1;
  margin: 8px 0 16px;
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 3px solid var(--red);
}
.service-group {
  border: 2px solid var(--line);
  border-radius: 20px;
  overflow: visible;
  background: #fff;
  box-shadow: 0 10px 26px rgba(13, 29, 54, 0.06);
}
.service-group-heading {
  padding: 15px 17px;
  background: var(--soft);
  border-bottom: 1px solid var(--line);
  position: relative;
}
.service-group-heading span {
  font-weight: 900;
  color: var(--navy);
}
.service-group-heading small {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  line-height: 1.4;
}
.service-tier-tag {
  display: inline-flex;
  align-items: center;
  width: max-content;
  margin-top: 9px;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 0.63rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.service-group-consultation {
  border-color: #cfd8e6;
}
.service-group-consultation .service-group-heading {
  border-top: 5px solid var(--navy);
}
.service-group-consultation .service-tier-tag {
  background: #e8eef6;
  color: var(--navy);
}
.service-group-review {
  border-color: #f1b8bb;
}
.service-group-review .service-group-heading {
  background: #fff6f6;
  border-top: 5px solid var(--red);
}
.service-group-review .service-tier-tag {
  background: #fde6e7;
  color: #b41117;
}
.service-pair {
  display: grid;
  grid-template-columns: 1fr;
}
.service-row {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 22px 18px;
}
.service-row::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 0;
  height: 1px;
  background: var(--line);
}
.service-row:last-child::after {
  display: none;
}
.service-row h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
}
.service-row p {
  color: #4b566c;
}
.service-row-action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
}
.service-row-action a {
  color: var(--red);
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: pointer;
}
.service-complex {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  padding: 23px 19px;
  border: 1px solid var(--navy);
  border-radius: 15px;
  background: #fff;
}
.service-complex h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.service-complex p {
  color: #4b566c;
}
.service-complex-premium {
  background: var(--navy);
  color: #fff;
  border: 0;
  box-shadow: 0 16px 34px rgba(13, 29, 54, 0.18);
  position: relative;
  overflow: hidden;
}
.service-complex-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--red);
}
.service-complex-premium h3,
.service-complex-premium p {
  color: #fff;
}
.service-complex-premium p {
  color: #d8e0eb;
}
.service-complex-premium .service-price {
  color: #fff;
  border-bottom-color: #fff;
}
.service-complex-premium .service-row-action a {
  color: #fff;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.service-tier-tag-dark {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  margin: 7px 0 14px;
}
.price-note {
  margin-top: 24px;
  color: var(--muted);
}

@media (min-width: 981px) {
  .service-pair {
    grid-template-columns: 1fr 1fr;
  }
  .service-row {
    grid-template-columns: 1fr auto;
    min-height: 230px;
    align-items: center;
  }
  .service-row:first-child::after {
    display: none;
  }
  .service-row:first-child {
    border-right: 1px solid var(--line);
  }
  .service-row-action {
    min-width: 150px;
    align-items: flex-end;
    text-align: right;
  }
  .service-complex {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 30px;
  }
}

/* FOUNDER PROFILE */
.founder-profile-section {
  background: #fff;
}
.founder-profile-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(13, 29, 54, 0.08);
}
.founder-profile-image img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center 20%;
}
.founder-profile-copy {
  padding: 24px 20px 26px;
}
.founder-profile-copy .founder-name {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--navy);
  margin-bottom: 9px;
}
.founder-social {
  margin-top: 18px;
}
.linkedin-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: #0a66c2;
  font-weight: 800;
  box-shadow: 0 6px 16px rgba(13, 29, 54, 0.06);
}
.linkedin-btn svg {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}
.founder-origin-story {
  margin-top: 24px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}
.founder-origin-story p {
  margin-bottom: 14px;
  color: var(--ink);
}

@media (min-width: 981px) {
  .founder-profile-card {
    display: grid;
    grid-template-columns: minmax(380px, 0.9fr) 1.1fr;
    align-items: stretch;
  }
  .founder-profile-image img {
    height: 100%;
    aspect-ratio: auto;
  }
  .founder-profile-copy {
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

/* CREDIBILITY */
.credential-grid {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 34px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: var(--radius);
  overflow: hidden;
}
.credential {
  padding: 22px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}
.credential:last-child {
  border-bottom: 0;
}
.credential p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin-bottom: 0;
}

@media (min-width: 981px) {
  .credential-grid {
    grid-template-columns: repeat(5, 1fr);
  }
  .credential {
    padding: 26px;
    border-bottom: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.16);
  }
  .credential:last-child {
    border-right: 0;
  }
}

/* CTA */
.cta-section {
  background: linear-gradient(rgba(13, 29, 54, 0.72), rgba(13, 29, 54, 0.72)),
    url('/v2/images/landing page/executive-by-the-window-istanbul.webp') center / cover no-repeat;
  color: #fff;
  padding: 72px 0;
  position: relative;
  overflow: hidden;
}
.cta-section::after {
  content: '';
  position: absolute;
  right: -80px;
  top: -120px;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.025), 0 0 0 140px rgba(255, 255, 255, 0.02);
}
.cta-section .section-head {
  position: relative;
  z-index: 2;
  max-width: 900px;
}
.cta-meta {
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #d7deea;
}

@media (min-width: 981px) {
  .cta-section {
    padding: 100px 0;
  }
}
</style>
