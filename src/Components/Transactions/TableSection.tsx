import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const TableSection = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Renewal Date</TableCell>
          <TableCell>Start/Cancel Date</TableCell>
          <TableCell>Notes</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={7} align="center">No data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

const AddButton = () => (
  <IconButton color="primary" style={{ position: 'fixed', bottom: 16, right: 16 }}>
    <AddIcon fontSize="large" />
  </IconButton>
);

export { TableSection, AddButton };
