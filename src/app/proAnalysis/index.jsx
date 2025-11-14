import { Typography, Container } from "@mui/material";
import Header from "../../components/header";
import MftScan from "./mftScan";
import HeatMap from "./heatMap";
import LiquidationMap from "./LiquidationMap.jsx";
import FuturesMetrics from "./FuturesMetrics";

const ProAnalysis = () => {
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
        <Typography variant="h1">Pro Analytics</Typography>
        <MftScan />
        <HeatMap />
        <LiquidationMap />
        <FuturesMetrics />
      </Container>
    </>
  );
};

export default ProAnalysis;
