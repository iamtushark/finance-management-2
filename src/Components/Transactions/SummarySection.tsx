import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const SummaryCard = ({ title, value }: { title: string, value: string }) => (
  <Paper elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
    <Typography variant="subtitle1">{title}</Typography>
    <Typography variant="h6">{value}</Typography>
  </Paper>
);

const SummarySection = () => (
  <Grid container spacing={2}>
    <Grid item xs={3}>
      <SummaryCard title="Total Subscriptions" value="0" />
    </Grid>
    <Grid item xs={3}>
      <SummaryCard title="Active - Cancelled" value="0 - 0" />
    </Grid>
    <Grid item xs={3}>
      <SummaryCard title="Total Active - Monthly" value="₹0" />
    </Grid>
    <Grid item xs={3}>
      <SummaryCard title="Total Active - Yearly" value="₹0" />
    </Grid>
  </Grid>
);

export default SummarySection;
