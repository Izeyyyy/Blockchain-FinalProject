import { Avatar, Grid, Paper, Stack, Typography } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import { profileSections, userProfile } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'

const Profile = () => {
  usePageTitle('Profile')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Account Overview"
        title="Profile and organization details"
        description="This page presents the current account context and is ready for future editable profile settings."
        chips={['User Overview', 'Role-Aware Layout', 'Future Editable']}
      />

      <Paper sx={{ p: 3.5 }}>
        <Stack alignItems={{ xs: 'flex-start', md: 'center' }} direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
          <Avatar sx={{ width: 72, height: 72, bgcolor: 'primary.main', fontSize: 28 }}>
            {userProfile.name
              .split(' ')
              .slice(0, 2)
              .map((item) => item[0])
              .join('')}
          </Avatar>
          <Stack spacing={0.5}>
            <Typography variant="h3">{userProfile.name}</Typography>
            <Typography color="text.secondary">{userProfile.role}</Typography>
            <Typography color="text.secondary">{userProfile.organization}</Typography>
          </Stack>
        </Stack>
      </Paper>

      <Grid container spacing={2.5}>
        {profileSections.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6, xl: 4 }}>
            <Paper sx={{ p: 3 }}>
              <Typography color="text.secondary" variant="body2">
                {item.label}
              </Typography>
              <Typography fontWeight={700} sx={{ mt: 1 }}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Profile
