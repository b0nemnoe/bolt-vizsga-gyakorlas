import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBoltStore = defineStore('bolt', () => {

  const products = ref([])

  const loadAll = async () => {
    try {
      products.value = (await axios.get('http://localhost:3000/bolt')).data

    } catch (error) {
      console.error(error)
    }
  }

  return { products, loadAll}
})
