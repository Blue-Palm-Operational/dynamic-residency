<template>
  <section class="bg-gradient-to-b from-[#1c0a20] via-[#0d1020] to-[#051228] py-24" id="pricing">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{{ $t('pricing.title') }}</h2>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <!-- Basis -->
        <div class="bg-[#0d1b2e] rounded-2xl p-8 border border-white/5 flex flex-col">
          <div class="mb-1">
            <h3 class="text-xl font-bold text-white">{{ $t('pricing.packages.basis.name') }}</h3>
            <p class="text-white/45 text-xs font-semibold tracking-widest uppercase mt-0.5">{{ $t('pricing.packages.basis.tier') }}</p>
            <span class="block text-3xl font-bold text-brand-red mt-3">{{ $t('pricing.packages.basis.price') }}</span>
          </div>
          <div class="border-t border-white/10 my-5"></div>
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="(f,i) in basisFeatures" :key="i" class="flex items-start gap-2.5 text-sm text-white/70">
              <svg class="w-4 h-4 text-brand-red shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ f }}
            </li>
          </ul>
          <button
            @click="openModal('basis')"
            class="block w-full py-3.5 text-center text-sm font-bold text-white border border-white/20 hover:border-brand-red hover:text-brand-red rounded-xl transition-colors tracking-wide"
          >
            {{ $t('pricing.selectPlan') }}
          </button>
        </div>

        <!-- Unternehmer (featured) -->
        <div class="bg-[#2a0a18] rounded-2xl p-8 border border-brand-red/40 flex flex-col relative">
          <div class="mb-1">
            <h3 class="text-xl font-bold text-white">{{ $t('pricing.packages.unternehmer.name') }}</h3>
            <p class="text-white/45 text-xs font-semibold tracking-widest uppercase mt-0.5">{{ $t('pricing.packages.unternehmer.tier') }}</p>
            <span class="block text-3xl font-bold text-brand-red mt-3">{{ $t('pricing.packages.unternehmer.price') }}</span>
          </div>
          <div class="border-t border-white/10 my-5"></div>
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="(f,i) in unternehmerFeatures" :key="i" class="flex items-start gap-2.5 text-sm text-white/70">
              <svg class="w-4 h-4 text-brand-red shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ f }}
            </li>
          </ul>
          <button
            @click="openModal('unternehmer')"
            class="block w-full py-3.5 text-center text-sm font-bold text-white bg-brand-red hover:bg-brand-redDark rounded-xl transition-colors tracking-wide shadow-lg"
          >
            {{ $t('pricing.continue') }}
          </button>
        </div>

        <!-- Family Office -->
        <div class="bg-[#0d1b2e] rounded-2xl p-8 border border-white/5 flex flex-col">
          <div class="mb-1">
            <h3 class="text-xl font-bold text-white">{{ $t('pricing.packages.familyOffice.name') }}</h3>
            <p class="text-white/45 text-xs font-semibold tracking-widest uppercase mt-0.5">{{ $t('pricing.packages.familyOffice.tier') }}</p>
            <span class="block text-3xl font-bold text-brand-red mt-3">{{ $t('pricing.packages.familyOffice.price') }}</span>
          </div>
          <div class="border-t border-white/10 my-5"></div>
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="(f,i) in familyFeatures" :key="i" class="flex items-start gap-2.5 text-sm text-white/70">
              <svg class="w-4 h-4 text-brand-red shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ f }}
            </li>
          </ul>
          <button
            @click="openModal('familyOffice')"
            class="block w-full py-3.5 text-center text-sm font-bold text-white border border-white/20 hover:border-brand-red hover:text-brand-red rounded-xl transition-colors tracking-wide"
          >
            {{ $t('pricing.selectPlan') }}
          </button>
        </div>

      </div>

      <!-- Note -->
      <p class="text-white/60 text-sm max-w-3xl mx-auto text-center mt-12">{{ $t('pricing.note') }}</p>
    </div>

    <!-- Payment Modal -->
    <PaymentModal
      :open="modalOpen"
      :package-id="selectedPackage"
      :package-name="selectedName"
      :package-tier="selectedTier"
      :package-price="selectedPrice"
      @close="modalOpen = false"
    />
  </section>
</template>

<script setup lang="ts">
const { tm, rt, t } = useI18n()
const basisFeatures = computed(() => (tm('pricing.packages.basis.features') as any[]).map(f => rt(f)))
const unternehmerFeatures = computed(() => (tm('pricing.packages.unternehmer.features') as any[]).map(f => rt(f)))
const familyFeatures = computed(() => (tm('pricing.packages.familyOffice.features') as any[]).map(f => rt(f)))

const modalOpen = ref(false)
const selectedPackage = ref('')
const selectedName = ref('')
const selectedTier = ref('')
const selectedPrice = ref('')

const packageMap: Record<string, string> = {
  basis: 'pricing.packages.basis',
  unternehmer: 'pricing.packages.unternehmer',
  familyOffice: 'pricing.packages.familyOffice',
}

function openModal(pkg: string) {
  const key = packageMap[pkg]
  selectedPackage.value = pkg
  selectedName.value = t(`${key}.name`)
  selectedTier.value = t(`${key}.tier`)
  selectedPrice.value = t(`${key}.price`)
  modalOpen.value = true
}
</script>
