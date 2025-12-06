<template>
  <div class="menu">
    <button v-for="item in items" :key="item" class="menu-item" @click="$emit('select', item)">
      {{ item }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  items: string[]
}>()
</script>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  margin: 10px 0;
}

.menu-item {
  background: none;
  border: none;
  color: #333;
  font-size: 15px;
  cursor: pointer;
  padding: 6px 10px;
}

.menu-item:hover {
  color: #00a859;
  font-weight: bold;
}
</style>
