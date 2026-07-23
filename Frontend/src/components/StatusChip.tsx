import { Chip } from '@mui/material'

type StatusChipProps = {
  status: string
}

const colorMap = {
  Verified: { backgroundColor: '#DCFCE7', color: '#166534' },
  Pending: { backgroundColor: '#FEF3C7', color: '#92400E' },
  Rejected: { backgroundColor: '#FEE2E2', color: '#B91C1C' },
  Expired: { backgroundColor: '#E2E8F0', color: '#334155' },
}

const StatusChip = ({ status }: StatusChipProps) => (
  <Chip
    label={status}
    size="small"
    sx={{
      ...(colorMap[status as keyof typeof colorMap] ?? colorMap.Pending),
      fontWeight: 800,
    }}
  />
)

export default StatusChip
