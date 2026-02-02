import React, { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProgressSlider from "../../components/progressSlider";
import { useTranslation } from "react-i18next";
import { simulateApi } from "../../services/modules/calculator";
import { toast } from "react-toastify";

const WhatIfSimulator = ({ formData }) => {

  const { t } = useTranslation();

  const [priceChange, setPriceChange] = useState(0);
  const [simData, setSimData] = useState(null);
  const [loading, setLoading] = useState(false);

  const callSimulationApi = async (newValue) => {
    if (!formData) return;

    const currentMarketPrice = formData?.currentPrice || formData?.level || 0;
    const calculatedNewPrice = currentMarketPrice * (1 + newValue / 100);

    const payload = {
      currentPrice: currentMarketPrice,
      entryPrice: currentMarketPrice,
      newPrice: calculatedNewPrice,
      positionSizeUnits: formData?.positionSizeUnits || 0.001,
      direction: formData?.direction || "long",
      leverage: formData?.leverage || 1,
      deposit: formData?.deposit || 0,
      margin: formData?.riskDollar || 0,
      pair: formData?.pair || "BTCUSDT",
      target: formData?.targetMultiplier || 1,
      atr: formData?.atrMultiplier || 0,
      priceChange: newValue,
    };

    try {
      setLoading(true);
      const response = await simulateApi(payload);

      if (response?.data) {
        setSimData(response.data);
      }
    } catch (error) {
      console.error("Simulation API error:", error);
      toast.error("Simulation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setPriceChange(newValue);
    callSimulationApi(newValue);
  };

  const handleReset = () => {
    setPriceChange(0);
    callSimulationApi(0);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        p: 1,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF" }}>
            {t("Chart.whatIfSimulator")}
          </Typography>
          <Typography
            onClick={handleReset}
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#8F8F8F",
              cursor: "pointer",
              "&:hover": { color: "#C7C7C7" },
            }}
          >
            {t("Chart.Reset")}
          </Typography>
        </Stack>

        <Box>
          <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#8F8F8F", mb: 0.5 }}>
            {t("Chart.newPrice")}
          </Typography>
          <Typography sx={{ fontSize: "20px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
            {simData?.data?.newPrice}
          </Typography>
        </Box>
        
        <Box sx={{ py: 0.5 }}>
          <ProgressSlider
            value={priceChange}
            onChange={handleSliderChange}
            min={-50}
            max={50}
            disabled={loading}
          />
        </Box>

        <Grid container spacing={2}>
          <Grid item size={{ xs: 3 }} >
            <Box>
              <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#8F8F8F", mb: 0.5 }}>
                {t("Chart.pnL")}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: simData?.data?.pnlRaw >= 0 ? "#4CAF50" : "#FF4444" }}>
                {simData?.data?.pnl}
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#8F8F8F", mb: 0.5 }}>
                {t("Chart.roi")}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: simData?.data?.roiRaw >= 0 ? "#4CAF50" : "#FF4444" }}>
                {simData?.data?.roi}
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#8F8F8F", mb: 0.5 }}>
                {t("Chart.liquidation")}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#FF4444" }}>
                {simData?.data?.liquidationPrice}
              </Typography>
            </Box>
          </Grid>

          <Grid item size={{ xs: 3 }}>
            <Box>
              <Typography sx={{ fontSize: "11px", fontWeight: 400, color: "#8F8F8F", mb: 0.5 }}>
                {t("Chart.distance")}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#FFFFFF" }}>
                {simData?.data?.distanceToLiquidation}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
      
      {simData?.data?.marginWarning && (
        <Typography color="neutral.redOrange" mt={2}>
          {simData?.data?.marginWarning}
        </Typography>
      )}
    </Box>
  );
};

export default WhatIfSimulator;