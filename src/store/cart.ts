import { defineStore } from 'pinia'
import { ref } from 'vue'
export const productsKey = {
  item: 'data-cart'
}
const addProducts = ref<[]>([])
export const useAddToCart = defineStore('cart', () => {

  function saveProduct(products: any) {
    localStorage.setItem(productsKey.item, JSON.stringify(products))
  }

  function addToCart(product: any) {
    addProducts.value.push(product)
    saveProduct(addProducts.value)
  }

  return {
    addToCart
  }
})
