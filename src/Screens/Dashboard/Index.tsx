import React from 'react';
import { Container, Grid, Stack } from '@mui/material';
import PieChart from '../../Components/PieChart';
import SummaryCard from '../../Components/SummaryCard';
import SavingsIcon from '@mui/icons-material/Savings';
import { AccountBalance } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const data = [
  { value: 10, label: 'series A' },
  { value: 15, label: 'series B' },
  { value: 20, label: 'series C' },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <Container sx={{ bgcolor: "white", border: '1px ', borderRadius: '16px', padding: '12px' }}>
        <h1>Overview</h1>
        <h3>Summary</h3>
        <Grid container spacing={4} justifyContent="center" width={"100%"}>
          {/* Summary Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Total Income"
              value="$1,234"
              icon={<AttachMoneyIcon sx={{ fontSize: 30, color: 'primary.main' }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Total Spent"
              value="$5,618"
              icon={<SavingsIcon sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Available Balance"
              value="$5,228"
              icon={<AccountBalance sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
        </Grid>

        <h3>Reports</h3>

        {/* Pie Charts */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <Stack sx={{
              border: '2px solid #ccc',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h3>Expenses</h3>
              <PieChart type="expense" data={data} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack sx={{
              border: '2px solid #ccc',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h3>Income</h3>
              <PieChart type="income" data={data} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
