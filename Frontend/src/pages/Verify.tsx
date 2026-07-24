import { Stack } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import VerifyOnlyPanel from '@/components/VerifyOnlyPanel'
import { usePageTitle } from '@/hooks/usePageTitle'
import { verifyCredential } from '@/services/api'

const Verify = () => {
  usePageTitle('Verify Document/Certificate')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Integrity Check"
        title="Verify Document/Certificate"
        description="Upload a document/certificate and provide its Cardano Transaction ID to verify its authenticity."
      />

      <VerifyOnlyPanel
        title="Verify Document/Certificate"
        description="Upload a document/certificate and provide its Cardano Transaction ID to verify its authenticity."
        verifyButtonLabel="Verify Document/Certificate"
        accept=".pdf,.png,.jpg,.jpeg"
        onVerify={verifyCredential}
      />
    </Stack>
  )
}

export default Verify