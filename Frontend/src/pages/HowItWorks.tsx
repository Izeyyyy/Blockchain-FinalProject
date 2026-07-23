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
import { faqItems, howItWorksSteps } from '@/data/mockData'

const HowItWorks = () => {
  usePageTitle('How It Works')

  return (
    <Stack spacing={6}>
      <PageIntro
        eyebrow="Guide"
        title="How It Works"
        description="Learn how the Academic Credential Verification Portal verifies the authenticity and integrity of academic credentials."
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
