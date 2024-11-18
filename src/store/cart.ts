import { defineStore } from 'pinia'
import { ref } from 'vue'

export const productsKey = {
  item: 'data-cart'
}

export const useAddToCart = defineStore('cart', () => {
  const addProducts = ref<
    { id: number; title: string; price: number; picUrl: string; count: number }[]
  >([])

  // const dataProduct = ref()
  // -----
  function saveProduct(products: any) {
    localStorage.setItem(productsKey.item, JSON.stringify(products))
  }
  // -----
  function initial() {
    addProducts.value = JSON.parse(localStorage.getItem(productsKey.item)) || []
  }
  // -----

  function addToCart(product: any) {
    const selectedProduct = addProducts.value.find((item) => {
      return item.id === product.id
    })

    if (selectedProduct) {
      selectedProduct.count++
    } else {
      addProducts.value.push({
        id: product.id,
        title: product.name,
        price: product.price,
        picUrl: '',
        count: 1
      })
      alert('محصول به سبد خرید اضافه شد')
    }
    // ---
    saveProduct(addProducts.value)
  }
  // -----

  const decrement = (product: any) => {
    const findProduct = addProducts.value.indexOf(product)
    if (addProducts.value[findProduct].count > 1) {
      addProducts.value[findProduct].count--
    } else {
      addProducts.value.splice(findProduct, 1)
    }
    saveProduct(addProducts.value)
  }

  return {
    addToCart,
    saveProduct,
    initial,
    decrement,
    addProducts
  }
})
