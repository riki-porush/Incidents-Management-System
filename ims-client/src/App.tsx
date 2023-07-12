
import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import './App.css'
import LeftDrawer, { IIcon } from './components/drawer/Drawer'
import theme from './theme'
import React from 'react'
import { BiHome, BiHomeHeart, BiMessageAdd } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import TimeLine from './pages/timeLine/timeLine'
import DemoComponent from './demoTest/DemoComponent'
import WidgetsStack from './components/Widget/WidgetsStack'
import Widget from './components/Widget/Widget'
import IncidentsPage from './pages/incidents/incident'



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

  const drawerIcons: IIcon[] = [
    { icon: BiHomeHeart, text: "home", navigation: "./home" },
    { icon: BiHome, text: "dashboard", navigation: "./dashboard" },
    { icon: AiOutlineSetting, text: "settings", navigation: "./settings" },
    { icon: BiMessageAdd, text: "settings", navigation: "./message" },

  ];


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer icons={drawerIcons} />
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <IncidentsPage/>
          {/* <Here put all the components /> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;