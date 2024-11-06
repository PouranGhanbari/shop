import axios from '@/composables/useAxios'

import type { Authentication } from '@/model/authentication'

export async function login(auth: Authentication) {
  const { data } = await axios.post('/user/login', auth)
  return data
}

