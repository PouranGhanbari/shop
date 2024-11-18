import { defineStore } from 'pinia'
import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from '@/composables/useAxios'
import type { addProductModel, deleteProduct } from '@/api/api'

export const useProducts = defineStore('products', () => {
  // --
  const { data: Product, refetch: getProduct } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const { data } = await axios.get('v1/product/getall')
      console.log('data product', data)

      return data
    }
  })

  const { mutateAsync: addProduct } = useMutation({
    mutationKey: ['add', 'product'],
    mutationFn: async (param: addProductModel) => {
      const { data } = await axios.post('v1/product/add', param)
      return data
    },
    onSuccess: (data) => {
      console.log('true', data)
    },
    onError: () => {
      console.log('false')
    }
  })
  // ----
  const { mutateAsync: deleteProduct } = useMutation({
    mutationKey: ['add', 'product'],
    mutationFn: async (param: deleteProduct) => {
      // const { data } = await axios.delete('v1/product/delete', param)
      console.log('params delete ', param)

      const { data } = await axios.delete(`v1/product/delete/${param.id} `)
      return data
    },
    onSuccess: (data) => {
      console.log('delete product is correct', data)
    },
    onError: () => {
      console.log('false')
    }
  })

  return {
    Product,
    getProduct,
    addProduct,
    deleteProduct
  }
})
