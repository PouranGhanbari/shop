import { defineStore } from 'pinia'
import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from '@/composables/useAxios'
import type { addProductModel, deleteProduct, editProductModel } from '@/api/api'
import { message } from 'ant-design-vue'

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
    onSuccess: async () => {
      await getProduct()
      message.success('محصول با موفقیت اضافه شد')
    },
    onError: (data) => {
      console.log('error add product', data)
    }
  })
  // ----
  const { mutateAsync: deleteProduct } = useMutation({
    mutationKey: ['add', 'product'],
    mutationFn: async (param: deleteProduct) => {
      console.log('params delete ', param)
      const { data } = await axios.delete(`v1/product/delete/${param.id} `)
      return data
    },
    onSuccess: async () => {
      await getProduct()
      message.success('محصول با موفقیت حذف شد')
    },
    onError: (data) => {
      // message.error('حذف محصول با مشکل رو به رو شد')
      console.log('error delete product', data)
    }
  })
  // ----

  const { mutateAsync: editProduct } = useMutation({
    mutationKey: ['edit', 'product'],
    mutationFn: async (param: editProductModel) => {
      const { data } = await axios.put('v1/product/update', param)
      return data
    },
    onSuccess: async (data) => {
      await getProduct()
      console.log('data edit', data);
      
      message.success('محصول با موفقیت ویرایش شد')
    },
    onError: (data) => {
      console.log('error update product', data)
    }
  })

  return {
    Product,
    getProduct,
    addProduct,
    deleteProduct,
    editProduct
  }
})
