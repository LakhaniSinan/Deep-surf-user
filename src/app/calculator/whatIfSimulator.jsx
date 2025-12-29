import React, { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProgressSlider from "../../components/progressSlider";
import { useTranslation } from "react-i18next";

const WhatIfSimulator = () => {
  const { t } = useTranslation();

  const [priceChange, setPriceChange] = useState(23.029);
  const basePrice = 100000;

  const handleSliderChange = (event, newValue) => {
    setPriceChange(newValue);
  };

  const handleReset = () => {
    setPriceChange(0);
  };

  // Calculate values based on price change
  const calculatedNewPrice = basePrice * (1 + priceChange / 100);

  // Base values from image (when priceChange = 23.029%)
  const basePriceChange = 23.029;
  const basePnL = 1298;
  const baseROI = 2.04;

  // Scale values proportionally to price change
  const scaleFactor = basePriceChange !== 0 ? priceChange / basePriceChange : 0;
  const pnl = priceChange === 0 ? 0 : basePnL * scaleFactor;
  const roi = priceChange === 0 ? 0 : baseROI * scaleFactor;

  const liquidation = 130202;
  const distance = Math.max(
    0,
    ((liquidation - calculatedNewPrice) / liquidation) * 100
  );

  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        p: 2.5,
      }}
    >
      <Stack spacing={2}>
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            {t("Chart.whatIfSimulator")}
          </Typography>
          <Typography
            onClick={handleReset}
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              color: "#8F8F8F",
              cursor: "pointer",
              "&:hover": {
                color: "#C7C7C7",
              },
            }}
          >
            {t("Chart.Reset")}
          </Typography>
        </Stack>

        {/* New Price */}
        <Box>
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 400,
              color: "#8F8F8F",
              mb: 0.5,
            }}
          >
            {t("Chart.newPrice")}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            $
            {calculatedNewPrice.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Typography>
        </Box>

        {/* Slider */}
        <Box sx={{ py: 0.5 }}>
          <ProgressSlider
            value={priceChange}
            onChange={handleSliderChange}
            min={-50}
            max={50}
          />
        </Box>

        {/* Metrics Grid */}
        <Grid container spacing={2}>
          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#8F8F8F",
                  mb: 0.5,
                }}
              >
                {t("Chart.pnL")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: pnl >= 0 ? "#4CAF50" : "#FF4444",
                }}
              >
                ${pnl >= 0 ? "+" : ""}
                {Math.abs(pnl).toLocaleString("en-US")}
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#8F8F8F",
                  mb: 0.5,
                }}
              >
                {t("Chart.roi")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: roi >= 0 ? "#4CAF50" : "#FF4444",
                }}
              >
                {roi >= 0 ? "+" : ""}
                {roi.toFixed(2)}%
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#8F8F8F",
                  mb: 0.5,
                }}
              >
                {t("Chart.liquidation")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FF4444",
                }}
              >
                ${liquidation.toLocaleString("en-US")}
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#8F8F8F",
                  mb: 0.5,
                }}
              >
                {t("Chart.distance")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                {distance.toFixed(1)}%
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Risk Warning */}
        <Box
          sx={{
            p: 1.25,
          }}
        >
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: 500,
              color: "#FF4444",
              textAlign: "left",
            }}
          >
            {t("Chart.Margin")}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default WhatIfSimulator;
