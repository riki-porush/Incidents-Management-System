

import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import theme from './theme'

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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
