<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background photo -->
    <div class="absolute inset-0 z-0">
      <picture class="w-full h-full">
        <source media="(min-width: 768px)" srcset="/images/hero-image-desktop.webp" />
        <img src="/images/hero-image.webp" alt="Istanbul Bosphorus" class="w-full h-full object-cover object-center" />
      </picture>
      <div class="absolute inset-0 bg-gradient-to-r from-[#051228]/90 via-[#051228]/60 to-[#051228]/10"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-16">
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
          {{ $t('hero.titlePre') }}<span class="text-brand-red">{{ $t('hero.titleRed') }}</span>{{ $t('hero.titlePost') }}
        </h1>
        <p class="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
          {{ $t('hero.description') }}
        </p>
        <a
          href="#register"
          class="inline-block px-8 py-3.5 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-lg transition-colors tracking-widest uppercase shadow-lg"
        >
          {{ $t('hero.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>
