<template>
  <footer class="footer">
    <div class="container footer-inner">
      <NuxtLink :to="localePath('/')" class="footer-logo-link">
        <img src="/v2/dynamic-residency-logo-white.svg" alt="Dynamic Residency" class="footer-logo" />
      </NuxtLink>
      <nav aria-label="Footer navigation" class="footer-links">
        <NuxtLink :to="localePath('/terms-and-conditions')">{{ $t('footer.terms') }}</NuxtLink>
        <NuxtLink :to="localePath('/privacy-policy')">{{ $t('footer.privacy') }}</NuxtLink>
      </nav>
      <div class="copyright">{{ $t('footer.copyright') }}</div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.footer {
  background: #081426;
  color: #fff;
  padding: 48px 0;
}
.footer-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr auto;
  align-items: start;
  gap: 28px;
}
.footer-logo-link {
  display: inline-flex;
}
.footer-logo {
  height: 34px;
  width: auto;
}
.footer-links {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: #d8e0eb;
  font-size: 0.9rem;
  font-weight: 700;
}
.copyright {
  grid-column: 1 / -1;
  color: #aeb9c8;
  font-size: 0.9rem;
}

@media (min-width: 700px) {
  .footer-links {
    grid-column: auto;
    justify-self: end;
  }
  .copyright {
    grid-column: 1 / -1;
  }
}
</style>
