<template>
  <div class="relative" ref="container">
    <button @click="open = !open" class="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-red transition-colors px-2 py-1">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke-width="2"/>
        <path stroke-linecap="round" stroke-width="2" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{{ currentLocale?.name }}</span>
      <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <Transition name="fade-drop">
      <div v-if="open" class="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          @click="open = false"
          class="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-brand-red hover:bg-red-50 transition-colors"
          :class="{ 'text-brand-red bg-red-50 font-medium': locale.code === currentLocale?.code }"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const open = ref(false)
const container = ref<HTMLElement | null>(null)
const currentLocale = computed(() => locales.value.find((l: any) => l.code === locale.value))
const availableLocales = computed(() => locales.value)
onMounted(() => {
  const handler = (e: MouseEvent) => { if (container.value && !container.value.contains(e.target as Node)) open.value = false }
  document.addEventListener('click', handler)
  onUnmounted(() => document.removeEventListener('click', handler))
})
</script>

<style scoped>
.fade-drop-enter-active, .fade-drop-leave-active { transition: opacity 0.15s, transform 0.15s; }
.fade-drop-enter-from, .fade-drop-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
