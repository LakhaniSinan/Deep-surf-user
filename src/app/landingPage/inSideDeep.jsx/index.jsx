import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

// Import different images
import MarketOutLook from "../../../assets/images/marketOutlook.png";
import ProAnalytics from "../../../assets/images/proAnalysis.png";
import JournalImg from "../../../assets/images/journal.png";
import CalculatorImg from "../../../assets/images/calculator.png";
import AiToolsImg from "../../../assets/images/aiTools.png";

const InSideDeep = () => {
  const data = [
    {
      id: "1",
      title: "Market Outlook",
      decription: "Daily macro, flows, whales, risk calendar",
      image: MarketOutLook,
    },
    {
      id: "2",
      title: "Pro Analytics",
      decription:
        "Order flow, open interest, heatmap, liquidity levels, microstructure, ETF & on-chain metrics",
      image: ProAnalytics,
    },
    {
      id: "3",
      title: "Journal",
      decription: "API-based trade import, AI coaching, Watchlist, Alerts",
      image: JournalImg,
    },
    {
      id: "4",
      title: "Calculator",
      decription:
        "ATR-based sizing, what-if simulation, auto export to journal",
      image: CalculatorImg,
    },
    {
      id: "5",
      title: "AI Tools",
      decription:
        "Comprehensive analysis of tokens based on more than 50 parameters and metrics, AI Pump Detection",
      image: AiToolsImg,
    },
  ];
  const [activeId, setActiveId] = useState("1");
  const activeImage = data.find((item) => item.id === activeId)?.image;
  return (
    <Box
      mt={2}
      backgroundColor="neutral.surface"
      padding={{ xs: "21px", md: "30px 90px" }}
      borderRadius="20px"
      width={{ xs: "100%", md: "78%" }}
      mx="auto"
    >
      <Box mt="40px" textAlign={{ xs: "center", md: "left" }}>
        <Typography
          color="#fff"
          fontSize={{ xs: "24px", md: "28px" }}
          fontWeight={700}
          sx={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Inside <span style={{
            color: "#FF6421", fontFamily: "'Inter', sans-serif",
          }}>Deepsurf</span>
        </Typography>
      </Box>

      <Grid container spacing={3} mt={4} alignItems="center">
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box>
            {data.map((item) => (
              <Box
                key={item.id}
                mt={2}
                sx={{
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={() => setActiveId(item.id)}
              >
                <Typography
                  fontSize={"18px"}
                  fontWeight={800}
                  sx={{
                    color: activeId === item.id ? "#FFFFFF" : "#A3A3A3",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize={"12px"}
                  fontWeight={400}
                  sx={{
                    color: activeId === item.id ? "#FFFFFF" : "#FFFFFF",
                    opacity: activeId === item.id ? 1 : 0.7,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.decription}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* IMAGE SECTION */}
        <Grid item size={{ xs: 12, md: 8 }}>
          <Box
            component="img"
            src={activeImage}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: { xs: "20px auto 0", md: "0" },
              transition: "0.4s ease-in-out",
            }}
            alt="Market Outlook"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InSideDeep;
