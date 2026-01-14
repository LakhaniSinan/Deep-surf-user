import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const MarketIntelligence = ({ coinData }) => {
    const { t } = useTranslation();
  const marketStats = [
    {
      title: (t("AiTools.MarketIntelligence.fundingRate")),
      value: coinData?.enhancedMarketIntelligence?.fundingRate?.value,
      description: coinData?.enhancedMarketIntelligence?.fundingRate?.sentiment,
    },
    {
      title: (t("AiTools.MarketIntelligence.lsRatio")),
      value: coinData?.enhancedMarketIntelligence?.longShortRatio?.value,
      description: "Heavily long",
    },
    {
      title:  (t("AiTools.MarketIntelligence.volume24h")),
      value: coinData?.enhancedMarketIntelligence?.volume24h?.value,
      description: coinData?.enhancedMarketIntelligence?.volume24h?.description,
    },
    {
      title: (t("AiTools.MarketIntelligence.liquidityRisk")),
      value: coinData?.enhancedMarketIntelligence?.liquidationRisk?.long,
      value1: coinData?.enhancedMarketIntelligence?.liquidationRisk?.long,
      description: coinData?.enhancedMarketIntelligence?.liquidationRisk?.zones,
    },
  ];

  return (
    <>
      <Box mt={"25px"}>
        <Typography variant="h5" fontSize={"20px"}>
          {t("AiTools.MarketIntelligence.enhancedMarketIntelligence")}{" "}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} marginTop={2}>
          {marketStats.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Box key={index} mb={2} p={2} bgcolor="neutral.darkGrey" borderRadius={2}>
                <Typography variant="body2" color="neutral.Snowwhite">
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  mt="10px"
                  color={coinData?.enhancedMarketIntelligence?.fundingRate?.value.includes("-") ? "text.errorColor" : "text.greenColor"}
                >
                  {item.value} {item.value1}
                </Typography>
                <Typography
                  variant="h6"
                  mt="12px"
                  fontSize={"16px"}
                  fontWeight={400}
                  color={
                    item.description === "Neutral"
                      ? "neutral.brightYellow"
                      : item.description === "Heavily long"
                        ? "#4CAF50"
                        : "#FFFFFF"
                  }
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MarketIntelligence;
