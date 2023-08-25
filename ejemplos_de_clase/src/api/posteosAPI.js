import { client } from "./client"

export const posteosAPI = {
  get: async function (username) {
    const response = await client.request({
      url: `/posteos/${username}`,
      method: "GET",
    })
    if(response) {
      return response.data
    }
  },
  post: async function (username, titulo, texto) {
    const response = await client.request({
      url: `/posteos/${username}`,
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