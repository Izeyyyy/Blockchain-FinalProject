import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { iconMap } from '@/utils/iconMap'

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
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={() => navigate(route)}
      sx={{
        p: { xs: 3, md: 3.25 },
        height: '100%',
        borderRadius: { xs: 4, md: 0 },
        cursor: 'pointer',
        background: 'linear-gradient(180deg, #E8F0F7 0%, #D6E2EC 100%)',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        position: 'relative',
        transform: 'none',
        zIndex: 1,
        minHeight: 220,
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
      <Stack alignItems="center" justifyContent="center" spacing={2} sx={{ textAlign: 'center', height: '100%' }}>
        <Box
          sx={{
            display: 'inline-flex',
            p: 1.5,
            borderRadius: 3,
              background: `linear-gradient(135deg, ${accent} 0%, #AFC3D6 140%)`,
            color: '#FFFFFF',
            width: 'fit-content',
              boxShadow: '0px 16px 34px rgba(0, 0, 42, 0.10)',
          }}
        >
          <Icon size={28} />
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontSize: { xs: 20, md: 22 } }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 260, mx: 'auto' }}>
            {description}
          </Typography>
        </Box>
        <IconButton
          aria-label={`Open ${title}`}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            color: 'text.primary',
          }}
        >
          <ArrowRight size={18} />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default FeatureCard
