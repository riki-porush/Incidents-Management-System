import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabStyles } from './Tabs.style';
import theme from '../../theme';
import CustomTabPanel from './CustomTabPanel';


// קומפוננטת האירוע
type EventProps = {
  onEvent: (functionName: string,status:string) => void;
};

const UpTabs:React.FC<EventProps>=({onEvent}) =>{
  const [value, setValue] = useState<number>(0);


  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if(newValue==0){
      //שליחת event לקומפוננטה טבלה עם הערך active
      onEvent('filterRowsByStatus','active');
    }
    if(newValue==1){
      //שליחת event לקומפוננטה טבלה עם הערך resolved
      onEvent('filterRowsByStatus','resolved');
    }
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
              backgroundColor: value === 0 ? theme.palette.secondary.main : theme.palette.secondary.contrastText,
              borderRadius: '5px',
              border: '1px solid green',
            }}
          />
          <Tab
            label="Solved Incidents"
            {...a11yProps(1)}
            sx={{
              backgroundColor: value === 1 ?  theme.palette.secondary.main: theme.palette.secondary.contrastText,
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

export default UpTabs;