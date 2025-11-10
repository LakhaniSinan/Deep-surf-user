"use client";
import React from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/images/Deepsurf-logo.png";
import { drawerStyles } from "./styles";

const NavigationDrawer = ({ open, onClose, navItems, activeNav, onNavClick }) => {
  // Navigation items renderer for drawer
  const renderDrawerNavItems = () => {
    return navItems.map((item) => {
      const isActive = activeNav === item.label;
      return (
        <Box
          key={item.label}
          onClick={() => onNavClick(item)}
          sx={drawerStyles.drawerNavItem(isActive)}
        >
          <Typography sx={drawerStyles.drawerNavItemText(isActive)}>
            {item.label}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        ...drawerStyles.drawerRoot,
        "& .MuiDrawer-paper": drawerStyles.drawerPaper,
      }}
    >
      {/* Drawer Header */}
      <Box sx={drawerStyles.drawerHeader}>
        <Box
          component="img"
          src={logo}
          alt="Deepsurf Logo"
          sx={drawerStyles.drawerLogo}
        />
        <IconButton onClick={onClose} sx={drawerStyles.closeButton}>
          <CloseIcon sx={drawerStyles.closeIcon} />
        </IconButton>
      </Box>

      {/* Drawer Navigation Items */}
      <Box sx={drawerStyles.drawerNavContainer}>
        {renderDrawerNavItems()}
      </Box>

      {/* Drawer Footer */}
      <Box sx={drawerStyles.drawerFooter}>
        <Box sx={drawerStyles.drawerFooterProfile}>
          <PersonIcon sx={drawerStyles.drawerFooterProfileIcon} />
          <Typography sx={drawerStyles.drawerFooterProfileText}>
            Profile
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;

