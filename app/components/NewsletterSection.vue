<template>
  <section class="bg-[#0d1020] py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-2xl">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{{ $t('newsletter.title') }}</h2>
        <p class="text-white/70 text-base leading-relaxed mb-8">{{ $t('newsletter.description') }}</p>

        <ul class="space-y-3 mb-8">
          <li v-for="(item, i) in bullets" :key="i" class="flex items-start gap-3">
            <span class="mt-2 w-2 h-2 rounded-full bg-brand-red shrink-0"></span>
            <span class="text-white/70 text-base">{{ item }}</span>
          </li>
        </ul>

        <p class="text-white/60 text-sm mb-6">{{ $t('newsletter.subtext') }}</p>

        <a
          href="#register"
          class="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-full transition-colors tracking-wider uppercase"
        >
          {{ $t('newsletter.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const bullets = computed(() => (tm('newsletter.bullets') as any[]).map(b => rt(b)))
</script>
