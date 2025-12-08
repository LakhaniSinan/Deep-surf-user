"use client";
import React, { useState, useEffect } from "react";
import { Box, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Deepsurf-logo.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";
import WaitlistDialog from "../../../components/waitList";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const navItems = [
    { link: "", label: "Waitlist" },
    { link: "/login", label: "Login" },
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

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleNavClick = (item) => {
    if (item.label === "Waitlist") {
      setWaitlistOpen(true);
      return;
    }

    setActiveNav(item.label);
    navigate(item.link);
    setDrawerOpen(false);
  };

  return (
    <>

      <Box py={2} sx={{
        background: "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 999

      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
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

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    px: 3,
                    py: 1.3,
                    borderRadius: "12px",
                    fontSize: "14px",
                    color: "white",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.5)"
                      : "1px solid rgba(255,255,255,0.2)",
                    background: isActive
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={headerStyles.menuButton}>
            <MenuIcon sx={{ fontSize: "24px" }} />
          </IconButton>
        </Box>
      </Box>
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