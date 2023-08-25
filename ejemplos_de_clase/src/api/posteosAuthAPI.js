import { client } from "./client"
import { getToken } from "./token"

export const posteosAuthAPI = {
  get: async function (username) {
    const token = getToken()
    const response = await client.request({
      url: `/auth/posteos/${username}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "GET",
    })
    if(response) {
      return response.data
    }
  },
  post: async function (username, titulo, texto) {
    const token = getToken()
    const response = await client.request({
      url: `/auth/posteos/${username}`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      data: {
        titulo: titulo,
        texto: texto
      }
    })
    if(response) {
      return response.data
    }
  },
}
