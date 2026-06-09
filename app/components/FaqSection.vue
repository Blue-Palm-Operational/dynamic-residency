<template>
  <section class="bg-[#051228] py-24" id="faq">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{{ $t('faq.title') }}</h2>
        <p class="text-white/60 text-base">{{ $t('faq.description') }}</p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, i) in faqItems"
          :key="i"
          class="border border-white/10 rounded-xl overflow-hidden transition-colors"
          :class="{ 'border-brand-red/40': openIndex === i }"
        >
          <button
            class="w-full text-left px-6 py-5 flex items-center justify-between"
            @click="toggle(i)"
          >
            <span class="font-semibold text-white pr-8">{{ item.question }}</span>
            <svg
              class="w-5 h-5 text-brand-red shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === i }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <Transition name="accordion">
            <div v-if="openIndex === i" class="border-t border-white/10">
              <div class="px-6 py-5 text-sm text-white/60 leading-relaxed">{{ item.answer }}</div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Summary -->
      <h4 class="text-lg font-semibold text-white text-center mt-12">{{ $t('faq.summary') }}</h4>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const openIndex = ref<number | null>(null)
const faqItems = computed(() =>
  (tm('faq.items') as any[]).map(item => ({ question: rt(item.question), answer: rt(item.answer) }))
)
function toggle(i: number) { openIndex.value = openIndex.value === i ? null : i }
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active { transition: max-height 0.3s ease, opacity 0.3s ease; overflow: hidden; max-height: 600px; }
.accordion-enter-from, .accordion-leave-to { max-height: 0; opacity: 0; }
</style>
