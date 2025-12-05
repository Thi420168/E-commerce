<template>
  <div class="category-box" :style="{ backgroundColor: color }">
    <img :src="imageSrc" class="image" />
    <h3>{{ title }}</h3>
    <p>{{ items }} items</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  items: number
  color?: string
}>()
</script>

<style scoped>
.category-box {
  width: 130px;
  height: 155px;
  padding-top: 15px;
  padding-bottom: 10px;
  border-radius: 18px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.image {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

h3 {
  font-size: 15px;
  font-weight: 700;
}

p {
  font-size: 12px;
  color: #777;
}
</style>
