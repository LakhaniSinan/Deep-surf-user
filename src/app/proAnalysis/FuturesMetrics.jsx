import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const FuturesMetrics = ({ coinData }) => {
  console.log("coisnDatatataaa", coinData?.basicInfo?.symbol);

  const { t } = useTranslation();
  const fundingData = [
    {
      title: (t("ProAnalytics.FuturesMetrics.fundingRate")),
      value: coinData?.futuresMetrics?.fundingRate,
      status: coinData?.futuresMetrics?.fundingRateLabel,
    },

    {
      title: (t("ProAnalytics.FuturesMetrics.openInterest")),
      value: coinData?.futuresMetrics?.openInterest,
      status: coinData?.futuresMetrics?.openInterestChange,
    },

    {
      title: (t("ProAnalytics.FuturesMetrics.lsPositions")),
      value: coinData?.futuresMetrics?.longShortPositions,
      status: coinData?.futuresMetrics?.longShortPositions?.warning,
      stye: {
        width: "100%",
        height: "5px",
        backgroundColor: "#3EDD87",
        margin: "12px 0",
        borderRadius: "10px",
      },
    },

    {
      title: (t("ProAnalytics.FuturesMetrics.LsAccounts")),
      value: coinData?.futuresMetrics?.longShortAccounts,
      status: "Neutral",
      stye: {
        width: "100%",
        height: "5px",
        backgroundColor: "#3EDD87",
        margin: "12px 0",
        borderRadius: "20px",
      },
    },

    {
      title: "Cumulative Delta",
      value: coinData?.futuresMetrics?.cumulativeDelta,
      status: coinData?.futuresMetrics?.cumulativeDeltaLabel,
    },
  ];
  return (
    <>
      <Box
        backgroundColor={"#161616"}
        mt={"15px"}
        padding={"25px"}
        borderRadius={"40px"}
      >
        <Typography variant="h5" fontSize={"25px"}>
          {t("ProAnalytics.FuturesMetrics.futuresMetricesTitle")}

        </Typography>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"20px"}
          flexDirection={"column"}
        >
          <Typography variant="h4" fontSize={"25px"} fontWeight={600}>
            {t("ProAnalytics.LiquidationMap.Current")} {coinData?.basicInfo?.symbol} {t("ProAnalytics.LiquidationMap.price")}
          </Typography>
          <Typography variant="h5" fontSize={"23px"}>
            {coinData?.basicInfo.priceFormatted}
          </Typography>
        </Box>
        <Grid container spacing={1} mt={5}>
          {fundingData.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "neutral.darkGrey",
                  borderRadius: "15px",
                  padding: "15px",
                  textAlign: "left",
                  height: "220px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  fontSize={"23px"}
                  fontWeight={500}
                  color="neutral.Snowwhite"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontSize={"30px"}
                  mt={2}
                  sx={{
                    color: coinData?.futuresMetrics?.fundingRate?.includes('-') ? "text.errorColor" : "text.greenColor",
                  }}
                >
                  {item.value}
                </Typography>
                {item.stye && <Box sx={item.stye}></Box>}

                <Typography
                  variant="h6"
                  sx={{
                    color: coinData?.futuresMetrics?.fundingRateLabel?.includes("-") ? "text.errorColor" : "text.greenColor",
                    fontSize: "18px",
                    marginTop: "40px",
                    fontFamily: "inter Tight",
                  }}
                >
                  {item.status}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              color: "rgba(141, 141, 141, 1)",
              fontSize: "13px",
              fontWeight: 550
            }}
          >
            How to read: <br />
            • Funding 0.01% = Longs pay shorts (market overheating) <br />
            • L/S 1.5 = Dangerous skew towards LONG (correction possible) <br />
            • OI rising + price rising = strong upward trend <br />• OI falling
            = position closures, reversal possible
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FuturesMetrics;
