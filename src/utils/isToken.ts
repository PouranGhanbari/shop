import { storageKeys } from '@/store/user'

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(storageKeys.accessToken)
}
