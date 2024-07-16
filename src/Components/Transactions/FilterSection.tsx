import React from 'react';
import { TextField, Box } from '@mui/material';

const FilterSection = () => (
  <Box my={2}>
    <TextField label="Filter by name" variant="outlined" fullWidth />
  </Box>
);

export default FilterSection;
