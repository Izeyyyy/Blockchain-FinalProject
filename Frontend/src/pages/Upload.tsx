import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

import PageIntro from '@/components/PageIntro'
import UploadVerifyPanel from '@/components/UploadVerifyPanel'
import { supportedCertificateFileTypes, supportedDocumentFileTypes } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { postVerifyCertificate, postVerifyDocument } from '@/services/api'

const Upload = () => {
  usePageTitle('Upload Document/Certificate')
  const [type, setType] = useState<'document' | 'certificate'>('document')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Upload"
        title="Upload Document/Certificate"
        description="Upload a document or certificate for later verification."
      />
      <ToggleButtonGroup
        value={type}
        exclusive
        onChange={(_, newType) => {
          if (newType) setType(newType)
        }}
        fullWidth
      >
        <ToggleButton value="document">Document</ToggleButton>
        <ToggleButton value="certificate">Certificate</ToggleButton>
      </ToggleButtonGroup>
      {type === 'document' ? (
        <UploadVerifyPanel
          title="Upload document"
          description="Drag and drop a file, browse to select, then submit an upload request (UI only)."
          supportedFileTypes={supportedDocumentFileTypes}
          accept=".pdf,.png,.jpg,.jpeg,.docx"
          verifyButtonLabel="Upload Document"
          onVerify={(file) => postVerifyDocument({ fileName: file.name, fileType: 'Document' })}
        />
      ) : (
        <UploadVerifyPanel
          title="Upload certificate"
          description="Drag and drop a certificate, browse to select, then submit an upload request (UI only)."
          supportedFileTypes={supportedCertificateFileTypes}
          accept=".pdf,.png,.jpg,.jpeg"
          verifyButtonLabel="Upload Certificate"
          onVerify={(file) => postVerifyCertificate({ fileName: file.name, fileType: 'Certificate' })}
        />
      )}
    </Stack>
  )
}

export default Upload
