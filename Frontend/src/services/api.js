import axios from 'axios'

import {
  analyticsResponse,
  certificates,
  dashboardResponse,
  documents,
  verificationHistory,
} from '@/data/mockData'

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

export const getDashboard = () =>
  resolveData(() => apiClient.get('/api/dashboard'), dashboardResponse)

export const getDocuments = () =>
  resolveData(() => apiClient.get('/api/documents'), documents)

export const getCertificates = () =>
  resolveData(() => apiClient.get('/api/certificates'), certificates)

export const getVerifications = () =>
  resolveData(() => apiClient.get('/api/verifications'), verificationHistory)

export const getAnalytics = () =>
  resolveData(() => apiClient.get('/api/analytics'), analyticsResponse)

export const postVerify = async (payload) =>
  resolveData(
    () => apiClient.post('/api/verify', payload),
    {
      success: true,
      message: 'Mock verification response ready for API integration.',
      submittedPayload: payload,
    },
  )

export const postUpload = async (payload) =>
  resolveData(
    () => apiClient.post('/api/upload', payload),
    {
      success: true,
      message: 'Mock upload response ready for API integration.',
      submittedPayload: payload,
    },
  )

export default apiClient
