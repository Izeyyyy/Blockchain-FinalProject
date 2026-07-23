import { useMemo, useRef, useState } from 'react'
import { CloudUpload, FileCheck2, FileWarning } from 'lucide-react'
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

type UploadVerifyPanelProps = {
  title: string
  description: string
  supportedFileTypes: string[]
  accept?: string
  verifyButtonLabel: string
  onVerify: (file: File) => Promise<{ success: boolean; message: string; transactionHash?: string; status?: string }>
}

const UploadVerifyPanel = ({
  title,
  description,
  supportedFileTypes,
  accept,
  verifyButtonLabel,
  onVerify,
}: UploadVerifyPanelProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [verifying, setVerifying] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string; transactionHash?: string; status?: string } | null>(null)

  const statusLabel = useMemo(() => {
    if (!selectedFile) return 'No file selected'
    return `Selected: ${selectedFile.name}`
  }, [selectedFile])

  const handleFiles = (files: FileList | null) => {
    if (!files?.length) return
    setSelectedFile(files[0])
    setResult(null)
  }

  const handleVerify = async () => {
    if (!selectedFile || verifying) return
    setVerifying(true)
    try {
      const response = await onVerify(selectedFile)
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

        <Paper
          onDragEnter={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setDragOver(true)
          }}
          onDragLeave={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setDragOver(false)
          }}
          onDragOver={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
          onDrop={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setDragOver(false)
            handleFiles(event.dataTransfer.files)
          }}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            borderStyle: 'dashed',
            borderWidth: 2,
            borderColor: dragOver ? 'primary.main' : 'divider',
            backgroundColor: dragOver ? 'rgba(37, 99, 235, 0.06)' : 'rgba(248, 250, 252, 0.9)',
            boxShadow: 'none',
            cursor: 'pointer',
          }}
          onClick={() => inputRef.current?.click()}
        >
          <input
            hidden
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={(event) => handleFiles(event.target.files)}
          />
          <Stack alignItems="center" spacing={1.5}>
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: 4,
                display: 'grid',
                placeItems: 'center',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.96) 0%, rgba(6,182,212,0.92) 100%)',
                color: '#FFFFFF',
                boxShadow: '0px 18px 40px rgba(37, 99, 235, 0.18)',
              }}
            >
              <CloudUpload size={22} />
            </Box>
            <Typography fontWeight={800}>Drag &amp; drop to upload</Typography>
            <Typography color="text.secondary" textAlign="center">
              Or click to browse and select a file for verification.
            </Typography>
            <Button variant="outlined" onClick={(event) => {
              event.stopPropagation()
              inputRef.current?.click()
            }}>
              Browse File
            </Button>
          </Stack>
        </Paper>

        <Stack spacing={1.25}>
          <Typography fontWeight={800}>Supported file types</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {supportedFileTypes.map((type) => (
              <Chip
                key={type}
                label={type}
                sx={{
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'primary.main',
                  fontWeight: 800,
                }}
              />
            ))}
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={1.5}>
          <Typography fontWeight={800}>Upload status</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} alignItems={{ xs: 'stretch', sm: 'center' }}>
            <Chip
              icon={selectedFile ? <FileCheck2 size={16} /> : <FileWarning size={16} />}
              label={statusLabel}
              sx={{
                width: 'fit-content',
                backgroundColor: selectedFile ? 'rgba(20, 184, 166, 0.10)' : 'rgba(148, 163, 184, 0.18)',
                color: selectedFile ? 'success.main' : 'text.secondary',
                fontWeight: 800,
              }}
            />
            <Box sx={{ flex: 1 }}>
              {verifying ? <LinearProgress /> : null}
            </Box>
            <Button disabled={!selectedFile || verifying} variant="contained" onClick={handleVerify}>
              {verifyButtonLabel}
            </Button>
          </Stack>
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
              Verification results will appear here after you upload and submit a file.
            </Alert>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}

export default UploadVerifyPanel
