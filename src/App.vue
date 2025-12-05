<template>
  <div class="page">
    <!-- CATEGORY SECTION -->
    <div class="category-grid">
      <Category title="Burger" :items="14" imageSrc="/img/burger.png" />
      <Category title="Peach" :items="17" imageSrc="/img/peach.png" />
      <Category title="Organic Kiwi" :items="21" imageSrc="/img/kiwi.png" />
      <Category title="Red Apple" :items="68" imageSrc="/img/apple.png" />
      <Category title="Snack" :items="34" imageSrc="/img/snack.png" />
      <Category title="Black plum" :items="25" imageSrc="/img/black_plum.png" />
      <Category title="Vegetables" :items="65" imageSrc="/img/vegetable.png" />
      <Category title="Headphone" :items="33" imageSrc="/img/headphone.png" />
      <Category title="Cake & Milk" :items="54" imageSrc="/img/cake&milk.png" />
      <Category title="Orange" :items="63" imageSrc="/img/orange.png" />
    </div>

    <!-- SPACING -->
    <div class="section-space"></div>

    <!-- PROMOTION CARDS SECTION -->
    <div class="promo-row">
      <Promotion
        title="Everyday Fresh & Clean with Our Products"
        imageSrc="/img/onion.jpg"
        bgColor="#f3ecdb"
      />

      <Promotion
        title="Make your Breakfast Healthy and Easy"
        imageSrc="/img/milk.png"
        bgColor="#f2e7e2"
      />

      <Promotion
        title="The best Organic Products Online"
        imageSrc="/img/vegetables.jpg"
        bgColor="#dfe8f7"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from '@/components/Category.vue'
import Promotion from '@/components/Promotion.vue'
</script>

<style scoped>
/* GLOBAL PAGE WRAPPER */
.page {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 10px;
  background: white;
  font-family: 'Quicksand', sans-serif;
}

/* CATEGORY GRID */
.category-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  place-items: center;
  margin-bottom: 50px;
}

/* SPACE BETWEEN SECTIONS */
.section-space {
  height: 20px;
}

/* PROMOTION CARDS */
.promo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>
