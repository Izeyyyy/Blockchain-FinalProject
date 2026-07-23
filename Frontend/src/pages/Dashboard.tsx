import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Box, Grid, IconButton, InputBase, Paper, Stack, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FeatureCard from '@/components/FeatureCard'
import { featureCards } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { fadeInUp, staggerContainer } from '@/utils/motion'

const Dashboard = () => {
  usePageTitle('Dashboard')
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const actionCards = useMemo(
    () =>
      featureCards.map((item) => ({
        ...item,
        featured: true,
      })),
    [],
  )

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #DCE8F1 0%, #B8CBDB 24%, #E8F0F7 100%)' }}>
      <Box
        component={motion.section}
        animate="visible"
        initial="hidden"
        variants={staggerContainer}
        sx={{
          background:
            'linear-gradient(180deg, #DCE8F1 0%, #8AA7C3 18%, #446A9C 48%, #1A3F75 76%, #00002A 100%)',
          color: '#FFFFFF',
          px: { xs: 2, md: 5 },
          pt: { xs: 14, md: 18 },
          pb: { xs: 18, md: 20 },
        }}
      >
        <Stack alignItems="center" spacing={3} sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
          <motion.div variants={fadeInUp}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 800, lineHeight: 1.1 }}>
                Welcome to the Academic Credential Verification Portal
              </Typography>
              <Typography sx={{ fontSize: { xs: 12, md: 20 }, fontWeight: 300, color: 'rgba(232,240,247,0.88)' }}>
                Securely verify academic documents and certificates using blockchain-powered integrity verification.
              </Typography>
            </Stack>
          </motion.div>

          <motion.div variants={fadeInUp} style={{ width: '100%', maxWidth: 640 }}>
            <Paper
              sx={{
                px: 2.5,
                py: 0.8,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: 999,
                backgroundColor: 'rgba(232,240,247,0.18)',
                border: '1px solid rgba(232,240,247,0.22)',
                boxShadow: 'none',
              }}
            >
              <InputBase
                fullWidth
                placeholder="Search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                sx={{
                  color: '#E8F0F7',
                  '& input::placeholder': {
                    color: 'rgba(232,240,247,0.72)',
                    opacity: 1,
                  },
                }}
              />
              <IconButton
                aria-label="Search verification history"
                onClick={() => navigate(`/verification-history${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`)}
                sx={{
                  backgroundColor: 'rgba(232,240,247,0.16)',
                  color: '#E8F0F7',
                }}
              >
                <Search size={18} />
              </IconButton>
            </Paper>
          </motion.div>
        </Stack>
      </Box>

      <Box sx={{ px: { xs: 2, md: 5 }, mt: { xs: -11, md: -13 }, position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 0 }}
          sx={{
            maxWidth: 1160,
            mx: 'auto',
            alignItems: 'stretch',
          }}
        >
          {actionCards.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 4 }}>
              <motion.div variants={fadeInUp}>
                <FeatureCard {...item} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
