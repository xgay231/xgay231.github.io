<script setup lang="ts">
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="layout">
    <Header />
    <main class="main-container">
      <Home v-if="frontmatter.home" />
      <PostList v-else-if="frontmatter.layout === 'PostList'" />
      <Content v-else />
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
