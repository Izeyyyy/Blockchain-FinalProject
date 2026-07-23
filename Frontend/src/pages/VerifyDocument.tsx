import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button, Grid, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import SectionHeader from '@/components/SectionHeader'
import { searchScopes, verificationGuidelines, verifyFormFields } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { fadeInUp } from '@/utils/motion'

const VerifyDocument = () => {
  usePageTitle('Verify Document')
  const [scope, setScope] = useState(searchScopes[0].value)

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Verification Workspace"
        title="Verify document integrity with a backend-ready workflow"
        description="This page is structured for future API-driven verification requests while currently using mock placeholders."
        chips={['REST API Ready', 'Reusable Form Layout', 'Future QR Support']}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <motion.div animate="visible" initial="hidden" variants={fadeInUp}>
            <Paper sx={{ p: 3.5 }}>
              <SectionHeader
                eyebrow="Verification Form"
                title="Prepare a verification request"
                description="Submit document references, issuing details, and future upload inputs from a single reusable interface."
              />
              <Stack spacing={2.25} sx={{ mt: 3 }}>
                <TextField
                  select
                  label="Verification Scope"
                  value={scope}
                  onChange={(event) => setScope(event.target.value)}
                >
                  {searchScopes.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </TextField>

                {verifyFormFields.map((field) => (
                  <TextField key={field.id} label={field.label} placeholder={field.placeholder} />
                ))}

                <TextField
                  multiline
                  minRows={4}
                  label="Notes"
                  placeholder="Add supporting remarks, verification context, or reference details."
                />

                <Button variant="contained">Run Verification</Button>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <motion.div animate="visible" initial="hidden" variants={fadeInUp}>
            <Paper sx={{ p: 3.5 }}>
              <SectionHeader
                eyebrow="How It Works"
                title="Verification guidance"
                description="This panel prepares users for how the verification pipeline will behave after API integration."
              />
              <Stack spacing={2} sx={{ mt: 3 }}>
                {verificationGuidelines.map((item) => (
                  <Paper key={item} sx={{ p: 2.25, backgroundColor: 'rgba(37, 99, 235, 0.04)' }}>
                    <Typography color="text.secondary">{item}</Typography>
                  </Paper>
                ))}
              </Stack>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default VerifyDocument
