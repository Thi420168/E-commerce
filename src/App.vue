<script setup>
import CategoryCard from '@/components/CategoryCard.vue'
import PromotionCard from '@/components/PromotionCard.vue'

// Import images from img folder
import cakeMilk from '@/components/img/burger.png'
import peach from '@/components/img/peach.png'
import kiwi from '@/components/img/kiwi.png'
import apple from '@/components/img/apple.png'
import snack from '@/components/img/snack.png'
import blackPlum from '@/components/img/black_plum.png'
import vegetables from '@/components/img/vegetables.jpg'
import headphone from '@/components/img/headphone.png'
import cakeMilk2 from '@/components/img/milk.png'
import orange from '@/components/img/orange.png'

// Promotion images
import onion from '@/components/img/onion.jpg'
import juice from '@/components/img/milk.png'
import veggiesPromo from '@/components/img/vegetables.jpg'
</script>

<template>
  <div class="category-row">
    <CategoryCard title="Burger" :items="14" :image="cakeMilk" />
    <CategoryCard title="Peach" :items="17" :image="peach" />
    <CategoryCard title="Organic Kiwi" :items="21" :image="kiwi" />
    <CategoryCard title="Red Apple" :items="68" :image="apple" />
    <CategoryCard title="Snack" :items="34" :image="snack" />
    <CategoryCard title="Black Plum" :items="25" :image="blackPlum" />
    <CategoryCard title="Vegetables" :items="65" :image="vegetables" />
    <CategoryCard title="Headphone" :items="33" :image="headphone" />
    <CategoryCard title="Cake & Milk" :items="54" :image="cakeMilk2" />
    <CategoryCard title="Orange" :items="63" :image="orange" />
  </div>

  <!-- ⭐ NEW: Promotion Section ⭐ -->
  <div class="promo-row">
    <PromotionCard title="Everyday Fresh & Clean with Our Products" :image="onion" bg="#f2f0d8" />

    <PromotionCard title="Make your Breakfast Healthy and Easy" :image="juice" bg="#f7e7e3" />

    <PromotionCard title="The best Organic Products Online" :image="veggiesPromo" bg="#e0e8f4" />
  </div>
</template>

<style>
.category-row {
  display: flex;
  gap: 20px;
  background: #1b1b1b;
  padding: 20px;
  overflow-x: auto;
}

.promo-row {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
  background: #1b1b1b;
}
</style>
