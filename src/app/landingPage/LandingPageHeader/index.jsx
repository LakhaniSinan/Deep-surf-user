"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, IconButton, AppBar, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Deepsurf-logo.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";
import WaitlistDialog from "../../../components/waitList";
import CustomSelect from "../../../components/customSelect";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navItems = [
    { label: "Language", dropdown: true },
    { link: "", label: "Waitlist" },
    { link: "/login", label: "Login" },
  ];

  const languages = [
    { code: "en", label: "English", icon: "/icons/english.png" },
    { code: "tr", label: "Turkish", icon: "/icons/turkish.png" },
    { code: "es", label: "Spanish", icon: "/icons/spanish.png" },
    { code: "ru", label: "Russian", icon: "/icons/russian.png" },
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => item.link === currentPath);
    setActiveNav(activeItem ? activeItem.label : "");
  }, [location.pathname]);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleNavClick = (item) => {
    if (item.label === "Waitlist") {
      document.getElementById("join-section")?.scrollIntoView({ behavior: "smooth" });
      setWaitlistOpen(true);
      return;
    }
    setActiveNav(item.label);
    navigate(item.link);
    setDrawerOpen(false);
  };

  const handleLanguageChange = (e) => {
    const lang = languages.find((l) => l.code === e.target.value);
    if (lang) setSelectedLang(lang);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          px: { xs: 0, sm: 1, md: 18 },
          py: 2,
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            px: { xs: 2, md: 4 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box component="img" src={logo} alt="Logo" sx={headerStyles.logo} />
          </Box>

          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 3,
              px: 2, 
              py: 1, 
            }}
          >
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <CustomSelect
                    key="language-dropdown"
                    value={selectedLang.code}
                    onChange={handleLanguageChange}
                    stylePropos={{
                      color: "#A3A3A3",
                      fontSize: "15px",
                      minWidth: "200px",
                      height: "45px", // consistent height
                      paddingLeft: "10px", // thodi left padding
                    }}
                  >
                    {languages.map((lang) => (
                      <MenuItem key={lang.code} value={lang.code}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <img src={lang.icon} alt={lang.label} width="22px" height="22px" />
                          {lang.label}
                        </Box>
                      </MenuItem>
                    ))}
                  </CustomSelect>
                );
              }

              const isLogin = item.label === "Login";
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    px: isLogin ? 6 : 3,
                    py: isLogin ? 1.3 : 2,
                    borderRadius: isLogin ? "12px" : "0px",
                    fontSize: "15px",
                    color: "#A3A3A3",
                    border: isLogin ? "1px solid rgba(255,255,255,0.2)" : "none",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <IconButton onClick={handleDrawerToggle} sx={headerStyles.menuButton}>
            <MenuIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </AppBar>

      <NavigationDrawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
        activeNav={activeNav}
        onNavClick={handleNavClick}
      />

      <WaitlistDialog
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
};

export default Header;
