import React, { useState } from 'react';
import Search from '../Search/Search';
import { filterRowsBySearch, filterRowsByStatus } from '../../service/incidentTableService';
import Table from '../Table/Table';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { format } from 'date-fns';
import UpTabs from '../tabs/Tabs';
import IIncident from '../../interface/incidentInterface';
import { Box } from '@mui/material';

export type EventProps = {
    onEvent: (functionName: string) => void;
    setValue: (value: string) => void;
};

export interface IInceidentTableProps {
    rows: IIncident[],
}
// קומפוננטה הראשית
const IncidentTable: React.FC<IInceidentTableProps> = ({ rows }) => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'description', headerName: 'Description', width: 250 },
        { field: 'priority', headerName: 'Priority', width: 150 },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'durationHours', headerName: 'Duration (Hours)', width: 180 },
        { field: 'slackLink', headerName: 'Slack Link', width: 200 },
        // { field: 'tags', headerName: 'Tags', width: 200, valueGetter: (params) => params.row.tags.map((tag) => tag.name).join(', ') },
        { field: 'date', headerName: 'Date', width: 150, valueFormatter: (params) => format(params.value as Date, 'MM/dd/yyyy') },
        { field: 'cost', headerName: 'Cost', width: 150 },
    ];

    const someFunction = () => {
        console.log('The event was triggered!');
        filteredRows = filterRowsBySearch(rows, searchValue);
        filteredRows = filterRowsByStatus(filteredRows, statusValue)
    };

    const [searchValue, setSearchValue] = useState<string>('');
    const [statusValue, setStatusValue] = useState<string>('Active');

    let filteredRows: IIncident[] = [];

    someFunction();

    return (
        <Box>
            <UpTabs onEvent={someFunction} setValue={setStatusValue}></UpTabs>
            <Search onEvent={someFunction} setValue={setSearchValue} />
            <Table columns={columns} rows={filteredRows}></Table>
        </Box>
    );
};

export default IncidentTable;
