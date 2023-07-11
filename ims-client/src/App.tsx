
import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import theme from './theme'
import React from 'react'

import TimeLine from './pages/timeLine/timeLine'
import DemoComponent from './demoTest/DemoComponent'



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
// import { DataGrid, GridToolbar } from '@mui/x-data-grid'


function App() {
 
 // const tagOptions = [{id:"a" ,name:'Tag1'}, {id:"b" ,name:'Tag2'}, {id:"c" ,name:'Tag3'}, {id:"d" ,name:'Tag4'}];
 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <TimeLine/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
          {/* <AutocompleteTag tagOptions={tagOptions} ></AutocompleteTag> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
