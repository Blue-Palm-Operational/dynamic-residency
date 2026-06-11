<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background photo -->
    <div class="absolute inset-0 z-0">
      <picture class="w-full h-full">
        <source media="(min-width: 768px)" srcset="/images/istanbul-bosphorus-executive-sunset.webp" />
        <img src="/images/istanbul-bosphorus-executive-sunset.webp" alt="Istanbul Bosphorus" class="w-full h-full object-cover object-center" />
      </picture>
      <div class="absolute inset-0 bg-gradient-to-r from-[#051228]/60 via-[#051228]/30 to-[#051228]/5"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-16">
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
          {{ $t('hero.titlePre') }}<span class="text-brand-red">{{ $t('hero.titleRed') }}</span>{{ $t('hero.titlePost') }}
        </h1>
        <h2 class="text-2xl md:text-3xl font-serif font-bold text-white leading-snug mb-4">
          {{ $t('hero.subtitle') }}
        </h2>
        <p class="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
          {{ $t('hero.description') }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#pricing"
            class="inline-block px-8 py-3.5 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-lg transition-colors tracking-widest uppercase shadow-lg"
          >
            {{ $t('hero.cta') }}
          </a>
          <a
            v-if="$t('hero.ctaSecondary')"
            href="#register"
            class="inline-block px-8 py-3.5 text-sm font-bold text-white border border-white/40 hover:border-white rounded-lg transition-colors tracking-widest uppercase"
          >
            {{ $t('hero.ctaSecondary') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
