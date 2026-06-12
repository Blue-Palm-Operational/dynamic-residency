<template>
  <section class="bg-[#051228] py-24" id="advantage">
    <div class="max-w-7xl mx-auto px-6 space-y-20">

      <!-- Warum die Struktur entscheidet -->
      <div>
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-10">
          {{ $t('structure.title') }}
        </h2>

        <div class="flex gap-0">
          <div class="w-1.5 bg-brand-red rounded-sm shrink-0 self-stretch"></div>
          <div class="flex-1 bg-[#0d1b2e]/80 rounded-r-2xl rounded-bl-2xl p-8 md:p-14">
            <h3 class="text-xl font-bold text-white tracking-widest uppercase mb-8">
              {{ $t('structure.subtitle') }}
            </h3>

            <!-- Intro prose + image -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-10">
              <div class="order-2 lg:order-none">
                <div class="space-y-5 mb-6">
                  <p v-for="(p, i) in structLead" :key="'lead' + i" class="text-white/70 text-lg leading-relaxed">{{ p }}</p>
                </div>
                <!-- Highlighted callout -->
                <div class="border-l-2 border-brand-red bg-brand-red/5 rounded-r-xl px-6 py-5">
                  <p class="text-white text-lg md:text-xl font-serif leading-relaxed">{{ $t('structure.highlight') }}</p>
                </div>
              </div>
              <div class="relative rounded-2xl overflow-hidden min-h-[240px] lg:min-h-0 shadow-xl shadow-black/30 order-1 lg:order-none">
                <img
                  src="/images/executive-boardroom-with-bosphorus-view.webp"
                  alt="Boardroom mit Bosporus-Blick"
                  loading="lazy"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <!-- Two-column prose -->
            <div class="columns-1 md:columns-2 md:gap-x-12">
              <p
                v-for="(p, i) in structBody"
                :key="'body' + i"
                class="text-white/70 text-base leading-relaxed mb-5 break-inside-avoid"
              >{{ p }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Warum Dynamic Residency (two-box split) -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
        <div class="lg:col-span-2 bg-gradient-to-br from-[#2a0a18] to-[#0d1b2e] rounded-2xl p-8 md:p-10 flex flex-col justify-center">
          <span class="text-brand-red text-xs font-bold tracking-widest uppercase mb-4">{{ $t('structure.why.title') }}</span>
          <h3 class="text-2xl md:text-3xl font-serif font-bold text-white leading-snug">{{ $t('structure.why.lead') }}</h3>
        </div>
        <div class="lg:col-span-3 bg-[#0d1b2e]/80 rounded-2xl p-8 md:p-10 flex flex-col justify-center">
          <ul class="space-y-4">
            <li v-for="(p, i) in whyPoints" :key="'why' + i" class="flex gap-3 text-white/75 text-lg leading-relaxed">
              <span class="text-brand-red mt-1 shrink-0">•</span>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Die Türkei ist nur ein Teil der Gleichung (image + text split) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <div class="relative rounded-3xl overflow-hidden min-h-[260px] lg:min-h-0 shadow-2xl shadow-black/40 order-1 lg:order-none">
          <img
            src="/images/business-investment-review.webp"
            alt="Strategische Prüfung internationaler Strukturen"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#051228]/70 via-transparent to-transparent"></div>
        </div>

        <div class="flex gap-0 order-2 lg:order-none">
          <div class="w-1.5 bg-brand-red rounded-sm shrink-0 self-stretch"></div>
          <div class="flex-1 bg-[#0d1b2e]/80 rounded-r-2xl rounded-bl-2xl p-8 md:p-12">
            <h3 class="text-xl font-bold text-white tracking-widest uppercase mb-6">
              {{ $t('structure.equation.title') }}
            </h3>
            <div class="space-y-5">
              <p v-for="(p, i) in eqLead" :key="'eql' + i" class="text-white/70 text-lg leading-relaxed">{{ p }}</p>
              <p v-for="(p, i) in eqPoints" :key="'eqp' + i" class="text-white/70 text-base leading-relaxed">{{ p }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const structLead = computed(() => (tm('structure.lead') as any[]).map(p => rt(p)))
const structBody = computed(() => (tm('structure.body') as any[]).map(p => rt(p)))
const whyPoints = computed(() => (tm('structure.why.points') as any[]).map(p => rt(p)))
const eqLead = computed(() => (tm('structure.equation.lead') as any[]).map(p => rt(p)))
const eqPoints = computed(() => (tm('structure.equation.points') as any[]).map(p => rt(p)))
</script>