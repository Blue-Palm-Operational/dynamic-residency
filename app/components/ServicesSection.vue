<template>
  <section class="relative py-24 overflow-hidden" id="services">
    <!-- Background photo -->
    <div class="absolute inset-0 z-0">
      <picture class="w-full h-full">
        <source media="(min-width: 768px)" srcset="/images/istanbul-office-view-desktop.webp" />
        <img src="/images/istanbul-office-view.webp" alt="Office building" class="w-full h-full object-cover object-top" />
      </picture>
      <div class="absolute inset-0 bg-[#051228]/80"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
          {{ $t('services.title') }}
        </h2>
        <h3 class="text-xl md:text-2xl font-serif font-bold text-white mb-4">
          {{ $t('services.subtitle') }}
        </h3>
        <p class="text-white/60 max-w-2xl mx-auto text-base leading-relaxed mb-4">
          {{ $t('services.description') }}
        </p>
        <p class="text-white/60 max-w-2xl mx-auto text-base leading-relaxed">
          {{ $t('services.descriptionExtra') }}
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="bg-[#0d1b2e]/80 backdrop-blur-sm border-l-2 border-brand-red rounded-xl p-6 hover:bg-[#0d1b2e] transition-colors"
        >
          <img :src="service.icon" :alt="service.title" class="w-10 h-10 mb-4" />
          <h3 class="text-white font-semibold text-base leading-snug">{{ service.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const iconMap: Record<number, string> = {
  0: '/icons/location.svg',
  1: '/icons/rocket.svg',
  2: '/icons/agreement.svg',
  3: '/icons/mail.svg',
  4: '/icons/bilingual.svg',
  5: '/icons/partners.svg',
}

const services = computed(() =>
  (tm('services.items') as any[]).map((item, i) => ({
    title: rt(item),
    icon: iconMap[i] ?? '/icons/location.svg',
  }))
)
</script>
