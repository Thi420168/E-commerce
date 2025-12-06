<template>
  <div class="card">
    <!-- ⭐ DISCOUNT BADGE -->
    <div v-if="promotionAsPercentage" class="badge">-{{ promotionAsPercentage }}%</div>

    <!-- PRODUCT IMAGE -->
    <img :src="image" class="img" />

    <div class="info">
      <!-- BRAND -->
      <p class="brand">{{ brand }}</p>

      <!-- TITLE -->
      <h3 class="title">{{ title }}</h3>

      <!-- SIZE -->
      <p class="size">{{ size }}</p>

      <!-- ⭐ RATING -->
      <div class="rating">
        <span v-for="n in 5" :key="n" class="star" :class="{ active: n <= rating }"> ★ </span>
      </div>

      <!-- PRICE ROW -->
      <div class="price-row">
        <span class="price">$ {{ price }}</span>
        <span v-if="oldPrice" class="old-price">$ {{ oldPrice }}</span>
      </div>

      <!-- ADD BUTTON -->
      <button class="add-btn">Add +</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
  title: string
  brand: string
  price: number
  oldPrice?: number
  rating: number
  size: string
  promotionAsPercentage?: number
}>()
</script>

<style scoped>
.card {
  width: 220px;
  background: #ffffff;
  border-radius: 12px;
  padding: 15px;
  position: relative;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
}

/* DISCOUNT BADGE */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #ff4d4d;
  color: white;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 6px;
  font-weight: bold;
}

/* PRODUCT IMAGE */
.img {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

/* BRAND TEXT */
.brand {
  font-size: 12px;
  color: gray;
  margin-top: 10px;
}

/* PRODUCT TITLE */
.title {
  font-size: 15px;
  margin: 5px 0;
  font-weight: 600;
}

/* SIZE TEXT */
.size {
  font-size: 13px;
  color: #777;
  margin-bottom: 5px;
}

/* ⭐ RATING STARS */
.rating {
  margin: 5px 0;
}

.star {
  color: #ccc;
  font-size: 14px;
}

.active {
  color: #ffb400; /* yellow star */
}

/* PRICE ROW */
.price-row {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #00a859;
  font-size: 18px;
}

.old-price {
  text-decoration: line-through;
  color: gray;
  font-size: 14px;
}

/* ADD BUTTON */
.add-btn {
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: #00a859;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.add-btn:hover {
  background-color: #008f4a;
}
</style>
