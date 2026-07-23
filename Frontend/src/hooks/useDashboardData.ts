import { useEffect, useState } from 'react'

import { getDashboard } from '@/services/api'

type DashboardData = Awaited<ReturnType<typeof getDashboard>>

const initialState: DashboardData = {
  statistics: [],
  recentVerifications: [],
  knowledgeArticles: [],
  supportInformation: {
    email: '',
    phoneNumber: '',
    officeHours: '',
    actions: [],
  },
  userProfile: {
    id: '',
    name: '',
    role: '',
    organization: '',
    email: '',
    phoneNumber: '',
    officeLocation: '',
  },
  featureCards: [],
  searchScopes: [],
}

export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData>(initialState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboard()
        setData(response)
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  return { data, loading }
}
