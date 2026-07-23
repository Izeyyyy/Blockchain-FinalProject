import { useMemo, useState } from 'react'
import { MenuItem, Paper, Stack, TextField } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import VerificationCard from '@/components/VerificationCard'
import { verificationHistory } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'

const statuses = ['All', 'Verified', 'Pending', 'Rejected', 'Expired']

const VerificationHistory = () => {
  usePageTitle('Verification History')
  const [status, setStatus] = useState('All')

  const filteredHistory = useMemo(
    () => verificationHistory.filter((item) => (status === 'All' ? true : item.status === status)),
    [status],
  )

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Record Activity"
        title="Review verification history"
        description="The verification history page is filter-ready and structured for future backend pagination or query integration."
        chips={['Dynamic Status Chips', 'Filter-Ready', 'Scalable List Layout']}
      />

      <Paper sx={{ p: 3 }}>
        <TextField
          select
          label="Status Filter"
          sx={{ minWidth: 220 }}
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          {statuses.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Paper>

      <Stack spacing={2}>
        {filteredHistory.map((item) => (
          <VerificationCard key={item.id} {...item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default VerificationHistory
