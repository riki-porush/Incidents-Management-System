import { Provider } from 'react-redux'
import React from 'react'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import configureStore from './redux/configureStore'
import Table from './components/Table/Table'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

const store = configureStore()
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const rows = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Michael Johnson', age: 40 },
  { id: 4, name: 'Emily Davis', age: 28 },
  { id: 5, name: 'Robert Wilson', age: 35 },
  { id: 6, name: 'Sarah Anderson', age: 32 },
  { id: 7, name: 'David Thompson', age: 45 },
  { id: 8, name: 'Jessica Brown', age: 27 },
  { id: 9, name: 'Daniel Martinez', age: 33 },
  { id: 10, name: 'Sophia Taylor', age: 29 },
  { id: 11, name: 'Matthew Miller', age: 37 },
  { id: 12, name: 'Olivia Garcia', age: 31 },
  { id: 13, name: 'Andrew Rodriguez', age: 42 },
  { id: 14, name: 'Isabella Martinez', age: 26 },
  { id: 15, name: 'William Taylor', age: 34 },
  { id: 16, name: 'Ava Anderson', age: 39 },
  { id: 17, name: 'James Thompson', age: 43 },
  { id: 18, name: 'Mia Wilson', age: 28 },
  { id: 19, name: 'Alexander Johnson', age: 36 },
  { id: 20, name: 'Charlotte Davis', age: 30 },
  { id: 21, name: 'Benjamin Garcia', age: 38 },
  { id: 22, name: 'Scarlett Miller', age: 33 },
  { id: 23, name: 'Joseph Rodriguez', age: 44 },
  { id: 24, name: 'Victoria Smith', age: 27 },
  { id: 25, name: 'Henry Thompson', age: 35 },
  { id: 26, name: 'Luna Wilson', age: 40 },
  { id: 27, name: 'Christopher Martinez', age: 29 },
  { id: 28, name: 'Grace Taylor', age: 37 },
  { id: 29, name: 'Daniel Anderson', age: 41 },
  { id: 30, name: 'Sophia Davis', age: 32 },
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Michael Johnson', age: 40 },
  { id: 4, name: 'Emily Davis', age: 28 },
  { id: 5, name: 'Robert Wilson', age: 35 },
  { id: 6, name: 'Sarah Anderson', age: 32 },
  { id: 7, name: 'David Thompson', age: 45 },
  { id: 8, name: 'Jessica Brown', age: 27 },
  { id: 9, name: 'Daniel Martinez', age: 33 },
  { id: 10, name: 'Sophia Taylor', age: 29 },
  { id: 11, name: 'Matthew Miller', age: 37 },
  { id: 12, name: 'Olivia Garcia', age: 31 },
  { id: 13, name: 'Andrew Rodriguez', age: 42 },
  { id: 14, name: 'Isabella Martinez', age: 26 },
  { id: 15, name: 'William Taylor', age: 34 },
  { id: 16, name: 'Ava Anderson', age: 39 },
  { id: 17, name: 'James Thompson', age: 43 },
  { id: 18, name: 'Mia Wilson', age: 28 },
  { id: 19, name: 'Alexander Johnson', age: 36 },
  { id: 20, name: 'Charlotte Davis', age: 30 },
  { id: 21, name: 'Benjamin Garcia', age: 38 },
  { id: 22, name: 'Scarlett Miller', age: 33 },
  { id: 23, name: 'Joseph Rodriguez', age: 44 },
  { id: 24, name: 'Victoria Smith', age: 27 },
  { id: 25, name: 'Henry Thompson', age: 35 },
  { id: 26, name: 'Luna Wilson', age: 40 },
  { id: 27, name: 'Christopher Martinez', age: 29 },
  { id: 28, name: 'Grace Taylor', age: 37 },
  { id: 29, name: 'Daniel Anderson', age: 41 },
];

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        {/* <LeftDrawer></LeftDrawer> */}
        <Table columns={columns} rows={rows}></Table>
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App