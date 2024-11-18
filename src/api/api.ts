export interface loginModel {
  id?: number
  userName: string
  password: string
  rememberMe?: boolean
}

export interface addProductModel {
  name: string
  productCategory: string
}

export interface deleteProduct {
  id: number
}
