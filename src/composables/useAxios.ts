import axios from 'axios'
import { useUserStore } from '@/store/user'
import router from '@/router'
import { message } from 'ant-design-vue'
const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.20:5234/api/'
})

axiosInstance.interceptors.request.use(
  (config) => {
    const authStore = useUserStore()
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${authStore.getAsseccToken()}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
    console.log('error in Axios');
    
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useUserStore()
    if (error?.response?.status === 403 && !error.config.sent) {
      error.config.sent = true
      authStore.refresh()
      // authStore.getRefresh()
      error.config.headers.Authorization = `bearer ${authStore.accessToken}`
      return axiosInstance(error.config)
    } else if (error?.response?.status === 401) {
      router.replace({ name: 'Login' })
      message.error(' توکن منقضی شده دوباره وارد شوید')
      console.log(error);
      
    } else{
      console.log('check error', error);
      
    }
  }
)
export default axiosInstance
