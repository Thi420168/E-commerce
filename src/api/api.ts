// src/api/api.ts
const BASE_URL = 'http://localhost:3000'

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/api/categories`)
  return res.json()
}

export async function getPromotions() {
  const res = await fetch(`${BASE_URL}/api/promotions`)
  return res.json()
}
