// CurrentPrice.jsx
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CalculatorResultCard from "../../components/calculatorResultCard";
import RiskCheck from "./riskCheck";
import WhatIfSimulator from "./whatIfSimulator";
import { useTranslation } from "react-i18next"; // ✅ useTranslation import

const CurrentPrice = ({ exchangeMarketData, calculatorResult }) => {
  console.log("grgrgrgrgrgrgrgrdddddddddddddddd", exchangeMarketData);

  const { t } = useTranslation();

  // Entry / Stop / Take as a single string with fallback
  const entryStopTake = calculatorResult
    ? `${calculatorResult.entryPrice ?? "-"} / ${calculatorResult.stopPrice ?? "-"} / ${calculatorResult.takePrice ?? "-"}`
    : "- / - / -";

  const data = [
    {
      id: 1,
      items: [
        {
          label: t("Chart.pair"),
          value: calculatorResult?.pair ?? "-",
        },
        {
          label: t("Chart.entryStopTake"),
          value: entryStopTake,
        },
        {
          label: "ATR (1h,14)",
          value: calculatorResult?.atrMultiplier ?? "-",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          label: t("Chart.positionSize"),
          value: calculatorResult?.positionSizeUnits ?? "-",
        },
        {
          label: t("Chart.mominalPositions"),
          value: calculatorResult?.nominalPosition ? `$${calculatorResult.nominalPosition}` : "-",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          label: t("Chart.margin"),
          value: calculatorResult?.margin ? `$${calculatorResult.margin}` : "-",
        },
        {
          label: t("Chart.RiskIn"),
          value: calculatorResult?.riskDollar ? `$${calculatorResult.riskDollar}` : "-",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          label: t("Chart.expectedProfit"),
          value: calculatorResult?.expectedProfit ? `$${calculatorResult.expectedProfit}` : "-",
        },
        {
          label: "R:R",
          value: calculatorResult?.rrRatio ?? "-",
        },
      ],
    },
  ];

  return (
    <Stack
      spacing={3}
      sx={{
        backgroundColor: "#161616",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        p: 2.5,
      }}
    >
      {/* Current Price Section */}
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography
              variant="labelMd"
              fontSize={12}
              sx={{ color: "text.bluishGray", mb: 0.5 }}
            >
              {t("Chart.currentPrice")}
            </Typography>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              {exchangeMarketData?.current_price ?? "-"}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="labelMd"
              fontSize={12}
              sx={{ color: "text.bluishGray", mb: 0.5 }}
            >
              {t("Referrals.source")}
            </Typography>
            <Box
              sx={{
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.08)",
                py: 0.5,
                px: 2,
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: 400,
                mt: 1,
              }}
            >
              {/* {t("Chart.binanceFutures")} */}
              {exchangeMarketData?.exchange}
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* Calculator Results Grid */}
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid item size={{ xs: 12, sm: 6 }} key={card.id}>
            <CalculatorResultCard items={card.items} />
          </Grid>
        ))}
      </Grid>

      {/* Risk Check Section */}
      <RiskCheck calculateData={calculatorResult} />

      {/* What-If Simulator */}
      <WhatIfSimulator formData={calculatorResult} />
    </Stack>
  );
};

export default CurrentPrice;
