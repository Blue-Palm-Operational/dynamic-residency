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
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 10 })
})
</script>
