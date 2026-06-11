<template>
  <section class="bg-[#051228] py-24" id="realize">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
        {{ $t('realize.title') }}
      </h2>

      <div class="flex gap-0">
        <div class="w-1.5 bg-brand-red rounded-sm shrink-0 self-stretch"></div>
        <div class="flex-1 bg-[#0d1b2e]/80 rounded-r-2xl rounded-bl-2xl p-10 md:p-14">
          <h3 class="text-2xl font-serif font-bold text-white mb-8">
            {{ $t('realize.lead') }}
          </h3>
          <div class="space-y-5">
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('realize.p1') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('realize.p2') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('realize.p3') }}</p>
            <p class="text-white/70 text-lg leading-relaxed">{{ $t('realize.p4') }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
