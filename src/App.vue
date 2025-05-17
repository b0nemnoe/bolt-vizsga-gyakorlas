<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import { useBoltStore } from '@/stores/bolt.js'

const BoltStore = useBoltStore()

onMounted(() => {
  BoltStore.loadAll()
})

</script>

<template>
  <header>
      <nav class="d-flex gap-3 justify-content-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
