import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

import ProfileActiveIcon from "../../assets/icons/person-active.svg";
import SettingsActiveIcon from "../../assets/icons/settings-active.svg";
import NotificationActiveIcon from "../../assets/icons/notification-active.svg";
import SubscriptionActiveIcon from "../../assets/icons/subscription-active.svg";
import ReferralActiveIcon from "../../assets/icons/referral-active.svg";
import ProfileInactiveIcon from "../../assets/icons/person-active.svg";
import SettingsInactiveIcon from "../../assets/icons/setting-inactive.svg";
import NotificationInactiveIcon from "../../assets/icons/notification-inactive.svg";
import SubscriptionInactiveIcon from "../../assets/icons/subcription-inactive.svg";
import ReferralInactiveIcon from "../../assets/icons/referral-inactive.svg";
import { useTranslation } from "react-i18next";

const SettingTabs = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const drawerWidth = 220;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const menuItems = [
    {
      name: (t("SettingsTab.profileInformation")),
      path: "/settings/profile-information",
      activeIcon: ProfileActiveIcon,
      inactiveIcon: ProfileInactiveIcon,
    },
    {
      name: (t("SettingsTab.setting")),
      path: "/settings/website-settings",
      activeIcon: SettingsActiveIcon,
      inactiveIcon: SettingsInactiveIcon,
    },
    {
      name: (t("SettingsTab.notifications")),
      path: "/settings/notifications",
      activeIcon: NotificationActiveIcon,
      inactiveIcon: NotificationInactiveIcon,
    },
    {
      name: (t("SettingsTab.subscription")),
      path: "/settings/subscription",
      activeIcon: SubscriptionActiveIcon,
      inactiveIcon: SubscriptionInactiveIcon,
    },
    {
      name: (t("SettingsTab.referrals")),
      path: "/settings/referrals",
      activeIcon: ReferralActiveIcon,
      inactiveIcon: ReferralInactiveIcon,
    },
    {
      name: (t("SettingsTab.faq")),
      path: "/settings/faq",
      activeIcon: ReferralActiveIcon,
      inactiveIcon: ReferralInactiveIcon,
    },
  ];
  const renderList = () => (
    <Box
      sx={{
        width: drawerWidth,
        bgcolor: "#161616",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        boxShadow: "0px 12px 32px rgba(0,0,0,0.35)",
      }}
    >
      <List
        disablePadding
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.name}
              onClick={() => navigate(item.path)}
              sx={{
                bgcolor: isActive ? "#2F2F2F" : "transparent",
                borderRadius: 3,
                alignItems: "center",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  bgcolor: "#2F2F2F",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box
                  component="img"
                  src={isActive ? item.activeIcon : item.inactiveIcon}
                  alt={item.name}
                  sx={{ width: 20, height: 20, objectFit: "contain" }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#FFFFFF" : "#7A7A7A",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", gap: 2, height: "100%", mb: 5 }}>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 90,
            left: 20,
            zIndex: 999,
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#161616",
            },
          }}
        >
          {renderList()}
        </Drawer>
      ) : (
        <Box>{renderList()}</Box>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 2 },
          bgcolor: "#161616",
          color: "white",
          borderRadius: "16px",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
        }}
      >
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default SettingTabs;
