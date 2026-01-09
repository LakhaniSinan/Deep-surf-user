import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/header";
import AskAI from "./askAi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import getChartApi from "../../services/modules/chart";
import { toast } from "react-toastify";
import LightweightChart from "./lightweightChart";

export const Charts = () => {
  const { t } = useTranslation();
  const [symbol, setSymbol] = useState("BTC"); 
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
      toast.error(error?.response?.data?.message || "Chart API failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChartAPi();
  }, [symbol, interval]);

  return (
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
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ height: "75vh" }}>
              <AskAI />
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                height: "75vh",
                padding: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {isLoading ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Loading chart...
                </Box>
              ) : chartData && chartData.chartData ? (
                <LightweightChart data={chartData} />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  No data available
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Charts;