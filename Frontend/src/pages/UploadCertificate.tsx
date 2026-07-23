import { motion } from 'framer-motion'
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'

import PageIntro from '@/components/PageIntro'
import SectionHeader from '@/components/SectionHeader'
import { uploadChecklist } from '@/data/mockData'
import { usePageTitle } from '@/hooks/usePageTitle'
import { fadeInUp } from '@/utils/motion'

const UploadCertificate = () => {
  usePageTitle('Upload Certificate')

  return (
    <Stack spacing={4}>
      <PageIntro
        eyebrow="Certificate Submission"
        title="Upload certificates through a scalable intake experience"
        description="The page supports a production-ready certificate workflow with future REST upload integration and reusable field structure."
        chips={['POST /api/upload Ready', 'Enterprise Intake UX', 'Responsive Layout']}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 7 }}>
          <motion.div animate="visible" initial="hidden" variants={fadeInUp}>
            <Paper sx={{ p: 3.5 }}>
              <SectionHeader
                eyebrow="Submission Form"
                title="Prepare certificate details"
                description="Form fields are structured for clean Axios integration and future multipart upload support."
              />
              <Stack spacing={2.25} sx={{ mt: 3 }}>
                <TextField label="Certificate Title" placeholder="Enter certificate title" />
                <TextField label="Owner Name" placeholder="Enter certificate owner" />
                <TextField label="Certificate Reference" placeholder="Enter internal reference or issue number" />
                <Paper
                  sx={{
                    p: 3,
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    borderColor: 'divider',
                    backgroundColor: 'rgba(6, 182, 212, 0.04)',
                  }}
                >
                  <Typography fontWeight={700}>Drag and drop area</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    This placeholder area is ready for future file handling and upload progress indicators.
                  </Typography>
                </Paper>
                <Button variant="contained">Upload Certificate</Button>
              </Stack>
            </Paper>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <motion.div animate="visible" initial="hidden" variants={fadeInUp}>
            <Paper sx={{ p: 3.5 }}>
              <SectionHeader
                eyebrow="Submission Notes"
                title="Upload checklist"
                description="Guide users before backend upload handling is connected."
              />
              <Stack spacing={2} sx={{ mt: 3 }}>
                {uploadChecklist.map((item) => (
                  <Paper key={item} sx={{ p: 2.25, backgroundColor: 'rgba(20, 184, 166, 0.05)' }}>
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

export default UploadCertificate
