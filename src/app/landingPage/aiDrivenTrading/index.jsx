import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../../../components/customButton";
import TimingImages from "../../../assets/images/timing-image.png";
import logos from "../../../assets/images/logos.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AiDriven = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Scroll function
  const scrollToJoin = () => {
    document.getElementById("join-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Tagline */}
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
        }}
      >
        <img src={TimingImages} alt="timer" style={{ width: 16, height: 16 }} />
        <Typography
          sx={{
            background: "linear-gradient(to right, #FFB37D, #FFF3EA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter Tight",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {t("hero.limitedAccess")}
        </Typography>
      </Box>

      {/* MAIN HEADING (FIXED) */}
      <Typography
        data-aos="zoom-in"
        color="accent.contrastText"
        fontSize={{ xs: 30, md: 60 }}
        fontWeight={600}
        lineHeight={1.3}
        textAlign="center"
        fontFamily="Inter Tight"
        sx={{ overflow: "visible" }}
      >
        <span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
      </Typography>

      {/* SUBTITLE */}
      <Box mt={4.8} data-aos="fade-up">
        <Typography
          color="text.CoolGray"
          fontSize={{ xs: 12, md: 16 }}
          fontWeight={600}
          lineHeight={1.4}
          fontFamily="Inter Tight"
          textAlign="center"
        >
          <span dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }} />
        </Typography>
      </Box>

      {/* CTA BUTTON */}
      <Box mt={4} data-aos="zoom-in">
        <CustomButton
          title={t("hero.getStarted")}
          handleClickBtn={scrollToJoin}
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

      {/* TRUSTED BY */}
      <Box
        mt={{ xs: 10, md: 16 }}
        textAlign="center"
        data-aos="fade-up"
      >
        <Typography
          color="accent.contrastText"
          fontSize={{ xs: 20, md: 33 }}
          fontWeight={700}
          fontFamily="Inter Tight"
        >
          {t("hero.trustedBy")}
        </Typography>

        <Typography
          fontSize={{ xs: 10, md: 16 }}
          color="accent.contrastText"
          fontFamily="Inter Tight"
        >
          {t("hero.builtFor")}
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 13 }}
          mt={7}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-evenly" }}
          wrap="nowrap"
        >
          <Stack px={3} alignItems="center">
            <Box
              component="img"
              src={logos}
              alt="logo"
              sx={{ width: { xs: "100%", md: "54%" } }}
            />
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default AiDriven;
