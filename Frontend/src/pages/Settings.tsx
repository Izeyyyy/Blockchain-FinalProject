import { Switch, Paper, Stack, Typography } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import { settingsSections } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'

const Settings = () => {
  usePageTitle('Settings')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Preferences"
        title="System and account settings"
        description="Settings panels are structured as reusable configuration sections that can later sync with backend preferences."
        chips={['Notification Controls', 'System Preferences', 'Admin-Friendly']}
      />

      <Stack spacing={2.5}>
        {settingsSections.map((item) => (
          <Paper key={item.id} sx={{ p: 3 }}>
            <Stack alignItems={{ xs: 'flex-start', md: 'center' }} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
              <Stack spacing={0.75}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography color="text.secondary">{item.description}</Typography>
              </Stack>
              <Switch defaultChecked={item.enabled} />
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}

export default Settings
