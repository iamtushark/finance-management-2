import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

interface CommonBoxProps extends StackProps {}

const CommonBox: React.FC<CommonBoxProps> = ({ children, ...props }) => {
  return (
    <Stack
      {...props}
      padding={2}
      sx={{
        minHeight: "90vh",
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        ...props.sx,
        // alignContent : "center",
      }}
    >
      {children}
    </Stack>
  );
};

export default CommonBox;
