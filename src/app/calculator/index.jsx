import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import CalculatorForm from "./calculatorForm";
import CurrentPrice from "./currentPrice";

const Calculator = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Box my={5}>
          <Typography
            variant="h1"
            fontSize={"24px"}
            fontWeight={600}
            color={"text.primary"}
          >
            Calculator
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
