import { Stack } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import UploadVerifyPanel from '@/components/UploadVerifyPanel'
import { supportedDocumentFileTypes } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { postVerifyDocument } from '@/services/api'

const VerifyDocument = () => {
  usePageTitle('Verify Document')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Verification"
        title="Upload & Verify Document"
        description="Upload a document and verify its authenticity and integrity. This UI is ready for Spring Boot REST API integration."
      />
      <UploadVerifyPanel
        title="Upload document for verification"
        description="Drag and drop a file, browse to select, then submit a verification request (UI only)."
        supportedFileTypes={supportedDocumentFileTypes}
        accept=".pdf,.png,.jpg,.jpeg,.docx"
        verifyButtonLabel="Verify Document"
        onVerify={(file) => postVerifyDocument({ fileName: file.name, fileType: 'Document' })}
      />
    </Stack>
  )
}

export default VerifyDocument
