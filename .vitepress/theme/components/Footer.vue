<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} My Blog. All rights reserved.</p>
      <p>Powered by VitePress</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 2rem 0;
  text-align: center;
  color: var(--vp-c-text-2);
}
.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>