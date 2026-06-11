<template>
  <section v-if="steps.length" class="bg-[#0a1020] py-24" id="clarity">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white">
          {{ $t('clarity.title') }}
        </h2>
      </div>

      <div class="space-y-6">
        <!-- Row 1: narrow + wide -->
        <div class="flex flex-col sm:flex-row gap-6">
          <div :class="cardClass" class="sm:flex-[2]">
            <div class="flex items-center gap-4 mb-6">
              <span :class="badgeClass">{{ steps[0].number }}</span>
              <h3 class="text-xl font-bold text-white">{{ steps[0].title }}</h3>
            </div>
            <p class="text-white/65 text-base leading-relaxed">{{ steps[0].description }}</p>
          </div>
          <div :class="cardClass" class="sm:flex-[3]">
            <div class="flex items-center gap-4 mb-6">
              <span :class="badgeClass">{{ steps[1].number }}</span>
              <h3 class="text-xl font-bold text-white">{{ steps[1].title }}</h3>
            </div>
            <p class="text-white/65 text-base leading-relaxed">{{ steps[1].description }}</p>
          </div>
        </div>
        <!-- Row 2: wide + narrow -->
        <div class="flex flex-col sm:flex-row gap-6">
          <div :class="cardClass" class="sm:flex-[3]">
            <div class="flex items-center gap-4 mb-6">
              <span :class="badgeClass">{{ steps[2].number }}</span>
              <h3 class="text-xl font-bold text-white">{{ steps[2].title }}</h3>
            </div>
            <p class="text-white/65 text-base leading-relaxed">{{ steps[2].description }}</p>
          </div>
          <div :class="cardClass" class="sm:flex-[2]">
            <div class="flex items-center gap-4 mb-6">
              <span :class="badgeClass">{{ steps[3].number }}</span>
              <h3 class="text-xl font-bold text-white">{{ steps[3].title }}</h3>
            </div>
            <p class="text-white/65 text-base leading-relaxed">{{ steps[3].description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const steps = computed(() =>
  (tm('clarity.steps') as any[]).map(s => ({
    number: rt(s.number),
    title: rt(s.title),
    description: rt(s.description)
  }))
)

const cardClass = 'bg-[#0d1b2e] border border-white/5 rounded-2xl p-8 flex flex-col'
const badgeClass = 'flex items-center justify-center w-11 h-11 rounded-full bg-brand-red text-white font-bold text-lg shrink-0'
</script>