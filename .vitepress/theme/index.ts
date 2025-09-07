// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import PostList from './components/PostList.vue'
import './style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('PostList', PostList)
  }
} satisfies Theme

