import { Typography, Container, Box, CircularProgress } from "@mui/material";
import Header from "../../components/header";
import MftScan from "./mftScan";
import HeatMap from "./heatMap";
import FuturesMetrics from "./FuturesMetrics";
import LiquidationMapData from "./LiquidationMap";
import { useState } from "react";
import { proAnylysisData } from "../../services/modules/home";
import { toast } from "react-toastify";
import MTFSectionSkeleton from "../../components/skeleton/mftScan";
import HeatMapSkeleton from "../../components/skeleton/heatMap";
import LiquidationMapDataSkeleton from "../../components/skeleton/liquadationMap";
import FuturesMetricsSkeleton from "../../components/skeleton/liquidationMap";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/vector.svg";

const ProAnalysis = () => {
  const [ticker, setTicker] = useState("");
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProAnanlsisData = async () => {
    if (!ticker) return toast.error("Please enter coin symbol");
    try {
      setIsLoading(true);
      setCoinData(null);
      const res = await proAnylysisData(ticker);
      console.log("rrrrrrrrrrrrrrrrrrrrrrrrr", res);

      if (res?.data?.status === "success") {
        const data = res?.data?.data;
        setCoinData(data);
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
      <Container maxWidth="lg" sx={{ paddingTop: "30px", color: "white" }}>
        <Typography variant="h1" fontSize="24px">
          Pro Analytics
        </Typography>

        {/* 🔍 Input at the top */}
        <Box
          sx={{
            backgroundColor: "#161616",
            borderRadius: "20px",
            padding: "25px",
            marginTop: "40px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              marginBottom: "15px",
              fontSize: "15px",
            }}
          >
            MTF Scan — Multi-Timeframe Analysis
          </Typography>

          <CustomInput
            placeholder="ETH"
            InputEndIcon={
              isLoading ? (
                <CircularProgress
                  size={30}       // Icon size ke hisaab se adjust kar sakte ho
                  sx={{ color: "#fff" }}
                />
              ) : (
                <img
                  src={IconImage}
                  onClick={!ticker ? null : getProAnanlsisData}
                  style={{
                    cursor: !ticker ? "not-allowed" : "pointer",
                    opacity: !ticker ? 0.5 : 1,
                  }}
                  alt="search"
                />
              )
            }
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && getProAnanlsisData()}
            sx={{ marginTop: "15px", marginBottom: "20px" }}
          />




        </Box>
        {/* MFT Section */}
        {isLoading ? (
          <MTFSectionSkeleton />
        ) : coinData ? (
          <MftScan
            ticker={ticker}
            setTicker={setTicker}
            getProAnanlsisData={getProAnanlsisData}
            coinData={coinData}
            isLoading={isLoading}
          />
        ) : null}

        {/* HeatMap */}
        {isLoading ? (
          <HeatMapSkeleton />
        ) : coinData ? (
          <HeatMap data={coinData} />
        ) : null}

        {/* Liquidation Map */}
        {isLoading ? (
          <LiquidationMapDataSkeleton />
        ) : coinData ? (
          <LiquidationMapData coinData={coinData} />
        ) : null}

        {/* Futures Metrics */}
        {isLoading ? (
          <FuturesMetricsSkeleton />
        ) : coinData ? (
          <FuturesMetrics coinData={coinData} />
        ) : null}
      </Container>
    </>
  );
};

export default ProAnalysis;
