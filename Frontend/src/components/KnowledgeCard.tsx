import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Box, Stack, Typography } from '@mui/material'

type KnowledgeCardProps = {
  title: string
  description: string
  category: string
}

const KnowledgeCard = ({ title, description, category }: KnowledgeCardProps) => (
  <Box
    component={motion.button}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    sx={{
      width: '100%',
      p: 2.5,
      border: '1px solid',
      borderColor: 'divider',
      borderRadius: 4,
      backgroundColor: 'background.paper',
      textAlign: 'left',
      cursor: 'pointer',
    }}
  >
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Stack direction="row" spacing={1.5}>
        <Box sx={{ color: 'secondary.main', mt: 0.3 }}>
          <BookOpen size={18} />
        </Box>
        <Box>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography color="primary.main" fontSize={12} fontWeight={800} sx={{ mt: 0.5 }}>
            {category}
          </Typography>
          <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
            {description}
          </Typography>
        </Box>
      </Stack>
      <ArrowUpRight size={18} />
    </Stack>
  </Box>
)

export default KnowledgeCard
