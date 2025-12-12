"use client";
import React from "react";
import { Box, Typography, Drawer, IconButton, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import logo from "../../../assets/images/Deepsurf-logo.png";
import globeIcon from "../../../assets/icons/globle.png";
import { drawerStyles } from "./styles";
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

const NavigationDrawer = ({
  open,
  onClose,
  navItems,
  activeNav,
  onNavClick,
}) => {
  const { t } = useTranslation();
  const currentLang = (i18n.language || "en").split("-")[0];
  const selectedLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const renderDrawerNavItems = () => {
    return navItems.map((item) => {
      if (item.dropdown) {
        return (
          <Box key="language-dropdown" sx={{ px: 2, py: 1 }}>
            <Typography sx={{ color: "#A3A3A3", fontSize: "14px", mb: 1 }}>
              {item.label}
            </Typography>
            <CustomSelect
              backgroundColor="transparent"
              value={selectedLang.code}
              onChange={handleLanguageChange}
              renderValue={(selected) => {
                const lang =
                  languages.find((l) => l.code === selected) || languages[0];
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
                    <Typography sx={{ color: "#A3A3A3", fontSize: "15px" }}>
                      {t(lang.labelKey)}
                    </Typography>
                  </Box>
                );
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
                    <Typography sx={{ color: "#fff" }}>
                      {t(lang.labelKey)}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </CustomSelect>
          </Box>
        );
      }

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
      <Box sx={drawerStyles.drawerNavContainer}>{renderDrawerNavItems()}</Box>

      {/* Drawer Footer */}
      {/* <Box sx={drawerStyles.drawerFooter}>
        <Box sx={drawerStyles.drawerFooterProfile}>
          <PersonIcon sx={drawerStyles.drawerFooterProfileIcon} />
          <Typography sx={drawerStyles.drawerFooterProfileText}>
            Profile
          </Typography>
        </Box>
      </Box> */}
    </Drawer>
  );
};

export default NavigationDrawer;
