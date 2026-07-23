import { Menu as MenuIcon } from 'lucide-react'
import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { navigationItems } from '@/config/navigation'

import { iconMap } from '@/utils/iconMap'

const Navbar = () => {
  const location = useLocation()
  const isDashboard = location.pathname === '/'
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppBar
      position={isDashboard ? 'absolute' : 'sticky'}
      elevation={0}
      sx={{
        backgroundColor: isDashboard ? 'rgba(232,240,247,0.04)' : 'rgba(232,240,247,0.12)',
        boxShadow: isDashboard ? 'none' : undefined,
        borderBottom: isDashboard ? 'none' : '1px solid rgba(232,240,247,0.14)',
        color: isDashboard ? 'primary.dark' : 'text.primary',
        borderRadius: 0,
        left: 0,
        right: 0,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ minHeight: 82, gap: 2, px: { xs: 2, md: 5 }, width: '100%', maxWidth: 1280, mx: 'auto' }}>
        <Stack alignItems="center" direction="row" spacing={1.5} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              fontSize: { xs: 20, md: 24 },
              fontWeight: 900,
              letterSpacing: 0.8,
              color: isDashboard ? 'primary.dark' : 'primary.dark',
            }}
          >
            ACIC
          </Box>
          <Typography
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 800,
              color: isDashboard ? 'rgba(0, 0, 42, 0.9)' : 'text.primary',
            }}
          >
            Academic Credential Integrity Checker
          </Typography>
        </Stack>

        <Stack alignItems="center" direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              sx={{
                px: 1.75,
                py: 1,
                color:
                  location.pathname === item.path
                    ? isDashboard
                      ? 'primary.dark'
                      : 'primary.main'
                    : isDashboard
                      ? 'rgba(0, 0, 42, 0.72)'
                      : 'text.secondary',
                backgroundColor:
                  location.pathname === item.path
                    ? isDashboard
                      ? 'rgba(255, 255, 255, 0.34)'
                      : 'rgba(68, 106, 156, 0.12)'
                    : 'transparent',
                borderRadius: 1.5,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Stack alignItems="center" direction="row" spacing={0.5}>
          <IconButton
            aria-label="Open navigation"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: isDashboard ? 'primary.dark' : 'primary.dark' }}
          >
            <MenuIcon size={20} />
          </IconButton>
        </Stack>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2.5 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Navigation
          </Typography>
          <Stack spacing={1}>
            {navigationItems.map((item) => {
              const ItemIcon = iconMap[item.iconKey]

              return (
                <Button
                  key={item.path}
                  component={RouterLink}
                  startIcon={<ItemIcon size={18} />}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ justifyContent: 'flex-start', py: 1.25 }}
                >
                  {item.label}
                </Button>
              )
            })}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
