import { Box, Container } from '@mui/system';
import React from 'react';
import MiniDrawer from './CommonSideBar';
import { Divider } from '@mui/material';

const CommonTopBar: React.FC<{title: string}> = ({title})=>{
    return(
        <Container>
            <Box component="h1" sx={{ marginLeft: 6, marginTop: 2 }}>
              {title}  
            </Box>
            <Divider sx={{ 
                position: 'absolute', 
                left: 0, 
                right: 0, 
                top: 64, 
                border: '1px inset black', 
                backgroundColor: '#ffffff' }} />
        </Container>
    );
}

export default CommonTopBar;