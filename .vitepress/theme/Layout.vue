<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #doc-before>
      <Home v-if="frontmatter.home" />
      <PostList v-else-if="frontmatter.layout === 'PostList'" />
      <Archive v-else-if="frontmatter.layout === 'Archive'" />
    </template>
    <template #layout-bottom>
      <Footer />
    </template>
  </Layout>
</template>

<style>
.VPHome {
  padding-bottom: 0 !important;
}
</style>
