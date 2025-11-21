<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CategoryCard from '@/components/CategoryCard.vue'
import PromotionCard from '@/components/PromotionCard.vue'

const categories = ref([])
const promotions = ref([])

async function fetchCategories() {
  const res = await axios.get('http://localhost:3000/api/categories')
  categories.value = res.data
}

async function fetchPromotions() {
  const res = await axios.get('http://localhost:3000/api/promotions')
  promotions.value = res.data
}

onMounted(() => {
  fetchCategories()
  fetchPromotions()
})
</script>

<template>
  <!-- CATEGORY LIST -->
  <div class="category-row">
    <CategoryCard
      v-for="cat in categories"
      :key="cat.id"
      :title="cat.name"
      :items="cat.productCount"
      :image="cat.image"
    />
  </div>

  <!-- PROMOTION LIST -->
  <div class="promo-row">
    <PromotionCard
      v-for="promo in promotions"
      :key="promo.id"
      :title="promo.title"
      :image="promo.image"
      :bg="promo.color"
    />
  </div>
</template>

<style>
.category-row {
  display: flex;
  gap: 20px;
  background: #1b1b1b;
  padding: 20px;
  overflow-x: auto;
}

.promo-row {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: #1b1b1b;
}
</style>
