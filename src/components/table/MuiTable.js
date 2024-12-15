import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ruRU } from '@mui/x-data-grid/locales';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1133FF' },
    },
  },
  ruRU,
);

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'Jon Snow' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'Cersei Lannister' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: 'Jaime Lannister' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'Arya Stark' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: 'Daenerys Targaryen' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'Melisandre' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: 'Ferrara Clifford' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: 'Rossini Frances' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'Harvey Roxie' },
];

const paginationModel = { page: 0, pageSize: 5 };

const handler = (e, row) => {
  e.preventDefault();
  console.log("Контекстное меню вызвано для строки с данными:", row);
};

const handleCellContextMenu = (e, cellParams) => {
  e.preventDefault();

  console.log(`Контекстное меню вызвано для ячейки  с данными:`, cellParams);
};

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '900px' }}>
      <div style={{ height: 400, width: '100%' }}>
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          getRowId={(row) => row.id}
          slotProps={{
            row: {
              onContextMenu: (e) => {
                const rowId = e.currentTarget.dataset.id;
                const row = rows.find(r => r.id === parseInt(rowId, 10));
                handler(e, row);
              },
              style: { cursor: 'context-menu' },
            },
            cell: {
              onContextMenu: (e) => {
                const cellElement = e.currentTarget;
                const field = cellElement.getAttribute('data-field');
                handleCellContextMenu(e, {cellElement, field });
              },
              style: { cursor: 'context-menu' },
            }
          }}
        />
        </ThemeProvider>
      </div>
    </Paper>
  );
}
