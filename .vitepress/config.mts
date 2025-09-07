import { defineConfig } from 'vitepress'
import { generateSidebar } from './theme/generateSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "post",
  
  title: "Blog",
  description: "My blog",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文章', link: '/posts/' },
      { text: '笔记', link: '/notes/' },
      { text: '归档', link: '/page/archive' },
      { text: '关于', link: '/page/about' }
    ],

    sidebar: generateSidebar()
  }
})
