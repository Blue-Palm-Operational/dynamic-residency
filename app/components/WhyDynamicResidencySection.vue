<template>
  <section class="bg-gradient-to-b from-[#051228] to-[#0d1020] py-24" id="why-dynamic-residency">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{{ $t('whyDynamicResidency.title') }}</h2>
        <p class="text-xl text-brand-red font-semibold">{{ $t('whyDynamicResidency.subtitle') }}</p>
      </div>

      <!-- Content -->
      <div class="max-w-3xl mx-auto space-y-6 text-white/70 text-lg leading-relaxed">
        <p>{{ $t('whyDynamicResidency.p1') }}</p>
        <p>{{ $t('whyDynamicResidency.p2') }}</p>
        <p>{{ $t('whyDynamicResidency.p3') }}</p>
        <p>{{ $t('whyDynamicResidency.p4') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component uses i18n directly, no local state needed
</script>
