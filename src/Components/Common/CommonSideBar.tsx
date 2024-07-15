import * as React from "react";
import type { Theme, CSSObject } from "@mui/material/styles";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 60;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#111827",
  color: "#ffffff",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: "#111827",
  color: "#ffffff",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  ...theme.mixins.toolbar,
  backgroundColor: "#111827",
  color: "#ffffff",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...openedMixin(theme),
  "& .MuiDrawer-paper": openedMixin(theme),
}));

export default function CommonSideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <h1>Debugging</h1>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography variant="h6" noWrap component="div">
              Finance
            </Typography>
          </DrawerHeader>
          <List>
            <ListItem disablePadding>
              <Tooltip title="Overview" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBalanceRoundedIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Overview" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
            <ListItem disablePadding>
              <Tooltip title="Income" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <MonetizationOnRoundedIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Income" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
            <ListItem disablePadding>
              <Tooltip title="Expenses" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <SavingsRoundedIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Expenses" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
            <ListItem disablePadding>
              <Tooltip title="Budget" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBalanceWalletRoundedIcon
                      sx={{ color: "#ffffff" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Budget" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <Tooltip title="Help" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <HelpOutlineIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Help" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </List>
          <Box sx={{ flexGrow: 1 }} />
          <List>
            <ListItem disablePadding>
              <Tooltip title="Settings" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
            <ListItem disablePadding>
              <Tooltip title="Logout" placement="right" arrow>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ display: "none" }} />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
