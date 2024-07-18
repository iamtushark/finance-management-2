import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <Card sx={{ 
      width: '85%', 
      mx: 'auto', 
      my: 1, 
      p: 2, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      borderRadius: '8px', 
      backgroundColor: 'rgba(255, 255, 255, 0.3)', 
      backdropFilter: 'blur(10px)'
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1 }}>
        <Stack direction="column" alignItems="center" spacing={1}>
          <div>{icon}</div>
          <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Stack>
        <Typography variant="h5" component="div" sx={{ mt: 1, color: '#333' }}>
          {value}
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
