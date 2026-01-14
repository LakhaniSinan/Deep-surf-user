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
import { useTranslation } from "react-i18next";
const ProAnalysis = () => {
  const [ticker, setTicker] = useState("");
  console.log("ffrfffrfrf", ticker);

  console.log("uehuehfejfefe", ticker);

  const [coinData, setCoinData] = useState(null);
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const language = i18n.language || "en";
  const getProAnanlsisData = async () => {
    if (!ticker) return toast.error("Please enter coin symbol");
    try {
      setIsLoading(true);
      setCoinData(null);
      const res = await proAnylysisData({ ticker, language });
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
          {t("ProAnalytics.proAnalyticsHeading")}
        </Typography>
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
            {t("ProAnalytics.mtfScan")}
          </Typography>

          <CustomInput
            placeholder="ETH"
            InputEndIcon={
              isLoading ? (
                <CircularProgress
                  size={30}
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

        {isLoading ? (
          <HeatMapSkeleton />
        ) : coinData ? (
          <HeatMap data={coinData} />
        ) : null}

        {isLoading ? (
          <LiquidationMapDataSkeleton />
        ) : coinData ? (
          <LiquidationMapData coinData={coinData} />
        ) : null}

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
