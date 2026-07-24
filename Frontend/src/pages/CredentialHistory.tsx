import { useEffect, useMemo, useState } from 'react'
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
import { getChain } from '@/services/api'
import { usePageTitle } from '@/hooks/usePageTitle'
import { formatDisplayDate } from '@/utils/formatters'

type CredentialRecord = {
  fileName: string
  fileHash: string
  txHash: string
  previousTxHash: string
  timestamp: number
}

const CredentialRegistry = () => {
  usePageTitle('Credential Registry')

  const [records, setRecords] = useState<CredentialRecord[]>([])
  const [searchHash, setSearchHash] = useState('')
  const [selected, setSelected] = useState<CredentialRecord | null>(null)

  useEffect(() => {
    const loadRegistry = async () => {
      try {
        const data = await getChain()
        setRecords(data.records ?? [])
      } catch (err) {
        console.error(err)
      }
    }

    loadRegistry()
  }, [])

  const filteredRecords = useMemo(() => {
    if (!searchHash.trim()) return records

    return records.filter((record) =>
      record.txHash
        .toLowerCase()
        .includes(searchHash.trim().toLowerCase()),
    )
  }, [records, searchHash])

  const handleCopy = (hash: string) => {
    navigator.clipboard.writeText(hash)
  }

  const shortenHash = (hash: string) =>
    `${hash.slice(0, 8)}...${hash.slice(-8)}`

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Portal"
        title="Credential Registry"
        description="Browse all documents and certificates registered on the Cardano blockchain."
      />

      <Paper sx={{ p: 3 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems="center"
        >
          <TextField
            fullWidth
            label="Search Transaction ID"
            placeholder="Enter Cardano transaction hash"
            value={searchHash}
            onChange={(e) => setSearchHash(e.target.value)}
            InputProps={{
              startAdornment: <Search size={18} />,
            }}
          />
        </Stack>
      </Paper>

      {filteredRecords.length === 0 ? (
        <Paper sx={{ p: 6, textAlign: 'center' }}>
          <Typography variant="h5">
            No credentials found.
          </Typography>

          <Typography color="text.secondary">
            Try another transaction ID.
          </Typography>
        </Paper>
      ) : (
        <>
          <TableContainer
            component={Paper}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>File Name</TableCell>
                  <TableCell>Registered On</TableCell>
                  <TableCell>Transaction ID</TableCell>
                  <TableCell align="right">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredRecords.map((record) => (
                  <TableRow hover key={record.txHash}>
                    <TableCell sx={{ fontWeight: 700 }}>
                      {record.fileName}
                    </TableCell>

                    <TableCell>
                      {formatDisplayDate(record.timestamp)}
                    </TableCell>

                    <TableCell>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <Tooltip title={record.txHash}>
                          <Typography fontFamily="monospace">
                            {shortenHash(record.txHash)}
                          </Typography>
                        </Tooltip>

                        <IconButton
                          size="small"
                          onClick={() =>
                            handleCopy(record.txHash)
                          }
                        >
                          <Copy size={16} />
                        </IconButton>
                      </Stack>
                    </TableCell>

                    <TableCell align="right">
                      <Button
                        variant="outlined"
                        onClick={() =>
                          setSelected(record)
                        }
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            {filteredRecords.map((record) => (
              <Paper
                key={record.txHash}
                sx={{ p: 2.5 }}
              >
                <Stack spacing={1.5}>
                  <Typography fontWeight={800}>
                    {record.fileName}
                  </Typography>

                  <Typography variant="body2">
                    Registered:
                  </Typography>

                  <Typography color="text.secondary">
                    {formatDisplayDate(record.timestamp)}
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <Tooltip title={record.txHash}>
                      <Typography
                        fontFamily="monospace"
                        variant="body2"
                      >
                        {shortenHash(record.txHash)}
                      </Typography>
                    </Tooltip>

                    <IconButton
                      size="small"
                      onClick={() =>
                        handleCopy(record.txHash)
                      }
                    >
                      <Copy size={16} />
                    </IconButton>
                  </Stack>

                  <Button
                    variant="outlined"
                    onClick={() =>
                      setSelected(record)
                    }
                  >
                    View Details
                  </Button>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </>
      )}

      <Dialog
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Credential Details
        </DialogTitle>

        <DialogContent>
          {selected && (
            <Stack spacing={2} sx={{ mt: 1 }}>
              <Typography fontWeight={700}>
                {selected.fileName}
              </Typography>

              <Typography>
                Registered on{' '}
                {formatDisplayDate(selected.timestamp)}
              </Typography>

              <Typography fontWeight={700}>
                File SHA-256
              </Typography>

              <Typography
                fontFamily="monospace"
                sx={{ wordBreak: 'break-all' }}
              >
                {selected.fileHash}
              </Typography>

              <Typography fontWeight={700}>
                Transaction ID
              </Typography>

              <Typography
                fontFamily="monospace"
                sx={{ wordBreak: 'break-all' }}
              >
                {selected.txHash}
              </Typography>

              {selected.previousTxHash && (
                <>
                  <Typography fontWeight={700}>
                    Previous Transaction
                  </Typography>

                  <Typography
                    fontFamily="monospace"
                    sx={{ wordBreak: 'break-all' }}
                  >
                    {selected.previousTxHash}
                  </Typography>
                </>
              )}
            </Stack>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setSelected(null)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

export default CredentialRegistry