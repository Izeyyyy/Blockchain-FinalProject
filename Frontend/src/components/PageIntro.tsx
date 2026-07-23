import { Box, Chip, Stack, Typography } from '@mui/material'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  chips?: string[]
}

const PageIntro = ({ eyebrow, title, description, chips = [] }: PageIntroProps) => (
  <Box>
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
          <Chip key={chip} label={chip} sx={{ backgroundColor: 'rgba(37, 99, 235, 0.08)', color: 'primary.main' }} />
        ))}
      </Stack>
    ) : null}
  </Box>
)

export default PageIntro
