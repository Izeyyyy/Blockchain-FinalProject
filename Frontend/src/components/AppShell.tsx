import { Box, Container } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const AppShell = () => {
  const location = useLocation()
  const isDashboard = location.pathname === '/'

  return (
    <>
      <Navbar />
      {isDashboard ? (
        <Box component="main">
          <Outlet />
        </Box>
      ) : (
        <Container component="main" maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
          <Outlet />
        </Container>
      )}
      <Footer />
    </>
  )
}

export default AppShell
