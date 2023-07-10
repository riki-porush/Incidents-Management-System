import { Provider } from 'react-redux'
import React, { useState } from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Box } from '@mui/material'
import { CustomFooter } from './components/Table/Footer'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AutocompleteTag from './components/autoCompleteTag'
import { DatePickerComp } from './components/datePicker'

// const store = configureStore()

// function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//         <LeftDrawer></LeftDrawer>
//         </ThemeProvider>
//       </Provider>
//     </div>
//   )
// }

// export default App


function App() {
  const tagOptions = [{id:'1',name:'Tag1'}, {id:'2',name:'Tag2'}, {id:'3',name:'Tag3'},{id:'4',name: 'Tag4'}];
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
          <AutocompleteTag tagOptions={tagOptions}></AutocompleteTag>
          {/* <DatePickerComp date={new Date()} setDate={}></DatePickerComp> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
