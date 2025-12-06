import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [] as any[],
    promotions: [] as any[],
    categories: [] as any[],
    products: [] as any[],
  }),

  getters: {
    // 1️⃣ List categories by group name
    getCategoriesByGroup: (state) => {
      return (groupName: string) => state.categories.filter((c: any) => c.group === groupName)
    },

    // 2️⃣ List products by group
    getProductsByGroup: (state) => {
      return (groupName: string) => state.products.filter((p: any) => p.group === groupName)
    },

    // 3️⃣ List products by categoryId
    getProductsByCategory: (state) => {
      return (categoryId: number) => state.products.filter((p: any) => p.categoryId === categoryId)
    },

    // 4️⃣ Popular products (countSold > 10)
    getPopularProducts: (state) => {
      return state.products.filter((p: any) => p.countSold > 10)
    },
  },

  actions: {
    async fetchCategories() {
      const res = await axios.get('http://localhost:3000/api/categories')
      this.categories = res.data
    },

    async fetchPromotions() {
      const res = await axios.get('http://localhost:3000/api/promotions')
      this.promotions = res.data
    },

    async fetchGroups() {
      const res = await axios.get('http://localhost:3000/api/groups')
      this.groups = res.data
    },

    async fetchProducts() {
      const res = await axios.get('http://localhost:3000/api/products')
      this.products = res.data
    },

    async loadAll() {
      await Promise.all([
        this.fetchCategories(),
        this.fetchPromotions(),
        this.fetchGroups(),
        this.fetchProducts(),
      ])
    },
  },
})
