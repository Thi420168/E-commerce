<template>
  <div class="card">
    <img :src="image" class="card-img" />
    <h3>{{ title }}</h3>
    <p>{{ items }} items</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Number,
  image: String,
})
</script>

<style scoped>
.card {
  width: 150px;
  padding: 15px;
  border-radius: 12px;
  background: #f8f6f3;
  text-align: center;
}
.card-img {
  width: 90px;
}
</style>
