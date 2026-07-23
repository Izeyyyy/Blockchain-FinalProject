import { BarChart3 } from 'lucide-react'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import StatisticsCard from '@/components/StatisticsCard'
import { analyticsSeries, analyticsSummaries, dashboardStatistics } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'

const Analytics = () => {
  usePageTitle('Analytics')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Operational Insights"
        title="Monitor verification performance"
        description="Analytics widgets are built to accept backend-provided metrics later while currently showcasing realistic mock statistics."
        chips={['Metrics Cards', 'Trend Widgets', 'Backend-Ready']}
      />

      <Grid container spacing={2.5}>
        {dashboardStatistics.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, xl: 3 }}>
            <StatisticsCard {...item} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Paper sx={{ p: 3.5 }}>
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Box>
                <Typography variant="h4">Verification Volume</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  Placeholder chart bars are rendered dynamically from reusable analytics data.
                </Typography>
              </Box>
              <BarChart3 size={22} />
            </Stack>
            <Grid alignItems="end" container spacing={1.5} sx={{ mt: 4, minHeight: 240 }}>
              {analyticsSeries.map((item) => (
                <Grid key={item.id} size={{ xs: 12 / analyticsSeries.length }}>
                  <Stack alignItems="center" spacing={1}>
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: 48,
                        height: `${item.value * 2.1}px`,
                        borderRadius: 999,
                        background: 'linear-gradient(180deg, #06B6D4 0%, #2563EB 100%)',
                        boxShadow: '0px 14px 24px rgba(37, 99, 235, 0.16)',
                      }}
                    />
                    <Typography color="text.secondary" variant="body2">
                      {item.label}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Stack spacing={2.5}>
            {analyticsSummaries.map((item) => (
              <Paper key={item.id} sx={{ p: 3 }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Analytics
