import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Box, Chip, Grid, Stack, Typography } from '@mui/material'

import SearchBar from '@/components/SearchBar'
import StatisticsCard from '@/components/StatisticsCard'
import { getGreetingByTime } from '@/utils/formatters'
import { fadeInUp, staggerContainer } from '@/utils/motion'

type HeroProps = {
  userName: string
  searchScopes: Array<{ value: string; label: string }>
  scope: string
  query: string
  onScopeChange: (value: string) => void
  onQueryChange: (value: string) => void
  onSearch: () => void
  statistics: Array<{
    id: string
    label: string
    value: string
    trend: string
    description: string
    iconKey: 'badge' | 'clock' | 'upload' | 'shield'
  }>
}

const Hero = ({
  userName,
  searchScopes,
  scope,
  query,
  onScopeChange,
  onQueryChange,
  onSearch,
  statistics,
}: HeroProps) => (
  <motion.section initial="hidden" animate="visible" variants={staggerContainer}>
    <Box
      sx={{
        px: { xs: 3, md: 4.5 },
        py: { xs: 4, md: 5 },
        borderRadius: { xs: 5, md: 7 },
        background:
          'linear-gradient(135deg, rgba(37,99,235,0.96) 0%, rgba(6,182,212,0.92) 55%, rgba(20,184,166,0.88) 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 28px 80px rgba(37, 99, 235, 0.25)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.14), transparent 22%)',
          pointerEvents: 'none',
        }}
      />
      <Stack spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={fadeInUp}>
          <Stack spacing={1.5}>
            <Chip
              icon={<Sparkles size={14} color="#FFFFFF" />}
              label="Integrity Portal Overview"
              sx={{
                width: 'fit-content',
                color: '#FFFFFF',
                backgroundColor: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            />
            <Typography variant="h4" sx={{ color: 'rgba(255,255,255,0.88)' }}>
              {getGreetingByTime()}
            </Typography>
            <Typography variant="h1">{userName}</Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.88)', maxWidth: 760, fontSize: { xs: 16, md: 18 } }}>
              Welcome to the Document and Certificate Integrity Checker
            </Typography>
          </Stack>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <SearchBar
            scopes={searchScopes}
            scope={scope}
            query={query}
            onScopeChange={onScopeChange}
            onQueryChange={onQueryChange}
            onSearch={onSearch}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Grid container spacing={2.5}>
            {statistics.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatisticsCard {...item} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Stack>
    </Box>
  </motion.section>
)

export default Hero
