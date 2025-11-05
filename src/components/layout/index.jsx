import React from "react";
import { Box } from "@mui/material";
import Header from "../../app/header";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", m: 0, p: 0 }}>
      
      {/* Header */}
      {/* <Header /> */}

      {/* Main content */}
      <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
        {children}
      </Box>

      {/* Footer */}
        {/* <Box sx={{ bgcolor: "primary.main", color: "white", py: 2, textAlign: "center" }}>
            Footer © 2025
        </Box> */}
    </Box>
  );
};

export default Layout;
