import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import LeftDrawer from './components/drawer/Drawer';
import Example from './components/example/example';
import { configureStore } from '@reduxjs/toolkit';
import { Box } from '@mui/material';




function App() {
  return (
 
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Example />  
        </Box>
      </Box>
  );
}

export default App;