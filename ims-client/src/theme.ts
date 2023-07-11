import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
          //the basic color
            light: '#2F854F1A', //light-green
            main: '#000000', //black
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#2F854F1A', //light-green
            main: '#2F854F', //green
            dark: '#D9D9D9',
            contrastText: '#FFFFFF',
        },
        success: {
            light: '#4CAF50',
            main: '#2E7D32',
            dark: '#1B5E20',
            contrastText:'#fff'
        },
        error: {
            light: '#EF5350',
            dark: '#C62828',
            main: '#D32F2F',
            contrastText:'#fff'
        },
        warning:{
            light: '#FF9800',
            dark: '#E65100',
            main: '#ED6C02',
            contrastText:'#fff'
        },
        info: {
            light: '#D9D9D9',
            dark: '#D9D9D9',
            main: '#D9D9D9', //gray
            contrastText:'#FFFFFF',
        },
      },
      typography: {
          fontFamily: 'Poppins',
          fontSize: 15,
      },
      components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor:'#2F854F',
                color:'#FFFFFF', //white
                border:'#FFFFFF',
              }
            }
          },
          
    }
})
export default theme;




















