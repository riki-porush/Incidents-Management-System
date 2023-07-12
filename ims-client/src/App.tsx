import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'

import './App.css'
import LeftDrawer from './components/drawer/Drawer'
import { IIncidentprops } from './pages/timeLine/modules/interface'
import TimeLine from './pages/timeLine/timeLine'
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
// import { DataGrid, GridToolbar } from '@mui/x-data-grid'


function App() {
  const tagOptions = [{ id: "a", name: 'Tag1' }, { id: "b", name: 'Tag2' }, { id: "c", name: 'Tag3' }, { id: "d", name: 'Tag4' }];
  const incident1 = {
    _id: "649cbeda942a5d4d8bcf303b",
    name: "Critical Event",
    status: "Active",
    description: "Issue Description",
    priority: "P1",
    type: "comment",
    durationHours: "72",
    slackLink: "https://join.slack.com/t/fi-verr/shared_invite/zt-1xip09fur-ERWbAQen_A~dz5s42ltnvw",
    tags: [
      { id: "59cbeda942a5dd8bcf203h", name: "inbox" },
      { id: "45sfeda992a5dd8bcf403m", name: "checkout" }
    ],
    date: new Date("2023-07-29T10:30:00Z"),
    createdAt: new Date("2023-07-01T10:30:00Z"),
    updatedAt: new Date("2023-07-03T10:30:00Z"),
    cost: "1000"
  }
  const incidentProps: IIncidentprops = {
    incident: incident1
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <TimeLine {...incidentProps} />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <Here put all the components /> */}
          {/* <AutocompleteTag tagOptions={tagOptions} ></AutocompleteTag> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
