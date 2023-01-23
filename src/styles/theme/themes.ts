import { createTheme } from '@mui/material/styles';
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#1d9bf0',
          dark: "#121212"
        },
        secondary: {
          main: '#ede7f6',
        },
        background: {
          default: '#020a13',
          paper: '#000000',
        },
        info: {
          main: '#3949ab',
        },
        
      },
      typography: {
        button: {
          textTransform: 'none'
        },
        subtitle1: {
          fontSize: '1.2rem',
        },
        h2: {
          background: "-webkit-linear-gradient(279deg, rgba(115,115,115,1) 0%, rgba(255,255,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }
        
      },
      
      
})
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#1d9bf0'
        },
        secondary: {main: '#1d1d1d'},
        info: {
          main: '#ffffff',
        },
        
      },
      typography: {
        button: {
          textTransform: 'none',
        },
        subtitle1: {
          fontSize: '1.2rem',
        },
      },
})
