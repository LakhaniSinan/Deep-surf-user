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
  console.log("user", user);
  const location = useLocation();
  const { logout } = useAuthStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    user?.profilePicture || ""
  );
  console.log("profilepicture ", profilePicture);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const { t } = useTranslation();
  const navItems = [
    { link: "/dashboard", label: t("dashboard.navitem.dashboard") },
    { link: "/journal", label: t("dashboard.navitem.journal") },
    { link: "/coming-soon", label: t("dashboard.navitem.chart") },
    { link: "/calculator", label: t("dashboard.navitem.calculator") },
    { link: "/ai-tools", label: t("dashboard.navitem.aiTools") },
    // { link: "/new-ai", label: "Ai Tools"},
    { link: "/pro-analytics", label: t("dashboard.navitem.proAnalytics") },
    { link: "/market-outlook", label: t("dashboard.navitem.marketOutlook") },
    { link: "/notification", label: t("dashboard.navitem.notification") }

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
      {/* <Box sx={headerStyles.headerContainer}> */}
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", gap: 2, mt: 3 }}>
        <Box
          display="flex"
          alignItems="center"
          gap={1.5}
          // flexShrink={0}
          sx={{ minWidth: 0, cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          <Box
            component="img"
            src={logo}
            alt="Deepsurf Logo"
            sx={headerStyles.logo}
          />
        </Box>

        <Box sx={headerStyles.navContainer}>
          <Box sx={headerStyles.navBar}>{renderNavItems()}</Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={{ xs: 1, sm: 1.5 }}
          flexShrink={0}
        >
          <IconButton onClick={handleDrawerToggle} sx={headerStyles.menuButton}>
            <MenuIcon sx={{ fontSize: "24px" }} />
          </IconButton>
          {/* Person Icon */}
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
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleSetting}>{t("dashboard.navitem.setting")}</MenuItem>
              <MenuItem onClick={handleLogout}>{t("dashboard.navitem.logout")}</MenuItem>
            </Menu>
          </Box>

        </Box>
      </Container>
      {/* </Box> */}
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
