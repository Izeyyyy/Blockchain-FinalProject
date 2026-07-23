import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Alert, Grid, Skeleton, Stack } from '@mui/material'

import FeatureCard from '@/components/FeatureCard'
import Hero from '@/components/Hero'
import KnowledgeCard from '@/components/KnowledgeCard'
import SectionHeader from '@/components/SectionHeader'
import SupportCard from '@/components/SupportCard'
import VerificationCard from '@/components/VerificationCard'
import { useDashboardData } from '@/hooks/useDashboardData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { fadeInUp, staggerContainer } from '@/utils/motion'

const Dashboard = () => {
  usePageTitle('Dashboard')
  const { data, loading } = useDashboardData()
  const [searchScope, setSearchScope] = useState('documents')
  const [query, setQuery] = useState('')

  const searchSummary = useMemo(
    () => (query ? `Search request prepared for "${query}" in ${searchScope}.` : 'Search is ready for future REST API integration.'),
    [query, searchScope],
  )

  if (loading) {
    return (
      <Stack spacing={3}>
        <Skeleton variant="rounded" height={320} />
        <Grid container spacing={2.5}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid key={index} size={{ xs: 12, md: 6, xl: 4 }}>
              <Skeleton variant="rounded" height={184} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    )
  }

  return (
    <Stack spacing={4}>
      <Hero
        userName={data.userProfile.name}
        searchScopes={data.searchScopes}
        scope={searchScope}
        query={query}
        onScopeChange={setSearchScope}
        onQueryChange={setQuery}
        onSearch={() => null}
        statistics={data.statistics}
      />

      <Alert severity="info" sx={{ borderRadius: 4 }}>
        {searchSummary}
      </Alert>

      <motion.section animate="visible" initial="hidden" variants={staggerContainer}>
        <SectionHeader
          eyebrow="Quick Actions"
          title="Verification Workflows"
          description="Every action card is rendered dynamically and mapped to a route-ready workflow for future integration."
        />
        <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
          {data.featureCards.map((item) => (
            <Grid key={item.id} size={{ xs: 12, md: 6, xl: 4 }}>
              <motion.div variants={fadeInUp}>
                <FeatureCard {...item} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>

      <motion.section animate="visible" initial="hidden" variants={staggerContainer}>
        <Grid alignItems="stretch" container spacing={2.5}>
          <Grid size={{ xs: 12, xl: 4 }}>
            <motion.div variants={fadeInUp}>
              <Stack spacing={2}>
                <SectionHeader eyebrow="Activity" title="Recent Verifications" description="Track the latest verification events with clear statuses." />
                {data.recentVerifications.map((item) => (
                  <VerificationCard key={item.id} {...item} />
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, xl: 4 }}>
            <motion.div variants={fadeInUp}>
              <Stack spacing={2}>
                <SectionHeader eyebrow="Knowledge Center" title="Guides and References" description="Self-service resources for staff, administrators, and institutional users." />
                {data.knowledgeArticles.map((article) => (
                  <KnowledgeCard key={article.id} {...article} />
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, xl: 4 }}>
            <motion.div variants={fadeInUp}>
              <SupportCard {...data.supportInformation} />
            </motion.div>
          </Grid>
        </Grid>
      </motion.section>
    </Stack>
  )
}

export default Dashboard
