import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CustomButton from "../../../components/customButton";
import Okx from "../../../assets/icons/okx.png";
import Binance from "../../../assets/icons/binance.png";
import Bybit from "../../../assets/icons/bybit.png";
import Mexc from "../../../assets/icons/mexc.png";
import BitGet from "../../../assets/icons/bitget.svg";
import Bing from "../../../assets/icons/bing x.png";
import TimingImages from "../../../assets/images/timing-image.png";
import logos from "../../../assets/images/logos.png"
import AOS from "aos";
import "aos/dist/aos.css";

const AiDriven = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        mt={7}
        data-aos="fade-down"
        sx={{
          borderRadius: "30px",
          padding: "9px 14px",
          background: "rgba(52, 30, 21, 0.5)",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          alignItems: "center",
        }}
      >
        <img src={TimingImages} alt="timer" style={{ width: 16, height: 16 }} />
        <h5
          style={{
            background: "linear-gradient(to right, #FFB37D, #FFF3EA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'inter', sans-serif",
            fontWeight: "500",
          }}
        >
          AI analysis
        </h5>
      </Box>
      <Box mt={5} data-aos="fade-up">
        <Typography
          color="accent.contrastText"
          fontSize={{ xs: 30, md: 60 }}
          fontWeight={600}
          lineHeight={1.1}
          textAlign={"center"}
          sx={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          AI-driven Trading <br /> Intelligence Engine
        </Typography>
      </Box>
      <Box mt={4.8} data-aos="fade-up">
        <Typography
          color="text.CoolGray"
          fontSize={{ xs: 12, md: 16 }}
          fontWeight={600}
          lineHeight={1.3}
          sx={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Powered by proprietary machine learning models, real- <br />
          time market data, and years of quantitative research.
        </Typography>
      </Box>
      <Box mt={4} data-aos="zoom-in">
        <CustomButton
          title="Get started"
          sx={{
            color: "#fff",
            borderRadius: "10px",
            background: "#FF6C03",
            fontSize: "16px",
            px: "45px",
            "&:hover": {
              boxShadow: "0px 6px 25px rgba(255,150,0,0.5)",
            },
          }}
        />
      </Box>
      <Box mt={16} textAlign={"center"} data-aos="fade-up">
        <Typography
          color="accent.contrastText"
          fontSize={{ xs: 20, md: 33 }}
          fontWeight={700}
          sx={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Trusted by traders worldwide.
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: 10, md: 16 }}
          color="accent.contrastText"
          sx={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Built for those who think in probabilities, not predictions.
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 13 }}
          mt={7}
          alignItems="center"
          justifyContent={{ xs: "space-between", md: "space-evenly" }}
          wrap="nowrap"
          data-aos="fade-up"
        >
          {/* {[Okx, Binance, Bybit, Mexc, BitGet, Bing].map((img, index) => (
            <Grid item xs="auto" key={index} sx={{ alignItems: "center" }}> */}
          <Stack px={3} alignItems={"center"}>
            <Box
              component="img"
              src={logos}
              alt="logo"
              sx={{ width: { xs: "80%", md: "54%" } }}
            />
          </Stack>
          {/* </Grid> */}
          {/* ))} */}
        </Grid>
      </Box>
    </>
  );
};

export default AiDriven;
