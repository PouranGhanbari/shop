import { defineStore } from 'pinia'
// import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
// import type { Authentication } from '@/model/authentication'
import type { loginModel } from '@/api/api'
// import axios from 'axios'

import { message } from 'ant-design-vue'
import { ref } from 'vue'
import axios from '@/composables/useAxios'

import router from '@/router'

export const storageKeys = {
  accessToken: 'access-token'
}
export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string | null>(null)
  function setAccessToken(token: string) {
    accessToken.value = token
    localStorage.setItem(storageKeys.accessToken, token)
  }

  // function getAsseccToken() {
  //  return localStorage.getItem(storageKeys.accessToken)
  // }

  const { mutateAsync: login } = useMutation({
    mutationKey: ['login', 'auth'],
    mutationFn: async (param: loginModel) => {
      const { data } = await axios.post('/login', param)
      return data
    },
    onSuccess: async (data) => {
      setAccessToken(data.data?.accessToken || '')
      message.success('با موفقیت وارد شدید')
      console.log('check data in refresh', refresh())
    },
    onError: (data) => {
      message.error(data?.response.data.Message)
      
    }
  })

  const { mutateAsync: logout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      const { data } = await axios.post('/logout',{}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(storageKeys.accessToken)}`
        }
      })
      console.log('data check',data)
      return data
    },
    onSuccess: async () => {
      localStorage.removeItem(storageKeys.accessToken)
      await router.push({ name: 'Login' })
      message.success('با موفقیت خارج شدید')
    },
    onError: (data) => {
      // message.error(data.response.data.Message)
      console.log('check out', data);
      console.log('error logout')
    }
  })

  const { mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh', 'token'],
    mutationFn: async () => {
      const { data } = await axios.get('/refreshtoken')
      // console.log('check data in refresh', data)
      setAccessToken(data.data?.accessToken || '')
    }
  })
  return {
    login,
    logout,
    accessToken,
    refresh
  }
})
