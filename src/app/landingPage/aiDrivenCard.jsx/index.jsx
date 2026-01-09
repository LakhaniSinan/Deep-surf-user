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
import { useTranslation } from "react-i18next";
import AiButton from "../../../assets/images/login.png"
import BullishImages from "../../../assets/images/bullish.png"
import BearishImages from "../../../assets/images/berish.png"
import ExchangeImages from "../../../assets/images/exchange-Image.png";
import WhalesTrackersImages from "../../../assets/images/whale-tracker.png";
import StarImage from "../../../assets/icons/star.svg";


// {  spaish image }

import SpanishBullishImage from "../../../assets/images/spanish-bullish-image.png"
import SpanishBearishImage from "../../../assets/images/spanish-bearish-image.png"
import SpanishExchnageImage from "../../../assets/images/spanish-exchange-image.png"
import SpanishWhaleTrackerImage from "../../../assets/images/spanish-whale-tracker-image.png"


// {turkish image}
import TurkishBullishImage from "../../../assets/images/turkish-bullish-image.png"
import TurkishBearishImage from "../../../assets/images/turkish-bearish-image.png"
import TurkishExchnageImage from "../../../assets/images/turkish-exchange-image.png"
import TurkishWhaleTrackerImage from "../../../assets/images/turkish-wahle-tracker-image.png"


// { russian image}
import RussianBullishImage from "../../../assets/images/russian-bullish-image.png"
import RussianBearishImage from "../../../assets/images/russian-bearish-image.png"
import RussianExchnageImage from "../../../assets/images/russian-exchnage-tracker-image.png"
import RussianWhaleTrackerImage from "../../../assets/images/russian-whale-tracker-image.png"


