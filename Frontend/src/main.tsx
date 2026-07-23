import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App'
import './index.css'
import { enterpriseTheme } from './utils/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={enterpriseTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
