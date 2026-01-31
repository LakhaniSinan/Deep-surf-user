import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#400b40",
      light: "#6b3a6b",
      dark: "#2d072d",
    },
    accent: {
      main: "#FF6421",
      contrastText: "#FFFF",
    },
    secondary: {
      main: "#f50057",
    },
    neutral: {
      surface: "#161616",
      card: "#1E1E1E",
      line: "rgba(255,255,255,0.08)",
      lineStrong: "rgba(255,255,255,0.15)",
      hover: "rgba(255,255,255,0.12)",
      mutedText: "rgba(255,255,255,0.45)",
      Apricot: "rgba(240, 156, 96, 0.35)",
      Snowwhite: "rgba(255, 255, 255, 1)",
      charcoalGrey: "rgba(26, 26, 26, 1)",
      vermilionOrange: "rgba(255, 100, 33, 1)",
      mediumGray: "rgba(140, 140, 140, 1)",
      lightgray: "rgba(207, 207, 207, 1)",
      brightRed: "rgba(255, 76, 76, 1)",
      brightGreen: "rgba(62, 221, 135, 1)",
      gray: "rgba(180, 180, 180, 1)",
      darkGrey: "rgba(28, 28, 28, 1)",
      black: "rgba(0, 0, 0, 1)",
      coolGray: "rgba(152, 154, 160, 1)",
      aquablue: "rgba(2, 144, 209, 0.87)",
      green: "rgba(0, 34, 16, 1)",
      coolGrey: "rgba(162, 163, 171, 1)",
      redOrange: "rgba(255, 68, 80, 1)",
      brightYellow: "rgba(255, 230, 0, 1)",
      richblack: "rgba(16, 16, 16, 1)",
      grey: "#aaa",
      primaryGreen: "rgba(2, 193, 115, 1)",
      dangerRed: "rgba(225, 26, 56, 1)",
      amber: "rgba(255, 230, 0, 1)",
      mutedGrey: "rgba(102, 102, 102, 1)",
      lightGreen: "rgba(30, 179, 99, 1)",
      neutralGrey: "rgba(127, 127, 127, 1)",
      steelGrey: "rgba(148, 150, 154, 1)",
      obsidianAsh: "rgba(55, 55, 55, 1)",
      neutralGray: "rgba(147, 148, 153, 1)",
      cadetGrey: "rgba(155, 163, 175, 1)",
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
      jetBlack: "#1C1C1C",
      mediumGray: "#333333",
      PeachGradient:
        "linear-gradient(90deg, rgba(255,103,22,0.18) 0%, rgba(255,160,84,0.10) 100%)",
      backgroundColor: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
      charcoal: "rgba(22, 22, 22, 1)",
      almostBlack: "rgba(37, 37, 37, 1)",
      Emerald: "rgba(16, 185, 129, 0.1)",
      carmineRed: "rgba(239, 68, 68, 1)",
      tarsparentColor: "rgba(239, 68, 68, 0.1)",
      Emerald: "rgba(16, 185, 129, 1)",
      carmineRed: "rgba(239, 68, 68, 1)",
      yellowGreen: "rgba(199, 217, 0, 1)",
      yellow: "rgba(237, 255, 33, 1)",
      brightRed: "rgba(255, 76, 5, 1)",
      purpleColor: "rgba(156, 57, 255, 1)",
      deepGreen: "rgba(41, 65, 52, 1)",
      darkBrown: "rgba(50, 36, 30, 1)",
      mintGreen: "rgba(62, 221, 135, 0.08)",
      transparentRed: "rgba(212, 51, 51, 0.08)",
      deepGreen: "rgba(41, 65, 52, 1)",
      darkBrown: "rgba(50, 36, 30, 1)",
      mintGreen : "rgba(62, 221, 135, 0.08)",
      transparentRed : "rgba(212, 51, 51, 0.08)",
      charcoalBlack : "rgba(41, 41, 41, 1)"
    },
    text: {
      primary: "#ffff",
      secondary: "#5E6267",
      grayish: "#AEB0B3",
      greenColor: "#3EDD87",
      errorColor: "#FF4C4C",
      yellowColor: "#FFD700",
      lightRedColor: "#FF4450",
      grey: "#5C616F",
      lightGrey: "#8D8D8D",
      peach: "#FFB37D",
      CoolGray: "#A3A3A3",
      lightGreen: "#85FFB6",
      DarkGrey: "#565656",
      Orange: "#FF6C03",
      Gainsboro: "#D9D9D9",
      SalmonRed: "rgba(255, 129, 129, 1)",
      DarkMaroon: "#391417",
      LightRed: "#FF6C82",
      mediumGrey: "#747474",
      bluishGray: "rgba(102, 106, 122, 1)",
      green: "rgba(0, 255, 0, 1)",
      red: "rgba(255, 0, 0, 1)",
      orange: "rgba(255, 166, 0, 1)",
      coolGrey: "rgba(141, 141, 141, 1)",
      silverGrey: "rgba(171, 175, 180, 1)",
      ghostGrey: "rgba(250, 251, 252, 1)",
      slateGrey: "rgba(155, 163, 175, 1)",
      limeGreen: "rgba(0, 255, 30, 1)",
      almostWhite: "rgba(250, 251, 252, 1)",
      Emerald: "rgba(16, 185, 129, 1)",
      carmineRed: "rgba(239, 68, 68, 1)",
      orange: "rgba(247, 147, 26, 1)",
      brightOrange: "rgba(245, 158, 11, 1)",
      yellowGreen: "rgba(199, 217, 0, 1)",
      White: "rgba(255, 255, 255, 0.5)",
      brightRed: "rgba(255, 3, 3, 1)",
      orangeRed: "rgba(255, 88, 3, 1)",
      emeraldGreen: "rgba(0, 204, 94, 1)",
      dangerRed: "rgba(212, 51, 51, 1)",
      primeRed: "rgba(255, 0, 0, 1)",
      darkGreen: "rgba(0, 119, 55, 1)",
      neutralGray: "rgba(141, 141, 141, 1)",
      dangerRed: "rgba(212, 51, 51, 1)",
      primeRed: "rgba(255, 0, 0, 1)",
      darkGreen: "rgba(0, 119, 55, 1)",
      mutedGray : "rgba(123, 123, 123, 1)"
    },
    gradients: {
      drawer:
        "linear-gradient(180deg, rgba(16, 16, 16, 0.95) 0%, rgba(22, 22, 22, 0.98) 100%)",
      drawerHeader:
        "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
      drawerFooter:
        "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
    },
  },

  typography: {
    // fontFamily: '"Poppins", sans-serif',
    fontFamily: "'Inter Tight'",

    h1: {
      fontFamily: "Inter Tight",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },

    h2: {
      fontFamily: "Inter Tight",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },

    h3: {
      fontFamily: "Inter Tight",
      fontSize: "35px",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: "Inter Tight",
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: "Inter Tight",
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: "Inter Tight",
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Inter Tight",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "Inter Tight",
      fontSize: "13px", // 14px
      fontWeight: 400,
      lineHeight: 1.5,
    },
    titleLg: {
      fontFamily: "Inter Tightf",
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: "0.01em",
    },
    labelMd: {
      fontFamily: "Inter Tight",
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.08em",
    },
    helperSm: {
      fontFamily: "Inter Tight",
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
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
            color: "#FFFFF",
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
        {
          // ⚪ Subtle outlined dark button
          props: { variant: "softOutlined" },
          style: {
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "0.5px solid #8F8F8F",
            color: "#FFFFFF",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid #8F8F8F",
              transform: "translateY(-1px)",
            },
          },
        },
        {
          // 🟠 Calculator toggle button (small, orange when selected)
          props: { variant: "calculatorToggle" },
          style: {
            background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
            border: "none",
            color: "#FFFFFF",
            // padding: "8px 50px",
            padding: "13px 54px",
            fontSize: "14px",
            minHeight: "36px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#FF7C31",
            },
          },
        },
        {
          // 📦 Calculator small button (for presets and unselected toggles)
          props: { variant: "calculatorSmall" },
          style: {
            backgroundColor: "#1A1A1A",
            border: "none",
            color: "#7B7B7B",
            padding: "8px 30px",
            fontSize: "14px",
            minHeight: "36px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "none",
            },
          },
        },
        {
          // 🟠 Calculator toggle button (small, orange when selected)
          props: { variant: "analyzeButton" },
          style: {
            fontSize: "50px",
            fontWeight: 400,
            color: "#fff",
            fontFamily: "Inter Tight",
            backgroundColor: "rgba(255, 100, 33, 1)",
            borderRadius: "20px", // ✅ yahan
            padding: "15px 20px",
            "&:hover": {
              backgroundColor: "rgba(235, 90, 25, 1)",
            },
          },
        },
        {
          // 🟠 Calculator toggle button (small, orange when selected)
          props: { variant: "predictorBtn" },
          style: {
            // background: "rgba(255, 162, 6, 1)",
            border: "1px solid rgba(158, 158, 158, 1)",
            color: "rgba(255, 255, 255, 0.5)",
            padding: "13px 100px",
            fontSize: "18px",
            minHeight: "36px",
            borderRadius: "30px",
          },
        },
      ],
    },

    MuiTypography: {
      variants: [
        {
          props: { variant: "titleLg" },
          style: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.35,
            letterSpacing: "0.01em",
            color: "#F5F5F5",
            fontFamily: "Inter Tight",
          },
        },
        {
          props: { variant: "labelMd" },
          style: {
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            // textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
            fontFamily: "Inter Tight",
          },
        },
        {
          props: { variant: "helperSm" },
          style: {
            fontSize: "0.75rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.38)",
            fontFamily: "Inter Tight",
          },
        },
      ],
    },
  },
});

export default theme;
