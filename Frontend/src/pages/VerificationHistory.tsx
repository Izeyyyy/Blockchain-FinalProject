import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Copy, Search } from 'lucide-react'

import PageIntro from '@/components/PageIntro'
import StatusChip from '@/components/StatusChip'
import { verificationRecords } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { formatDisplayDate } from '@/utils/formatters'

type VerificationRecord = (typeof verificationRecords)[number]

const VerificationHistory = () => {
  usePageTitle('Verification History')
  const [searchHash, setSearchHash] = useState('')
  const [searched, setSearched] = useState(false)
  const [foundRecord, setFoundRecord] = useState<VerificationRecord | null>(null)
  const [selected, setSelected] = useState<VerificationRecord | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSearch = () => {
    setSearched(true)
    const record = verificationRecords.find(
      (r) => r.transactionHash.toLowerCase() === searchHash.trim().toLowerCase(),
    )
    setFoundRecord(record || null)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shortenHash = (hash: string) => {
    return `${hash.slice(0, 4)}...${hash.slice(-4)}`
  }

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Portal"
        title="Verification History"
        description="Search for an academic credential verification record using a Cardano Transaction Hash."
      />

      <Paper sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
          <TextField
            fullWidth
            label="Cardano Transaction Hash"
            placeholder="Enter transaction hash"
            value={searchHash}
            onChange={(event) => setSearchHash(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="contained" startIcon={<Search size={18} />} onClick={handleSearch}>
            Search
          </Button>
        </Stack>
      </Paper>

      {!searched ? (
        <Paper sx={{ p: 6, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Search size={64} color="#446A9C" />
            <Typography variant="h4">Search by Transaction Hash</Typography>
            <Typography color="text.secondary">
              Enter a Cardano Transaction Hash above to view the corresponding academic credential verification record.
            </Typography>
          </Stack>
        </Paper>
      ) : !foundRecord ? (
        <Paper sx={{ p: 6, textAlign: 'center' }}>
          <Stack spacing={2} alignItems="center">
            <Search size={64} color="#B91C1C" />
            <Typography variant="h4">Verification Record Not Found</Typography>
            <Typography color="text.secondary">
              No academic credential verification record was found for the entered Cardano Transaction Hash. Please
              verify the hash and try again.
            </Typography>
          </Stack>
        </Paper>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>File Name</TableCell>
                  <TableCell>File Type</TableCell>
                  <TableCell>Verification Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Transaction Hash</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell sx={{ fontWeight: 700 }}>{foundRecord.fileName}</TableCell>
                  <TableCell>{foundRecord.fileType}</TableCell>
                  <TableCell>{formatDisplayDate(foundRecord.verifiedAt)}</TableCell>
                  <TableCell>
                    <StatusChip status={foundRecord.status} />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Tooltip title={foundRecord.transactionHash}>
                        <Typography fontFamily="monospace">{shortenHash(foundRecord.transactionHash)}</Typography>
                      </Tooltip>
                      <IconButton size="small" onClick={() => handleCopy(foundRecord.transactionHash)}>
                        <Copy size={16} />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" onClick={() => setSelected(foundRecord)}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Stack spacing={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Paper sx={{ p: 2.5 }}>
              <Stack spacing={1.25}>
                <Typography fontWeight={800}>{foundRecord.fileName}</Typography>
                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                  <Typography color="text.secondary" variant="body2">
                    {foundRecord.fileType}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    •
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {formatDisplayDate(foundRecord.verifiedAt)}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="center">
                  <StatusChip status={foundRecord.status} />
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Tooltip title={foundRecord.transactionHash}>
                      <Typography fontFamily="monospace" color="text.secondary" variant="body2">
                        {shortenHash(foundRecord.transactionHash)}
                      </Typography>
                    </Tooltip>
                    <IconButton size="small" onClick={() => handleCopy(foundRecord.transactionHash)}>
                      <Copy size={16} />
                    </IconButton>
                  </Stack>
                </Stack>
                <Button variant="outlined" onClick={() => setSelected(foundRecord)}>
                  View Details
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </>
      )}

      <Dialog open={Boolean(selected)} onClose={() => setSelected(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Verification Details</DialogTitle>
        <DialogContent>
          {selected ? (
            <Stack spacing={1.25} sx={{ mt: 1 }}>
              <Typography fontWeight={800}>{selected.fileName}</Typography>
              <Typography color="text.secondary">Type: {selected.fileType}</Typography>
              <Typography color="text.secondary">Verified at: {formatDisplayDate(selected.verifiedAt)}</Typography>
              <Typography color="text.secondary">Status: {selected.status}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography color="text.secondary">Transaction Hash:</Typography>
                <Typography fontFamily="monospace">{selected.transactionHash}</Typography>
                <IconButton size="small" onClick={() => handleCopy(selected.transactionHash)}>
                  <Copy size={16} />
                </IconButton>
              </Stack>
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
