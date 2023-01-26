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
          main: '#0288d1',
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
          background: "-webkit-linear-gradient(15deg, rgba(255,255,255,1) 0%, rgba(20,20,20,1) 50%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700"
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
          main: '#0288d1',
        },
        
      },
      typography: {
        button: {
          textTransform: 'none',
        },
        subtitle1: {
          fontSize: '1.2rem',
        },
        h2: {
          background: "-webkit-linear-gradient(15deg, rgba(0,0,0,1) 0%, rgba(235,235,235,1) 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700"
        }
      },
})
