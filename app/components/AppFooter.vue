<template>
  <footer class="bg-gradient-to-b from-[#1a0a14] to-[#2d0820] py-10">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Desktop / tablet layout -->
      <div class="hidden sm:flex items-center justify-between gap-8">
        <div class="flex items-center gap-6">
          <img src="/images/dynamic-residency-logo-white.svg" alt="Dynamic Residency" class="h-9 w-auto shrink-0" />
          <span class="h-10 w-px bg-white/15 shrink-0"></span>
          <a
            href="https://bluepalm.group"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col gap-0.5 group"
          >
            <span class="text-lg font-light tracking-wide text-white group-hover:text-white/80 transition-colors">blue palm<sup class="text-xs">°</sup></span>
            <span class="text-xs text-white/40">{{ $t('footer.operatedBy') }}</span>
          </a>
        </div>
        <nav class="flex items-center gap-5 text-sm text-white/60">
          <NuxtLink :to="localePath('/privacy-policy')" class="hover:text-white transition-colors">{{ $t('footer.links.privacyPolicy') }}</NuxtLink>
          <span class="text-white/20">|</span>
          <NuxtLink :to="localePath('/terms-and-conditions')" class="hover:text-white transition-colors">{{ $t('footer.links.termsOfService') }}</NuxtLink>
          <span class="text-white/20">|</span>
          <NuxtLink :to="{ path: localePath('/'), hash: '#register' }" class="hover:text-white transition-colors inline-flex items-center gap-1">
            {{ $t('footer.links.contact') }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
            </svg>
          </NuxtLink>
        </nav>
      </div>

      <!-- Mobile layout -->
      <div class="flex sm:hidden flex-col items-center text-center gap-5">
        <img src="/images/dynamic-residency-logo-white.svg" alt="Dynamic Residency" class="h-9 w-auto" />
        <span class="text-sm text-white/40">{{ $t('footer.operatedBy') }}</span>
        <span class="w-40 h-px bg-white/15"></span>
        <a href="https://bluepalm.group" target="_blank" rel="noopener noreferrer" class="text-sm text-white/50 hover:text-white/80 transition-colors">
          {{ $t('footer.fromBluePalm') }}
        </a>
        <span class="w-40 h-px bg-white/15"></span>
        <nav class="flex items-center gap-4 text-sm text-white/60">
          <NuxtLink :to="localePath('/privacy-policy')" class="hover:text-white transition-colors">{{ $t('footer.links.privacyPolicy') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms-and-conditions')" class="hover:text-white transition-colors">{{ $t('footer.links.termsOfService') }}</NuxtLink>
          <NuxtLink :to="{ path: localePath('/'), hash: '#register' }" class="hover:text-white transition-colors inline-flex items-center gap-1">
            {{ $t('footer.links.contact') }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
            </svg>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
