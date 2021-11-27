import axios from 'axios'

import AuthService from './auth'

const API_ENVS = {
  production: '',
  development: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.development
})

httpClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
  auth: AuthService(httpClient)
}
