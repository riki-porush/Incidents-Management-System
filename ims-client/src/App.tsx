
import { Provider } from 'react-redux'
import React from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

const store = configureStore()

function App() {
  return (
    <div className="App">
          <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        <LeftDrawer></LeftDrawer>
        </ThemeProvider>
      </Provider>
      </ThemeProvider>
    </div>
  )
}

export default App

