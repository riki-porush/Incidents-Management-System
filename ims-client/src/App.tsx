import { Provider } from 'react-redux'
import React from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Box } from '@mui/material'
import { CustomFooter } from './components/Table/Footer'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
