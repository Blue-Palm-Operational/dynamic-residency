<template>
  <header class="nav">
    <div class="container nav-inner">
      <NuxtLink :to="localePath('/')" class="brand">
        <img src="/v2/dynamic-residency-logo-black.svg" alt="Dynamic Residency" class="brand-logo" />
      </NuxtLink>
      <nav class="nav-links">
        <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/20-year-exemption')">{{ $t('nav.exemption') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')" class="btn primary">{{ $t('nav.cta') }}</NuxtLink>
        <LanguageSwitcher />
      </nav>
      <button aria-label="Open menu" class="menu-btn" @click="menuOpen = !menuOpen">☰</button>
    </div>
    <Transition name="drop">
      <div v-if="menuOpen" class="mobile-menu">
        <NuxtLink :to="localePath('/')" @click="menuOpen = false">{{ $t('nav.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" @click="menuOpen = false">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/20-year-exemption')" @click="menuOpen = false">{{ $t('nav.exemption') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')" class="btn primary" @click="menuOpen = false">{{ $t('nav.cta') }}</NuxtLink>
        <div class="mobile-menu-lang">
          <LanguageSwitcher />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const menuOpen = ref(false)
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.nav-inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand {
  display: flex;
  align-items: center;
}
.brand-logo {
  height: 34px;
  width: auto;
  display: block;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 0.9rem;
  font-weight: 700;
}
.nav-links a:not(.btn) {
  color: var(--navy);
}
.nav-links a.router-link-active:not(.btn) {
  color: var(--red);
}
.menu-btn {
  display: none;
  background: none;
  border: 0;
  color: var(--navy);
  font-size: 1.8rem;
}
.mobile-menu {
  display: none;
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }
  .menu-btn {
    display: block;
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 20px 22px;
    border-top: 1px solid var(--line);
    background: #fff;
  }
  .mobile-menu a:not(.btn) {
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
    color: var(--navy);
    font-weight: 700;
  }
  .mobile-menu-lang {
    padding: 10px 0;
  }
  .mobile-menu .btn {
    margin-top: 8px;
    width: 100%;
  }
}

.drop-enter-active, .drop-leave-active { transition: opacity 0.15s; }
.drop-enter-from, .drop-leave-to { opacity: 0; }
</style>
