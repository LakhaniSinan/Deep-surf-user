import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CrypoImage1 from "../../assets/icons/CrypotoLogo2.svg";
import CrypoImage2 from "../../assets/icons/CrypotoLogo3.svg";
import CrypoImage3 from "../../assets/icons/CrypotoLogo1.svg";
import Graphy1 from "../../assets/icons/graph1.svg";
import Graphy2 from "../../assets/icons/graph2.svg";
import Graphy3 from "../../assets/icons/graph3.svg";

const cardStyle = {
  backgroundColor: "#111",
  padding: "24px",
  borderRadius: "16px",
  color: "white",
};

function Coin() {
  return (
    <Box sx={{ background: "#000", marginTop: "20px" }}>
      <Grid container spacing={3}>
        {/* LEFT CARD */}
        <Grid item xs={12} size={{ xs: 12, sm: 6, md: 6 }}>
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
              <Typography variant="h5">12 October 2025</Typography>
              <Typography sx={{ color: "#bbb" }}>Sunday</Typography>
            </Box>

            <Typography sx={{ color: "#ccc", marginTop: "30px" }}>
              The market shows strength with increasing volumes. Key levels are
              being tested, and volatility remains high.
            </Typography>
          </Paper>
        </Grid>

        {/* TOP COINS CARD */}
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
            <Typography variant="h6" sx={{ mb: 1 }}>
              Top Coins
            </Typography>

            {[
              {
                name: "DXY",
                price: "$5.288",
                percen: "0.89%",
                logo: CrypoImage1,
                graphyImage: Graphy1,
              },
              {
                name: "USDT",
                price: "$0.999",
                percen: "0.09%",
                logo: CrypoImage2,
                graphyImage: Graphy2,
              },
              {
                name: "DOGE",
                price: "$0.21",
                percen: "0.89%",
                logo: CrypoImage3,
                graphyImage: Graphy3,
              },
            ].map((coin, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img src={coin.logo} width={20} height={20} alt="logo" />
                  <Typography>{coin.name}</Typography>
                </Box>

                <img
                  src={coin.graphyImage}
                  width={70}
                  height={20}
                  alt="graph"
                />

                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={{ color: "#79ffea", lineHeight: 1 }}>
                    {coin.price}
                  </Typography>
                  <Typography
                    sx={{
                      color: "0.89%" ? "#02C173" : "blue",
                      color: "0.89%" ? "red" : "black",
                      fontSize: "13px",
                    }}
                  >
                    {coin.percen}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* SENTIMENT METER CARD */}
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
              <Typography sx={{ color: "#d8d800" }}>Neutral</Typography>
            </Box>

            {/* Gauge */}
            <Box
              sx={{
                width: 150,
                height: 75,
                background: "#222",
                borderRadius: "150px 150px 0 0",
                overflow: "hidden",
                margin: "auto",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, red, yellow, green)",
                  position: "absolute",
                }}
              />

              <Box
                sx={{
                  width: 100,
                  height: 50,
                  background: "#111",
                  borderRadius: "100px 100px 0 0",
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 26,
                }}
              >
                50
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Coin;
