import { render, screen } from '@testing-library/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MemoryRouter } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import { enterpriseTheme } from '@/utils/theme'

describe('Dashboard', () => {
  it('renders the guest portal dashboard actions', async () => {
    render(
      <ThemeProvider theme={enterpriseTheme}>
        <CssBaseline />
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(await screen.findByText(/Welcome to the Academic Credential Verification Portal/i)).toBeInTheDocument()
    expect(
      await screen.findByText(/Securely verify academic documents and certificates using blockchain-powered integrity verification./i),
    ).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Upload & Verify Document/i })).toBeInTheDocument()
  })
})
