import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/images/Deepsurf-logo.png";
import backButton from "../../assets/images/back.png";

const AuthLayout = ({
  children,
  title,
  showBackButton = false,   // default false
  secondaryImage = null,    // default null
}) => {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      bgcolor="background.default"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // sx={{ pt: "84px" }}  // header ke liye space
    >
      <Box
        bgcolor="background.paper"
        p={{
          xs: "8px",
          md: 4
        }
        }
        borderRadius={7}
        boxShadow={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        height={{ xs: "100%", sm: "autopx" }}
        width={{ xs: "90%", sm: "450px" }}
        gap={2}
      >
        {/* 🔹 Back Button + Logo */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          gap={2}
          mt={2}
        >
          {/* Arrow Button - Left */}
          {showBackButton && (
            <Box
              component="img"
              src={backButton}
              alt="Back"
              width={60}
              height={37}
              sx={{
                cursor: "pointer",
                position: "absolute",
                left: 10,
                // backgroundColor: "#fff",
                padding: "5px",
              }}
              onClick={() => window.history.back()}
            />
          )}

          {/* Center Logo */}
          <Box
            component="img"
            src={logo}
            alt="Deepsurf Logo"
            width={120}
            height="auto"
          />

          {/* Secondary Image - Right */}
          {secondaryImage && (
            <Box
              component="img"
              src={secondaryImage}
              alt="Secondary Image"
              width={40}
              height="auto"
              sx={{
                position: "absolute",
                right: 0,
              }}
            />
          )}
        </Box>


        {/* 🔹 Page Title */}
        <Box my={3}>
          <Typography variant="h4" color="text.primary" fontFamily={"'inter'"}>
            {title}
          </Typography>
        </Box>

        {/* 🔹 Page Content */}
        <Box width="100%" fontFamily={"'inter'"}>{children}</Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
