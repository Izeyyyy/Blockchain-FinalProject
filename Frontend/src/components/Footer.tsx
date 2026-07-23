import { Box, Container, Stack, Typography } from '@mui/material'

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 6,
      py: 3.5,
      background: 'linear-gradient(180deg, rgba(232,240,247,0.75) 0%, rgba(214,226,236,0.92) 100%)',
      borderTop: '1px solid rgba(156, 181, 203, 0.7)',
    }}
  >
    <Container maxWidth="xl">
      <Stack
        alignItems={{ xs: 'flex-start', md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={1}
      >
        <Typography color="text.secondary" variant="body2">
          © 2026 Academic Credential Verification Portal. All Rights Reserved.
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Belia | Gaane | Vestil
        </Typography>
      </Stack>
    </Container>
  </Box>
)

export default Footer
