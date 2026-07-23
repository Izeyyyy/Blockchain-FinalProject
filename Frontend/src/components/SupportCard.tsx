import { Mail, MessageCircleMore, Phone, ShieldAlert } from 'lucide-react'
import { Button, Paper, Stack, Typography } from '@mui/material'

type SupportAction = {
  id: string
  label: string
  variant: 'contained' | 'outlined'
}

type SupportCardProps = {
  email: string
  phoneNumber: string
  officeHours: string
  actions: SupportAction[]
}

const SupportCard = ({ email, phoneNumber, officeHours, actions }: SupportCardProps) => (
  <Paper sx={{ p: 3.25 }}>
    <Typography variant="h4">Contact &amp; Support</Typography>
    <Typography color="text.secondary" sx={{ mt: 1.25 }}>
      Reach the verification support desk for operational questions, technical concerns, and issue escalation.
    </Typography>
    <Stack spacing={2.25} sx={{ mt: 3 }}>
      <Stack direction="row" spacing={1.5}>
        <Mail size={18} />
        <Typography>{email}</Typography>
      </Stack>
      <Stack direction="row" spacing={1.5}>
        <Phone size={18} />
        <Typography>{phoneNumber}</Typography>
      </Stack>
      <Stack direction="row" spacing={1.5}>
        <ShieldAlert size={18} />
        <Typography>{officeHours}</Typography>
      </Stack>
    </Stack>
    <Stack direction={{ xs: 'column', sm: 'row', lg: 'column' }} spacing={1.5} sx={{ mt: 3 }}>
      {actions.map((action) => (
        <Button
          key={action.id}
          fullWidth
          startIcon={action.label === 'Live Chat' ? <MessageCircleMore size={16} /> : <ShieldAlert size={16} />}
          variant={action.variant}
        >
          {action.label}
        </Button>
      ))}
    </Stack>
  </Paper>
)

export default SupportCard
