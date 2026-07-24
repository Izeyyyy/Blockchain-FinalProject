import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'

import PageIntro from '@/components/PageIntro'
import { usePageTitle } from '@/hooks/usePageTitle'

const howItWorksSteps = [
  {
    id: 1,
    title: '1. Upload Document/Certificate',
    description:
      'The user uploads a document or certificate through the portal. The system processes the file and prepares it for blockchain registration.',
  },
  {
    id: 2,
    title: '2. Generate SHA-256 File Hash',
    description:
      'The uploaded credential is converted into a unique SHA-256 hash. This hash represents the exact content of the file without storing the actual document on the blockchain.',
  },
  {
    id: 3,
    title: '3. Register Hash on Cardano Blockchain',
    description:
      'The generated hash is stored as blockchain metadata together with the transaction ID, creating an immutable record of the credential.',
  },
  {
    id: 4,
    title: '4. Verify Credential Authenticity',
    description:
      'During verification, the uploaded file is hashed again and compared with the blockchain record. A matching hash confirms that the credential has not been modified.',
  },
]

const faqItems = [
  {
    id: 1,
    question: 'Is the actual document stored on the blockchain?',
    answer:
      'No. Only the SHA-256 hash and related transaction metadata are recorded. The original credential file remains private.',
  },
  {
    id: 2,
    question: 'Why is SHA-256 hashing used?',
    answer:
      'SHA-256 creates a unique digital fingerprint of a file. Any modification to the document produces a different hash.',
  },
  {
    id: 3,
    question: 'Can a credential be verified without uploading the original file?',
    answer:
      'The transaction ID can confirm that a blockchain record exists, but file authenticity requires comparing the uploaded file hash with the registered hash.',
  },
  {
    id: 4,
    question: 'What blockchain is used for registration?',
    answer:
      'The system uses the Cardano blockchain test network to store credential verification metadata.',
  },
]

const HowItWorks = () => {
  usePageTitle('How It Works')

  return (
    <Stack spacing={6}>
      <PageIntro
        eyebrow="Guide"
        title="How It Works"
        description="Learn how the Document &amp; Certificate Integrity Checker verifies the authenticity and integrity of documents and certificates."
      />
      <Stack spacing={4}>
        <Stack spacing={3}>
          {howItWorksSteps.map((step) => (
            <Paper key={step.id} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {step.title}
              </Typography>
              <Typography color="text.secondary" whiteSpace="pre-line">
                {step.description}
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Verification Process Overview
          </Typography>
          <Paper sx={{ p: 3 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" spacing={2}>
              <Typography variant="h6">Upload Credential</Typography>
              <Typography variant="h4">↓</Typography>
              <Typography variant="h6">Generate SHA-256 Hash</Typography>
              <Typography variant="h4">↓</Typography>
              <Typography variant="h6">Compare with Registered Blockchain Record</Typography>
              <Typography variant="h4">↓</Typography>
              <Typography variant="h6">Display Verification Result</Typography>
            </Stack>
          </Paper>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Frequently Asked Questions
          </Typography>
          <Stack spacing={1.5}>
            {faqItems.map((faq) => (
              <Accordion key={faq.id}>
                <AccordionSummary expandIcon={<ChevronDown size={20} />}>
                  <Typography fontWeight={600}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}

export default HowItWorks
