"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/Deepsurf-logo.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { link: "/home", label: "Dashboard" },
    { link: "/journal", label: "Journal" },
    { link: "/faq", label: "FAQ" },
    { link: "/chart", label: "Chart" },
    { link: "/calculator", label: "Calculator" },
    { link: "/ai-tools", label: "AI Tools" },
    { link: "/pro-analytics", label: "Pro Analytics" },
    { link: "/market-outlook", label: "Market Outlook" },
    { link: "/settings", label: "Settings" },
  ];

  // Get active nav based on current location
  const [activeNav, setActiveNav] = useState(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.link === currentPath);
    return activeItem ? activeItem.label : "";
  });

  // Update active nav when location changes
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.link === currentPath);
    setActiveNav(activeItem ? activeItem.label : "");
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (item) => {
    setActiveNav(item.label);
    navigate(item.link);
    setDrawerOpen(false); // Close drawer on mobile after selection
  };

  const handleDrawerNavClick = (item) => {
    handleNavClick(item);
  };

  const renderNavItems = () => {
    return navItems.map((item) => {
      const isActive = activeNav === item.label;
      return (
        <Box
          key={item.label}
          onClick={() => handleNavClick(item)}
          sx={headerStyles.navItem(isActive)}
        >
          <Typography sx={headerStyles.navItemText(isActive)}>
            {item.label}
          </Typography>
        </Box>
      );
    });
  };

  return (
    <>
      <Box sx={headerStyles.headerContainer}>
        <Box 
          display="flex" 
          alignItems="center" 
          gap={1.5} 
          flexShrink={0} 
          sx={{ minWidth: 0, cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          <Box component="img" src={logo} alt="Deepsurf Logo" sx={headerStyles.logo} />
        </Box>

        <Box sx={headerStyles.navContainer}>
          <Box sx={headerStyles.navBar}>
            {renderNavItems()}
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 1.5 }} flexShrink={0}>
          <IconButton onClick={handleDrawerToggle} sx={headerStyles.menuButton}>
            <MenuIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            sx={{ ...headerStyles.profileIcon, cursor: "pointer" }}
            onClick={() => navigate("/profile")}
          >
            <PersonIcon sx={{ color: "text.primary", fontSize: "24px" }} />
          </Box>
        </Box>
      </Box>

      {/* 🔹 Mobile Drawer */}
      <NavigationDrawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
        activeNav={activeNav}
        onNavClick={handleDrawerNavClick}
      />
    </>
  );
};

export default Header;
