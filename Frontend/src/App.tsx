import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppShell from '@/components/AppShell'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'
import VerificationHistory from '@/pages/VerificationHistory'
import VerifyCertificate from '@/pages/VerifyCertificate'
import VerifyDocument from '@/pages/VerifyDocument'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppShell />} path="/">
        <Route index element={<Dashboard />} />
        <Route element={<VerifyDocument />} path="verify-document" />
        <Route element={<VerifyCertificate />} path="verify-certificate" />
        <Route element={<VerificationHistory />} path="verification-history" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
