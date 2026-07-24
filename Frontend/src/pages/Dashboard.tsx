import { motion } from 'framer-motion'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import { useMemo } from 'react'

import FeatureCard from '@/components/FeatureCard'
import { usePageTitle } from '@/hooks/usePageTitle'
import { fadeInUp, staggerContainer } from '@/utils/motion'

const featureCards = [
  {
    id: 1,
    title: 'Register Credential',
    description:
      'Upload a document or certificate, and register its SHA-256 fingerprint on the Cardano blockchain.',
    route: '/upload',
    iconKey: 'upload',
    accent: '#2563EB',
  },
  {
    id: 2,
    title: 'Verify Credential',
    description:
      'Verify the authenticity of a document or certificate using its file and blockchain transaction ID.',
    route: '/verify',
    iconKey: 'verify',
    accent: '#14B8A6',
  },
  {
    id: 3,
    title: 'Credential Registry',
    description:
      'Browse registered documents and certificates and view their blockchain transaction records.',
    route: '/credential-history',
    iconKey: 'history',
    accent: '#446A9C',
  },
]

const Dashboard = () => {
  usePageTitle('Home')
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
                Welcome to the Document &amp; Certificate Integrity Checker
              </Typography>
              <Typography sx={{ fontSize: { xs: 12, md: 20 }, fontWeight: 300, color: 'rgba(232,240,247,0.88)' }}>
                Securely verify documents and certificates using blockchain-powered integrity verification.
              </Typography>
            </Stack>
          </motion.div>
        </Stack>
      </Box>

      <Box
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        sx={{ px: { xs: 2, md: 5 }, mt: { xs: -11, md: -13 }, position: 'relative', zIndex: 2 }}
      >
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
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex' }}>
              <FeatureCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
