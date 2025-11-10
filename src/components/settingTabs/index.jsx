import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Profile Information", path: "/profile-information" },
  { name: "Settings", path: "/settings" },
  { name: "Notifications", path: "/notifications" },
  { name: "Subscription", path: "/subscription" },
  { name: "Referrals", path: "/referrals" },
];

const SettingTabs = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // mobile check
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 180;
  const drawerHeight = "auto";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        height: drawerHeight,
        bgcolor: "#161616",
        color: "white",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        ...(isMobile
          ? { position: "relative", top: 60, transform: "none", left: 0 } // mobile: normal drawer
          : { position: "fixed", top: "45%", transform: "translateY(-50%)", left: 150 }) // desktop: mini sidebar
      }}
    >
      

      <List sx={{ flex: 1, p: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.name}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 0.5,
                py: 0.5,
                backgroundColor: isActive ? "#2a2a2a" : "transparent",
                "&:hover": { backgroundColor: "#2a2a2a" },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 12,
                  color: isActive ? "#fff" : "#aaa",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Mobile toggle button */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1300,
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar */}
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
          {drawerContent}
        </Drawer>
      ) : (
        drawerContent // desktop mini sidebar
      )}

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          bgcolor: "#0f0f0f",
          color: "white",
          ml: isMobile ? 0 : `${drawerWidth + 16}px`, // leave space for mini sidebar
        }}
      >
        <Box
          sx={{
            bgcolor: "#1a1a1a",
            borderRadius: 4,
            p: { xs: 2, md: 4 },
            border: "1px solid #222",
            boxShadow: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SettingTabs;
