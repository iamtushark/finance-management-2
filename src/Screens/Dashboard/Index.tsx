import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import PieChart from '../../Components/PieChart';
import SummaryCard from '../../Components/SummaryCard';
import SavingsIcon from '@mui/icons-material/Savings';
import { AccountBalance } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CommonHeadingTypography from '../../Components/Common/CommonHeadingTypography';

const data = [
  { value: 10, label: 'series A' },
  { value: 15, label: 'series B' },
  { value: 20, label: 'series C' },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <Container sx={{ mt: 4, bgcolor: "white", border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
        <CommonHeadingTypography>
          Overview
        </CommonHeadingTypography>
        <h3>Summary</h3>
        <Grid container spacing={2} justifyContent="center"> {/* Adjusted justifyContent */}
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
        <Grid container spacing={2} justifyContent="center"> {/* Adjusted justifyContent */}
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
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
