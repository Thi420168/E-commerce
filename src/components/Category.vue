<template>
  <div class="category-box">
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
}>()
</script>

<style scoped>
.category-box {
  background: #fff8f6;
  width: 140px;
  height: 150px;
  text-align: center;
  padding: 15px;
  border-radius: 18px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
  font-family: 'Quicksand', sans-serif;
  transition: transform 0.2s;
}

.category-box:hover {
  transform: translateY(-5px);
}

.image {
  width: 70px;
  margin-bottom: 10px;
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
