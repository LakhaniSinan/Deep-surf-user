import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import different images
import MarketOutLook from "../../../assets/images/marketOutlook.png";
import ProAnalytics from "../../../assets/images/proAnalysis.png";
import JournalImg from "../../../assets/images/journal.png";
import CalculatorImg from "../../../assets/images/calculator.png";
import AiToolsImg from "../../../assets/images/aiTools.png";
import DeepSurfBackgroundLogo from "../../../assets/images/background-logo.png";

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      mt={2}
      backgroundColor="neutral.surface"
      padding={{ xs: "21px", md: "30px 90px" }}
      borderRadius="20px"
      width={{ xs: "100%", md: "75%" }}
      mx="auto"
      data-aos="fade-up"
    >
      <Box mt="40px" textAlign={{ xs: "center", md: "left" }}>
        <Typography
          fontSize={{ xs: "24px", md: "28px" }}
          fontWeight={700}
          color="#fff"
        >
          Inside{" "}
          <span style={{ color: "#FF6421", fontWeight: 700, fontFamily: "inter" }}>Deepsurf</span>
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center">
        {/* LEFT MENU */}
        <Grid item size={{ xs: 12, md: 4 }}
        >
          <Box>
            {data.map((item, index) => (
              <Box
                key={item.id}
                mt={2}
                onClick={() => setActiveId(item.id)}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                sx={{
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                <Typography
                  fontSize="18px"
                  fontWeight={800}
                  sx={{
                    color: activeId === item.id ? "#FFFFFF" : "#A3A3A3",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize="11px"
                  fontWeight={400}
                  sx={{
                    color: "#FFFFFF",
                    opacity: activeId === item.id ? 1 : 0.6,
                  }}
                >
                  {item.decription}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* IMAGE SECTION */}
        <Grid
          item
          size={{ xs: 12, md: 8 }}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              height : {xs : "auto" , md : "550px"},
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 2, md: 0 },
              transition: "0.4s ease-in-out",
              backgroundImage: `url(${DeepSurfBackgroundLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              p: { xs: 0, md: 5 },
              borderRadius: "18px",
              // boxShadow: "0px 0px 100px rgba(0,0,0,0.6)",
            }}
          >
            <Box
              component="img"
              src={activeImage}
              alt="Market Outlook"
              sx={{
                width: { xs: "100%", md: "120%" }, // <-- images ko bara kiya
                maxWidth: "1400px",               // optional: maximum size limit
                height: "auto",
                display: "block",
                transition: "opacity .4s ease, transform .4s ease",
                opacity: 1,
                transform: "scale(1.05)",        // thoda zoom effect
                borderRadius: "12px",
              }}
              key={activeImage}
            />
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default InSideDeep;
