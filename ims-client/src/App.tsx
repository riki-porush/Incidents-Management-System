import { Provider } from 'react-redux'
import React from 'react'
import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
// import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Box } from '@mui/material'
// import { CustomFooter } from './components/Table/Footer'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AutocompleteTag from './components/autoCompleteTag'

function App() {
  const tagOptions = [{id:"a" ,name:'Tag1'}, {id:"b" ,name:'Tag2'}, {id:"c" ,name:'Tag3'}, {id:"d" ,name:'Tag4'}];
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
          <AutocompleteTag tagOptions={tagOptions} ></AutocompleteTag>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
