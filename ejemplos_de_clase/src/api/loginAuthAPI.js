import { client } from "./client"
import { setToken } from "./token"
import qs from 'qs';

export const loginAuthAPI = {
  post: async function (usuario, password) {
    // Transformamos los datos a enviar en JSON String
    // para enviar dentro de un form
    const data = qs.stringify(
      {
        'usuario': usuario,
        'password': password,
      }
    )
    const response = await client.request({
      url: `/auth/login`,   // endpoint definido para esta petición
      headers: {   // está petición usa Form
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: "POST", // método HTTP de esta petición
      data: data  // datos enviados
    })
    if(response) {  // si el backend retorna una respuesta, se returna los datos
      console.table(response.data);
      setToken(response.data.token);
      return response.data;
    }
  },
}
