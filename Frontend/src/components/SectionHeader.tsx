import { Box, Typography } from '@mui/material'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <Box>
    {eyebrow ? (
      <Typography color="primary.main" fontSize={12} fontWeight={800} letterSpacing={1.2} textTransform="uppercase">
        {eyebrow}
      </Typography>
    ) : null}
    <Typography variant="h3" sx={{ mt: eyebrow ? 1 : 0 }}>
      {title}
    </Typography>
    {description ? (
      <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 720 }}>
        {description}
      </Typography>
    ) : null}
  </Box>
)

export default SectionHeader
