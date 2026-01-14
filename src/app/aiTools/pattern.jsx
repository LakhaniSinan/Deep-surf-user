import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
const Pattern = ({ coinData }) => {
  const { t } = useTranslation();
  const confidenceStr = coinData?.patternRecognition?.[0]?.confidence || "0%";
  const confidenceValue = Number(confidenceStr.replace("%", ""));

  return (
    <>
      <Box>
        <Grid container spacing={2} mt="15px">
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
            >
              <Typography variant="h4" fontSize={"25px"}>
                {t("AiTools.PatternRecognition.patternRecognition")}
              </Typography>
              <CustomButton
                variant="h6"
                title={`${coinData?.patternRecognition?.[0]?.totalPatternsFound} found`}
                sx={{
                  fontSize: "13px",
                  backgroundColor: "transparent",
                  border: "0.1px solid rgba(255, 255, 255, 1)",
                  borderRadius: "15px",
                  px: "30px",
                  py: "0px",
                  minHeight: "40px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        backgroundColor="rgba(26, 26, 26, 1)"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
        gap={{ xs: 2, md: 0 }}
      >
        <Box gap="12px">
          <Typography variant="h4" fontSize={"16px"} color="text.lightRedColor">
            {coinData?.patternRecognition?.[1]?.name}
          </Typography>
          <Typography variant="body1" color={coinData?.patternRecognition?.[1]?.type === "Neutral" ? "text.yellowColor" : "text.greenColor"}>
            {coinData?.patternRecognition?.[1]?.type}
          </Typography>
          <Typography
            variant="h5"
            color="accent.contrastText"
            mt="10px"
            fontSize={"15px"}
            fontWeight={400}
          >
            {coinData?.patternRecognition?.[1]?.description}
          </Typography>
          <Box mt="10px">
            <CustomButton
              variant="h6"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "accent.contrastText", fontFamily: "", fontSize: "15px", fontWeight: 500 }}>
                  {t("AiTools.PatternRecognition.target")} :{" "}
                  <span
                    style={{
                      color: "red",
                      transition: "all 0.3s ease",
                      fontSize: "15px",
                      py: "8px",
                      fontFamily: "Inter Tight"
                    }}
                  >
                    {`${coinData?.patternRecognition?.[1]?.target}`}
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
                width: { xs: "100%", md: "auto" },
              }}
            />
          </Box>
        </Box>
        <Box width={{ xs: "100%", md: "auto" }} mt={{ xs: 2, md: 0 }}>
          <Box>
            <Box>{t("AiTools.PatternRecognition.confidence")}{`: ${confidenceValue}%`}</Box>
            <Box sx={{ width: "100%", mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={confidenceValue}
                sx={{
                  height: 10,
                  borderRadius: "30px",
                  bgcolor: "text.Gainsboro",
                  fontFamily: "Inter Tight",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "accent.main",
                    borderRadius: "30px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
        gap={{ xs: 2, md: 0 }}
      >
        <Box gap="12px">
          <Typography variant="h4" color="text.lightRedColor" fontSize={"20px"}>
            {coinData?.patternRecognition?.[0]?.name}
          </Typography>
          <Typography variant="body1" color={coinData?.patternRecognition?.[0]?.type ? "text.greenColor" : "text.yellowColor"}>
            {coinData?.patternRecognition?.[0]?.type}
          </Typography>

          <Typography
            variant="h5"
            color="#fff"
            mt="10px"
            fontSize={"15px"}
            fontWeight={400}
          >
            {coinData?.patternRecognition?.[0]?.description}
          </Typography>

          <Box
            mt="10px"
            display={"flex"}
            gap={2}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
          >
            <CustomButton
              variant="h6"
              backgroundColor="rgba(0, 0, 0, 0)"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                  {t("AiTools.PatternRecognition.target")} :{" "}
                  <span style={{ color: "rgba(255, 68, 80, 1)" }}>
                    {" "}
                    {coinData?.patternRecognition?.[0]?.target}
                  </span>
                </span>
              }
              sx={{
                border: "1px solid rgba(255, 255, 255, 1)",
                width: { xs: "100%", md: "auto" },
              }}
            />

            <CustomButton
              variant="h1"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                  {t("AiTools.PatternRecognition.breakout")} :{" "}
                  <span style={{ color: "rgba(255, 68, 80, 1)" }}>
                    {" "}
                    {coinData?.patternRecognition?.[0]?.breakout}
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
                width: { xs: "100%", md: "auto" },
              }}
            />
          </Box>
        </Box>

        <Box width={{ xs: "100%", md: "auto" }} mt={{ xs: 2, md: 0 }}>
          <Box>
            <Box> {t("AiTools.PatternRecognition.confidence")}{` : ${confidenceValue}%`}</Box>

            <Box sx={{ width: "100%", mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={confidenceValue}
                sx={{
                  height: 10,
                  borderRadius: "30px",
                  bgcolor: "text.Gainsboro",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "accent.main",
                    borderRadius: "30px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} marginTop={3} backgroundColor="background.lightGray" p={2} borderRadius={"10px"}>
        <Grid item size={{ xs: 12, sm: 2 }}>
          <Box display={"flex"} alignItems={"center"} gap={1} >
            <CustomButton
              title={t("AiTools.PatternRecognition.howToUse")}
              sx={{
                borderRadius: "20px",
                backgroundColor: "accent.main",
              }}
            />
          </Box>
        </Grid>
        <Grid item mt={1} size={{ xs: 12, sm: 10 }}>
          <Typography variant="body1" fontSize={15} fontWeight={600}>
            {coinData?.aiAnalysis}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Pattern;
