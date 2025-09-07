import { createContentLoader } from 'vitepress'

interface Note {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
}

declare const data: Note[]
export { data }

export default createContentLoader('notes/**/*.md', {
  excerpt: true,
  transform(raw): Note[] {
    return raw
      .filter(page => page.frontmatter.date)
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