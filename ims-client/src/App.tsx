import { Provider } from 'react-redux'
import React from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

const store = configureStore()

function App() {
  return (
    <div className="App">
         <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LeftDrawer></LeftDrawer>
      </Provider>
      </ThemeProvider>
    </div>
  )
}

export default App