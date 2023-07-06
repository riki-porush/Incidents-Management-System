import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { Button } from '@mui/material';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>


     </ThemeProvider>
  );
};
export default App;



