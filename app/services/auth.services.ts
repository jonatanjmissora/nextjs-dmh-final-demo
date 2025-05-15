import { RegisterTypes } from "../types/auth.types"
import { httpPost } from "./http.services"

export const logout = async () => {
  return httpPost("api/auth/logout")
}

export const login = async () => {
  return httpPost("api/auth/login")
}

export const register = async (registerData: RegisterTypes) => {
  return httpPost('api/auth/register', registerData);
}