import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppShell from '@/components/AppShell'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'
import Upload from '@/pages/Upload'
import CredentialHistory from '@/pages/CredentialHistory'
import Verify from '@/pages/Verify'
import SupportedCredentials from '@/pages/SupportedCredentials'
import HowItWorks from '@/pages/HowItWorks'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppShell />} path="/">
        <Route index element={<Dashboard />} />
        <Route element={<Upload />} path="upload" />
        <Route element={<Verify />} path="verify" />
        <Route element={<CredentialHistory />} path="credential-history" />
        <Route element={<SupportedCredentials />} path="supported-credentials" />
        <Route element={<HowItWorks />} path="how-it-works" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
