import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const AppShell = () => (
  <>
    <Navbar />
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 } }}>
      <Outlet />
    </Container>
    <Footer />
  </>
)

export default AppShell
