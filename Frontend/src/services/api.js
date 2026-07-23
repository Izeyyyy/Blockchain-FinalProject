import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000',
  timeout: 8000,
})

const resolveData = async (request) => {
  const response = await request()
  return response.data
}

export const uploadCredential = async (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return resolveData(() =>
    apiClient.post('/upload', formData)
  )
}

export const verifyCredential = async (file, txHash) => {
  const formData = new FormData()

  formData.append('file', file)
  formData.append('txHash', txHash)

  return resolveData(() =>
    apiClient.post('/verify', formData)
  )

}

export const getChain = () =>
  resolveData(() =>
    apiClient.get('/chain')
  )

export default apiClient
