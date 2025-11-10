import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/Deepsurf-logo.png";

const AuthLayout = ({ children, title }) => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      bgcolor="background.default"
      display="flex"
      justifyContent="center"
      alignItems="center"
      
    >
      <Box
        bgcolor="background.paper"
        p={4}
        borderRadius={7}
        boxShadow={3}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        gap={2}
        height={{xs:"800%" ,sm:"550px"}}
        width={{xs:"80%" ,sm:"400px"}}
      >
        <Box
          component="img"
          src={logo}
          alt="Deepsurf Logo"
          width={110}
          height="auto"
        />

        <Box my={3}>
          <Typography variant="h4" color="text.primary">
            {title}
          </Typography>
        </Box>
         <Box>{children}</Box>
      </Box>

     
    </Box>
  );
};

export default AuthLayout;
