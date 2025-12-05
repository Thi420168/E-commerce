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
    // Convert backend image path (uploads\promotion\file.png → http://localhost:3000/uploads/promotion/file.png)
    fixImage(path) {
      return 'http://localhost:3000/' + path.replace(/\\/g, '/')
    },

    shopNow(promotion) {
      alert("Let's shop: " + promotion.title)
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

<template>
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

.promo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>
