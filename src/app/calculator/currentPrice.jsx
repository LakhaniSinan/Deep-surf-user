import { Box, Grid, Stack, Typography } from "@mui/material";
import CalculatorResultCard from "../../components/calculatorResultCard";
// import { calculatorResultsData } from "./calculatorResults";
import RiskCheck from "./riskCheck";
import WhatIfSimulator from "./whatIfSimulator";
import { useTranslation } from "react-i18next";


const CurrentPrice = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      items: [
        {
          label: (t("Chart.pair")),
          value: "BTC/USDT",
        },
        {
          label:  (t("Chart.entryStopTake")),
          value: "0.5000 / -1.0000 / 5.0000",
        },
        {
          label: "ATR (1h,14)",
          value: "1",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          label: (t("Chart.positionSize")),
          value: "13",
        },
        {
          label: (t("Chart.mominalPositions")),
          value: "$6.50",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          label: (t("Chart.margin")),
          value: "$0.33",
        },
        {
          label:(t("Chart.RiskIn")),
          value: "$20.00",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          label: (t("Chart.expectedProfit")),
          value: "$58.46",
        },
        {
          label: "R:R",
          value: "3.00:1",
        },
      ],
    },
  ]
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="labelMd"
              fontSize={12}
              sx={{ color: "#C7C7C7", mb: 0.5 }}
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
              $100,000
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="labelMd"
              fontSize={12}
              sx={{ color: "#8F8F8F", mb: 0.5 }}
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
              {t("Chart.binanceFutures")}
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
      <RiskCheck />

      {/* What-If Simulator */}
      <WhatIfSimulator />
    </Stack>
  );
};

export default CurrentPrice;
