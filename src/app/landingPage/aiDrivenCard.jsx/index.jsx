// import { Box, Grid } from "@mui/material";
// import React from "react";
// import AiDruvenImage from "../../../assets/images/AI Driven.png";
// import AdvancedTools from "../../../assets/images/Advanced Tools.png";

// const AiDrivenCard = () => {
//   return (
//     <Box mt={10} padding={1}>
//       <Grid container spacing={2} alignItems="center">

//         {/* LEFT IMAGE (fade-right) */}
//         <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-up-right">
//           <Box
//             component="img"
//             src={AiDruvenImage}
//             sx={{
//               width: "100%",
//               maxWidth: "600px",
//               display: "block",
//               margin: "0 auto",
//             }}
//             alt="AI Driven"
//           />
//         </Grid>

//         {/* RIGHT IMAGE (fade-left) */}
//         <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-up-left">
//           <Box
//             component="img"
//             src={AdvancedTools}
//             sx={{
//               width: "100%",
//               maxWidth: "600px",
//               display: "block",
//               margin: "0 auto",
//             }}
//             alt="Advanced Tools"
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AiDrivenCard;




import { Box, Button, Container, Grid, Typography } from '@mui/material';
import AiButton from "../../../assets/images/login.png"
import BullishImages from "../../../assets/images/bullish.png"
import BearishImages from "../../../assets/images/berish.png"
import ExchangeImages from "../../../assets/images/exchange-Image.png";
import WhalesTrackersImages from "../../../assets/images/whale-tracker.png";
import StarImage from "../../../assets/icons/star.svg";

const AiDrivenCard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-up-right">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 5,
              px: "25px",
              height: { xs: "auto", md: "330px" },
              border: "1px solid rgba(173,173,173,0.08)",
              borderRadius: "22px",
              background: "rgba(34, 33, 33, 0.55)",
              backdropFilter: "blur(40px)",
              boxShadow: "inset 0px 0px 30px rgba(255,255,255,0.03)",
              transition: "0.3s",
              flexDirection: { xs: "column", md: "row" },
              px: { xs: 2, md: "30px" },
              py: { xs: 3, md: "15px" },
            }}
          >
            <Box color={"#fff"} sx={{ flex: 1, pr: 2, mt: 5 }}>
              <Typography
                fontSize={"25px"}
                fontWeight={700}
                lineHeight={1.15}
                mt={1.5}
                sx={{ fontSize: { xs: "20px", md: "25px" } }}
              >
                AI Driven. <br /> Human inspired.
              </Typography>

              <Typography
                fontSize={"13px"}
                mt={3}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  fontSize: { xs: "12px", md: "13px" },
                  fontWeight: 400
                }}
              >
                DeepSurf’s multi-layered AI engine transforms raw data into actionable
                insights, forecasts, and bias signals — so you can trade with clarity,
                precision, and confidence.
              </Typography>
            </Box>

            {/* RIGHT WIDGET */}
            <Box mt={{xs : 0 , md : 3}} color={"#fff"} sx={{ flex: 0.95, width: { xs: "100%", md: "auto" } }}>
              {/* <Box mb={-4}>
                <img src={AiButton} alt="AI Button" style={{ width: "100%" , }} />
              </Box> */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                gap={1}
                mt={{xs : 0 , md : 3}}
                sx={{
                  borderRadius: "30px",
                  px: "10px",
                  py: "10px",
                  width: "65%",
                  background: "rgba(52, 30, 21, 0.5)",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <img src={StarImage} alt="StarImage" style={{ width: 16, height: 16 }} />
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
              <Typography
                sx={{
                  lineHeight: 1.3,
                  mt: 1,
                  fontFamily: "inter",
                  fontSize: { xs: "10px", md: "11px" },
                  background: "linear-gradient(90deg, #FFFFFF, #FFAD73)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "left"
                }}
              >
                The unemployment rate improved from 4.2% to 4.1%. This is a positive
                Bullish signal. A strong but not overheated labor market supports the
                Fed’s view of a potential “soft landing” for the economy.
              </Typography>
              <Box mt={1.5}>
                <img
                  src={BullishImages}
                  alt="Bullish"
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </Box>

              <Box mt={1}>
                <img
                  src={BearishImages}
                  alt="Bearish"
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* CARD 2 */}
        <Grid item size={{ xs: 12, md: 6 }} data-aos="fade-up-left">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 4,
              px: "25px",
              height: { xs: "auto", md: "330px" },
              border: "1px solid rgba(173,173,173,0.08)",
              borderRadius: "22px",
              background: "rgba(34, 33, 33, 0.55)",
              backdropFilter: "blur(40px)",
              boxShadow: "inset 0px 0px 30px rgba(255,255,255,0.03)",
              transition: "0.3s",
              flexDirection: { xs: "column", md: "row" },
              px: { xs: 2, md: "25px" },
              py: { xs: 3, md: 0 },

            }}
          >
            <Box color={"#fff"} sx={{ flex: 1, pr: 2, mt: 5 }}>
              <Typography
                fontSize={"25px"}
                fontWeight={700}
                lineHeight={1.15}
                mt={{xs : 1 , md : 2}}
                sx={{ fontSize: { xs: "20px", md: "26px" } }}
              >
                Advanced Tools for <br /> Market Perception.
              </Typography>
              <Typography
                fontSize={"10px"}
                mt={4}
                sx={{ color: "#FFFFFF" }}
                lineHeight={1.2}
              // sx={{ fontSize: { xs: "11px", md: "12px" }, color: "#FFFFFF" }}
              >
                See the market as a living system - liquidity flows, volatility regimes,
                microstructure patterns, and sentiment dynamics. DeepSurf’s analytics suite
                helps you not only see the moves - but feel them before they happen.
              </Typography>
            </Box>
            <Box
              color={"#fff"}
              mt={2}
              sx={{
                flex: 0.95,
                width: { xs: "100%", md: "auto" }
              }}
            >
              <Typography mt={{xs : 2 , md : 6.5}} fontSize={"10px"}
                sx={{ fontSize: { xs: "9px", md: "10px" } }}
              >
                On-Chain Signals
              </Typography>

              <Box mt={{xs : 2 , md : 3}}>
                <img
                  src={ExchangeImages}
                  alt="Bullish"
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </Box>
              <Typography fontSize={"10px"}
                sx={{ fontSize: { xs: "9px", md: "10px" } }}
              >
                Whales tracker
              </Typography>
              <Box mt={"3px"}>
                <img
                  src={WhalesTrackersImages}
                  alt="Bearish"
                  style={{ width: "100%", borderRadius: "6px" }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );

}

export default AiDrivenCard;

