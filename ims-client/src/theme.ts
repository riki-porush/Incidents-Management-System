// import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    date: React.CSSProperties;
    bold: React.CSSProperties;
    normal: React.CSSProperties;
    widget: React.CSSProperties;
    longText: React.CSSProperties;
    boldGreen: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    date: React.CSSProperties;
    bold: React.CSSProperties;
    normal: React.CSSProperties;
    widget: React.CSSProperties;
    longText: React.CSSProperties;
    boldGreen: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    date: true;
    bold: true;
    normal: true;
    widget: true;
    longText: true;
    boldGreen: true;
  }
}
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
      contrastText: '#fff'
    },
    error: {
      light: '#EF5350',
      dark: '#C62828',
      main: '#D32F2F',
      contrastText: '#fff'
    },
    warning: {
      light: '#FF9800',
      dark: '#E65100',
      main: '#ED6C02',
      contrastText: '#fff'
    },

    info: {
      light: '#D9D9D9',
      dark: '#D9D9D9',
      main: '#D9D9D9', //gray
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 15,
    date: {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: ' 22.5px',
      color: ' #5F5F5F',
      display: 'block',
    },
    widget: {
      fontWeight: 400,
      fontSize: '46.32px',
      lineHeight: '69.48px',
      paddingTop: '15px',
    },
    bold: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '27px',
      display: 'block',
    },
    normal: {
      fontStyle: 'normal',
      fontWeight: 100,
      lineHeight: 'normal',
    },
    longText: {
      width: '80%',
      paddingBlock: '30px',
      lineHeight: '35.79px',
      display: 'block',
    },
    boldGreen: {
      fontWeight: 700,
      lineHeight: '36px',
      letterSpacing: '0em',
      color: '#2F854F',
      paddingTop: '3%',
      display: 'block'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#2F854F',
          color: '#FFFFFF', //white
          border: '#FFFFFF',
        }
      }
    },
  }
})
export default theme;
