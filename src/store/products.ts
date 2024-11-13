import { defineStore } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import axios from '@/composables/useAxios'

export const useProducts = defineStore('products', () => {
  const { data: Product, refetch: getProduct } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const { data } = await axios.get('v1/product/getall')
      return data
    }
  })

  return {
    Product,
    getProduct
  }
})
