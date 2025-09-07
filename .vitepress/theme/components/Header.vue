<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <a href="/">Blog</a>
      </div>
      <nav class="nav-links">
        <a v-for="item in theme.nav" :key="item.text" :href="item.link">{{ item.text }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 1rem 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.logo a {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-c-text-1);
}
.nav-links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: var(--vp-c-text-1);
}
</style>