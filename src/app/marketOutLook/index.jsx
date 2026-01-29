import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import Coin from "./coin";
import Macroeconomics from "./macroeconomics";
import CryptocurrencyEvents from "./cryptocurrencyEvents";
import Trading from "./trading";
import MarkDataMetric from "./markDataMetric";
import { useEffect, useState } from "react";
import { getMarketOutLook, getWhalesTrackers } from "../../services/modules/home";
import AiMarketAnalysis from "./marketAnalysis";
import AiMarketAnalysisSkeleton from "../../components/skeleton/marketOutLookSkeleton/aiMarketAnalysis";
import CoinSkeleton from "../../components/skeleton/marketOutLookSkeleton/coin";
import MacroeconomicsSkeleton from "../../components/skeleton/marketOutLookSkeleton/macroeconomic";
import CryptocurrencyEventsSkeleton from "../../components/skeleton/marketOutLookSkeleton/cryptocurrencyEvent";
import TradingSkeleton from "../../components/skeleton/marketOutLookSkeleton/trading";
import MarkDataMetricSkeleton from "../../components/skeleton/marketOutLookSkeleton/marketAnanlysis";
import { useTranslation } from "react-i18next";
import MarketMetricData from "./marketMetricData";
const MarketOutLook = () => {
  const [marketOutLook, setMarketOutLook] = useState(null);
  console.log("deedgvebhdededed", marketOutLook);

  const [macroData, setMacroData] = useState(null);
  const [cryptoEvent, setCryptoEvent] = useState(null);
  const [eftFlow, setEftFlow] = useState({});
  const [onChainSignals, setOnChainSignals] = useState({});
  const [tradingRecomendation, setTradingRecomendation] = useState({});
  const [topMover, setTopMover] = useState({});
  const [marketMetrics, setMarketMetrices] = useState({});
  const [coins, setCoin] = useState([]);
  const [whaleTracker, setWhaleTracker] = useState([]);
  const [whale, setWhale] = useState([])
  console.log("fhyufrjfrsssssssddddddddddddddddddddddsssssfrfr", whale);

  const [overallSentiment, setOverallSentiment] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const language = i18n.language || "en";

  // ================= Fetch Market + Whale Data in Parallel =================
  const fetchMarketData = async () => {
    setIsLoading(true);
    try {
      const [marketRes, whaleRes] = await Promise.all([
        getMarketOutLook({ language }),
        getWhalesTrackers(),
      ]);

      // Market Outlook
      if (marketRes?.data?.status === "success") {
        const data = marketRes.data.data;
        setMarketOutLook(data);
        setMacroData(data?.macroeconomics);
        setDayOfWeek(data?.dayOfWeek);
        setCryptoEvent(data?.cryptoEvents);
        setEftFlow(data?.etfFlows);
        setOnChainSignals(data?.onChainSignals);
        setTradingRecomendation(data?.tradingRecommendations);
        setTopMover(data?.topMovers);
        setMarketMetrices(data?.marketMetrics);
        setCoin(data?.topCoins);
        setOverallSentiment(data?.overallSentiment);
        setWhaleTracker(data?.whalesTracker);
      }

      // Whale Tracker
      if (whaleRes?.data?.status === "success") {
        const whaleData = whaleRes.data.data;
        setWhaleTracker(whaleData);
      }
    } catch (error) {
      console.error("Error fetching market or whale data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, [language]); // refetch if language changes


  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ paddingTop: "30px", color: "white" }}>
        <Typography variant="h1" fontSize="30px" fontWeight={600}>
          {t("MarketOutlook.marketOutLookTitle")}
        </Typography>

        {/* Loading Skeleton */}
        {isLoading && (
          <>
            <AiMarketAnalysisSkeleton />
            <CoinSkeleton />
            <MacroeconomicsSkeleton />
            <CryptocurrencyEventsSkeleton />
            <TradingSkeleton />
            <MarkDataMetricSkeleton />
          </>
        )}
        {/* No Data Found */}
        {/* Show Data */}
        {!isLoading && marketOutLook && (
          <>
            <AiMarketAnalysis aiAnalysis={marketOutLook} />
            <Coin
              data={coins}
              overallSentimentData={overallSentiment}
              dayOfWeek={marketOutLook}
            />
            <Macroeconomics data={macroData} />
            <CryptocurrencyEvents
              data={cryptoEvent}
              data2={eftFlow}
              data3={onChainSignals}
            />
            <Trading tradingData={tradingRecomendation} />
            <MarketMetricData />
            <MarkDataMetric
              top={topMover}
              marketMetricesData={marketMetrics}
              riskCalendar={marketOutLook}
              // fetchMarketData={getMarketOutData} 
              whaleTrackers={whale}


            />
          </>
        )}
      </Container>
    </>
  );
};

export default MarketOutLook;
