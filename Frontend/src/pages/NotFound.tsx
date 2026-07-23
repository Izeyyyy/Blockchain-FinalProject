import { Button, Paper, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { usePageTitle } from '@/hooks/usePageTitle'

const NotFound = () => {
  usePageTitle('404')

  return (
    <Paper
      sx={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        p: 4,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center" spacing={2.5} sx={{ maxWidth: 520 }}>
        <Typography color="primary.main" fontSize={14} fontWeight={800} letterSpacing={1.4}>
          404
        </Typography>
        <Typography variant="h2">Page not found</Typography>
        <Typography color="text.secondary">
          The page you requested is not available. Return to the main dashboard and continue your verification workflow.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Back to Dashboard
        </Button>
      </Stack>
    </Paper>
  )
}

export default NotFound
