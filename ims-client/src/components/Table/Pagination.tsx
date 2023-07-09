import { Pagination } from '@mui/material';
import PaginationItem from '@mui/material/PaginationItem';
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import React from 'react';

export const PaginationComponent = () => {

  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',

      }}
      page={page + 1}
      count={pageCount}
      // @ts-expect-error: Suppressing error due to renderItem restrictions
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}
