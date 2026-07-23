import { useEffect, useMemo, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'

import PageIntro from '@/components/PageIntro'
import StatusChip from '@/components/StatusChip'
import { historyFilters, historySortOptions } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { getVerifications } from '@/services/api'
import { formatDisplayDate } from '@/utils/formatters'

type VerificationRecord = Awaited<ReturnType<typeof getVerifications>>[number]

const VerificationHistory = () => {
  usePageTitle('Verification History')
  const [records, setRecords] = useState<VerificationRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState(historySortOptions[0].value)
  const [selected, setSelected] = useState<VerificationRecord | null>(null)

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const response = await getVerifications()
        setRecords(response)
      } finally {
        setLoading(false)
      }
    }

    loadHistory()
  }, [])

  const filteredHistory = useMemo(() => {
    const query = search.trim().toLowerCase()

    const filtered = records.filter((record) => {
      const matchesQuery = query
        ? [record.fileName, record.fileType, record.referenceId, record.status].some((value) =>
            String(value).toLowerCase().includes(query),
          )
        : true

      const matchesFilter =
        filter === 'All' ? true : record.fileType === (filter === 'Documents' ? 'Document' : 'Certificate')

      return matchesQuery && matchesFilter
    })

    const sorted = [...filtered].sort((a, b) => {
      const aDate = new Date(a.verifiedAt).getTime()
      const bDate = new Date(b.verifiedAt).getTime()
      return sort === 'oldest' ? aDate - bDate : bDate - aDate
    })

    return sorted
  }, [filter, records, search, sort])

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Portal"
        title="Verification History"
        description="Search and review previous document and certificate verification records."
      />

      <Paper sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
          <TextField
            fullWidth
            label="Search"
            placeholder="Search by file name, reference number, status, or type"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <TextField
            select
            label="Filter"
            value={filter}
            sx={{ minWidth: 220 }}
            onChange={(event) => setFilter(event.target.value)}
          >
            {historyFilters.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Sort"
            value={sort}
            sx={{ minWidth: 220 }}
            onChange={(event) => setSort(event.target.value)}
          >
            {historySortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </Paper>

      <TableContainer component={Paper} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File name</TableCell>
              <TableCell>File type</TableCell>
              <TableCell>Verification date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={6}>
                      <Typography color="text.secondary">Loading verification history…</Typography>
                    </TableCell>
                  </TableRow>
                ))
              : filteredHistory.map((record) => (
                  <TableRow key={record.id} hover>
                    <TableCell sx={{ fontWeight: 700 }}>{record.fileName}</TableCell>
                    <TableCell>{record.fileType}</TableCell>
                    <TableCell>{formatDisplayDate(record.verifiedAt)}</TableCell>
                    <TableCell>
                      <StatusChip status={record.status} />
                    </TableCell>
                    <TableCell>{record.referenceId}</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" onClick={() => setSelected(record)}>
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Paper key={index} sx={{ p: 2.5 }}>
                <Typography color="text.secondary">Loading verification history…</Typography>
              </Paper>
            ))
          : filteredHistory.map((record) => (
              <Paper key={record.id} sx={{ p: 2.5 }}>
                <Stack spacing={1.25}>
                  <Typography fontWeight={800}>{record.fileName}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                    <Typography color="text.secondary" variant="body2">
                      {record.fileType}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      •
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {formatDisplayDate(record.verifiedAt)}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="center">
                    <StatusChip status={record.status} />
                    <Typography color="text.secondary" variant="body2">
                      {record.referenceId}
                    </Typography>
                  </Stack>
                  <Button variant="outlined" onClick={() => setSelected(record)}>
                    View Details
                  </Button>
                </Stack>
              </Paper>
            ))}
      </Stack>

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Verification Details</DialogTitle>
        <DialogContent>
          {selected ? (
            <Stack spacing={1.25} sx={{ mt: 1 }}>
              <Typography fontWeight={800}>{selected.fileName}</Typography>
              <Typography color="text.secondary">Type: {selected.fileType}</Typography>
              <Typography color="text.secondary">Verified at: {formatDisplayDate(selected.verifiedAt)}</Typography>
              <Typography color="text.secondary">Status: {selected.status}</Typography>
              <Typography color="text.secondary">Reference ID: {selected.referenceId}</Typography>
            </Stack>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelected(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

export default VerificationHistory
