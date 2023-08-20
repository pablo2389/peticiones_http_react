import { api } from "./client"

const controller = new AbortController();

export const ChatAPI = {
  getAll: async function (token) {
    const response = await api.request({
      url: `/chats/`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "GET",
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  createChat: async function (token, name) {
    const response = await api.request({
      url: `/chats/`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      data: {
        "name": name
      },
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  getMessages: async function (token, chat_id) {
    const response = await api.request({
      url: `/chats/${chat_id}/messages/`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "GET",
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  postMessage: async function (token, chat_id, message) {
    const response = await api.request({
      url: `/chats/${chat_id}/messages/`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      data: {
        "message": message
      },
      signal: controller.signal
    })
    if(response) {
      return response.data
    }
  },
  abort: function(){
    controller.abort()
  },
}