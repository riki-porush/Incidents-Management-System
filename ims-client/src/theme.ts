import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
           light: '#aa00ff',
           main: '#FFFFFF',  //הצבע הראשי
           dark: '#aa00ff',
           contrastText: '#aa00ff',
        },
        secondary: {
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
          //???
          // info: {
          //   light: '#AA00FF',
          //   dark: '#AA00FF',
          //   main: '#AA00FF',
          //   contrastText:'#FFFFFF',
          // },
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