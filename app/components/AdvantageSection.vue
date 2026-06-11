<template>
  <section class="bg-[#051228] py-24" id="advantage">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
        {{ $t('advantage.title') }}
      </h2>

      <div class="flex gap-0">
        <div class="w-1.5 bg-brand-red rounded-sm shrink-0 self-stretch"></div>
        <div class="flex-1 bg-[#0d1b2e]/80 rounded-r-2xl rounded-bl-2xl p-10 md:p-14">
          <h3 class="text-xl font-bold text-white tracking-widest uppercase mb-8">
            {{ $t('advantage.subtitle') }}
          </h3>
          <div class="space-y-5">
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p1') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p2') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p3') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p4') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p5') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('advantage.p6') }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>