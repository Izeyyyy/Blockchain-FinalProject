import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useState } from 'react'

import PageIntro from '@/components/PageIntro'
import VerifyOnlyPanel from '@/components/VerifyOnlyPanel'
import { usePageTitle } from '@/hooks/usePageTitle'
import { postVerifyCertificate, postVerifyDocument } from '@/services/api'

const Verify = () => {
  usePageTitle('Verify Document/Certificate')
  const [type, setType] = useState<'document' | 'certificate'>('document')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Guest Verification"
        title="Verify Document/Certificate"
        description="Enter a Cardano Transaction Hash to verify an existing document or certificate."
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
        <VerifyOnlyPanel
          title="Verify document by transaction hash"
          description="Enter the Cardano Transaction Hash of a previously uploaded document and submit for verification."
          verifyButtonLabel="Verify Document"
          onVerify={(transactionHash) => postVerifyDocument({ fileName: '', fileType: 'Document', transactionHash })}
        />
      ) : (
        <VerifyOnlyPanel
          title="Verify certificate by transaction hash"
          description="Enter the Cardano Transaction Hash of a previously uploaded certificate and submit for verification."
          verifyButtonLabel="Verify Certificate"
          onVerify={(transactionHash) => postVerifyCertificate({ fileName: '', fileType: 'Certificate', transactionHash })}
        />
      )}
    </Stack>
  )
}

export default Verify
