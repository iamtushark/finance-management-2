import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactlessIcon from "@mui/icons-material/Contactless";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 56;

export default function MiniDrawer() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, display: { sm: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#111827",
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            backgroundColor: "#111827",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          <ContactlessIcon sx={{ color: "#ffffff", fontSize: "48px" }} />
        </div>
        <List>
          <ListItem disablePadding>
            <Tooltip title="Overview" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/dashboard")}>
                <ListItemIcon>
                  <AccountBalanceRoundedIcon
                    sx={{ color: "#ffffff", fontSize: "24px" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Income" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/income")}>
                <ListItemIcon>
                  <MonetizationOnRoundedIcon
                    sx={{ color: "#ffffff", fontSize: "24px" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Expenses" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/expense")}>
                <ListItemIcon>
                  <SavingsRoundedIcon
                    sx={{ color: "#ffffff", fontSize: "24px" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Budget" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/budget")}>
                <ListItemIcon>
                  <AccountBalanceWalletRoundedIcon
                    sx={{ color: "#ffffff", fontSize: "24px" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Transactions" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/transactions")}>
                <ListItemIcon>
                  <ReceiptIcon sx={{ color: "#ffffff", fontSize: "24px" }} />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
        <List sx={{ marginTop: "auto" }}>
          <ListItem disablePadding>
            <Tooltip title="Profile" placement="right" arrow>
              <ListItemButton
                sx={{ margin: "8px 0" }}
                onClick={() => navigate("/")}
              >
                <ListItemIcon>
                  <AccountBoxIcon sx={{ color: "#ffffff", fontSize: "24px" }} />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            <Tooltip title="Logout" placement="right" arrow>
              <ListItemButton onClick={() => navigate("/logout")}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#ffffff", fontSize: "24px" }} />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
