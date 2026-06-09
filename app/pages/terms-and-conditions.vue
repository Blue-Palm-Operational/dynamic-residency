<template>
  <div class="min-h-screen bg-[#051228]">
    <AppHeader />

    <main class="max-w-3xl mx-auto px-6 py-32">
      <!-- Title -->
      <h1 class="text-4xl font-serif font-bold text-white mb-2">
        {{ $t('termsAndConditions.title') }}
      </h1>
      <p class="text-white/40 text-xs mb-3">{{ $t('termsAndConditions.lastUpdate') }}</p>
      <div class="w-12 h-0.5 bg-brand-red mb-10"></div>

      <!-- Sections -->
      <div class="space-y-8 text-white/70 text-sm leading-relaxed">

        <section v-for="i in 8" :key="i">
          <h2 class="text-white font-semibold text-base mb-2">{{ $t(`termsAndConditions.section${i}Title`) }}</h2>
          <p v-if="$te(`termsAndConditions.section${i}Text`)">{{ $t(`termsAndConditions.section${i}Text`) }}</p>
          <template v-if="i === 3">
            <p class="mt-2">{{ $t('termsAndConditions.section3Text1') }}</p>
            <p class="mt-3 font-medium text-white/50 text-xs uppercase tracking-wider">{{ $t('termsAndConditions.section3Subtitle') }}</p>
            <p class="mt-2">{{ $t('termsAndConditions.section3Text2') }}</p>
          </template>
          <template v-if="i === 4">
            <p>{{ $t('termsAndConditions.section4Text1') }}</p>
            <p class="mt-2">{{ $t('termsAndConditions.section4Text2') }}</p>
          </template>
          <template v-if="i === 5">
            <p>{{ $t('termsAndConditions.section5Text1') }}</p>
            <p class="mt-2">{{ $t('termsAndConditions.section5Text2') }}</p>
          </template>
          <template v-if="i === 6">
            <p>{{ $t('termsAndConditions.section6Text1') }}</p>
            <p class="mt-2">{{ $t('termsAndConditions.section6Text2') }}</p>
          </template>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('termsAndConditions.section9Title') }}</h2>
          <p>{{ $t('termsAndConditions.section9Text1') }}</p>
          <ul class="list-disc list-inside mt-2 space-y-1 pl-2">
            <li>{{ $t('termsAndConditions.section9List1') }}</li>
            <li>{{ $t('termsAndConditions.section9List2') }}</li>
          </ul>
          <p class="mt-2">{{ $t('termsAndConditions.section9Text2') }}</p>
          <p class="mt-2">{{ $t('termsAndConditions.section9Text3') }}</p>
          <p class="mt-2">{{ $t('termsAndConditions.section9Text4') }}</p>
        </section>

        <section v-for="i in [10,11,12,13,14,15,16,17,18,19,20]" :key="i">
          <h2 class="text-white font-semibold text-base mb-2">{{ $t(`termsAndConditions.section${i}Title`) }}</h2>
          <p>{{ $t(`termsAndConditions.section${i}Text`) }}</p>
        </section>

        <section class="border border-white/10 rounded-xl p-6">
          <h2 class="text-white font-semibold text-base mb-3">{{ $t('termsAndConditions.section21Title') }}</h2>
          <p>{{ $t('termsAndConditions.section21Text1') }}</p>
          <p class="mt-2">{{ $t('termsAndConditions.section21Text2') }}</p>
        </section>

      </div>

      <div class="mt-12">
        <NuxtLink :to="localePath('/')" class="text-brand-red text-sm hover:underline">
          ← {{ $t('nav.back') || 'Back to homepage' }}
        </NuxtLink>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  title: 'Terms and Conditions — Dynamic Residency',
})
</script>
