<template>
  <div class="promo-box" :style="{ background: bgColor }">
    <div class="text">
      <h2>{{ title }}</h2>
      <button class="shop-btn" :style="{ background: buttonColor }" @click="shopNow">
        Shop Now →
      </button>
    </div>

    <img :src="imageSrc" class="promo-img" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  imageSrc: string
  bgColor: string
  buttonColor?: string
  url?: string
}>()

function shopNow() {
  alert("Let's shop: " + props.title)
}
</script>

<style scoped>
.promo-box {
  height: 260px;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', sans-serif;
}

h2 {
  font-size: 23px;
  font-weight: 700;
  max-width: 250px;
}

.shop-btn {
  margin-top: 15px;
  padding: 10px 25px;
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
