import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { Box, Stack, Typography } from '@mui/material'

import StatusChip from '@/components/StatusChip'
import { formatDisplayDate } from '@/utils/formatters'

type VerificationCardProps = {
  documentName: string
  date: string
  status: string
  reference: string
}

const VerificationCard = ({ documentName, date, status, reference }: VerificationCardProps) => (
  <Box
    component={motion.div}
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
    sx={{
      p: 2.5,
      borderRadius: 4,
      backgroundColor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            p: 1.25,
            borderRadius: 3,
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            color: 'primary.main',
            height: 'fit-content',
          }}
        >
          <FileText size={20} />
        </Box>
        <Box>
          <Typography fontWeight={700}>{documentName}</Typography>
          <Typography color="text.secondary" variant="body2" sx={{ mt: 0.5 }}>
            {reference}
          </Typography>
          <Typography color="text.secondary" variant="body2" sx={{ mt: 0.75 }}>
            {formatDisplayDate(date)}
          </Typography>
        </Box>
      </Stack>
      <StatusChip status={status} />
    </Stack>
  </Box>
)

export default VerificationCard
