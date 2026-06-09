<template>
  <section class="bg-[#051228] py-24" id="workflow">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Heading -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{{ $t('workflow.title') }}</h2>
        <p class="text-xl text-white/70">{{ $t('workflow.subtitle') }}</p>
        <p class="text-xl text-white/70">{{ $t('workflow.subtitle2') }}</p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div v-for="(step, index) in workflowSteps" :key="index" class="relative">
          <!-- Step number circle -->
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white font-bold text-lg mb-6 mx-auto md:mx-0">
            {{ index + 1 }}
          </div>
          <!-- Arrow between steps -->
          <div v-if="index < workflowSteps.length - 1" class="hidden md:block absolute top-6 -right-16 w-12 h-1 bg-brand-red/30">
            <svg class="w-4 h-4 text-brand-red absolute -right-2 -top-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-3">{{ step.title }}</h3>
          <p class="text-white/70">{{ step.description }}</p>
        </div>
      </div>

      <!-- Implementation section -->
      <div class="max-w-3xl mx-auto bg-[#0d1b2e] rounded-2xl p-8 border border-white/5">
        <h3 class="text-2xl font-bold text-white mb-4">Vom Assessment zur Umsetzung</h3>
        <p class="text-white/70 leading-relaxed">{{ $t('workflow.implementation') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()
const workflowSteps = computed(() =>
  (tm('workflow.steps') as any[]).map(step => ({
    title: rt(step.title),
    description: rt(step.description)
  }))
)
</script>
