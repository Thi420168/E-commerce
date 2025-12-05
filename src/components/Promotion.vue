<template>
  <div class="promo-box" :style="{ background: bgColor }">
    <div class="text">
      <h2>{{ title }}</h2>
      <button class="shop-btn">Shop Now →</button>
    </div>

    <img :src="imageSrc" class="promo-img" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  imageSrc: string
  bgColor: string
}>()
</script>

<style scoped>
.promo-box {
  height: 260px;
  padding: 35px;
  border-radius: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
  font-family: 'Quicksand', sans-serif;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  max-width: 250px;
}

.shop-btn {
  margin-top: 15px;
  background: #41b883;
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.promo-img {
  height: 180px;
  object-fit: contain;
}
</style>
