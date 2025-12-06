<template>
  <div class="product-card">
    <!-- DISCOUNT BADGE -->
    <div v-if="badge" class="badge">{{ badge }}</div>

    <!-- PRODUCT IMAGE -->
    <img :src="fixedImage" class="product-img" />

    <!-- BRAND -->
    <p class="brand">Hodo Foods</p>

    <!-- TITLE -->
    <h3 class="title">{{ title }}</h3>

    <!-- DESCRIPTION -->
    <p class="desc">{{ description || 'No description available.' }}</p>

    <!-- RATING -->
    <div class="rating">
      <span class="stars">★★★★★</span>
      <span class="rating-value">({{ rating }}.0)</span>
    </div>

    <!-- SIZE -->
    <p class="size">{{ size }}</p>

    <!-- PRICE SECTION -->
    <div class="price-row">
      <span class="new-price">$ {{ price }}</span>
      <span v-if="oldPrice" class="old-price">$ {{ oldPrice }}</span>
    </div>

    <!-- ADD / QUANTITY BUTTON -->
    <div class="bottom-row">
      <button class="add-btn" @click="increaseQty">Add +</button>

      <div v-if="qty > 0" class="qty-box">
        <button class="qty-btn" @click="decreaseQty">-</button>
        <span class="qty">{{ qty }}</span>
        <button class="qty-btn" @click="increaseQty">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  title: string
  description?: string
  image: string | string[]
  rating: number
  size: string
  price: number
  oldPrice?: number
  badge?: string
}>()

// ⭐ FIX IMAGE PATH
const fixedImage = computed(() => {
  if (!props.image) return ''

  // If backend returns ["uploads\\product\\file.jpg"]
  const img = Array.isArray(props.image) ? props.image[0] : props.image

  // Remove backslashes for URL format
  const clean = img.replace(/\\/g, '/')

  // If backend already gives full URL
  if (clean.startsWith('http')) return clean

  // Build correct URL
  return 'http://localhost:3000/' + clean
})

// ⭐ DEBUG LOGS (SEND THESE TO ME)
console.log('RAW IMAGE FROM API:', props.image)
console.log('FINAL IMAGE URL:', fixedImage.value)

const qty = ref(0)

function increaseQty() {
  qty.value++
}

function decreaseQty() {
  if (qty.value > 0) qty.value--
}
</script>

<style scoped>
.product-card {
  width: 250px;
  padding: 18px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.07);
  position: relative;
  transition: 0.3s;
}
.product-card:hover {
  transform: translateY(-4px);
}
.badge {
  position: absolute;
  top: -10px;
  left: 14px;
  background: #00b34f;
  color: white;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}
.product-img {
  width: 100%;
  height: 160px;
  object-fit: contain;
}
.brand {
  color: #7a7a7a;
  font-size: 14px;
  margin-top: 10px;
}
.title {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 4px;
}
.desc {
  color: #6e6e6e;
  font-size: 13px;
  margin-bottom: 8px;
  height: 32px;
  overflow: hidden;
}
.rating {
  display: flex;
  align-items: center;
  gap: 4px;
}
.stars {
  color: #ffbf00;
  font-size: 14px;
}
.rating-value {
  color: #555;
  font-size: 13px;
}
.size {
  font-size: 13px;
  color: #777;
  margin-top: 4px;
}
.price-row {
  display: flex;
  gap: 10px;
  align-items: baseline;
  margin-top: 8px;
}
.new-price {
  color: #11b463;
  font-size: 20px;
  font-weight: 700;
}
.old-price {
  color: #a9a9a9;
  text-decoration: line-through;
  font-size: 14px;
}
.bottom-row {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add-btn {
  background: #00a859;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.add-btn:hover {
  background: #008f4b;
}
.qty-box {
  display: flex;
  align-items: center;
  gap: 6px;
}
.qty-btn {
  background: #ddd;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.qty-btn:hover {
  background: #ccc;
}
.qty {
  font-size: 15px;
  font-weight: 600;
}
</style>
