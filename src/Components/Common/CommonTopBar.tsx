import React from "react";
import { Box, Container, Divider, Typography, IconButton } from "@mui/material";
import MiniDrawer from "./CommonSideBar";
import MenuIcon from "@mui/icons-material/Menu";

const CommonTopBar: React.FC<{ title: string }> = ({ title }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#111827",
          color: "white",
          height: "8vh",
          display: "flex",
          alignItems: "center",
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
      </Box>
      <MiniDrawer open={drawerOpen} onClose={handleDrawerToggle} />
    </>
  );
};

export default CommonTopBar;
