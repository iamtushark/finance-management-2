import React from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <Card sx={{ 
      width: 250, 
      mx: 0, 
      my: 1, 
      p: 1, 
      marginRight: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
      backgroundColor: 'rgba(255, 255, 255, 0.3)', 
      backdropFilter: 'blur(10px)',
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', p: 0.3, pb:0, mb:0 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
          <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
          </Box>
        </Stack>
        <Typography variant="h5" component="div" sx={{ mt: 1,mb:0,pb:0, color: '#333' }}>
          {`₹${value}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;







// import React from 'react';
// import { Card, CardContent, Typography, Stack } from '@mui/material';

// interface SummaryCardProps {
//   title: string;
//   value: string;
//   icon: React.ReactNode;
// }

// const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
//   return (
//     <Card sx={{ width: '85%', mx: 'auto', my: 1, p: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #ccc', borderRadius: '16px' }}>
//       <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0.5 }}>
//         <Stack sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//           {icon}
//           <Typography variant="subtitle2" component="div" sx={{ ml: 1 }}>
//             {title}
//           </Typography>
//         </Stack>
//         <Typography variant="h5" component="div" sx={{ mt: 0.5 }}>
//           {value}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default SummaryCard;
