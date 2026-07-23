import { Menu as MenuIcon, Search, Settings, Bell } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { useAppContext } from '@/context/AppContext'
import { iconMap } from '@/utils/iconMap'

const Navbar = () => {
  const location = useLocation()
  const { navigationItems, user, userMenuItems } = useAppContext()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const initials = useMemo(
    () =>
      user.name
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0])
        .join(''),
    [user.name],
  )

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ minHeight: 82, gap: 2, px: { xs: 2, md: 4 } }}>
        <Stack alignItems="center" direction="row" spacing={1.5} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 3,
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
              color: '#FFFFFF',
              boxShadow: '0px 14px 30px rgba(37, 99, 235, 0.22)',
            }}
          >
            {(() => {
              const LogoIcon = iconMap.shield
              return <LogoIcon size={20} />
            })()}
          </Box>
          <Box>
            <Typography fontWeight={800}>Document and Certificate Integrity Checker</Typography>
            <Typography color="text.secondary" variant="body2">
              Secure enterprise verification portal
            </Typography>
          </Box>
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
                color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                backgroundColor: location.pathname === item.path ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Stack alignItems="center" direction="row" spacing={0.5}>
          <IconButton aria-label="Global search">
            <Search size={18} />
          </IconButton>
          <IconButton aria-label="Notifications">
            <Bell size={18} />
          </IconButton>
          <IconButton aria-label="Settings" component={RouterLink} to="/settings">
            <Settings size={18} />
          </IconButton>
          <IconButton aria-label="Account menu" onClick={(event) => setAnchorEl(event.currentTarget)}>
            <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}>{initials}</Avatar>
          </IconButton>
          <IconButton aria-label="Open navigation" onClick={() => setDrawerOpen(true)} sx={{ display: { md: 'none' } }}>
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

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {userMenuItems.map((item) => (
          <MenuItem
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={() => setAnchorEl(null)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  )
}

export default Navbar
