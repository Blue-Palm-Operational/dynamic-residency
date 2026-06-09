<template>
  <section class="bg-[#051228] py-24" id="advantage">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: Text -->
        <div>
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
            {{ $t('advantage.title') }}
          </h2>
          <p class="text-white/60 mb-6 text-base leading-relaxed">{{ $t('advantage.intro') }}</p>

          <ul class="space-y-4 mb-10">
            <li
              v-for="(item, i) in bullets"
              :key="i"
              class="flex items-start gap-3"
            >
              <span class="mt-2 w-2.5 h-2.5 rounded-full bg-brand-red shrink-0"></span>
              <span class="text-white/80 text-base leading-relaxed">{{ item }}</span>
            </li>
          </ul>

          <a
            href="#register"
            class="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-full transition-colors tracking-wider uppercase"
          >
            {{ $t('advantage.cta') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <!-- Right: Photo -->
        <div class="relative">
          <div class="rounded-2xl overflow-hidden">
            <img
              src="/images/istanbul-office-view.webp"
              alt="Istanbul aerial view"
              class="w-full h-[480px] object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const bullets = computed(() =>
  (tm('advantage.bullets') as any[]).map((b) => rt(b))
)
</script>
