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
        title="Upload Academic Credential"
        description="Upload an academic document or certificate for later verification."
      />
      
      <UploadVerifyPanel
        title="Upload Academic Credential"
        description="Select an academic credential (PDF or image) to register it on the Cardano blockchain."
        supportedFileTypes={supportedCredentialFileTypes}
        accept=".pdf,.png,.jpg,.jpeg"
        verifyButtonLabel="Register Credential"
        onVerify={(file) => uploadCredential(file)}
      />
    </Stack>
  )
}

export default Upload
