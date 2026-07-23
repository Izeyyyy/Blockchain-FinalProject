import { Chip } from '@mui/material'

type StatusChipProps = {
  status: string
}

const colorMap = {
  'Pending Registration': { backgroundColor: '#FEF3C7', color: '#92400E' },
  Registered: { backgroundColor: '#DBEAFE', color: '#1E40AF' },
  Verified: { backgroundColor: '#DCFCE7', color: '#166534' },
  Tampered: { backgroundColor: '#FEE2E2', color: '#B91C1C' },
  'Not Found': { backgroundColor: '#E2E8F0', color: '#334155' },
}

const StatusChip = ({ status }: StatusChipProps) => (
  <Chip
    label={status}
    size="small"
    sx={{
      ...(colorMap[status as keyof typeof colorMap] ?? colorMap['Pending Registration']),
      fontWeight: 800,
    }}
  />
)

export default StatusChip
