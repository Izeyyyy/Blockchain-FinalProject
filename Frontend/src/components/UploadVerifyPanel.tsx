import { useRef, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Divider,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import {
  CloudUpload,
  Search,
} from 'lucide-react'

type UploadResponse = {
  message: string
  note?: string
  record?: {
    fileName: string
    fileHash: string
    txHash: string
    previousTxHash: string
    timestamp: number
    status: string
  }
}

type UploadVerifyPanelProps = {
  title: string
  description: string
  verifyButtonLabel: string
  supportedFileTypes: string[]
  accept?: string
  onVerify: (
    file: File
  ) => Promise<UploadResponse>
}

const UploadVerifyPanel = ({
  title,
  description,
  verifyButtonLabel,
  accept,
  onVerify,
}: UploadVerifyPanelProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null)

  const [uploading, setUploading] =
    useState(false)

  const [result, setResult] =
    useState<UploadResponse | null>(null)


  const handleFile = (
    files: FileList | null
  ) => {
    if (!files?.length) return

    setSelectedFile(files[0])
    setResult(null)
  }


  const handleUpload = async () => {
    if (!selectedFile || uploading) return

    setUploading(true)

    try {
      const response = await onVerify(selectedFile)

      setResult(response)

    } catch (error: any) {
      setResult({
        message:
          error.response?.data?.message ??
          'Credential registration failed.',
      })
    } finally {
      setUploading(false)
    }
  }


  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack spacing={3}>

        <Box>
          <Typography variant="h3">
            {title}
          </Typography>

          <Typography color="text.secondary">
            {description}
          </Typography>
        </Box>


        <Paper
          sx={{
            p: 4,
            border: '2px dashed',
            borderColor: 'divider',
            borderRadius: 4,
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() =>
            inputRef.current?.click()
          }
        >

          <input
            hidden
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={(e) =>
              handleFile(e.target.files)
            }
          />


          <Stack
            spacing={2}
            alignItems="center"
          >

            <CloudUpload size={32} />

            <Typography fontWeight={700}>
              Upload Credential
            </Typography>

            <Typography color="text.secondary">
              Click to browse a credential file.
            </Typography>

            <Button variant="outlined">
              Browse File
            </Button>

          </Stack>

        </Paper>


        <Alert
          severity={
            selectedFile
              ? 'success'
              : 'info'
          }
        >
          {selectedFile
            ? selectedFile.name
            : 'No file selected'}
        </Alert>


        {uploading && (
          <LinearProgress />
        )}


        <Button
          variant="contained"
          startIcon={<Search size={18} />}
          disabled={
            !selectedFile ||
            uploading
          }
          onClick={handleUpload}
        >
          {verifyButtonLabel}
        </Button>


        <Divider />


        {result ? (

          <Alert severity="success">

            <Stack spacing={1.5}>

              <Typography fontWeight={700}>
                {result.message}
              </Typography>


              {result.note && (
                <Typography>
                  {result.note}
                </Typography>
              )}


              {result.record?.txHash && (
                <>
                  <Typography fontWeight={700}>
                    Transaction ID
                  </Typography>


                  <Typography
                    fontFamily="monospace"
                    sx={{
                      wordBreak: 'break-all',
                    }}
                  >
                    {result.record.txHash}
                  </Typography>
                </>
              )}


              {result.record?.fileHash && (
                <>
                  <Typography fontWeight={700}>
                    SHA-256 File Hash
                  </Typography>


                  <Typography
                    fontFamily="monospace"
                    sx={{
                      wordBreak: 'break-all',
                    }}
                  >
                    {result.record.fileHash}
                  </Typography>
                </>
              )}

            </Stack>

          </Alert>

        ) : (

          <Alert severity="info">
            Upload a credential to register it on the Cardano blockchain.
          </Alert>

        )}

      </Stack>
    </Paper>
  )
}


export default UploadVerifyPanel