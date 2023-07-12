import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import apiCalls from '../../service/apiCalls';
import IAggregation  from '../../interface/aggregationInterface';
import Widget from './Widget';

const NewStack = styled(Stack)(({ theme }) => ({
  '&':{
    'width': '1433px',
    'height': '170px',
    'top': '123px',
    'left': '122px',
    'gap': '20px'
  }
}));

export default function WidgetsStack() {
  const [aggregateIncident, setAggregateIncident] = useState<IAggregation |null>(null);
  
  const fetchData = async () => {
    try {
      const response = await apiCalls.getAggregation();
      setAggregateIncident(response);
      console.log(aggregateIncident)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }; 

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NewStack  direction="row" >
        {aggregateIncident&&<>
        <Widget title="Active Count" aggregation={aggregateIncident.activeCount}></Widget>
        <Widget title="Average Cost" aggregation={aggregateIncident.averageCost}></Widget>
        <Widget title="Average Duration Hours" aggregation={aggregateIncident.averageDurationHours}></Widget>
        </>}
      </NewStack >
    </div>
  );
}