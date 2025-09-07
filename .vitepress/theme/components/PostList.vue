<script setup lang="ts">
import { ref, computed } from 'vue'
import { data as allPosts } from '../posts.data'

const posts = allPosts.filter(p => p.url.startsWith('/posts/'))

const pageSize = 10
const currentPage = ref(1)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return posts.slice(start, end)
})

const totalPages = computed(() => Math.ceil(posts.length / pageSize))

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="post-list">
    <div v-for="post in paginatedPosts" :key="post.url" class="post-item">
      <h2><a :href="post.url">{{ post.title }}</a></h2>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="post-meta">
        <span>{{ post.date.string }}</span>
      </div>
    </div>

    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
        &laquo; 上一页
      </button>
      <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        下一页 &raquo;
      </button>
    </div>
  </div>
</template>

<style scoped>
.post-item {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1.5rem;
}
.post-item h2 a {
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-size: 1.5rem;
  font-weight: 600;
}
.excerpt {
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}
.post-meta {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
}
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
.pagination button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand);
  border-radius: 4px;
  background-color: transparent;
  color: var(--vp-c-brand);
  cursor: pointer;
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>