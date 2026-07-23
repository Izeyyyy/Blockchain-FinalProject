import axios from 'axios'

import { verificationRecords } from '@/data/mockData'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const clonePayload = (payload) => JSON.parse(JSON.stringify(payload))
const shouldUseMockData = import.meta.env.VITE_USE_MOCK_DATA !== 'false'

const resolveData = async (request, fallbackData) => {
  if (shouldUseMockData) {
    return clonePayload(fallbackData)
  }

  const response = await request()
  return response.data
}

export const getVerifications = () =>
  resolveData(() => apiClient.get('/api/verifications'), verificationRecords)

export const postVerifyDocument = async (payload) =>
  resolveData(
    () => apiClient.post('/api/verify-document', payload),
    {
      success: true,
      message: 'Mock document verification completed.',
      referenceId: `DOC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Verified',
    },
  )

export const postVerifyCertificate = async (payload) =>
  resolveData(
    () => apiClient.post('/api/verify-certificate', payload),
    {
      success: true,
      message: 'Mock certificate verification completed.',
      referenceId: `CERT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Verified',
    },
  )

export default apiClient
