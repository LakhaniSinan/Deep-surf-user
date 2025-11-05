import { Box, Button, Typography } from "@mui/material";
import bg from "../../assets/images/background-Img.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import CustomButton from "../../components/customButton";
import Header from "../header";
import { homeData } from "../../data/home";
import theme from "../../theme";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        m: 0,
        p: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header is already sticky and transparent */}
      <Header />

      {/* Centered Button */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AccessTimeIcon />}
          sx={{
            borderRadius: "50px",
            backgroundColor: "transparent",
            color: "white", // Text aur icon ka colour
            padding: "8px 16px",
            textTransform: "none",
            fontWeight: "normal",
            "&:hover": {
              backgroundColor: "#424242",
            },
          }}
        >
          Limited access
        </Button>
      </Box>

      <Box>
        {/* Additional content can go here */}
        <Typography
          variant="h1"
          sx={{ color: "white", textAlign: "center", mt: 4 }}
        >
          {homeData.heading}
        </Typography>
        <Typography
          variant="body1"
          color=""

          sx={{ color: "text.primary", textAlign: "center", mt: 2 }}
        >
          {homeData.subHeading}
        </Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} mt={4}>
        <CustomButton variant="gradient" title="Get Started" />
      </Box>
    </Box>
  );
};

export default Home;
