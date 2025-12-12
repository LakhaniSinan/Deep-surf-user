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
    AOS.init({ duration: 800, once: true });
  }, []);

  // Scroll function
  const scrollToJoin = () => {
    const element = document.getElementById("join-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
          alignItems: "center",
        }}
      >
        <img src={TimingImages} alt="timer" style={{ width: 16, height: 16 }} />
        <h5
          style={{
            background: "linear-gradient(to right, #FFB37D, #FFF3EA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Inter Tight",
            fontWeight: "500",
          }}
        >
          {t("hero.limitedAccess")}
        </h5>
      </Box>


      <Typography
        data-aos="zoom-in"
        overflow={"hidden"}
        color="accent.contrastText"
        fontSize={{ xs: 30, md: 60 }}
        fontWeight={600}
        lineHeight={1.1}
        textAlign="center"
        fontFamily="Inter Tight"
      >
        <span dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
      </Typography>
      <Box mt={4.8}
        data-aos="fade-up"
      >
        <Typography
          color="text.CoolGray"
          fontSize={{ xs: 12, md: 16 }}
          fontWeight={600}
          lineHeight={1.3}
          fontFamily={"Inter Tight"}
        >

          <span dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }} />
        </Typography>
      </Box>

      <Box mt={4}
        data-aos="zoom-in"
        overflow={"hidden"}>
        <CustomButton
          title={t("hero.getStarted")}
          handleClickBtn={scrollToJoin} // scroll add kiya
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

      <Box mt={{ xs: 10, md: 16 }} textAlign={"center"} data-aos="fade-up" overflow={"hidden"}>
        <Typography
          color="accent.contrastText"
          fontSize={{ xs: 20, md: 33 }}
          fontWeight={700}
          sx={{ fontFamily: "Inter Tight" }}
        >
          {t("hero.trustedBy")}
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={{ xs: 10, md: 16 }}
          color="accent.contrastText"
          sx={{ fontFamily: "Inter Tight" }}
        >
          {t("hero.builtFor")}
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 13 }}
          mt={7}
          alignItems="center"
          justifyContent={{ xs: "space-between", md: "space-evenly" }}
          wrap="nowrap"
          data-aos="fade-up"
          overflow={"hidden"}
        >
          <Stack px={3} alignItems={"center"}>
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
