<script setup lang="ts">
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main-container">
      <Content />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-container {
  flex: 1;
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.5rem;
}
</style>
