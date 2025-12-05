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
<<<<<<< Updated upstream
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

=======
  <div class="page">
    <!-- CATEGORY LIST -->
    <div class="category-grid">
      <Category
        v-for="cat in categories"
        :key="cat.id"
        :title="cat.name"
        :items="cat.productCount"
        :imageSrc="fixImage(cat.image)"
        :color="cat.color"
      />
    </div>

    <div class="section-space"></div>

    <!-- PROMOTION LIST -->
    <div class="promo-row">
      <Promotion
        v-for="pro in promotions"
        :key="pro.id"
        :title="pro.title"
        :imageSrc="fixImage(pro.image)"
        :bgColor="pro.color"
        :buttonColor="pro.buttonColor"
        @click="shopNow(pro)"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Category from './components/Category.vue'
import Promotion from './components/Promotion.vue'

export default {
  components: { Category, Promotion },

  data() {
    return {
      categories: [],
      promotions: [],
    }
  },

  methods: {
    shopNow(promotion) {
      alert("Let's shop: " + promotion.title)
    },

    fixImage(path) {
      // Convert \ to / and add full URL
      return 'http://localhost:3000/' + path.replace(/\\/g, '/')
    },

    async fetchCategories() {
      try {
        const res = await axios.get('http://localhost:3000/api/categories')
        this.categories = res.data
      } catch (err) {
        console.error('Error loading categories:', err)
      }
    },

    async fetchPromotions() {
      try {
        const res = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = res.data
      } catch (err) {
        console.error('Error loading promotions:', err)
      }
    },
  },

  mounted() {
    this.fetchCategories()
    this.fetchPromotions()
  },
}
</script>

<style scoped>
.page {
  width: 100%;
  max-width: 1500px;
  margin: auto;
  padding: 40px 15px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  justify-items: center;
}

.section-space {
  height: 40px;
}

>>>>>>> Stashed changes
.promo-row {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: #1b1b1b;
}
</style>
