import React, { useState } from 'react';
import Search from '../Search/Search';
import { filterRowsBySearch, filterRowsByStatus } from '../../service/incidentTableService';
import { IIncident } from '../../pages/incidents/modules/inteface';
import Table from '../Table/Table';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { format } from 'date-fns';

export interface IInceidentTableProps {
    rows: IIncident[],
}
// קומפוננטה הראשית
const IncidentTable: React.FC<IInceidentTableProps> = ({ rows }) => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'priority', headerName: 'Priority', width: 150 },
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            valueGetter: (params) => format(params.value as Date, 'dd/MM/yyyy'),
        },
        { field: 'type', headerName: 'Type', width: 150 },
        { field: 'durationFault', headerName: 'Duration Fault', width: 200 },
        { field: 'caringTeam', headerName: 'Caring Team', width: 200 },
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
        <div>
            <Search onEvent={someFunction} setSearchValue={setSearchValue} />
            <Table columns={columns} rows={filteredRows}></Table>
        </div>
    );
};

export default IncidentTable;
