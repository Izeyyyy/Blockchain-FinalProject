import { TrendingUp } from 'lucide-react'
import { Box, Stack, Typography } from '@mui/material'

import { iconMap } from '@/utils/iconMap'

type StatisticsCardProps = {
  label: string
  value: string
  trend: string
  description: string
  iconKey: string
}

const StatisticsCard = ({ label, value, trend, description, iconKey }: StatisticsCardProps) => {
  const Icon = iconMap[iconKey as keyof typeof iconMap] ?? iconMap.gauge

  return (
    <Box
      sx={{
        p: 2.75,
        borderRadius: 4,
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Box>
          <Typography color="text.secondary" variant="body2">
            {label}
          </Typography>
          <Typography sx={{ fontSize: 30, fontWeight: 800, mt: 1 }}>{value}</Typography>
        </Box>
        <Box
          sx={{
            p: 1.35,
            borderRadius: 3,
            backgroundColor: 'rgba(20, 184, 166, 0.08)',
            color: 'success.main',
            height: 'fit-content',
          }}
        >
          <Icon size={20} />
        </Box>
      </Stack>
      <Stack alignItems="center" direction="row" spacing={1} sx={{ mt: 2.25 }}>
        <TrendingUp size={16} color="#14B8A6" />
        <Typography color="success.main" fontWeight={800} variant="body2">
          {trend}
        </Typography>
      </Stack>
      <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
        {description}
      </Typography>
    </Box>
  )
}

export default StatisticsCard
