import { Box, Chip, Paper, Stack, Typography } from '@mui/material'
import { CheckCircle } from 'lucide-react'

import PageIntro from '@/components/PageIntro'
import { usePageTitle } from '@/hooks/usePageTitle'

const academicDocuments = [
  {
    id: 1,
    title: 'Diploma',
    description:
      'Official academic diplomas issued by recognized educational institutions.',
  },
  {
    id: 2,
    title: 'Transcript of Records',
    description:
      'Academic transcripts containing completed courses, grades, and academic history.',
  },
  {
    id: 3,
    title: 'Certificate of Completion',
    description:
      'Certificates confirming completion of academic programs or requirements.',
  },
]

const academicCertificates = [
  {
    id: 1,
    title: 'Training Certificates',
    description:
      'Certificates issued for academic training, workshops, or professional development.',
  },
  {
    id: 2,
    title: 'Achievement Certificates',
    description:
      'Certificates recognizing academic achievements and distinctions.',
  },
  {
    id: 3,
    title: 'Special Program Certificates',
    description:
      'Certificates issued for specialized academic programs or courses.',
  },
]

const supportedFileTypes = [
  'PDF',
  'PNG',
  'JPG',
  'JPEG',
]

const uploadRequirements = [
  {
    id: 1,
    text: 'Document must be clear and readable.',
  },
  {
    id: 2,
    text: 'Accepted formats are PDF and image files.',
  },
  {
    id: 3,
    text: 'Only original academic credentials should be uploaded.',
  },
  {
    id: 4,
    text: 'The generated Transaction ID should be saved for future verification.',
  },
]

const SupportedCredentials = () => {
  usePageTitle('Supported Credentials')

  return (
    <Stack spacing={6}>
      <PageIntro
        eyebrow="Information"
        title="Supported Academic Credentials"
        description="Learn about the academic documents and certificates that can be verified through the Academic Credential Verification Portal."
      />
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Academic Documents
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {academicDocuments.map((doc) => (
              <Paper key={doc.id} sx={{ p: 3, flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {doc.title}
                </Typography>
                <Typography color="text.secondary">{doc.description}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Academic Certificates
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            {academicCertificates.map((cert) => (
              <Paper key={cert.id} sx={{ p: 3, flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {cert.title}
                </Typography>
                <Typography color="text.secondary">{cert.description}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Supported File Types
          </Typography>
          <Stack direction="row" flexWrap="wrap" spacing={1.5}>
            {supportedFileTypes.map((type, index) => (
              <Chip
                key={index}
                label={type}
                sx={{
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  color: 'primary.main',
                  fontWeight: 800,
                }}
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Upload Requirements
          </Typography>
          <Paper sx={{ p: 3 }}>
            <Stack spacing={2}>
              {uploadRequirements.map((req) => (
                <Stack key={req.id} direction="row" alignItems="center" spacing={1.5}>
                  <CheckCircle size={20} color="#14B8A6" />
                  <Typography>{req.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Stack>
  )
}

export default SupportedCredentials
