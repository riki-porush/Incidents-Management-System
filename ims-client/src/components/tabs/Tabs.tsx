import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabStyles } from './Tabs.style';
import { GridColDef } from '@mui/x-data-grid';
import incidentJson from '../../mockAPI/incident.json'
import { IIncident, IIncidents } from '../../pages/incidents/modules/inteface';
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const [rows, setRows] = useState<IIncidents>();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('../../mockAPI/incident.json'); // Replace with the actual path to your JSON file
      const incidentJson = await response.json();
      console.log(incidentJson);
      setRows(incidentJson);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, []);


const columns:GridColDef[] = [
  { field: 'Eget Feugiat', headerName: 'EgetFeugiat', width: 200 },
  { field: 'Nulla tincidunt', headerName: 'Name', width: 100 },
  { field: 'Sit senectus', headerName: 'Email', width: 100 },
  { field: 'Pharetra tortor', headerName: 'phoneNumber', width: 200 },
  { field: 'tests', headerName: 'tests', width: 200 },
  { field: 'experience', headerName: 'experience', width: 200 },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (  
  <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UpTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={TabStyles}
        >
          <Tab
            label="Active Incidents"
            {...a11yProps(0)}
            sx={{
              backgroundColor: value === 0 ? 'green' : 'white',
              borderRadius: '5px',
              border: '1px solid green',
            }}
          />
          <Tab
            label="Solved Incidents"
            {...a11yProps(1)}
            sx={{
              backgroundColor: value === 1 ? 'green' : 'white',
              borderRadius: '5px',
              border: '1px solid green',
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        Active Incidents table
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Solved Incidents table 
      </CustomTabPanel>
    </Box>
  );
}