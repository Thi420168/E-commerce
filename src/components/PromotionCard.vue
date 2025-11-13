<template>
  <div class="promo-card" :style="{ backgroundColor: bg }">
    <div class="text-box">
      <h2>{{ title }}</h2>
      <button class="shop-btn">Shop Now →</button>
    </div>

    <img :src="image" class="promo-img" />
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  bg: String,
})
</script>

<style scoped>
.promo-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-radius: 16px;
  width: 100%;
}

.text-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.promo-img {
  width: 200px;
}

.shop-btn {
  padding: 10px 20px;
  background: #00a859;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
