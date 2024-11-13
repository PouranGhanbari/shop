import { defineStore } from 'pinia'
// import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
// import type { Authentication } from '@/model/authentication'
import type { loginModel } from '@/api/api'

import { message } from 'ant-design-vue'
import { ref } from 'vue'
import axios from '@/composables/useAxios'

import router from '@/router'

export const storageKeys = {
  accessToken: 'access-token'
}
export const isToken = ref()
export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string | null>(null)
  // ------
  function setAccessToken(token: string) {
    accessToken.value = token
    localStorage.setItem(storageKeys.accessToken, token)
  }
  // -----
  isToken.value = !!getAsseccToken()
  function getAsseccToken() {
    return localStorage.getItem(storageKeys.accessToken)
  }
  // ------
  const { mutateAsync: login } = useMutation({
    mutationKey: ['login', 'auth'],
    mutationFn: async (param: loginModel) => {
      const { data } = await axios.post('user/login', param)
      return data
    },
    onSuccess: async (data) => {
      setAccessToken(data.data?.accessToken || '')
      isToken.value = true
      message.success('با موفقیت وارد شدید')
    },
    onError: (data) => {
      message.error(data?.response.data.Message)
    }
  })
  // -------
  const { mutateAsync: logout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      const { data } = await axios.post('user/logout')
      return data
    },
    onSuccess: async () => {
      localStorage.removeItem(storageKeys.accessToken)
      await router.push({ name: 'Login' })
      isToken.value = false
      message.success('با موفقیت خارج شدید')
    },
    onError: (data) => {
      console.log('error:', data)
    }
  })

  // -----
  const { mutateAsync: refresh } = useMutation({
    mutationKey: ['refresh', 'token'],
    mutationFn: async () => {
      const { data } = await axios.get('user/refreshtoken')
      // console.log('check data in refresh', data)
      setAccessToken(data.data?.accessToken || '')
    }
  })
  return {
    login,
    logout,
    refresh,
    getAsseccToken,
    accessToken
  }
})
