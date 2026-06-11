<template>
  <footer class="bg-gradient-to-b from-[#1a0a14] to-[#2d0820] py-16">
    <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center">
      <img src="/images/dynamic-residency-logo-white.svg" alt="Dynamic Residency" class="h-10 w-auto shrink-0" />
      <span class="text-sm text-white/50 flex-1 text-center">{{ $t('footer.note') }}</span>
      <span class="text-xs text-white/30 shrink-0">{{ $t('footer.copyright') }}</span>
    </div>
  </footer>
</template>
