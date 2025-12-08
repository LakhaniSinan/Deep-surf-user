import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../../components/customButton";
// import Limited from "../../../assets/icons/limited.png";
import Okx from "../../../assets/icons/okx.png";
import Binance from "../../../assets/icons/binance.png";
import Bybit from "../../../assets/icons/bybit.png";
import Mexc from "../../../assets/icons/mexc.png";
import BitGet from "../../../assets/icons/bitget.svg";
import Bing from "../../../assets/icons/bing x.png";
import TimingImages from "../../../assets/icons/timing.png"

const AiDriven = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        mt={7}
        sx={{
          // border: "1px solid #FFF3EA",
          borderRadius: "30px",
          padding: "9px 14px",
          background: "rgba(52, 30, 21, 0.5)", // 0.5 transparency
          backdropFilter: "blur(10px)",

          cursor: "pointer",
          alignItems: "center"
        }}
      >
        <img src={TimingImages} alt="timer" style={{ width: 16, height: 16 }} />

        <h5 style={{
          background: 'linear-gradient(to right, #FFB37D, #FFF3EA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'inter' , san-sarif",
          fontWeight: "500"
        }}>
          Limited access
        </h5>
      </Box>

      <Box mt={5}>
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
      <Box mt={4.8}>
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
      <Box mt={4}>
        <CustomButton
          title="Get started"
          variant="calculatorToggle"
          sx={{
            // backgroundColor: "#FF6C03",
            color: "#fff",
            bodrerRadius: "10px",
            "&:hover": {
              boxShadow: "0px 6px 25px rgba(255,150,0,0.5)",
            },
          }}
        />
      </Box>
      <Box mt={16} textAlign={"center"}>
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
        >
          <Grid item xs="auto">
            <Box
              component="img"
              src={Okx}
              alt="Okx"
              sx={{ width: { xs: 25, md: 40 } }}
            />
          </Grid>

          <Grid item xs="auto">
            <Box
              component="img"
              src={Binance}
              alt="Binance"
              sx={{ width: { xs: 22, md: 40 } }}
            />
          </Grid>

          <Grid item xs="auto">
            <Box
              component="img"
              src={Bybit}
              alt="Bybit"
              sx={{ width: { xs: 22, md: 40 } }}
            />
          </Grid>

          <Grid item xs="auto">
            <Box
              component="img"
              src={Mexc}
              alt="Mexc"
              sx={{ width: { xs: 22, md: 40 } }}
            />
          </Grid>

          <Grid item xs="auto">
            <Box
              component="img"
              src={BitGet}
              alt="BitGet"
              sx={{ width: { xs: 22, md: 40 } }}
            />
          </Grid>

          <Grid item xs="auto">
            <Box
              component="img"
              src={Bing}
              alt="Bing"
              sx={{ width: { xs: 24, md: 45 } }}
            />
          </Grid>
        </Grid>

      </Box>
    </>
  );
};

export default AiDriven;
