import { Stack } from '@mui/material'
import { uploadCredential } from '@/services/api'
import PageIntro from '@/components/PageIntro'
import UploadVerifyPanel from '@/components/UploadVerifyPanel'
import { usePageTitle } from '@/hooks/usePageTitle'


const Upload = () => {
  usePageTitle('Upload Document/Certificate')
  const supportedCredentialFileTypes = [
    'PDF',
    'PNG',
    'JPG',
    'JPEG',
  ]


  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Upload"
        title="Upload Document/Certificate"
        description="Upload a document or certificate for later verification."
      />
      
      <UploadVerifyPanel
        title="Upload Document/Certificate"
        description="Select a document or certificate (PDF or image) to register it on the Cardano blockchain."
        supportedFileTypes={supportedCredentialFileTypes}
        accept=".pdf,.png,.jpg,.jpeg"
        verifyButtonLabel="Register Document/Certificate"
        onVerify={(file) => uploadCredential(file)}
      />
    </Stack>
  )
}

export default Upload
