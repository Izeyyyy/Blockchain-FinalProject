import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { iconMap } from '@/utils/iconMap'
import { fadeInUp } from '@/utils/motion'

type FeatureCardProps = {
  title: string
  description: string
  route: string
  iconKey: string
  accent: string
  featured?: boolean
}

const FeatureCard = ({ title, description, route, iconKey, accent, featured = false }: FeatureCardProps) => {
  const navigate = useNavigate()
  const Icon = iconMap[iconKey as keyof typeof iconMap] ?? iconMap.dashboard

  return (
    <Box
      component={motion.div}
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={() => navigate(route)}
      sx={{
        width: '100%',
        height: 340,
        p: { xs: 4, md: 5 },
        borderRadius: { xs: 4, md: 0 },
        cursor: 'pointer',
        background: 'linear-gradient(180deg, #E8F0F7 0%, #D6E2EC 100%)',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        position: 'relative',
        zIndex: 1,
        '&::after': featured
          ? {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 5,
              background: 'linear-gradient(90deg, #00002A 0%, #446A9C 100%)',
              opacity: 0,
              transition: 'opacity 0.22s ease',
            }
          : undefined,
        ...(featured
          ? {
              '&:hover': {
                boxShadow: '0px 24px 60px rgba(0, 0, 42, 0.14)',
                transform: { md: 'translateY(-20px)' },
                zIndex: 2,
              },
              '&:hover::after': {
                opacity: 1,
              },
            }
          : {}),
      }}
    >
      <Stack alignItems="center" justifyContent="center" spacing={3} sx={{ textAlign: 'center', height: '100%' }}>
        <Box
          sx={{
            display: 'inline-flex',
            p: 2.5,
            borderRadius: 4,
              background: `linear-gradient(135deg, ${accent} 0%, #AFC3D6 140%)`,
            color: '#FFFFFF',
            width: 'fit-content',
              boxShadow: '0px 16px 34px rgba(0, 0, 42, 0.10)',
          }}
        >
          <Icon size={40} />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 28 } }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 400, mx: 'auto', fontSize: { xs: 14, md: 16 } }}>
            {description}
          </Typography>
        </Box>
        <IconButton
          aria-label={`Open ${title}`}
          size="large"
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            color: 'text.primary',
          }}
        >
          <ArrowRight size={24} />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default FeatureCard
