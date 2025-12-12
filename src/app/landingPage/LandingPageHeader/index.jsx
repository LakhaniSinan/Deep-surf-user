"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  AppBar,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import logo from "../../../assets/images/Deepsurf-logo.png";
import globeIcon from "../../../assets/icons/globle.png";
import NavigationDrawer from "./drawer";
import { headerStyles } from "./styles";
import WaitlistDialog from "../../../components/waitList";
import CustomSelect from "../../../components/customSelect";

const languages = [
  {
    code: "en",
    flag: "https://flagcdn.com/w20/gb.png",
    labelKey: "header.english",
  },
  {
    code: "tr",
    flag: "https://flagcdn.com/w20/tr.png",
    labelKey: "header.turkish",
  },
  {
    code: "es",
    flag: "https://flagcdn.com/w20/es.png",
    labelKey: "header.spanish",
  },
  {
    code: "ru",
    flag: "https://flagcdn.com/w20/ru.png",
    labelKey: "header.russian",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const currentLang = (i18n.language || "en").split("-")[0];
  const selectedLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  const navItems = [
    { label: t("header.language"), dropdown: true },
    { link: "", label: t("header.waitlist") },
    { link: "/login", label: t("header.login") },
  ];

  useEffect(() => {
    const activeItem = navItems.find((item) => item.link === location.pathname);
    setActiveNav(activeItem ? activeItem.label : "");
  }, [location.pathname, t]);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleNavClick = (item) => {
    if (item.label === t("header.waitlist")) {
      document
        .getElementById("join-section")
        ?.scrollIntoView({ behavior: "smooth" });
      setWaitlistOpen(true);
      return;
    }
    setActiveNav(item.label);
    navigate(item.link);
    setDrawerOpen(false);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
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
                  <Box key="language-dropdown" sx={{ minWidth: "fit-content" }}>
                    <CustomSelect
                      height="50px"
                      value={selectedLang.code}
                      onChange={handleLanguageChange}
                      renderValue={(selected) => {
                        const lang =
                          languages.find((l) => l.code === selected) ||
                          languages[0];
                        return (
                          <Box display="flex" alignItems="center" gap={1}>
                            <Box
                              component="img"
                              src={globeIcon}
                              alt="Language"
                              sx={{
                                width: "20px",
                                height: "20px",
                              }}
                            />
                            <Typography
                              sx={{ color: "#A3A3A3", fontSize: "15px" }}
                            >
                              {t(lang.labelKey)}
                            </Typography>
                          </Box>
                        );
                      }}
                      backgroundColor="transparent"
                      sx={{
                        height: "60px",
                      }}
                    >
                      {languages.map((lang) => (
                        <MenuItem key={lang.code} value={lang.code}>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Box
                              component="img"
                              src={lang.flag}
                              alt={lang.code}
                              sx={{
                                width: "22px",
                                height: "16px",
                                borderRadius: "2px",
                              }}
                            />
                            <Typography color="text.primary">
                              {t(lang.labelKey)}
                            </Typography>
                          </Box>
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </Box>
                );
              }

              const isLogin = item.label === t("header.login");
              return (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  sx={{
                    px: 6,
                    // backdropFilter: "blur(6px)",
                    // background: "rgba(50, 47, 47, 0.4)", 
                    py: 1.3,
                    borderRadius: "12px",
                    fontSize: "15px",
                    color: "#A3A3A3",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
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
