import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { Button, colors } from '@mui/material';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>

<Button  variant="outlined" color='success' >Outlined</Button>
<Button variant="contained" style={{ backgroundColor: theme.palette.secondary.main }}>
          Custom Color Button
          </Button>
          
     </ThemeProvider>
  );
};
export default App;






