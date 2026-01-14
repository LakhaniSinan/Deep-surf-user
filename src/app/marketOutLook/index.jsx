import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import Coin from "./coin";
import Macroeconomics from "./macroeconomics";
import CryptocurrencyEvents from "./cryptocurrencyEvents";
import Trading from "./trading";
import MarkDataMetric from "./markDataMetric";
import { useEffect, useState } from "react";
import { getMarketOutLook } from "../../services/modules/home";
import AiMarketAnalysis from "./marketAnalysis";
import AiMarketAnalysisSkeleton from "../../components/skeleton/marketOutLookSkeleton/aiMarketAnalysis";
import CoinSkeleton from "../../components/skeleton/marketOutLookSkeleton/coin";
import MacroeconomicsSkeleton from "../../components/skeleton/marketOutLookSkeleton/macroeconomic";
import CryptocurrencyEventsSkeleton from "../../components/skeleton/marketOutLookSkeleton/cryptocurrencyEvent";
import TradingSkeleton from "../../components/skeleton/marketOutLookSkeleton/trading";
import MarkDataMetricSkeleton from "../../components/skeleton/marketOutLookSkeleton/marketAnanlysis";
import { useTranslation } from "react-i18next";
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
  console.log("fhyufrjfrssssssssssssfrfr", whaleTracker);

  const [overallSentiment, setOverallSentiment] = useState([]);
  const [dayOfWeek, setDayOfWeek] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const language = i18n.language || "en";


  const getMarketOutData = async () => {
    try {
      setIsLoading(true);
      const response = await getMarketOutLook({ language });
      if (response?.data.status === "success") {
        const data = response?.data?.data;
        console.log("fyegfefe", data);

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
        setWhaleTracker(data?.whalesTracker)
      }
    } catch (error) {
      console.error("Error fetching market data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMarketOutData();
  }, [language]);

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
        {!isLoading && !marketOutLook && (
          <Typography
            fontSize="16px"
            color="text.lightRedColor"
            textAlign="center"
            mt={5}
            fontFamily={"inter Tight"}
          >
            No Data Found
          </Typography>
        )}

        {/* Show Data */}
        {!isLoading && marketOutLook && (
          <>
            <AiMarketAnalysis data={marketOutLook} />
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
            <MarkDataMetric
              top={topMover}
              marketMetricesData={marketMetrics}
              riskCalendar={marketOutLook}
              // fetchMarketData={getMarketOutData} 
              whaleTracker={whaleTracker}

            />
          </>
        )}
      </Container>
    </>
  );
};

export default MarketOutLook;
