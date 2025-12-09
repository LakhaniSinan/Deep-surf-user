"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Button, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/images/Deepsurf-logo.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";
import WaitlistDialog from "../../../components/waitList";
import AddToWaitList from "../../../components/waitList";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  // const [waitlistOpen, setWaitlistOpen] = useState(false);

  const navItems = [
    { link: "", label: "Waitlist", },
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
      const element = document.getElementById("join-section");
      element?.scrollIntoView({ behavior: "smooth" });
      setWaitlistOpen(true);
      return;
    }
    setActiveNav(item.label);
    navigate(item.link);
    setDrawerOpen(false);
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
          // zIndex: 999,
        }}
      >
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
              const isLogin = item.label === "Login";
              const isWaitList = item.label === "Waitlist" // sirf Login ke liye
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    px: isLogin ? 6 : 3, // agar Login to 5, baaki normal
                    py: isLogin ? 1.3 : 2,
                    borderRadius: isLogin ? "12px" : "0px",
                    // fontSize: "16px",
                    fontSize: isWaitList ? "16px" : "15px",
                    color: isLogin ? "rgba(163, 163, 163, 1)" : "rgba(163, 163, 163, 1)",
                    border: isLogin
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "none",
                    background: isLogin
                      ? "transparent" : "",
                    // backdropFilter: isLogin ? "blur(12px)" : "none",

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

      {/* <WaitlistDialog
        open={waitlistOpen}
        onClick={() => addToWaitList.current?.openDialog({ type: "add" })}
      /> */}

    </>
  );
};

export default Header;