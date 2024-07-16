import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import PieChart from '../../Components/PieChart';
import SummaryCard from '../../Components/SummaryCard';
import { AccountBalance } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';


const data = [
  { value: 10, label: 'series A' },
  { value: 15, label: 'series B' },
  { value: 20, label: 'series C' },
];

const Dashboard: React.FC = () => {
  return (
    <Container sx={{ mt: 4 , bgcolor: "black"}}>
      <Grid container spacing={2}>
        {/* Summary Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard 
            title="Income" 
            value="$1,234" 
            icon={<AccountBalance sx={{ fontSize: 30, color: 'primary.main' }} />} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard 
            title="Expense" 
            value="$2,345" 
            icon={<AccountBalance sx={{ fontSize: 30, color: 'error.main' }} />} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard 
            title="Budget" 
            value="$5,618" 
            icon={<AccountBalance sx={{ fontSize: 30, color: 'success.main' }} />} 
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SummaryCard 
            title="Available Balance" 
            value="$5,228" 
            icon={<AccountBalance sx={{ fontSize: 30, color: 'success.main' }} />} 
          />
        </Grid>
</Grid>
        {/* Pie Charts */}
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart type="income" data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart type="expense" data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart type="expense" data={data} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
