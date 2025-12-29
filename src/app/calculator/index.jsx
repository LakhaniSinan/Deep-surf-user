import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import CalculatorForm from "./calculatorForm";
import CurrentPrice from "./currentPrice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import getCalculator from "../../services/modules/calculator";
import { toast } from "react-toastify";
const Calculator = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ pt: 0 }}>
        <Box my={5}>
          <Typography
            variant="h1"
            fontSize={"24px"}
            fontWeight={600}
            color={"text.primary"}
          >
            {t("Calculator.calculatorTitle")}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CalculatorForm />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <CurrentPrice />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculator;
