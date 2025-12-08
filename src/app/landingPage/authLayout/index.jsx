// Layout.jsx
import { Box } from "@mui/material";
import Header from "../../landingPage/LandingPageHeader";
import bgImage from "../../../assets/images/background.png";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `
    linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)),
    url(${bgImage})
  `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}

    >
      <Header />
      <Box
        sx={{
          paddingTop: {
            xs: "100px",
            sm: "100px",
            md: "180px"
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
