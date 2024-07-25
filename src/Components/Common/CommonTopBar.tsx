import { Box, Container } from "@mui/system";
import React from "react";
import MiniDrawer from "./CommonSideBar";
import { Divider, Typography } from "@mui/material";

const CommonTopBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#111827",
          color: "white",
          height: "8vh",
          display: "block",
          position: "relative",
          paddingTop: "2vh",
        }}
      >
        <div
          style={{
            marginLeft: "16px",
            marginTop: 4,
          }}
        >
          <Typography variant="h4" sx={{fontWeight: 700}}>{title}</Typography>
        </div>
        {/* <Divider sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 64,
                    border: '1px inset wheat',
                    backgroundColor: '#ffffff'
                }} /> */}
      </Box>
    </>
  );
};

export default CommonTopBar;
