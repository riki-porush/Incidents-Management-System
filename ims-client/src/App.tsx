import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHome, BiHomeHeart, BiMessageAdd } from "react-icons/bi";
import "./App.css";
import LeftDrawer, { IIcon } from "./components/drawer/Drawer";
import theme from "./theme";
import React, { useEffect, useState } from "react";
import IncidentsPage from "./pages/incidents/incident";
import Router from "./routes";
import Table from "./components/table/table";
import { GridColDef } from "@mui/x-data-grid";
import apiCalls from "./service/apiCalls";
// import { main } from "@popperjs/core";

function App() {
  const tagOptions = [
    { id: "a", name: "Tag1" },
    { id: "b", name: "Tag2" },
    { id: "c", name: "Tag3" },
    { id: "d", name: "Tag4" },
  ];
  const drawerIcons: IIcon[] = [
    { icon: BiHomeHeart, text: "home", navigation: "./home" },
    { icon: BiHome, text: "dashboard", navigation: "./dashboard" },
    { icon: AiOutlineSetting, text: "settings", navigation: "./settings" },
    { icon: BiMessageAdd, text: "settings", navigation: "./message" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box sx={{ display: "flex"}}>
          <LeftDrawer icons={drawerIcons} />
          <Box  component="main" sx={{ flexGrow: 1, p: 3, height: 'calc(100vh - 64px)', overflow: 'auto'  }}>
            {/* <Here put all the components /> */}
            <Router/>
          </Box>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

