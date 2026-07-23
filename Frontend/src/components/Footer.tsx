import { Box, Container, Stack, Typography } from '@mui/material'

const Footer = () => (
  <Box component="footer" sx={{ py: 4 }}>
    <Container maxWidth="xl">
      <Stack
        alignItems={{ xs: 'flex-start', md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={1.5}
      >
        <Typography color="text.secondary" variant="body2">
          Document and Certificate Integrity Checker
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Enterprise-ready frontend prepared for Spring Boot REST API integration
        </Typography>
      </Stack>
    </Container>
  </Box>
)

export default Footer
