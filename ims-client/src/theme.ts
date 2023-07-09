import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        
           light: '#2F854F1A',
          main: '#2F854F',
         dark: '#2F854F',
          contrastText: '#FFFFFF',
        },
        secondary: {
          //gray
            light: '#D9D9D9',
            main: '#D9D9D9',
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
      //white
          info: {
            light: '#000000',
            dark: '#000000',
            main: '#000000',
            contrastText:'#000000',
          },
        },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 15,
        // fontWeight: 500,
        //  lineHeight: 23,
        //  letterSpacing: 0,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              backgroundColor:'#2F854F',
              color:'#FFFFFF',//לבן
              border:'#FFFFFF',
            }
          }
        },
    }
})
export default theme