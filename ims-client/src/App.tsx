// import { Provider } from 'react-redux'
// import React from 'react'

// import './App.css'
// import LeftDrawer from './components/drawer/Drawer'
// import configureStore from './redux/configureStore'
// import Table from './components/Table/Table'
// import { ThemeProvider } from '@emotion/react'
// import theme from './theme'
// import { Box } from '@mui/material'
// import { CustomFooter } from './components/Table/Footer'
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// function App() {

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: 'flex' }}>
//         <LeftDrawer />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           {/* <Here put all the components /> */}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default App;

//+++++++++++++++++++++++++++++++++++++++++
import React, { useState } from 'react';
import { Button, Box, ThemeProvider } from '@mui/material';
import LeftDrawer from './components/drawer/Drawer';
import AddIncident from './AddIncident/addIncident';
import theme from './theme';
import CustomTextFild from './components/CustomTextField/CustomTextfield';
import CustomTextField from './components/CustomTextField/CustomTextfield';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Button onClick={handleClick}>Open Incident</Button>
          {open && <AddIncident open={open} onClose={handleClose} />}

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
