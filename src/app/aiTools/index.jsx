import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import AiProof from "./aiProof";
import TechnicalIndicator from "./technicalIndicator";
import DashboardStats from "./confluenceButton";
import IctLiquid from "./ictLiquid";
import MarketIntelligence from "./marketIntelligence";
import Pattern from "./pattern";
import IndicatorAnalysis from "./indicatorAnalysis";
import { useState } from "react";
import { aiToolsData } from "../../services/modules/home";
import { toast } from "react-toastify";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/Vector.svg";
import AiProofSkeleton from "../../components/skeleton/aiTools/aiTools";
import DashboardStatsSkeleton from "../../components/skeleton/aiTools/dashbaordSheet";
import TechnicalIndicatorSkeleton from "../../components/skeleton/aiTools/teachnical";
import IctLiquidSkeleton from "../../components/skeleton/aiTools/ictLiquid";
import MarketIntelligenceSkeleton from "../../components/skeleton/aiTools/marketAnalysis";
import PatternSkeleton from "../../components/skeleton/aiTools/pattern";
import IndicatorAnalysisSkeleton from "../../components/skeleton/aiTools/indicatorAnalysis";

const AiTools = () => {
  const [ticker, setTicker] = useState("");
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAiToolsData = async () => {
    if (!ticker) return toast.error("Please enter coin symbol");
    try {
      setIsLoading(true);
      setCoinData(null);
      const res = await aiToolsData(ticker);
      if (res?.data?.status === "success") {
        setCoinData(res?.data?.data);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{
        paddingTop: "30px", color: "white",
      }}>
        <Typography variant="h1" fontSize="25px">
          AI Tools
        </Typography>
        <Box
          sx={{
            backgroundColor: "#161616",
            borderRadius: "22px",
            padding: "20px",
            width: "100%",
            maxWidth: "1449px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#fff", marginBottom: "10px", fontSize: "18px" }}
          >
            AI Proof — Quick coin verification
          </Typography>
          <Typography
            sx={{ color: "#fff", marginBottom: "15px", fontSize: "12px" }}
          >
            In-depth AI analysis of any coin in seconds. Enter the ticker,
            receive a complete breakdown and recommendation.
          </Typography>
          <CustomInput
            placeholder="ETH"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && getAiToolsData()}
            InputEndIcon={
              isLoading ?
                (<CircularProgress
                  size={30}
                  sx={{ color: "#fff" }}
                />) : (
                  < img
                    src={IconImage}
                    onClick={getAiToolsData}
                    style={{ cursor: "pointer" }}
                  />)
            }
          />
        </Box>
        <Box backgroundColor="#161616" p={"25px"} mt={2} borderRadius={"30px"}>
          {isLoading ? (
            <AiProofSkeleton />
          ) : coinData ? (
            <AiProof coinData={coinData} />
          ) : null}
          {isLoading ? (
            <>
              <DashboardStatsSkeleton />
              <TechnicalIndicatorSkeleton />
              <IctLiquidSkeleton />
              <MarketIntelligenceSkeleton />
              <PatternSkeleton />
              <IndicatorAnalysisSkeleton />
            </>
          ) : coinData ? (
            <>
              <DashboardStats coinData={coinData} />
              <TechnicalIndicator coinData={coinData} />
              <IctLiquid coinData={coinData} />
              <MarketIntelligence coinData={coinData} />
              <Pattern coinData={coinData} />
              <IndicatorAnalysis coinData={coinData} />
            </>
          ) : null}
        </Box>
      </Container>
    </>
  );
};

export default AiTools;
