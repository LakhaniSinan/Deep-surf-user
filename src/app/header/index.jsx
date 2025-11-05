"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/customButton/index"; 
import logo from "../../assets/images/Deepsurf-logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 4 }, 
        py: 2,
        backgroundColor: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        overflow: "hidden", 
        boxSizing: "border-box", 
      }}
    >
      {/* 🔹 Left: Logo */}
      <Box 
        component="img" 
        src={logo} 
        alt="Logo" 
        sx={{ 
          height: { xs: 30, md: 40 }, // Responsive height
          maxWidth: '100%',
        }} 
      />

      {/* 🔹 Right: Buttons */}
      <Box sx={{ 
        display: "flex", 
        gap: { xs: 1, md: 2 }, // Responsive gap
        flexShrink: 0 // Prevent buttons from shrinking
      }}>
        <CustomButton
          variant="glossyDark"
          title="Waitlist"
          handleClickBtn={() => console.log("Sign In clicked")}
        />
        <CustomButton
          variant="glossyDark"
          title="Login"
          handleClickBtn={() => console.log("Register clicked")}
        />
      </Box>
    </Box>
  );
};

export default Header;
