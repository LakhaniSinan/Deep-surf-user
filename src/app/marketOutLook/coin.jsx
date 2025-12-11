import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CrypoImage1 from "../../assets/icons/CrypotoLogo2.svg";
import CrypoImage2 from "../../assets/icons/CrypotoLogo3.svg";
import CrypoImage3 from "../../assets/icons/CrypotoLogo1.svg";
import Graphy1 from "../../assets/icons/graph1.svg";
import Graphy2 from "../../assets/icons/graph2.svg";
import Graphy3 from "../../assets/icons/graph3.svg";
import Speedometer from "../../components/speedMeter";
import Sparkline from "../../components/topCoinsTable/Sparkline";

const cardStyle = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "16px",
  color: "white",
};

const Coin = ({ data, overallSentimentData, dayOfWeek }) => {
  console.log("frhfhfrfhrufrhfrrf", dayOfWeek?.dayOfWeek);

  return (
    <Box sx={{ background: "#000", marginTop: "25px" }}>
      <Grid container spacing={3}>
        {/* LEFT CARD */}
        <Grid size={{ xs: 12, sm: 6, md: 5 }}>
          <Paper
            elevation={4}
            sx={{
              ...cardStyle,
              height: "200px",
              //   display: "flex",
              //   flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h4" fontSize="20px" fontFamily={"inter Tight"} fontWeight={600}>
                {dayOfWeek?.date}
              </Typography>
              <Typography sx={{ color: "#fff", fontWeight: 550, fontSize: "15px" }} fontFamily={"inter Tight"}>
                {dayOfWeek?.dayOfWeek}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              fontWeight={400}
              fontSize="13px"
              marginTop="25px"
              fontFamily={"inter Tight"}
            color = "rgba(255, 255, 255, 1)"
            >
            {dayOfWeek?.marketStrength}
          </Typography>
        </Paper>
      </Grid>

      {/* TOP COINS CARD */}
      <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper
          elevation={2}
          sx={{
            ...cardStyle,
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Top Coins
          </Typography>

          {data.slice(0, 3).map((coin, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1,
                py: 0.5,
                // responsive layout
                // flexWrap: { xs: "wrap", sm: "nowrap" },
                gap: { xs: 1, sm: 0 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src={coin.logo} width={30} height={30} alt="logo" />
                <Box>
                  <Typography sx={{ color: "#FFFFFF", fontSize: "13px", fontFamily: "inter Tight", fontWeight: 600 }}>
                    {coin.name}
                  </Typography>
                  <Typography color="#FFFFFF99" fontSize={"13px"} fontFamily={"inter Tight"}
                  >
                    {coin.symbol}
                  </Typography>
                </Box>
              </Box>

              {/* CENTER (sparkline) */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "inter Tight"
                }}
              >
                <Sparkline
                  data={coin.sparkline || []}
                  isPositive={!coin.change24hFormatted?.includes("-")}
                />
              </Box>

              {/* RIGHT SIDE (price + change) */}
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  sx={{ color: "#FFFFFF", lineHeight: 1 }}
                  fontSize={15}
                  fontWeight={600}
                  fontFamily={"inter Tight"}
                >
                  {coin.priceFormatted}
                </Typography>
                <Typography
                  sx={{
                    color: coin.change24hFormatted.includes("-")
                      ? "#ef4444"
                      : "green",
                    fontSize: "15px",
                    fontFamily: "inter Tight"
                  }}
                >
                  {coin.change24hFormatted.includes("-") ? "" : "+"}
                  {coin?.change24hFormatted}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      </Grid>

      <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper
          elevation={4}
          sx={{
            ...cardStyle,
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">Overall Sentiment</Typography>
            <Typography sx={{ color: "#d8d800" }}>
              {overallSentimentData?.label}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Speedometer
              percentage={30}
              size={50}
              maxValue={overallSentimentData?.score}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid >
    </Box >
  );
};

export default Coin;
