import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

// Main images
import MarketOutLook from "../../../assets/images/marketOutlook.png";
import ProAnalytics from "../../../assets/images/proAnalysis.png";
import JournalImg from "../../../assets/images/journal.png";
import CalculatorImg from "../../../assets/images/calculator.png";
import AiToolsImg from "../../../assets/images/aiTools.png";

// Bottom images
import MarketOutLookBgImages from "../../../assets/images/marketOutLookBackgroundImage.png";
import ProAnalysisBgImages from "../../../assets/images/proAnalyticsBackgroundImages.png";
import JournalBgImages from "../../../assets/images/journalBackgroundImages.png";
import AiToolsImages from "../../../assets/images/aiToolsBackgroundImages.png";
import DeepSurfBackgroundLogo from "../../../assets/images/background-logo.png";

// Top images
import ProAnalysisTopImage from "../../../assets/images/pro-analytices-top-image-2.png";
import JounalTopImage from "../../../assets/images/journal-top-image.png";
import AiToolsTopImage from "../../../assets/images/calculator-top-image.png";

// Russian MMarketOutLook Images
import RussianMarketOutLook from "../../../assets/images/russian-market-outLook-image.png";
import RussianMarketOutLookBgImages from "../../../assets/images/russian-market-out-look-image.png";


// Russian ProAnalytics Images
import RussianProAnalyticsBgImages from "../../../assets/images/russian-pro-analytices-image.png";
import RussianProAnalyticsTopImages from "../../../assets/images/russian-pro-analytices-top-image.png";
import RussianProAnalyticeBottomImage from "../../../assets/images/russian-pro-anaytices-bottom-image.png"

// journal Images
import RussianJournalTopImages from "../../../assets/images/russian-journal-top-image.png";
import RussianJournalImage from "../../../assets/images/russian-journal-image.png"
import RussianJournalBottomImages from "../../../assets/images/journal-bottom-image.png"
// calculator Images
import RussianCalculatorImage from "../../../assets/images/russain-calculator-image.png"
import RussianCalculatorTopImage from "../../../assets/images/calculator-bottom-image.png"

// Aittols Images
import AiToolsBgImage from "../../../assets/images/ai-tools-images.png";
import RussianAiToolsTopImage from "../../../assets/images/ai-tools-top-image.png"
import RussianBottomImage from "../../../assets/images/russian-ai-tools-bottom-image.png"
// Turkish Images
import TurkishMarketImage from "../../../assets/images/turkish-market-img.png"
import TurkishBottomImage from "../../../assets/images/turkish-market-bottom-img.png"


import TurkishProImg from "../../../assets/images/tr-img.png"
import TurkishProBottomImg from "../../../assets/images/tr-pro-top-img.png"
import TurkishProTopImg from "../../../assets/images/tr-pro-bot-img.png"



import TurkishJournalImg from "../../../assets/images/tr-jounal-top-img.png"
import turkishJournalTopImg from "../../../assets/images/tr-journal-img.png"
import TurkishJournalBotomImg from "../../../assets/images/tr-journal-bot-img.png"


import TurkishCalImg from "../../../assets/images/tr-cal-img.png"
import TuskishCalBot from "../../../assets/images/tr-cal-bot-img.png"
import TurkishAiTopImg from "../../../assets/images/tr-ai-top-img.png"
import TurkishAiImg from "../../../assets/images/tr-ai-img.png"
import TurkishAiBotImg from "../../../assets/images/tr-ai-bom-img.png"



import SpainshBgImg from "../../../assets/images/sp-market-img.png"
import SpanishBotImg from "../../../assets/images/sp-bot-img.png"
import SpanishProImg from "../../../assets/images/sp-pro-img.png"

import SpanishProBgImg from "../../../assets/images/sp-pro-bg-img.png"
import SpanishProBotImg from "../../../assets/images/sp-pro-bot-img.png"
import SpanishJourImg from "../../../assets/images/sp-jorn-img.png"
import SpanishJourBgImg from "../../../assets/images/sp-jorun-bg-img.png"
import SpanishJourBotImg from "../../../assets/images/sp-journ-bot-img.png"



