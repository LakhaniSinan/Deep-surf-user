import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { keyframes } from "@mui/system";


// Main images
import MarketOutLook from "../../../assets/images/marketOutlook.png";
import ProAnalytics from "../../../assets/images/proAnalysis.png";
import JournalImg from "../../../assets/images/journal.png";
import CalculatorImg from "../../../assets/images/calculator.png";
import AiToolsImg from "../../../assets/images/aiTools.png";

// Bottom images
import MarketOutLookBgImages from "../../../assets/images/marketOutLookBackgroundImage.png"
import ProAnalysisBgImages from "../../../assets/images/proAnalyticsBackgroundImages.png";
import JournalBgImages from "../../../assets/images/journalBackgroundImages.png";
import CalculatorImages from "../../../assets/images/calculatorBackgroundImages.png";
import AiToolsImages from "../../../assets/images/aiToolsBackgroundImages.png";
import DeepSurfBackgroundLogo from "../../../assets/images/background-logo.png";

const InSideDeep = () => {
  const data = [
    { id: "1", title: "Market Outlook", decription: "Daily macro, flows, whales, risk calendar", image: MarketOutLook, bottomImage: MarketOutLookBgImages },
    { id: "2", title: "Pro Analytics", decription: "Order flow, open interest, heatmap, liquidity levels, microstructure, ETF & on-chain metrics", image: ProAnalytics, bottomImage: ProAnalysisBgImages },
    { id: "3", title: "Journal", decription: "API-based trade import, AI coaching, Watchlist, Alerts", image: JournalImg, bottomImage: JournalBgImages },
    { id: "4", title: "Calculator", decription: "ATR-based sizing, what-if simulation, auto export to journal", image: CalculatorImg, bottomImage: CalculatorImages },
    { id: "5", title: "AI Tools", decription: "Comprehensive analysis of tokens based on more than 50 parameters and metrics, AI Pump Detection", image: AiToolsImg, bottomImage: AiToolsImages },
  ];

  const [activeId, setActiveId] = useState("1");
  const [fade, setFade] = useState(false);
  const [animating, setAnimating] = useState(false);
  const activeItem = data.find(item => item.id === activeId);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  const slideUp = keyframes`
  0% { transform: translateY(40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
  `;

  const slideDown = keyframes`
  0% { transform: translateY(-40px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
  `;
  const handleClick = (id) => {
    if (id === activeId) return; // same image pe click hai to ignore
    setAnimating(true);
    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 500); // timing same as animation
  };
  return (
    <Box
      mt={3}
      backgroundColor="neutral.surface"
      padding={{ xs: "10px", md: "30px 90px" }}
      borderRadius="20px"
      width="100%"
      overflow="hidden"
      data-aos="fade-up"
    >
      <Box mt="40px" textAlign={{ xs: "center", md: "left" }}>
        <Typography fontSize={{ xs: "24px", md: "28px" }} fontWeight={700} color="#fff">
          Inside <span style={{ color: "#FF6421", fontWeight: 700, fontFamily: "Inter Tight" }}>Deepsurf</span>
        </Typography>
      </Box>
      <Grid container spacing={4} mt={4}>
        <Grid item size={{ xs: 12, md: 4 }} >
          {data.map((item) => (
            <Box
              key={item.id}
              mt={2}
              onClick={() => handleClick(item.id)}
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { opacity: 0.9 },
              }}
            >
              <Typography fontSize="18px" fontWeight={800} sx={{ color: activeId === item.id ? "#fff" : "#A3A3A3" }}>
                {item.title}
              </Typography>
              <Typography fontSize="11px" fontWeight={400} sx={{ color: "#fff", opacity: activeId === item.id ? 1 : 0.6 }}>
                {item.decription}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item size={{ xs: 12, md: 8 }} sx={{ position: "relative", overflow: "hidden" }}>
          <Box
            component="img"
            src={DeepSurfBackgroundLogo}
            alt="Background Logo"
            position={"fixed"}
            top={{ xs: "430px", md: "50px" }}
            right={{ xs: "-20px", md: "45px" }}
            width={{ xs: "100%", md: "70%" }}
            height={{ xs: "80%", md: "80%" }}
            objectFit={"cover"}
            zIndex={0}
          />
          <Box
            component="img"
            src={activeItem.image}
            alt={activeItem.title}
            width={"100%"}
            height={"auto"}
            justifyContent={"center"}
            // maxHeight={"500px"}
            borderRadius={"12px"}
            position={"relative"}
            zIndex={0}
            sx={{
              transform: animating ? "translateY(120px)" : "translateY(0)",
              opacity: animating ? 0 : 1,
              transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s",
            }}
          />

          {/* Bottom Image */}
          <Box mt={2} sx={{ overflowX: "auto", position: "relative" }}>
            <Box
              component="img"
              src={activeItem.bottomImage}
              alt="Bottom image"
              width={"100%"}
              // maxHeight={"200px"}
              borderRadius={"12px"}
              sx={{
                transform: animating ? "translateY(-120px)" : "translateY(0)",
                opacity: animating ? 0 : 1,
                transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s",
              }}
            />
          </Box>
        </Grid>


      </Grid>
    </Box>
  );
};

export default InSideDeep;
