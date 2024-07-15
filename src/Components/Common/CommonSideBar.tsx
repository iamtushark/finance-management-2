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

export default function MiniDrawer() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    width: '60px',
    backgroundColor: '#111827',
    color: '#ffffff',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    backgroundColor: '#111827',
    color: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <Typography variant="h6" noWrap component="div">
          Finance
        </Typography>
      </div>
      <List style={{ flexGrow: 1 }}>
        <ListItem disablePadding>
          <Tooltip title="Overview" placement="right" arrow>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Overview" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Income" placement="right" arrow>
            <ListItemButton>
              <ListItemIcon>
                <MonetizationOnRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Income" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Expenses" placement="right" arrow>
            <ListItemButton>
              <ListItemIcon>
                <SavingsRoundedIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Expenses" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Budget" placement="right" arrow>
            <ListItemButton>
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
            <ListItemButton>
              <ListItemIcon>
                <HelpOutlineIcon style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Help" style={{ display: 'none' }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <ListItem disablePadding>
          <Tooltip title="Logout" placement="right" arrow>
            <ListItemButton>
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
