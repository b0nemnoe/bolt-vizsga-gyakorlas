<script setup>
import { useBoltStore } from '@/stores/bolt.js'
const boltStore = useBoltStore()
</script>

<template>
  <h1>Termékek</h1>
  <div class="row gap-5 justify-content-center">
    <div v-for="p in boltStore.products" :key="p.id" class="card col-12 col-md-4 col-lg-3">
      <p class="card-title"> {{p.name}}</p>
      <div class="card-body">
        <p class="card-text">{{ p.price }}</p>
      </div>
      <div class="card-footer text-center">
        <button @click="console.log('kosárba')" class="btn btn-outline-primary w-50">&#128722;</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
