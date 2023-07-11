import React, {  useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabStyles } from './Tabs.style';
import theme from '../../theme';
import CustomTabPanel from './CustomTabPanel';
import { EventProps } from '../IncidentTable/IncidentTable';


const UpTabs: React.FC<EventProps> = ({ onEvent, setValue }) => {
  const [status, setStatus] = useState<number>(0);


  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue == 0) {
      setValue('Active');
      onEvent('someFunction');
    }
    if (newValue == 1) {
      setValue('Resolved');
      onEvent('someFunction');
    }
    setStatus(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={status}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={TabStyles}
        >
          <Tab
            label="Active Incidents"
            {...a11yProps(0)}
            sx={{
              backgroundColor: status === 0 ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
              borderRadius: '5px',
              border: '1px solid green',
            }}
          />
          <Tab
            label="Solved Incidents"
            {...a11yProps(1)}
            sx={{
              backgroundColor: status === 1 ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
              borderRadius: '5px',
              border: '1px solid green',
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={status} index={0}>
        Active Incidents table
      </CustomTabPanel>
      <CustomTabPanel value={status} index={1}>
        Solved Incidents table
      </CustomTabPanel>
    </Box>
  );
}

export default UpTabs;