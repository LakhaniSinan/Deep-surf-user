// Calculator.jsx
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../components/header";
import CalculatorForm from "./calculatorForm";
import CurrentPrice from "./currentPrice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { exchangeSupportApi, exchangeMarketApi, exchangeData, exchangeAtrValue, getCalculator } from "../../services/modules/calculator";
import { toast } from "react-toastify";
import AiOutCome from "./aiOutCome";
import PlayBookBuilder from "./playBookBuilder";
import OrderFlowEngine from "./orderFlowEngine";
import TradeBuilder from "./tradeBuilder";
import PlannedTrade from "./plannedTrade";

const Calculator = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [exchange, setExchange] = useState(null);
  const [exchangeMarketData, setExchangeMarketData] = useState(null);
  const [exchangePair, setExchangePair] = useState(null);
  const [exchangeAtr, setExchangeAtr] = useState(null);
  const [tf, setTf] = useState("5m");
  const [len, setLen] = useState(14);
  const [selectedPair, setSelectedPair] = useState("BTCUSDT");
  const [calculatorResult, setCalculatorResult] = useState(null);

  const exchangeSupport = async () => {
    try {
      setIsLoading(true);
      const response = await exchangeSupportApi();
      const data = response?.data?.data;
      setExchange(data);
    } catch (error) {
      console.log("failed to error exchnage support Api");
    } finally {
      setIsLoading(false);
    }
  };

  const exchangeMarket = async (pair) => {
    try {
      setIsLoading(true);
      const response = await exchangeMarketApi({ pair });
      const data = response?.data?.data;
      setExchangeMarketData(data);
    } catch (error) {
      console.log("failed to exchange market APi");
    } finally {
      setIsLoading(false);
    }
  };

  const exchangePairData = async () => {
    try {
      setIsLoading(true);
      const response = await exchangeData();
      const data = response?.data?.data;
      setExchangePair(data);
    } catch (error) {
      console.log("failed to exchnage data");
    } finally {
      setIsLoading(false);
    }
  };

  const exchangeAtrValueData = async () => {
    try {
      setIsLoading(true);
      const response = await exchangeAtrValue({ tf, len });
      const data = response?.data?.data;
      setExchangeAtr(data);
    } catch (error) {
      console.log("failed to atr value api");
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 handleCalculate function
  const handleCalculate = async (formData) => {
    try {
      setIsLoading(true);

      const entryPrice = Number(formData.level);
      const atr = Number(formData.atr);

      const stopPrice =
        formData.direction === "long"
          ? entryPrice - atr
          : entryPrice + atr;

      const takePrice =
        formData.direction === "long"
          ? entryPrice + atr * formData.target
          : entryPrice - atr * formData.target;

      const payload = {
        deposit: Number(formData.deposit),
        riskPercent: Number(formData.riskOrMargin),
        entryPrice,
        stopPrice,
        takePrice,
        leverage: Number(formData.leverage),
        direction: formData.direction,
        pair: formData.pair,
        exchange: formData.exchange,
        fundingRate: Number(formData.fundingRate),
      };

      const res = await getCalculator(payload);

      if (res?.data?.status === "success") {
        toast.success("Calculation Successful");
        setCalculatorResult(res.data.data); // 🔹 save result for CurrentPrice
      } else {
        toast.error("Calculation Failed");
      }
    } catch (error) {
      toast.error("API Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    exchangeSupport();
    exchangePairData();
    exchangeMarket(selectedPair);
    exchangeAtrValueData();
  }, []);

  useEffect(() => {
    exchangeAtrValueData();
  }, [tf, len]);

  useEffect(() => {
    exchangeMarket(selectedPair);
  }, [selectedPair]);

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
        <Box>
          <AiOutCome />
        </Box>
        <Box>
          <PlayBookBuilder />
        </Box>
        <Box>
          <OrderFlowEngine />
        </Box>
        <Box>
          <TradeBuilder />
        </Box>
        <Box>
          <PlannedTrade />
        </Box>

        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            {/* <CalculatorForm
              exchange={exchange}
              metaData={exchangePair}
              exchangeMarketData={exchangeMarketData}
              exchangeAtr={exchangeAtr}
              setTf={setTf}
              setLen={setLen}
              pair={selectedPair}
              setPair={setSelectedPair}
              setCalculatorResult={setCalculatorResult}
              onCalculate={handleCalculate}
              isLoading={isLoading}
            /> */}
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            {/* <CurrentPrice
              exchangeMarketData={exchangeMarketData}
              calculatorResult={calculatorResult}
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculator;
