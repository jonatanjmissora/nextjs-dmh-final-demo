import { getData } from "./direct.services"

export const getServicesData = async () => {
  return getData("service")
}

export const getService = async (id: string) => {
  return getData(`service/${id}`)
}