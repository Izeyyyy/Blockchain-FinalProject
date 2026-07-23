import { Stack } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import UploadVerifyPanel from '@/components/UploadVerifyPanel'
import { supportedCertificateFileTypes } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { postVerifyCertificate } from '@/services/api'

const VerifyCertificate = () => {
  usePageTitle('Verify Certificate')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Verification"
        title="Upload & Verify Certificate"
        description="Upload a certificate and verify its authenticity and integrity. This UI is ready for Spring Boot REST API integration."
      />
      <UploadVerifyPanel
        title="Upload certificate for verification"
        description="Drag and drop a certificate, browse to select, then submit a verification request (UI only)."
        supportedFileTypes={supportedCertificateFileTypes}
        accept=".pdf,.png,.jpg,.jpeg"
        verifyButtonLabel="Verify Certificate"
        onVerify={(file) => postVerifyCertificate({ fileName: file.name, fileType: 'Certificate' })}
      />
    </Stack>
  )
}

export default VerifyCertificate

