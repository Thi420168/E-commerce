<template>
  <button class="shop-btn">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<style scoped>
.shop-btn {
  background: #4caf50;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Times New Roman', serif !important;
}

.shop-btn:hover {
  background: #3e8e41;
}
</style>
