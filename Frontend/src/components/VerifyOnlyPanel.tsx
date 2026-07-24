import { useState } from 'react'
import { FileCheck2, FileWarning } from 'lucide-react'
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

type VerifyResponse = {
  verified: boolean
  message: string
  recomputedHash?: string
  storedHash?: string
  txHash?: string
}

type VerifyOnlyPanelProps = {
  title: string
  description: string
  verifyButtonLabel: string
  accept?: string
  onVerify: (file: File, txHash: string) => Promise<VerifyResponse>
}

const VerifyOnlyPanel = ({
  title,
  description,
  verifyButtonLabel,
  accept,
  onVerify,
}: VerifyOnlyPanelProps) => {
  const [transactionHash, setTransactionHash] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [result, setResult] = useState<VerifyResponse | null>(null)

  const handleVerify = async () => {
  if (!selectedFile || !transactionHash.trim() || verifying) return

  setVerifying(true)

  try {
    const response = await onVerify(
      selectedFile,
      transactionHash.trim()
    )

    setResult(response)
      } catch (error: any) {
        setResult({
          verified: false,
          message:
            error.response?.data?.message ??
            'Verification failed.',
        })
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
          <Button
            component="label"
            variant="outlined"
          >
            {selectedFile
              ? selectedFile.name
              : 'Choose Document/Certificate'}

            <input
              hidden
              type="file"
              accept={accept}
              onChange={(event) =>
                setSelectedFile(
                  event.target.files?.[0] ?? null
                )
              }
            />
          </Button>
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
          <Button
              variant="contained"
              disabled={
                !selectedFile ||
                !transactionHash.trim() ||
                verifying
              }
              onClick={handleVerify}
            >
              {verifying ? 'Verifying...' : verifyButtonLabel}
        </Button>
        </Stack>

        <Divider />

        <Stack spacing={1.5}>
          <Typography fontWeight={800}>Verification result</Typography>
          {result ? (
            <Alert severity={result.verified ? 'success' : 'error'} sx={{ borderRadius: 4 }}>
              <Stack spacing={0.5}>
                <Typography fontWeight={800}>{result.message}</Typography>
                {result.txHash && (
                  <Typography variant="body2">
                    Transaction Hash: {result.txHash}
                  </Typography>
                )}
              </Stack>
            </Alert>
          ) : (
            <Alert severity="info" sx={{ borderRadius: 4 }}>
              Verification results will appear after you upload a document/certificate and enter its transaction hash.
            </Alert>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default VerifyOnlyPanel
