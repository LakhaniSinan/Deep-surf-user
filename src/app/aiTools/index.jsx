import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import AiProof from "./aiProof";
import TechnicalIndicator from "./technicalIndicator";
import DashboardStats from "./confluenceButton";
import IctLiquid from "./ictLiquid";
import MarketIntelligence from "./marketIntelligence";
import Pattern from "./pattern";
import IndicatorAnalysis from "./indicatorAnalysis";

const AiTools = () => {
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
        <Typography variant="h1">AI Tools</Typography>
        <AiProof />
        <Box
          sx={{
            backgroundColor: "#161616",
            borderRadius: "20px",
            padding: "25px",
            width: "100%",
            maxWidth: "1449px",
            marginTop: "30px",
          }}
        >
          {/* confluence button page */}
          <DashboardStats />
          {/* technicalIndicator  */}
          <TechnicalIndicator />
          {/* IctLiquid */}
          <IctLiquid/>
          {/* MarketIntelligence */}
          <MarketIntelligence/>
          {/* Pattern  */}
          <Pattern/>
          {/* IndicatorAnalysis */}
          <IndicatorAnalysis/>
        </Box>
      </Container>
    </>
  );
};

export default AiTools;
