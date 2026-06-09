<template>
  <div class="min-h-screen bg-[#051228]">
    <AppHeader />

    <main class="max-w-3xl mx-auto px-6 py-32">
      <!-- Title -->
      <h1 class="text-4xl font-serif font-bold text-white mb-3">
        {{ $t('privacyPolicy.title') }}
      </h1>
      <div class="w-12 h-0.5 bg-brand-red mb-10"></div>

      <!-- Sections -->
      <div class="space-y-8 text-white/70 text-sm leading-relaxed">

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section1Title') }}</h2>
          <p>{{ $t('privacyPolicy.section1Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section2Title') }}</h2>
          <p>{{ $t('privacyPolicy.section2Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section3Title') }}</h2>
          <p>{{ $t('privacyPolicy.section3Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section4Title') }}</h2>
          <p>{{ $t('privacyPolicy.section4Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section5Title') }}</h2>
          <p>{{ $t('privacyPolicy.section5Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section6Title') }}</h2>
          <p>{{ $t('privacyPolicy.section6Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section7Title') }}</h2>
          <p>{{ $t('privacyPolicy.section7Text') }}</p>
        </section>

        <section>
          <h2 class="text-white font-semibold text-base mb-2">{{ $t('privacyPolicy.section8Title') }}</h2>
          <p>{{ $t('privacyPolicy.section8Text') }}</p>
        </section>

        <section class="border border-white/10 rounded-xl p-6">
          <h2 class="text-white font-semibold text-base mb-3">{{ $t('privacyPolicy.section9Title') }}</h2>
          <p class="mb-3">{{ $t('privacyPolicy.section9Text1') }}</p>
          <p class="text-white font-medium">{{ $t('privacyPolicy.section9Text2') }}</p>
          <p>{{ $t('privacyPolicy.section9Text3') }}</p>
          <p>{{ $t('privacyPolicy.section9Text4') }}</p>
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
  title: 'Privacy Policy — Dynamic Residency',
})
</script>
