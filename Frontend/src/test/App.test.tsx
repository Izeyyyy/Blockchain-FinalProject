import { render, screen } from '@testing-library/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { MemoryRouter } from 'react-router-dom'

import { AppProvider } from '@/context/AppContext'
import Dashboard from '@/pages/Dashboard'
import { enterpriseTheme } from '@/utils/theme'

describe('Dashboard', () => {
  it('renders the enterprise welcome message and feature actions', async () => {
    render(
      <ThemeProvider theme={enterpriseTheme}>
        <CssBaseline />
        <MemoryRouter>
          <AppProvider>
            <Dashboard />
          </AppProvider>
        </MemoryRouter>
      </ThemeProvider>,
    )

    expect(await screen.findByText(/Welcome to the Document and Certificate Integrity Checker/i)).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Verification Workflows/i })).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /Verify Document/i })).toBeInTheDocument()
  })
})
