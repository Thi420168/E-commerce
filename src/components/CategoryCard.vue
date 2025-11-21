<template>
  <div class="card">
    <img :src="imageUrl" class="cat-img" />

    <h3>{{ title }}</h3>
    <p>{{ items }} items</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  items: Number,
  image: String, // backend path like "uploads/category/...png"
})

// Convert backend path → full URL
const imageUrl = `http://localhost:3000/${props.image}`
</script>

<style scoped>
.card {
  background: #f9f6ef;
  padding: 20px;
  border-radius: 12px;
  width: 150px;
  text-align: center;
}

.cat-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}
</style>
