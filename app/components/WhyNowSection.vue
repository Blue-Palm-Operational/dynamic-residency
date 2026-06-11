<template>
  <section class="relative py-24 overflow-hidden bg-gradient-to-b from-[#0d1425] to-[#1c0a20]" id="why">
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="relative">
        <!-- Card with red left bar -->
        <div class="flex gap-0">
          <div class="w-1.5 bg-brand-red rounded-sm shrink-0 self-stretch"></div>
          <div class="flex-1 bg-[#1e1020]/80 rounded-r-2xl rounded-bl-2xl p-10 md:p-14">
            <h3 class="text-2xl font-serif font-bold text-white mb-6">
              {{ $t('whyNow.subtitle') }}
            </h3>
            <p class="text-white/70 text-lg leading-relaxed mb-6">{{ $t('whyNow.p1') }}</p>
            <p class="text-white/70 text-lg leading-relaxed mb-6">{{ $t('whyNow.p2') }}</p>
            <p class="text-white/70 text-lg leading-relaxed mb-6">{{ $t('whyNow.p3') }}</p>
            <p class="text-white/70 text-lg leading-relaxed mb-6">{{ $t('whyNow.p4') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('whyNow.p5') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
