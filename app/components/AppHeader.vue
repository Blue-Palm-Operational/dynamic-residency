<template>
  <header class="fixed top-0 w-full z-50">
    <div
      class="bg-gradient-to-b from-[#1a0a14] to-[#2d0820] transition-all duration-300"
      :class="scrolled ? 'shadow-lg shadow-black/40' : ''"
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex-shrink-0 flex items-center">
          <img src="/images/dynamic-residency-logo-white.svg" alt="Dynamic Residency" class="h-8 w-auto" />
        </NuxtLink>


        <!-- Mobile -->
        <div class="md:hidden flex items-center gap-3">
          <button @click="mobileOpen = !mobileOpen" class="text-white p-1">
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <div v-if="mobileOpen" class="md:hidden border-t border-white/20 px-6 py-4 flex flex-col gap-3 bg-[#2d0820]/95">
          <a href="#advantage" @click="mobileOpen=false" class="text-sm font-medium text-white/80 py-2 border-b border-white/10">{{ $t('nav.advantage') }}</a>
          <a href="#pricing" @click="mobileOpen=false" class="text-sm font-medium text-white/80 py-2 border-b border-white/10">{{ $t('nav.pricing') }}</a>
          <a href="#register" @click="mobileOpen=false" class="mt-2 px-6 py-3 text-sm font-bold text-white border border-white/70 rounded-lg text-center tracking-wide">{{ $t('nav.cta') }}</a>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const scrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 10 })
})
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: opacity 0.2s, transform 0.2s; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
