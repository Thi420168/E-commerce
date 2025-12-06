<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useProductStore } from '@/stores/product'

// COMPONENTS
import Product from '@/components/Products.vue' // your Product.vue
import Category from '@/components/Category.vue'
import Promotion from '@/components/Promotion.vue'
import MenuComponent from '@/components/MenuComponent.vue'
import BigProduct from '@/components/BigProduct.vue'

// STORE
const store = useProductStore()

// MENU LIST
const menuList = [
  'All',
  'Milks & Dairies',
  'Coffees & Teas',
  'Pet Foods',
  'Meats',
  'Vegetables',
  'Fruits',
]

// ⭐ FIX IMAGE FUNCTION
function fixImage(img: string | string[]) {
  if (!img) return ''

  // Backend returns ["uploads\\product\\xxx.jpg"]
  const path = Array.isArray(img) ? img[0] : img

  return 'http://localhost:3000/' + path.replace(/\\/g, '/')
}

// COMPUTED — POPULAR PRODUCTS
const popularProducts = computed(() => store.getPopularProducts)

// LOAD DATA ON START
onMounted(() => {
  store.loadAll()
})
</script>

<template>
  <div class="page">
    <!-- FEATURED CATEGORIES -->
    <h2 class="section-title">Featured Categories</h2>
    <MenuComponent :items="menuList" />

    <div class="category-grid">
      <Category
        v-for="cat in store.categories"
        :key="cat.id"
        :title="cat.name"
        :items="cat.productCount"
        :imageSrc="fixImage(cat.image)"
        :color="cat.color"
      />
    </div>

    <div class="section-space"></div>

    <!-- PROMOTIONS -->
    <MenuComponent :items="menuList" />

    <div class="promo-row">
      <Promotion
        v-for="pro in store.promotions"
        :key="pro.id"
        :title="pro.title"
        :imageSrc="fixImage(pro.image)"
        :bgColor="pro.color"
        :buttonColor="pro.buttonColor"
      />
    </div>

    <div class="section-space"></div>

    <!-- POPULAR PRODUCTS -->
    <h2 class="section-title">Popular Products</h2>
    <MenuComponent :items="menuList" />

    <div class="product-grid">
      <Product
        v-for="p in popularProducts"
        :key="p.id"
        :title="p.name"
        :description="p.description"
        :rating="p.rating"
        :size="p.size"
        :price="p.price"
        :oldPrice="p.oldPrice"
        :badge="p.badge"
        :image="fixImage(p.image)"
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

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

/* CATEGORY GRID */
.category-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  justify-items: center;
}

.section-space {
  height: 40px;
}

/* PROMO GRID */
.promo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* PRODUCT GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  margin-top: 25px;
}
</style>
