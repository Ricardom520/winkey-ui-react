export interface UserSturct {
  username: string
  password: string
  phone?: string
}

export interface UserResponseDataStruct {
  username: string
  uid: string
  token: string
}