<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import { data as notes } from '../notes.data'

const allContent = [...posts, ...notes].sort((a, b) => b.date.time - a.date.time)

const archives = computed(() => {
  const result: Record<string, Record<string, typeof allContent>> = {}
  for (const item of allContent) {
    const year = new Date(item.date.time).getFullYear().toString()
    const month = (new Date(item.date.time).getMonth() + 1).toString().padStart(2, '0')
    if (!result[year]) {
      result[year] = {}
    }
    if (!result[year][month]) {
      result[year][month] = []
    }
    result[year][month].push(item)
  }
  return result
})
</script>

<template>
  <div class="archive">
    <div v-for="(months, year) in archives" :key="year" class="archive-year">
      <h2>{{ year }}</h2>
      <div v-for="(items, month) in months" :key="month" class="archive-month">
        <h3>{{ month }}月</h3>
        <ul>
          <li v-for="item in items" :key="item.url">
            <a :href="item.url">{{ item.title }}</a>
            <span>{{ item.date.string }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.archive-year h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
}
.archive-month h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.archive ul {
  list-style: none;
  padding: 0;
}
.archive li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}
.archive a {
  text-decoration: none;
  color: var(--vp-c-text-1);
}
.archive span {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>