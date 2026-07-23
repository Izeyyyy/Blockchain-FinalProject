import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { iconMap } from '@/utils/iconMap'

type FeatureCardProps = {
  title: string
  description: string
  route: string
  iconKey: keyof typeof iconMap
  accent: string
}

const FeatureCard = ({ title, description, route, iconKey, accent }: FeatureCardProps) => {
  const navigate = useNavigate()
  const Icon = iconMap[iconKey]

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      onClick={() => navigate(route)}
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 5,
        cursor: 'pointer',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0px 20px 45px rgba(15, 23, 42, 0.06)',
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Stack spacing={2}>
          <Box
            sx={{
              display: 'inline-flex',
              p: 1.5,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${accent} 0%, rgba(255,255,255,0.92) 140%)`,
              color: '#FFFFFF',
              width: 'fit-content',
            }}
          >
            <Icon size={22} />
          </Box>
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {description}
            </Typography>
          </Box>
        </Stack>
        <IconButton
          aria-label={`Open ${title}`}
          sx={{
            alignSelf: 'flex-start',
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
