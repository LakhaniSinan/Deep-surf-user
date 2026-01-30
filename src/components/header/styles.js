export const headerStyles = {
  headerContainer: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000",
    paddingX: { xs: 2, sm: 3, md: 4, lg: 6, xl: 22 },
    gap: { xs: 2, md: 3, lg: 4 },
    mt: 2,
    // position: "sticky",
    // top: 0,
    // zIndex: 1000,
  },

  logo: {
    width: "140px",
    height: "auto",
    cursor: "pointer",
    flexShrink: 0,
  },

  navContainer: {
    display: { xs: "none", lg: "flex" },
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    maxWidth: "1100px",
    marginX: "auto",
  },

  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.36)",
    borderRadius: "50px",
    padding: "5px 5px",
    gap: "6px",
    // width: "90%",
  },
  navItem: (isActive) => ({
    padding: "clamp(10px, 1.2vw, 15px) clamp(13px, 2vw, 20px)",
    // padding: 2.7,
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: isActive ? "background.veryLightGray" : "transparent",
    border: isActive
      ? "0.3px solid rgba(255, 255, 255, 0.36)"
      : "1px solid transparent",
    boxShadow: isActive
      ? "inset 0px 4px 5px 0px rgba(255, 255, 255, 0.19)"
      : "none",
    "&:hover": {
      backgroundColor: isActive
        ? "background.veryLightGray"
        : "background.extraLightGray",
    },
  }),

  navItemText: (isActive) => ({
    fontSize: "11px",
    fontWeight: isActive ? 700 : 400,
    color: "text.primary",
    textAlign: "center",
    whiteSpace: "nowrap",
  }),

  menuButton: {
    display: { xs: "flex", lg: "none" },
    // width: "44px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    "&:hover": {
      backgroundColor: "#2D2D2D",
    },
    transition: "all 0.2s ease",
  },

  profileIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: "#1A1A1A",
    cursor: "pointer",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    "&:hover": {
      backgroundColor: "#2D2D2D",
    },
    transition: "all 0.2s ease",
    flexShrink: 0,
  },
};

export const drawerStyles = {
  drawerRoot: {
    display: { xs: "block", lg: "none" },
  },

  drawerPaper: {
    width: { xs: "85%", sm: 320 },
    maxWidth: "400px",
    backgroundColor: "#0A0A0A",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.5)",
  },

  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },

  drawerLogo: {
    width: 120,
    height: "auto",
  },

  closeButton: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transform: "rotate(90deg)",
    },
    transition: "all 0.3s ease",
  },

  drawerNavContainer: {
    padding: 2,
    paddingTop: 3,
    display: "flex",
    flexDirection: "column",
  },

  drawerNavItem: (isActive) => ({
    padding: "16px 24px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
    border: isActive
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "1px solid transparent",
    marginBottom: 1,
    "&:hover": {
      backgroundColor: isActive
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.05)",
      transform: "translateX(8px)",
    },
  }),

  drawerNavItemText: (isActive) => ({
    fontSize: "14px",
    fontWeight: isActive ? 600 : 400,
    color: "#FFFFFF",
    textAlign: "left",
    whiteSpace: "nowrap",
  }),

  drawerFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 2,
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },

  drawerFooterProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },

  drawerFooterProfileIcon: {
    color: "#FFFFFF",
    fontSize: "20px",
  },

  drawerFooterProfileText: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#FFFFFF",
  },

  closeIcon: {
    fontSize: "20px",
  },
};
