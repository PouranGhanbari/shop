import { defineStore } from 'pinia'
// import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
// import type { Authentication } from '@/model/authentication'
import type { loginModel } from '@/api/api'
import axios from 'axios'
// import axios from 'axios'
import { message } from 'ant-design-vue'

export const useUserStore = defineStore('user', () => {
  const { mutateAsync: login } = useMutation({
    mutationKey: ['login', 'auth'],
    mutationFn: async (param: loginModel) => {
      const { data } = await axios.post('http://192.168.1.20:5233/api/user/login', param)
      return data
    },
    onSuccess: async (data) => {
      localStorage.setItem('access_token', data.data?.accessToken || '')
      console.log('onSuccess is true', data)
      message.success('با موفقیت وارد شدید')
    },
    onError: (data) => {
      console.log('onError is true', data)
    }
  })
  return {
    login
  }
})
