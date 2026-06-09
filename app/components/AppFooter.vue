<template>
  <footer class="bg-gradient-to-b from-[#1a0a14] to-[#2d0820] py-20">
    <div class="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
      <!-- Logo -->
      <div class="flex items-center gap-3 mb-8">
        <img src="/icons/dynamic-works-logo-header-mobile.svg" alt="Dynamic Residency" class="h-12 w-auto" />
        <span class="text-white font-bold text-2xl tracking-wide">Dynamic Residency</span>
      </div>

      <!-- Nav links -->
      <nav class="flex flex-wrap justify-center gap-8 mb-10">
        <a href="#advantage" class="text-sm text-white/50 hover:text-white transition-colors">{{ $t('footer.links.advantage') }}</a>
        <a href="#pricing" class="text-sm text-white/50 hover:text-white transition-colors">{{ $t('footer.links.pricing') }}</a>
        <a href="#services" class="text-sm text-white/50 hover:text-white transition-colors">{{ $t('footer.links.services') }}</a>
        <a href="#faq" class="text-sm text-white/50 hover:text-white transition-colors">{{ $t('footer.links.faq') }}</a>
        <a href="#register" class="text-sm text-white/50 hover:text-white transition-colors">{{ $t('footer.links.register') }}</a>
      </nav>

      <!-- Legal links -->
      <div class="flex gap-6 mb-8">
        <NuxtLink :to="localePath('/privacy-policy')" class="text-xs text-white/30 hover:text-white/60 transition-colors">Datenschutz-Charta</NuxtLink>
        <NuxtLink :to="localePath('/terms-and-conditions')" class="text-xs text-white/30 hover:text-white/60 transition-colors">Unsere Grundsätze</NuxtLink>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 pt-8 w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="text-xs text-white/30">{{ $t('footer.copyright') }}</span>
        <span class="text-xs text-white/30">{{ $t('footer.tagline') }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
