import { Stack } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import VerifyOnlyPanel from '@/components/VerifyOnlyPanel'
import { usePageTitle } from '@/hooks/usePageTitle'
import { verifyCredential } from '@/services/api'

const Verify = () => {
  usePageTitle('Verify Academic Credential')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Academic Integrity"
        title="Verify Academic Credential"
        description="Upload a credential and provide its Cardano Transaction ID to verify its authenticity."
      />

      <VerifyOnlyPanel
        title="Verify Credential"
        description="Upload a credential and provide its Cardano Transaction ID to verify its authenticity."
        verifyButtonLabel="Verify Credential"
        accept=".pdf,.png,.jpg,.jpeg"
        onVerify={verifyCredential}
      />
    </Stack>
  )
}

export default Verify