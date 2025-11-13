import { Box, Grid, Stack, Typography } from "@mui/material";
import CalculatorResultCard from "../../components/calculatorResultCard";
import { calculatorResultsData } from "./calculatorResults";
import RiskCheck from "./riskCheck";
import WhatIfSimulator from "./whatIfSimulator";

const CurrentPrice = () => {
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
              Current Price
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
              Source
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
              Binance Futures
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Calculator Results Grid */}
      <Grid container spacing={2}>
        {calculatorResultsData.map((card) => (
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
