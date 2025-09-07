// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import PostList from './components/PostList.vue'
import Archive from './components/Archive.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
    app.component('Archive', Archive)
  },
} satisfies Theme

