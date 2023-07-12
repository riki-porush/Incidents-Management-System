import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useState } from 'react';
import { CustomNoRowsOverlay } from './CustomNoRowsOverlay';
import { CustomFooter } from './Footer';
import React from 'react';

export interface TableProps<T> {
    columns: GridColDef[];
    rows: Array<T>,
}
export const PAGE_SIZE = 5;

const Table = <T extends object>({ columns, rows }: TableProps<T>) => {

    const rowsWithKeys = rows.map((row, index) => ({ ...row, id: index }));

    const [paginationModel, setPaginationModel] = useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    return (
        <Box sx={{width: '100%'}}>
                <DataGrid
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    slots={{
                        footer: CustomFooter,
                        columnSortedDescendingIcon: ExpandMoreIcon,
                        columnSortedAscendingIcon: ExpandLessIcon,
                        noRowsOverlay: CustomNoRowsOverlay,
                    }}
                    disableColumnMenu
                    rows={rowsWithKeys}
                    columns={columns}
                    sx={{
                        '.MuiDataGrid-iconButtonContainer': {
                            visibility: 'visible',
                        },
                        '.MuiDataGrid-sortIcon': {
                            opacity: 'inherit !important',
                        },
                        borderRadius: '25px',
                    }}
                />
        </Box>
    );
}
export default Table;


