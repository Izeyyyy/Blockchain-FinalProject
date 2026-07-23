import { Box, Chip, Stack, Typography } from '@mui/material'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  chips?: string[]
}

const PageIntro = ({ eyebrow, title, description, chips = [] }: PageIntroProps) => (
  <Box
    sx={{
      px: { xs: 2.5, md: 4 },
      py: { xs: 3, md: 4 },
      borderRadius: 5,
      border: '1px solid',
      borderColor: 'divider',
      background:
        'linear-gradient(180deg, rgba(232,240,247,0.94) 0%, rgba(184,203,219,0.78) 40%, rgba(68,106,156,0.16) 100%)',
      boxShadow: '0px 18px 40px rgba(0, 0, 42, 0.08)',
    }}
  >
    <Typography color="primary.main" fontSize={12} fontWeight={800} letterSpacing={1.4} textTransform="uppercase">
      {eyebrow}
    </Typography>
    <Typography variant="h2" sx={{ mt: 1.25 }}>
      {title}
    </Typography>
    <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 720 }}>
      {description}
    </Typography>
    {chips.length ? (
      <Stack direction="row" flexWrap="wrap" gap={1.25} sx={{ mt: 2.5 }}>
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            sx={{ backgroundColor: 'rgba(68, 106, 156, 0.12)', color: 'primary.dark' }}
          />
        ))}
      </Stack>
    ) : null}
  </Box>
)

export default PageIntro
