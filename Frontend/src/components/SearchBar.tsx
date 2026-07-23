import { Search } from 'lucide-react'
import { Button, MenuItem, Paper, Stack, TextField } from '@mui/material'

type SearchScope = {
  value: string
  label: string
}

type SearchBarProps = {
  scopes: SearchScope[]
  scope: string
  query: string
  onScopeChange: (value: string) => void
  onQueryChange: (value: string) => void
  onSearch: () => void
}

const SearchBar = ({
  scopes,
  scope,
  query,
  onScopeChange,
  onQueryChange,
  onSearch,
}: SearchBarProps) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 1.5, md: 1.25 },
      borderRadius: 999,
      border: '1px solid rgba(255,255,255,0.28)',
      backgroundColor: 'rgba(255,255,255,0.95)',
      boxShadow: '0px 18px 45px rgba(15, 23, 42, 0.16)',
    }}
  >
    <Stack
      alignItems={{ xs: 'stretch', md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      spacing={1.5}
    >
      <TextField
        select
        size="small"
        value={scope}
        onChange={(event) => onScopeChange(event.target.value)}
        sx={{
          minWidth: { xs: '100%', md: 180 },
          '& .MuiOutlinedInput-root': { borderRadius: 999, backgroundColor: 'rgba(248,250,252,0.9)' },
        }}
      >
        {scopes.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        placeholder="Search documents, certificates, users, or verification history"
        size="small"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 999,
            backgroundColor: 'rgba(248,250,252,0.9)',
            minHeight: 52,
          },
        }}
      />
      <Button startIcon={<Search size={18} />} variant="contained" onClick={onSearch}>
        Search
      </Button>
    </Stack>
  </Paper>
)

export default SearchBar
