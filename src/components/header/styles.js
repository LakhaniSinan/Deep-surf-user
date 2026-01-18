export const headerStyles = {
  headerContainer: {
    height: "84px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // mx: { sm: 2, md: 22 },
    gap: 3,
    // position: "fixed",
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 1200,
    // overflow: "hidden",
    marginTop: "20px",
  },

  logo: {
    width: "115px",
    height: "38px",
  },

  navContainer: {
    display: { xs: "none", lg: "flex" },
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // mx: 1,
    width: "90%",
    overflow: "hidden",
    // width: "100%",
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "background.black",
    border: "1px solid rgba(255, 255, 255, 0.36)",
    borderRadius: "50px",
    padding: "10px",
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
  },

  navItem: (isActive) => ({
    padding: "clamp(10px, 1.2vw, 14px) clamp(13px, 2vw, 23px)",
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
    fontSize: "12px",
    fontWeight: isActive ? 700 : 400,
    color: "text.primary",
    textAlign: "center",
    whiteSpace: "nowrap",
  }),
  menuButton: {
    display: { xs: "flex", lg: "none" },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "background.gray",
    color: "text.primary",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "&:hover": {
      backgroundColor: "background.lightGray",
      transform: "scale(1.05)",
    },
    transition: "all 0.2s ease",
  },

  profileIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "background.gray",
    cursor: "pointer",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    "&:hover": {
      backgroundColor: "background.lightGray",
      transform: "scale(1.05)",
    },
    transition: "all 0.2s ease",
  },
};

export const drawerStyles = {
  drawerRoot: {
    display: { xs: "block", lg: "none" },
  },

  drawerPaper: {
    width: { xs: "85%", sm: 320 },
    maxWidth: "400px",
    backgroundColor: "background.paper",
    backgroundImage: "gradients.drawer",
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
    background: "gradients.drawerHeader",
  },

  drawerLogo: {
    width: 120,
    height: "auto",
  },

  closeButton: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    backgroundColor: "background.lightGray",
    color: "text.primary",
    "&:hover": {
      backgroundColor: "background.mediumGray",
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
    backgroundColor: isActive ? "background.veryLightGray" : "transparent",
    border: isActive
      ? "0.3px solid rgba(255, 255, 255, 0.36)"
      : "1px solid transparent",
    boxShadow: isActive
      ? "inset 0px 4px 5px 0px rgba(255, 255, 255, 0.19)"
      : "none",
    marginBottom: 1,
    "&:hover": {
      backgroundColor: isActive
        ? "background.veryLightGray"
        : "background.extraLightGray",
      transform: "translateX(8px)",
    },
  }),

  drawerNavItemText: (isActive) => ({
    fontSize: "14px",
    fontWeight: isActive ? 700 : 400,
    color: "text.primary",
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
    background: "gradients.drawerFooter",
  },

  drawerFooterProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    padding: "12px",
    borderRadius: "12px",
    backgroundColor: "background.extraLightGray",
    cursor: "pointer",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "background.lightGray",
    },
  },

  drawerFooterProfileIcon: {
    color: "text.primary",
    fontSize: "20px",
  },

  drawerFooterProfileText: {
    fontSize: "14px",
    fontWeight: 500,
    color: "text.primary",
  },

  closeIcon: {
    fontSize: "20px",
  },
};
