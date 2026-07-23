import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppShell from '@/components/AppShell'
import Analytics from '@/pages/Analytics'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'
import UploadCertificate from '@/pages/UploadCertificate'
import VerificationHistory from '@/pages/VerificationHistory'
import VerifyDocument from '@/pages/VerifyDocument'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppShell />} path="/">
        <Route index element={<Dashboard />} />
        <Route element={<VerifyDocument />} path="verify-document" />
        <Route element={<UploadCertificate />} path="upload-certificate" />
        <Route element={<VerificationHistory />} path="verification-history" />
        <Route element={<Analytics />} path="analytics" />
        <Route element={<Profile />} path="profile" />
        <Route element={<Settings />} path="settings" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
