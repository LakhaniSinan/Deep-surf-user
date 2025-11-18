import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import Coin from "./coin";
import Macroeconomics from "./macroeconomics";
import CryptocurrencyEvents from "./cryptocurrencyEvents";
import Trading from "./trading";
import MarkDataMetric from "./markDataMetric";

const MarketOutLook = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: "30px",
          color: "white",
        }}
      >
        <Typography variant="h1" fontSize="24px">Market Outlook</Typography>
        <Box mt="30px">
          <Typography variant="h4" fontSize="20px">AI Market Analysis</Typography>
          <Typography color="neutral.mutedText" variant="body1" fontSize="14px">
            Daily AI analysis of macroeconomics, the crypto market, key events,
            and trading recommendations
          </Typography>
        </Box>
        <Coin/>
        <Macroeconomics/>
        <CryptocurrencyEvents/>
        <Trading/>
        <MarkDataMetric/>
      </Container>
    </>
  );
};
export default MarketOutLook;
