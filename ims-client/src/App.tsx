
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
 

 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <TimeLine/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
