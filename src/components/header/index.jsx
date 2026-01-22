"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Container } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/Deepsurf-logo.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";
import useAuthStore from "../../store/authStore";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const location = useLocation();
  const { logout } = useAuthStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const { t } = useTranslation();

  const navItems = [
    { link: "/dashboard", label: "Dashboard" },
    { link: "/journal", label: "Journal" },
    { link: "/coming-soon", label: "Chart" },
    { link: "/calculator", label: "Calculator" },
    { link: "/ai-tools", label: "AI Tools" },
    { link: "/pro-analytics", label: "Pro Analytics" },
    { link: "/market-outlook", label: "Market Outlook" },
    { link: "/notification", label: "Notification" }
  ];

  const [activeNav, setActiveNav] = useState(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.link === currentPath);
    return activeItem ? activeItem.label : "";
  });

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
    setDrawerOpen(false);
  };

  const handleDrawerNavClick = (item) => {
    handleNavClick(item);
  };

  const handlePersonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    logout();
    navigate("/");
  };

  const handleSetting = () => {
    navigate("/settings/");
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
        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          <Box
            component="img"
            src={logo}
            alt="Deepsurf Logo"
            sx={headerStyles.logo}
          />
        </Box>

        {/* Navigation Bar */}
        <Container maxWidth="md">
          <Box sx={headerStyles.navContainer}>
            <Box sx={headerStyles.navBar}>{renderNavItems()}</Box>
          </Box>
        </Container>

        {/* Right Side Icons */}
        <Box
          display="flex"
          alignItems="center"
          gap={1.5}
          flexShrink={0}
        >
          {/* Mobile Menu Button */}
          <IconButton onClick={handleDrawerToggle} sx={headerStyles.menuButton}>
            <MenuIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          {/* Profile Icon */}
          <Box>
            <IconButton
              onClick={handlePersonClick}
              sx={headerStyles.profileIcon}
            >
              {profilePicture ? (
                <Box
                  component="img"
                  src={profilePicture}
                  alt="Profile"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <PersonIcon />
              )}
            </IconButton>

            {/* Profile Menu */}
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  mt: 1,
                }
              }}
            >
              <MenuItem
                onClick={handleSetting}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }
                }}
              >
                {t("dashboard.navitem.setting")}
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }
                }}
              >
                {t("dashboard.navitem.logout")}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>

      {/* Mobile Drawer */}
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