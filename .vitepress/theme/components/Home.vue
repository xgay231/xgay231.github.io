<script setup lang="ts">
import { data as posts } from '../posts.data'

const recentPosts = posts.slice(0, 3)
</script>

<template>
  <div class="home">
    <div class="personal-info">
      <!-- 个人信息区域，留给你自己填充 -->
      <h2>个人信息</h2>
      <p>这里是你的个人介绍...</p>
    </div>

    <div class="recent-posts">
      <h2>最近文章</h2>
      <ul>
        <li v-for="post in recentPosts" :key="post.url">
          <a :href="post.url">{{ post.title }}</a>
          <span>{{ post.date.string }}</span>
        </li>
      </ul>
      <a href="/posts/" class="more-link">查看更多 &rarr;</a>
    </div>
  </div>
</template>

<style scoped>
.personal-info {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.recent-posts ul {
  list-style: none;
  padding: 0;
}
.recent-posts li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.recent-posts a {
  text-decoration: none;
  color: var(--vp-c-brand);
  font-size: 1.1rem;
}
.recent-posts span {
  color: var(--vp-c-text-2);
}
.more-link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
}
</style>