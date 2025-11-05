import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#400b40",
      light: "#6b3a6b",
      dark: "#2d072d",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#101010",
      paper: "#161616",
      black: "#000000",
      darkGray: "#0F0F0F",
      gray: "#1F1F1F",
      lightGray: "#1A1A1A",
      veryLightGray: "#141414",
      extraLightGray: "#0D0D0D",
      mediumGray: "#333333",
    },
    text: {
      primary: "#ffffffff",
      secondary: "#5E6267",
    },
    gradients: {
      drawer: "linear-gradient(180deg, rgba(16, 16, 16, 0.95) 0%, rgba(22, 22, 22, 0.98) 100%)",
      drawerHeader: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
      drawerFooter: "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
    },
    body1: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "1rem", // 16px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },

  typography: {
    fontFamily:
      '"Poppins", "Noto Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          fontWeight: 600,
          fontSize: "16px",
          padding: "10px 24px",
          transition: "all 0.3s ease",
        },
      },
      variants: [
        {
          // 🟠 Gradient Button
          props: { variant: "gradient" },
          style: {
            background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
            color: "#fff",
            boxShadow: "0px 4px 10px rgba(255, 120, 0, 0.4)",
            "&:hover": {
              background: "linear-gradient(90deg, #FF3A00, #FF7C03, #FFB305)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 15px rgba(255,120,0,0.5)",
            },
          },
        },
        {
          // ⚫ Glossy Dark Button
          props: { variant: "glossyDark" },
          style: {
            background:
              "linear-gradient(145deg, rgba(30,30,30,0.9), rgba(10,10,10,0.7))",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "&:hover": {
              background:
                "linear-gradient(145deg, rgba(40,40,40,0.95), rgba(15,15,15,0.8))",
              transform: "translateY(-2px)",
              boxShadow:
                "inset 0 1px 4px rgba(255,255,255,0.2), 0 6px 20px rgba(0,0,0,0.4)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
