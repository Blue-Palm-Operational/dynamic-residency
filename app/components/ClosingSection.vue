<template>
  <section class="bg-[#0a1020] py-24" id="closing">
    <div class="max-w-4xl mx-auto px-6 text-center">

      <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
        {{ $t('closing.title') }}
      </h2>

      <div class="space-y-5 max-w-3xl mx-auto mb-8">
        <p class="text-white/80 text-lg leading-relaxed">{{ $t('closing.p1') }}</p>
        <p class="text-white/80 text-lg leading-relaxed">{{ $t('closing.p2') }}</p>
      </div>

      <p class="text-2xl md:text-3xl font-serif font-bold text-white mb-12">
        {{ $t('closing.highlight') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#pricing"
          class="inline-block px-8 py-3.5 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-lg transition-colors tracking-widest uppercase shadow-lg"
        >
          {{ $t('closing.cta1') }}
        </a>
        <a
          href="#register"
          class="inline-block px-8 py-3.5 text-sm font-bold text-white border border-white/40 hover:border-white rounded-lg transition-colors tracking-widest uppercase"
        >
          {{ $t('closing.cta2') }}
        </a>
      </div>

    </div>
  </section>
</template>