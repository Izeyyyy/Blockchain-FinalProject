import { useRef, useState } from 'react'
import { Search, FileCheck2, FileWarning } from 'lucide-react'
import {
  Alert,
  Box,
  Button,
  Divider,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

type VerifyOnlyPanelProps = {
  title: string
  description: string
  verifyButtonLabel: string
  onVerify: (transactionHash: string) => Promise<{ success: boolean; message: string; transactionHash?: string; status?: string }>
}

const VerifyOnlyPanel = ({
  title,
  description,
  verifyButtonLabel,
  onVerify,
}: VerifyOnlyPanelProps) => {
  const [transactionHash, setTransactionHash] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; transactionHash?: string; status?: string } | null>(null)

  const handleVerify = async () => {
    if (!transactionHash.trim() || verifying) return
    setVerifying(true)
    try {
      const response = await onVerify(transactionHash.trim())
      setResult(response)
    } finally {
      setVerifying(false)
    }
  }

  return (
    <Paper sx={{ p: { xs: 3, md: 3.5 } }}>
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h3">{title}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
        </Box>

        <Stack spacing={1.5}>
          <TextField
            fullWidth
            label="Cardano Transaction Hash"
            placeholder="Enter transaction hash"
            value={transactionHash}
            onChange={(event) => setTransactionHash(event.target.value)}
            variant="outlined"
          />
          <Box sx={{ flex: 1 }}>
            {verifying ? <LinearProgress /> : null}
          </Box>
          <Button disabled={!transactionHash.trim() || verifying} variant="contained" onClick={handleVerify} startIcon={<Search size={18} />}>
            {verifyButtonLabel}
          </Button>
        </Stack>

        <Divider />

        <Stack spacing={1.5}>
          <Typography fontWeight={800}>Verification result</Typography>
          {result ? (
            <Alert severity={result.success ? 'success' : 'warning'} sx={{ borderRadius: 4 }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={800}>{result.message}</Typography>
                {result.transactionHash ? (
                  <Typography variant="body2">Transaction Hash: {result.transactionHash}</Typography>
                ) : null}
                {result.status ? (
                  <Typography variant="body2">Status: {result.status}</Typography>
                ) : null}
              </Stack>
            </Alert>
          ) : (
            <Alert severity="info" sx={{ borderRadius: 4 }}>
              Verification results will appear here after you enter a transaction hash and submit.
            </Alert>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default VerifyOnlyPanel
