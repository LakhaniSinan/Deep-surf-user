import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/header";
import AskAI from "./askAi";
import ChartsTrending from "./chartsTrending";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import getChartApi from "../../services/modules/chart";
import { toast } from "react-toastify";
import ChartTools from "./slider";
import Chart from "./chart";
import ChartsTrading from "./chart";
export const Charts = () => {
  const { t } = useTranslation();
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [interval, setInterval] = useState("1h");
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getChartAPi = async () => {
    if (!symbol || !interval) return;

    try {
      setIsLoading(true);
      const response = await getChartApi(symbol, interval);
      setChartData(response?.data?.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Chart API failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChartAPi();
  }, [symbol, interval]);
  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <Container maxWidth="lg">
          <Box my={5}>
            <Typography
              variant="h1"
              fontSize="24px"
              fontWeight={700}
              color="text.primary"
            >
              {t("Chart.chartTitle")}
            </Typography>
          </Box>

          <Grid container spacing={2} mt={2} mb={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box>
                <AskAI />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <ChartsTrending chart={chartData} />
              {/* <Box display="flex" width="100%">
                <ChartsTrending />
                <Box width={56} flexShrink={0}>
                  <ChartTools />
                </Box>
                <Box flex={1} minWidth={0}>
                  <ChartsTrading />
                </Box>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Charts;