const AiDrivenCard = () => {
  const { t, i18n } = useTranslation();
  // console.log("tttttttttttttttttttttttt", i18n.language);
  // // { spaish image }
  // const bullishSpanisgImage =
  //   i18n.language === "es" ? SpanishBullishImage : BullishImages;
  // const bearishSpanisgImage =
  //   i18n.language === "es" ? SpanishBearishImage : BearishImages;
  // const exchangeSpanisgImage =
  //   i18n.language === "es" ? SpanishExchnageImage : ExchangeImages;
  // const whalesTrackerSpanisgImage =
  //   i18n.language === "es" ? SpanishWhaleTrackerImage : WhalesTrackersImages;
  // // {turkish image}
  // const bullishTurkishImage =
  //   i18n.language === "tr" ? TurkishBullishImage : BullishImages;
  // const bearishTurkishImage =
  //   i18n.language === "tr" ? TurkishBearishImage : BearishImages;
  // const exchangeTurkishImage =
  //   i18n.language === "tr" ? TurkishExchnageImage : ExchangeImages;
  // const whalesTrackerTurkishImage =
  //   i18n.language === "tr" ? TurkishWhaleTrackerImage : WhalesTrackersImages;
  const currentLang = i18n.language;
  console.log("rrrrrrrrrrrrrrr", currentLang);

  // Bullish
  const bullishImageByLang = {
    en: BullishImages,
    es: SpanishBullishImage,
    tr: TurkishBullishImage,
    ru: RussianBullishImage
  };

  // Bearish
  const bearishImageByLang = {
    en: BearishImages,
    es: SpanishBearishImage,
    tr: TurkishBearishImage,
    ru: RussianBearishImage
  };

  // Exchange
  const exchangeImageByLang = {
    en: ExchangeImages,
    es: SpanishExchnageImage,
    tr: TurkishExchnageImage,
    ru: RussianExchnageImage,
  };

  // Whale Tracker
  const whaleImageByLang = {
    en: WhalesTrackersImages,
    es: SpanishWhaleTrackerImage,
    tr: TurkishWhaleTrackerImage,
    ru: RussianWhaleTrackerImage,
  };

  // Final selected images
  const bullishImage = bullishImageByLang[currentLang] || BullishImages;
  const bearishImage = bearishImageByLang[currentLang] || BearishImages;
  const exchangeImage = exchangeImageByLang[currentLang] || ExchangeImages;
  const whaleImage = whaleImageByLang[currentLang] || WhalesTrackersImages;
  return (

    <Grid container spacing={2} justifyContent="center">
      <Grid item size={{ xs: 12, sm: 6, md: 6 }} data-aos="fade-up-right" overflow={"hidden"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 5,
            height: { xs: "auto", md: "330px" },
            border: "1px solid rgba(255,255,255,0.20)",
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
          <Box color={"#fff"} sx={{ flex: 1, pr: 2, mt: 6 }}>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              lineHeight={1.15}
              fontFamily={"Inter Tight"}
              mt={1.5}
              sx={{ fontSize: { xs: "20px", md: "25px" } }}
            >
              <span dangerouslySetInnerHTML={{ __html: t("aiDrivenCard.title") }} />
            </Typography>

            <Typography
              fontSize={"13px"}
              mt={4}
              sx={{
                color: "#FFFFFF",
                lineHeight: 1.2,
                fontSize: { xs: "12px", md: "12px" },
                fontWeight: 300
              }}
            >
              {t("aiDrivenCard.description")}
            </Typography>
          </Box>

          {/* RIGHT WIDGET */}
          <Box mt={{ xs: 0, md: 3 }} color={"#fff"} sx={{ flex: 0.95, width: { xs: "100%", md: "auto" } }}>
            {/* <Box mb={-4}>
                <img src={AiButton} alt="AI Button" style={{ width: "100%" , }} />
              </Box> */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              gap={1}
              mt={{ xs: 0, md: 3 }}
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
                  fontFamily: "Inter Tight",
                  fontWeight: "500",
                }}
              >
                {t("aiDrivenCard.aiAnalysis")}
              </h5>
            </Box>
            <Typography
              sx={{
                lineHeight: 1.3,
                mt: 1,
                fontFamily: "Inter Tight",
                fontSize: { xs: "10px", md: "11px" },
                background: "linear-gradient(90deg, #FFFFFF, #FFAD73)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "left"
              }}
            >
              {t("aiDrivenCard.analysisText")}
            </Typography>
            <Box mt={1.5}>
              <img
                src={bullishImage}
                alt="Bullish"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </Box>

            <Box mt={1}>
              <img
                src={bearishImage}
                alt="Bearish"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* CARD 2 */}
      <Grid item size={{ xs: 12, sm: 6, md: 6 }} data-aos="fade-up-left" overflow={"hidden"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            height: { xs: "auto", md: "330px" },
            border: "1px solid rgba(255,255,255,0.20)",
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
          <Box color={"#fff"} sx={{ flex: 1, pr: 2, mt: 6 }}>
            <Typography
              fontSize={"25px"}
              fontWeight={700}
              lineHeight={1.15}
              mt={{ xs: 1, md: 2 }}
              sx={{ fontSize: { xs: "20px", md: "26px" } }}
            >
              <span dangerouslySetInnerHTML={{ __html: t("aiDrivenCard.advancedToolsTitle") }} />
            </Typography>
            <Typography
              fontSize={"12px"}
              mt={4}
              sx={{ color: "#FFFFFF" }}
              lineHeight={1.2}
            // sx={{ fontSize: { xs: "11px", md: "12px" }, color: "#FFFFFF" }}
            >
              {t("aiDrivenCard.advancedToolsDescription")}
            </Typography>
          </Box>
          <Box
            color={"#fff"}
            mt={3}
            sx={{
              flex: 0.95,
              width: { xs: "100%", md: "auto" }
            }}
          >
            <Typography mt={{ xs: 2, md: 5.5 }} fontSize={"10px"}
              sx={{ fontSize: { xs: "9px", md: "10px" } }}
            >
              {t("aiDrivenCard.onChainSignals")}
            </Typography>

            <Box mt={{ xs: 2, md: 0 }}>
              <img
                src={exchangeImage}
                alt="Bullish"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </Box>
            <Typography fontSize={"10px"}
              sx={{ fontSize: { xs: "9px", md: "10px" } }}
            >
              {t("aiDrivenCard.whalesTracker")}
            </Typography>
            <Box mt={"3px"}>
              <img
                src={whaleImage}
                alt="Bearish"
                style={{ width: "100%", borderRadius: "6px" }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>

  );

}

export default AiDrivenCard;

