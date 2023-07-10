import { Provider } from 'react-redux'
import React from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
<<<<<<< HEAD
import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { Box } from '@mui/material'
import { CustomFooter } from './components/Table/Footer'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

=======

const store = configureStore()
>>>>>>> origin

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LeftDrawer></LeftDrawer>
      </Provider>
    </div>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> origin
