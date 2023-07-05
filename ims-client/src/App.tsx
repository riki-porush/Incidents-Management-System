
import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import LeftDrawer from './components/Drawer';
import counterSlice from "./redux/counterSlice"
import Example from './components/example';
import { configureStore } from '@reduxjs/toolkit';
import { Box } from '@mui/material';

const myStore = configureStore({
  reducer: {
    counterSlice
  }
});

export type RootState = ReturnType<typeof myStore.getState>
export type AppDispatch = typeof myStore.dispatch

function App() {
  return (
    <Provider store={myStore}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Example />
        </Box>
      </Box>
    </Provider>
  );
}

export default App;

