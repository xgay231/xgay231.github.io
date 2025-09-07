import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('post/{posts,notes}/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: {
          time: +new Date(frontmatter.date),
          string: new Date(frontmatter.date).toLocaleDateString('zh-CN'),
        },
      }))
      .sort((a, b) => b.date.time - a.date.time)
  },
})