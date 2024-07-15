import React from 'react';
import List from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'space-between',
  height: '100vh',
  width: '60px',
  backgroundColor: '#111827',
  color: '#ffffff',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  backgroundColor: '#111827',
  color: '#ffffff',
  cursor: 'pointer',
};

const listItemButtonStyle: React.CSSProperties = {
  margin: '8px 0',
};

const iconStyle: React.CSSProperties = {
  color: '#ffffff',
  fontSize: '36px',
  border: '2px solid #ffffff',
  borderRadius: '50%',
  padding: '4px',
};

const dividerStyle: React.CSSProperties = {
  width: '100%',
  height: '2px',
  backgroundColor: '#ffffff',
  margin: '8px 0',
};

export default function MiniDrawer() {
  const handleHomeClick = () => {
    window.location.href = '/home';
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle} onClick={handleHomeClick}>
        <Tooltip title="Home" placement="right" arrow>
          <LocalConvenienceStoreIcon style={iconStyle} />
        </Tooltip>
        <Typography variant="h6" noWrap component="div" style={{ marginLeft: '4px' }}>
          Finance
        </Typography>
      </div>
      <div style={dividerStyle}></div>
      <List style={{ flexGrow: 1 }}>
        <ListItem disablePadding>
          <Tooltip title="Overview" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <AccountBalanceRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Overview" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Income" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <MonetizationOnRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Income" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Expenses" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <SavingsRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Expenses" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Budget" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <AccountBalanceWalletRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Budget" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <Tooltip title="Help" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <HelpOutlineIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Help" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Logout" placement="right" arrow>
            <ListItemButton style={listItemButtonStyle}>
              <ListItemIcon>
                <LogoutIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Logout" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );
}
