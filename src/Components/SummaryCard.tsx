import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <Card sx={{ width: 200, mx: 'auto', my: 1, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
        <Box sx={{ mb: 1 }}>
          {icon}
        </Box>
        <Typography variant="subtitle2" component="div" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