import SpanishCalImg from "../../../assets/images/sp-cal-img.png"
import SpanishCalBotImg from "../../../assets/images/sp-cal-botom-img.png"
import SpanishAiTopImg from "../../../assets/images/sp-ai-img.png"
import SpanisgAiImg from "../../../assets/images/sp-ai-bg-img.png"
import SpanishAiBotImg from "../../../assets/images/sp-ai-bot-img.png"




const InSideDeep = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  console.log("fffffffffffffffffff", currentLanguage);


  const outLookImage = {
    en: MarketOutLook,
    ru: RussianMarketOutLook,
    tr: TurkishMarketImage,
    es: SpainshBgImg
  };
  const outLookBottomImage = {
    en: MarketOutLookBgImages,
    ru: RussianMarketOutLookBgImages,
    tr: TurkishBottomImage,
    es: SpanishBotImg
  };
  const russianProAnayticsImage = {
    ru: RussianProAnalyticsBgImages,
    en: ProAnalytics,
    tr: TurkishProImg,
    es: SpanishProBgImg
  }
  const russianProAnalysisTopImages = {
    en: ProAnalysisTopImage,
    ru: RussianProAnalyticsTopImages,
    tr: TurkishProBottomImg,
    es: SpanishProImg
  }
  const russainProAnalyticeBottomImage = {
    en: ProAnalysisBgImages,
    ru: RussianProAnalyticeBottomImage,
    tr: TurkishProTopImg,
    es: SpanishProBotImg
  }

  const journalImage = {
    en: JournalImg,
    ru: RussianJournalImage,
    tr: turkishJournalTopImg,
    es: SpanishJourBgImg
  }

  const russianJounalTopImages = {
    ru: RussianJournalTopImages,
    en: JounalTopImage,
    tr: TurkishJournalImg,
    es: SpanishJourImg
  }

  const russianJounalBottomImages = {
    ru: RussianJournalBottomImages,
    en: JournalBgImages,
    tr: TurkishJournalBotomImg,
    es: SpanishJourBotImg
  }

  const calculatorImage = {
    en: CalculatorImg,
    ru: RussianCalculatorImage,
    tr: TurkishCalImg,
    es: SpanishCalImg
  }

  const russianCalculatorBottomImage = {
    ru: RussianCalculatorTopImage,
    // en: CalculatorBgImages,
    tr: TuskishCalBot,
    es: SpanishCalBotImg

  }
  const russainAiToolsBgImage = {
    en: AiToolsImg,
    ru: AiToolsBgImage,
    tr: TurkishAiImg,
    es: SpanisgAiImg

  }
  const russianAiToolsTopImg = {
    ru: RussianAiToolsTopImage,
    en: AiToolsTopImage,
    tr: TurkishAiTopImg,
    es: SpanishAiTopImg
  }

  const russianBottomImg = {
    ru: RussianBottomImage,
    en: AiToolsImages,
    tr: TurkishAiBotImg,
    es: SpanishAiBotImg
  }

  //  turkish image 


  const TurkishMarketLookImg = {
    tr: TurkishMarketImage,
    en: MarketOutLook,
  }

  const marketOutLook = outLookImage[currentLanguage] || MarketOutLook;
  const marketOutLookBottom = outLookBottomImage[currentLanguage] || MarketOutLookBgImages;
  const proAnalyticsImage = russianProAnayticsImage[currentLanguage] || ProAnalysisBgImages;
  const ProAnalysisTopImages = russianProAnalysisTopImages[currentLanguage] || ProAnalysisTopImage;
  const proAnalysisBottomImages = russainProAnalyticeBottomImage[currentLanguage] || ProAnalysisBgImages;
  const JournalImages = journalImage[currentLanguage] || JournalImg;
  const russianJournalTopImage = russianJounalTopImages[currentLanguage] || JounalTopImage;
  const JournalBottomImages = russianJounalBottomImages[currentLanguage] || JournalBgImages;
  const CalculatorImages = calculatorImage[currentLanguage] || CalculatorImg;
  const CalculatorBottomImages = russianCalculatorBottomImage[currentLanguage] || AiToolsImages;
  const AiToolsTopImages = russainAiToolsBgImage[currentLanguage] || AiToolsTopImage;
  const russianAiToolsImg = russianAiToolsTopImg[currentLanguage] || AiToolsImg;
  const russionAiToolsBottomImg = russianBottomImg[currentLanguage] || AiToolsImages;
  const TurkishMarketLook = TurkishMarketLookImg[currentLanguage] || MarketOutLook;

  const data = [
    {
      id: "1",
      title: t("insideDeep.marketOutlook.title"),
      decription: t("insideDeep.marketOutlook.description"),
      image: marketOutLook,
      bottomImage: marketOutLookBottom,
    },
    {
      id: "2",
      title: t("insideDeep.proAnalytics.title"),
      decription: t("insideDeep.proAnalytics.description"),
      image: proAnalyticsImage,
      bottomImage: proAnalysisBottomImages,
      TopImage: ProAnalysisTopImages,
    },
    {
      id: "3",
      title: t("insideDeep.journal.title"),
      decription: t("insideDeep.journal.description"),
      image: JournalImages,
      bottomImage: JournalBottomImages,
      TopImage: russianJournalTopImage,
    },
    {
      id: "4",
      title: t("insideDeep.calculator.title"),
      decription: t("insideDeep.calculator.description"),
      image: CalculatorImages,
      // TopImage: CalculatorBottomImages,
      bottomImage: CalculatorBottomImages,

    },
    {
      id: "5",
      title: t("insideDeep.aiTools.title"),
      decription: t("insideDeep.aiTools.description"),
      image: AiToolsTopImages,
      bottomImage: russionAiToolsBottomImg,
      TopImage: russianAiToolsImg,
    },
  ];

  const [activeId, setActiveId] = useState("1");
  const [animating, setAnimating] = useState(false);

  const activeItem = data.find((item) => item.id === activeId);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleClick = (id) => {
    if (id === activeId) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 500);
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
      <Typography fontSize={{ xs: "24px", md: "28px" }} fontWeight={700} color="#fff">
        <span dangerouslySetInnerHTML={{ __html: t("insideDeep.title") }} />
      </Typography>

      <Grid container spacing={4} mt={4}>
        {/* LEFT SIDE */}
        <Grid itemm size={{ xs: 12, md: 4 }} >
          {data.map((item) => (
            <Box
              key={item.id}
              mt={2}
              onClick={() => handleClick(item.id)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontSize="18px"
                fontWeight={800}
                color={activeId === item.id ? "#fff" : "#A3A3A3"}
              >
                {item.title}
              </Typography>
              <Typography
                fontSize="11px"
                color="#fff"
                opacity={activeId === item.id ? 1 : 0.6}
              >
                {item.decription}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item size={{ xs: 12, md: 8 }} sx={{ position: "relative", overflow: "visible" }}>
          {/* Background Logo */}
          <Box
            component="img"
            src={DeepSurfBackgroundLogo}
            position="absolute"
            top="-15%"
            left="-13%"
            width="100%"
            height="auto"
            opacity={0.2}
            zIndex={0}
          />

          {/* TOP IMAGE */}
          {activeItem.TopImage && (
            <Box
              component="img"
              src={activeItem.TopImage}
              position="absolute"
              width="100%"
              top={{ xs: "-20px", md: "-100px" }}
              left="50%"
              sx={{
                transform: "translateX(-50%)",
                width: { xs: "80%", md: "100%" },
                zIndex: 10,
                // transform: animating ? "translateY(120px)" : "translateY(0)",
                opacity: animating ? 0 : 1,
                transition:
                  "transform .55s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s",
              }}
            />
          )}

          {/* MAIN IMAGE */}
          <Box
            component="img"
            src={activeItem.image}
            width="100%"
            borderRadius="12px"
            sx={{
              position: "relative",
              zIndex: 1,
              transform: animating ? "translateY(120px)" : "translateY(0)",
              opacity: animating ? 0 : 1,
              transition:
                "transform .55s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s",
            }}
          />

          {/* BOTTOM IMAGE */}
          {activeItem.bottomImage && (
            <Box mt={2}>
              <Box
                component="img"
                src={activeItem.bottomImage}
                width="100%"
                borderRadius="12px"
                sx={{
                  transform: animating ? "translateY(-120px)" : "translateY(0)",
                  opacity: animating ? 0 : 1,
                  transition:
                    "transform .55s cubic-bezier(0.22, 1, 0.36, 1), opacity .35s",
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InSideDeep;
