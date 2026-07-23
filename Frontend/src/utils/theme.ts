import { alpha, createTheme } from '@mui/material/styles'

export const enterpriseTheme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    secondary: {
      main: '#06B6D4',
      light: '#67E8F9',
      dark: '#0891B2',
    },
    success: {
      main: '#14B8A6',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
    },
    divider: '#E2E8F0',
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 800,
      lineHeight: 1.15,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.98rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(15, 23, 42, 0.05)',
    '0px 8px 24px rgba(15, 23, 42, 0.08)',
    '0px 10px 30px rgba(37, 99, 235, 0.10)',
    '0px 12px 36px rgba(15, 23, 42, 0.12)',
    '0px 16px 44px rgba(15, 23, 42, 0.14)',
    '0px 20px 52px rgba(15, 23, 42, 0.16)',
    '0px 22px 56px rgba(15, 23, 42, 0.18)',
    '0px 24px 60px rgba(15, 23, 42, 0.18)',
    '0px 28px 64px rgba(15, 23, 42, 0.20)',
    '0px 30px 70px rgba(15, 23, 42, 0.20)',
    '0px 32px 74px rgba(15, 23, 42, 0.22)',
    '0px 34px 78px rgba(15, 23, 42, 0.22)',
    '0px 36px 82px rgba(15, 23, 42, 0.24)',
    '0px 38px 86px rgba(15, 23, 42, 0.24)',
    '0px 40px 90px rgba(15, 23, 42, 0.25)',
    '0px 42px 94px rgba(15, 23, 42, 0.25)',
    '0px 44px 98px rgba(15, 23, 42, 0.26)',
    '0px 46px 102px rgba(15, 23, 42, 0.26)',
    '0px 48px 106px rgba(15, 23, 42, 0.27)',
    '0px 50px 110px rgba(15, 23, 42, 0.27)',
    '0px 52px 114px rgba(15, 23, 42, 0.28)',
    '0px 54px 118px rgba(15, 23, 42, 0.28)',
    '0px 56px 122px rgba(15, 23, 42, 0.29)',
    '0px 58px 126px rgba(15, 23, 42, 0.29)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(circle at top left, rgba(6, 182, 212, 0.12), transparent 30%), radial-gradient(circle at top right, rgba(37, 99, 235, 0.10), transparent 24%), #F8FAFC',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #E2E8F0',
          boxShadow: '0px 20px 45px rgba(15, 23, 42, 0.06)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingInline: 18,
          minHeight: 44,
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
          boxShadow: '0px 12px 28px rgba(37, 99, 235, 0.22)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 10,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#FFFFFF', 0.8),
          backdropFilter: 'blur(18px)',
          color: '#1E293B',
          boxShadow: '0px 8px 32px rgba(15, 23, 42, 0.06)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        },
      },
    },
  },
})
