import axios from 'axios'
import { useUserStore } from '@/store/user'
import router from '@/router'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.20:5233/api/user'
})

axiosInstance.interceptors.request.use(
  (config) => {
    const authStore = useUserStore()
    if (config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (responce) => responce,
  async (error) => {
    const authStore = useUserStore()
    console.log('error in use axios', error)
    if (error.status === 403) {
      await authStore.refresh()
      error.config.headers.Authorization = `Bearer ${authStore.accessToken}`
      console.log('توکن منقضی شده ')
      return axiosInstance(error.config)
    } else if (error.status === 401) {
      router.replace({ name: 'Login' })
    }
  }
)
export default axiosInstance
