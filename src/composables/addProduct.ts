import { useQuery } from '@tanstack/vue-query'
import axios from '@/composables/useAxios'
import { defineStore } from 'pinia'
import { computed } from "vue";
// import { useUserStore } from '@/store/user'

// const authUser = useUserStore()

export const useAddProduct = defineStore('product', () => {
  const { data: Product, refetch: getProduct } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      // const token = authUser.accessToken
      // console.log('check token', token)
      const { data } = await axios.get('v1/product/getall')
      console.log('check data in home', data)
      return data
    }
  })

  const products = computed(() => Product.value || "");

  return {
    Product,
    getProduct
  }
})
