import { Box, Grid, Card, Typography, Button } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import DropDownIcon from "../../assets/icons/Arrow.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CustomButton from "../../components/customButton";
import ReLoadIcon from "../../assets/icons/relaod-Icon.svg";
import Speedometer from "../../components/speedMeter";
import { useTranslation } from "react-i18next";
import RelaodIcon from "../../assets/icons/relaod-Icon.svg";
const MarkDataMetric = ({ top, marketMetricesData, riskCalendar, whaleTracker }) => {
  console.log("fgfyryfhruykfhaaaaaaaaaaaaaaaaaaaaaarjfrfrf", marketMetricesData?.fearGreedIndex?.value);

  const { t } = useTranslation();
  const cardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "14px",
    color: "#fff",
    height: "170px",
  };
  const hasGainersData = top?.gainers && top.gainers.length >= 5;
  const hasloserData = top?.losers && top.losers.length >= 5;
  const Gainers = hasGainersData
    ? [
      {
        id: top.gainers[0].rank,
        title: top.gainers[0].symbol,
        percentage: top.gainers[0].change,
      },
      {
        id: top.gainers[1].rank,
        title: top.gainers[1].symbol,
        percentage: top.gainers[1].change,
      },
      {
        id: top.gainers[2].rank,
        title: top.gainers[2].symbol,
        percentage: top.gainers[2].change,
      },
      {
        id: top.gainers[3].rank,
        title: top.gainers[3].symbol,
        percentage: top.gainers[3].change,
      },
      {
        id: top.gainers[4].rank,
        title: top.gainers[4].symbol,
        percentage: top.gainers[4].change,
      },
    ]
    : [
      { id: 1, title: "Loading...", percentage: "0%" },
      { id: 2, title: "Loading...", percentage: "0%" },
      { id: 3, title: "Loading...", percentage: "0%" },
      { id: 4, title: "Loading...", percentage: "0%" },
      { id: 5, title: "Loading...", percentage: "0%" },
    ];

  const Losers = hasloserData
    ? [
      {
        id: top.losers[0].rank,
        title: top.losers[0].symbol,
        percentage: top.losers[0].change,
      },
      {
        id: top.losers[1].rank,
        title: top.losers[1].symbol,
        percentage: top.losers[1].change,
      },
      {
        id: top.losers[2].rank,
        title: top.losers[2].symbol,
        percentage: top.losers[2].change,
      },
      {
        id: top.losers[3].rank,
        title: top.losers[3].symbol,
        percentage: top.losers[3].change,
      },
      {
        id: top.losers[4].rank,
        title: top.losers[4].symbol,
        percentage: top.losers[4].change,
      },
    ]
    : [
      { id: 1, title: "Loading...", percentage: "0%" },
      { id: 2, title: "Loading...", percentage: "0%" },
      { id: 3, title: "Loading...", percentage: "0%" },
      { id: 4, title: "Loading...", percentage: "0%" },
      { id: 5, title: "Loading...", percentage: "0%" },
    ];

  const events = [
    {
      title: riskCalendar?.riskCalendar?.events[0].title,
      date: riskCalendar?.riskCalendar?.events[0].date,
      color: "#000000",
      backgroundColor: "#FFE600",
      buttonText: riskCalendar?.riskCalendar?.events[0].impact,
    },
    {
      title: riskCalendar?.riskCalendar?.events[1].title,
      date: riskCalendar?.riskCalendar?.events[1].date,
      color: "#FFFFFF",
      backgroundColor: "#FF4C4C",
      buttonText: riskCalendar?.riskCalendar?.events[1].impact,
    },
  ];

  const data = [
    {
      shortCode: riskCalendar?.whalesTracker?.transactions[0]?.address,
      buttonTitle: riskCalendar?.whalesTracker?.transactions[0]?.actionType,
      brought: riskCalendar?.whalesTracker?.transactions[0]?.actionText,
      amount: riskCalendar?.whalesTracker?.transactions[0]?.value,
      source: riskCalendar?.whalesTracker?.transactions[0]?.exchange,
      time: riskCalendar?.whalesTracker?.transactions[0]?.timeAgo,
      buttonColor: "#3EDD87",
    },
    {
      shortCode: riskCalendar?.whalesTracker?.transactions[1]?.address,
      buttonTitle: riskCalendar?.whalesTracker?.transactions[1]?.actionType,
      brought: riskCalendar?.whalesTracker?.transactions[1]?.actionText,
      amount: riskCalendar?.whalesTracker?.transactions[1]?.value,
      source: riskCalendar?.whalesTracker?.transactions[1]?.exchange,
      time: riskCalendar?.whalesTracker?.transactions[1]?.timeAgo,
      buttonColor: "#FF4C4C",
    },
    {
      shortCode: riskCalendar?.whalesTracker?.transactions[2]?.address,
      buttonTitle: riskCalendar?.whalesTracker?.transactions[2]?.actionType,
      brought: riskCalendar?.whalesTracker?.transactions[2]?.actionText,
      amount: riskCalendar?.whalesTracker?.transactions[2]?.value,
      source: riskCalendar?.whalesTracker?.transactions[2]?.exchange,
      time: riskCalendar?.whalesTracker?.transactions[2]?.timeAgo,
      buttonColor: "#FF4C4C",
      // Liquidation: "Liquidation",
      // position: "Last 4 positions",
      value1: riskCalendar?.whalesTracker?.transactions[5]?.liquidation,
      value2: riskCalendar?.whalesTracker?.transactions[5]?.lastPositions,
    },
    {
      shortCode: riskCalendar?.whalesTracker?.transactions[3]?.address,
      buttonTitle: riskCalendar?.whalesTracker?.transactions[3]?.actionType,
      brought: riskCalendar?.whalesTracker?.transactions[3]?.actionText,
      amount: riskCalendar?.whalesTracker?.transactions[3]?.value,
      source: riskCalendar?.whalesTracker?.transactions[3]?.exchange,
      time: riskCalendar?.whalesTracker?.transactions[3]?.timeAgo,
      buttonColor: "#FF4C4C",
      // Liquidation: "Liquidation",
      // position: "Last 4 positions",
      value1: riskCalendar?.whalesTracker?.transactions[5]?.liquidation,
      value2: riskCalendar?.whalesTracker?.transactions[5]?.lastPositions,
    },
  ];

  // Show loading state if no data
  if (!top) {
    return (
      <Box
        backgroundColor="#161616"
        borderRadius="20px"
        padding="25px"
        mt="20px"
      >
        <Box mt="10px" display="flex" justifyContent="space-between">
          <Typography variant="h3" fontSize={"25px"} color="neutral.Snowwhite">
            Whales tracker
          </Typography>
          {/* <img src={ReLoadIcon} alt="" /> */}
        </Box>

        <Typography sx={{ mt: 2, color: "#8D8D8D" }}>
          Loading market data...
        </Typography>
      </Box>
    );
  }



  return (
    <>
      <Box
        backgroundColor="background.charcoal"
        borderRadius="20px"
        padding="25px"
        mt="20px"
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="h5" fontSize="30px" fontWeight={600} fontFamily="inter Tight">
              {t("MarketOutlook.MarketDataMetrics.marketDataMetricsTitle")}
            </Typography></Box>
          <Box>
            <img
              src={RelaodIcon}
              // onClick={handleReload}
              style={{ cursor: "pointer", width: "25px", height: "25px" }}
              width="20px"
            />
          </Box>
        </Box>
        
        <Box mt="10px">
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={cardStyle}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "neutral.Snowwhite",
                    textAlign: "center",
                    display: "block",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "inter Tight"
                  }}
                >
                  {t("MarketOutlook.MarketDataMetrics.fearGreedIndexTitle")}
                </Typography>
                <Typography variant="h6" textAlign="center" color="neutral.brightYellow" fontFamily="inter Tight" fontSize={"25px"}>
                  {marketMetricesData?.fearGreedIndex?.sentiment}
                </Typography>
                <Box textAlign={"center"} mt={"-15px"}>
                  <Speedometer
                    size={50}
                    score={marketMetricesData?.fearGreedIndex?.value}
                  />
                </Box>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
              <Card sx={cardStyle}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  fontFamily={"inter Tight"}
                  color="neutral.Snowwhite"
                >
                  {t("MarketOutlook.MarketDataMetrics.btcDominanceTitle")}
                </Typography>
                <Box display="flex" gap="15px" alignItems={"center"}>
                  <Typography fontSize="30px" fontWeight={600} variant="h6" mt={2}>
                    {marketMetricesData?.btcDominance?.value}
                  </Typography>
                  <Typography fontSize="30px " mt={2}>
                    <img src={DropDownIcon} alt="" />
                  </Typography>
                </Box>
                <Typography color="neutral.Snowwhite" fontWeight={500}>
                  {marketMetricesData?.btcDominance?.trend}
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px" alignItems={"center"}>
                  <Box alignItems={"center"}>
                    <img src={BtcIcon} alt="" />
                  </Box>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    color="neutral.Snowwhite"
                    fontSize={"15px"}
                  >
                    {t("MarketOutlook.MarketDataMetrics.btc24hTitle")}
                  </Typography>
                </Box>
                <Typography
                  fontSize="25px"
                  fontWeight={520}
                  variant="h6"
                  mt={4}
                  fontFamily={"inter Tight"}

                >
                  {marketMetricesData?.prices24h?.btc?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.btc?.change?.includes("-") ? "neutral.brightRed" : "neutral.brightGreen", fontSize: "14px" }}>
                  {marketMetricesData?.prices24h?.btc?.change}
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px" alignItems={"center"}>
                  <Box>
                    <img src={EthIcon} alt="" />
                  </Box>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    color="neutral.Snowwhite"
                    fontSize={"15px"}
                  >
                    {t("MarketOutlook.MarketDataMetrics.eth24hTitle")}
                  </Typography>
                </Box>
                <Typography
                  fontSize="25px"
                  fontWeight={520}
                  variant="h6"
                  mt={4}
                  fontFamily={"inter Tight"}
                >
                  {marketMetricesData?.prices24h?.eth?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.btc?.change?.includes("-") ? "neutral.brightRed" : "neutral.brightGreen", fontSize: "14px" }}>
                  {marketMetricesData?.prices24h?.eth?.change}
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                    <img src={SolanaIcon} alt="" />
                  </Box>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    color="neutral.Snowwhite"
                    fontSize={"15px"}
                  >
                    {t("MarketOutlook.MarketDataMetrics.sol24hTitle")}
                  </Typography>
                </Box>
                <Typography
                  fontSize="25px"
                  fontWeight={520}
                  variant="h6"
                  mt={5}
                  fontFamily={"inter Tight"}
                >
                  {marketMetricesData?.prices24h?.sol?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.btc?.change?.includes("-") ? "rgba(255, 76, 76, 1)" : "rgba(62, 221, 135, 1)", fontSize: "14px" }}>
                  {marketMetricesData?.prices24h?.sol?.change}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box padding="5px" borderRadius="25px" mt="20px">
          <Grid container spacing={3}>
            <Grid
              item
              backgroundColor="neutral.darkGrey"
              padding="20px"
              borderRadius="10px"
              size={{ xs: 12, sm: 6 }}
            >
              <Box
                display="flex"
                gap="8px"
                marginTop="10px"
                marginLeft={"45px"}
                alignItems={"center"}
              >
                <img src={BtcIcon} alt="" />

                <Typography variant="h2" fontFamily={"inter Tight"}
                  fontSize="23px" fontWeight={550} color="neutral.Snowwhite"
                >
                  {t("MarketOutlook.MarketDataMetrics.btcEtfFlowsTitle")}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around" mt={2}>
                <Box>
                  <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.usdValue}
                  </Typography>
                </Box>
                <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                <Box>
                  <Typography marginTop="10px" variant="h4" fontWeight={550} fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.in2Days?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.in2Days?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                    {
                      marketMetricesData?.etfFlowsSummary?.btc?.in2Days
                        ?.usdValue
                    }
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              backgroundColor="#1C1C1C"
              padding="20px"
              borderRadius="10px"
              size={{ xs: 12, sm: 6 }}
            >
              <Box
                display="flex"
                gap="8px"
                marginTop="10px"
                marginLeft={"45px"}
              >
                <img src={EthIcon} alt="" />

                <Typography variant="h2" fontFamily={"inter Tight"}
                  fontSize="23px" fontWeight={550} color="neutral.Snowwhite"
                >
                  {t("MarketOutlook.MarketDataMetrics.ethEtfFlowsTitle")}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around" mt={2}>
                <Box>
                  <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.usdValue}
                  </Typography>
                </Box>
                <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                <Box>
                  <Typography marginTop="10px" variant="h4" fontWeight={550} fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.in2Days?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.in2Days?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                    {
                      marketMetricesData?.etfFlowsSummary?.eth?.in2Days
                        ?.usdValue
                    }
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h6" fontWeight={550} fontSize={"20px"} mt={2} color="neutral.Snowwhite">
          {t("MarketOutlook.MarketDataMetrics.topMovers24hTitle")}
        </Typography>
        <Grid container spacing={2} marginTop="20px">
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography fontSize={"18px"} fontFamily={"Inter Tight"} color="neutral.brightGreen">
              {t("MarketOutlook.MarketDataMetrics.gainersTitle")}
            </Typography>
            {Gainers.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#1C1C1C",
                    padding: "16px 16px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Box display="flex" gap="15px">
                    <Typography
                      sx={{
                        color: "#8D8D8D",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      {item.id}
                    </Typography>
                    <Typography
                      sx={{ color: "neutral.Snowwhite", fontWeight: 600, fontSize: "16px" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{ color: "neutral.brightGreen", fontWeight: 600, fontSize: "13px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography fontSize={"18px"} fontFamily={"Inter Tight"} color="neutral.brightRed">
              {t("MarketOutlook.MarketDataMetrics.losersTitle")}
            </Typography>
            {Losers?.slice(0, 5).map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "neutral.darkGrey",
                    padding: "16px 16px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Box display="flex" gap="15px">
                    <Typography
                      sx={{
                        color: "neutral.gray",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      {item.id}
                    </Typography>
                    <Typography
                      sx={{ color: "neutral.Snowwhite", fontWeight: 600, fontSize: "16px" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{ color: "neutral.brightRed", fontWeight: 600, fontSize: "13px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box mt="20px">
          <Typography variant="h6" fontFamily={"Inter Tight"} fontSize={"25px"} color="neutral.Snowwhite"> {t("MarketOutlook.MarketDataMetrics.riskCalendar30DaysTitle")}</Typography>
        </Box>
        <Box marginTop="20px" bgcolor="neutral.darkGrey"
        >
          <Grid container spacing={1} padding="10px">
            <Grid item>
              <Box
                display="flex"
                alignItems="center"
                gap="10px"
                flexWrap="wrap"
                borderRadius="20px"
              >
                <CustomButton
                  variant="h6"
                  title={t("MarketOutlook.MarketDataMetrics.attentionTitle")}
                  icon={<img src={AttentionIcon} />}
                  sx={{
                    borderRadius: "20px",
                    width: { xs: "100%", md: "auto" },
                    backgroundColor: "#FFE600",
                    color: "#000000",
                    padding: "4px 25px",
                  }}
                />
                <Typography variant="body2" fontSize={"12px"}>
                  {riskCalendar?.riskCalendar?.attention?.message}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2} mt={2}>
          {events.map((item, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  bgcolor: "neutral.darkGrey",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "neutral.Snowwhite", fontSize: "14px", fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    color="neutral.gray" fontSize="16px" mt="4px" fontWeight={550}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <CustomButton
                  title={item.buttonText}
                  sx={{
                    fontSize: "12px",
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    borderRadius: "15px",
                    px: "20px",
                    py: "0px",
                    minHeight: "40px",

                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} mt={"20px"}>
          {events.map((item, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  bgcolor: "neutral.darkGrey",
                  padding: "20px 30px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "neutral.Snowwhite", fontSize: "14px", fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: "neutral.gray", fontSize: "15px", mt: "4px", fontWeight: 550 }}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <CustomButton
                  title={item.buttonText}
                  sx={{
                    fontSize: "12px",
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    borderRadius: "15px",
                    px: "20px",
                    py: "0px",
                    minHeight: "40px",
                  }}
                ></CustomButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box backgroundColor="background.charcoal" borderRadius={"20px"} p={3} mt={3}>
        <Box mt="10px" display="flex" justifyContent="space-between">
          <Typography variant="h3" fontSize={"25px"} color="neutral.Snowwhite">
            {t("MarketOutlook.MarketDataMetrics.whalesTrackerTitle")}
          </Typography>
          <img src={ReLoadIcon} alt="" />
        </Box>
        <Grid container spacing={2} mt="12px">
          {data.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Box
                sx={{
                  bgcolor: "neutral.darkGrey",
                  padding: "25px",
                  borderRadius: "20px",
                  color: "neutral.Snowwhite",
                }}
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item >
                    <Box display="flex" alignItems="center" gap={3}>
                      <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                        {item.shortCode}
                      </Typography>

                      <CustomButton
                        variant="h6"
                        title={item.buttonTitle}
                        sx={{
                          backgroundColor: item.buttonColor,
                          borderRadius: "10px",
                          fontWeight: 600,
                          fontSize: "10px",
                          px: "30px",
                          py: "0px",
                          minHeight: "30px",

                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 550 }}>
                      {item.time}
                    </Typography>
                  </Grid>
                </Grid>
                <Box display={"flex"} gap={2} alignItems={"center"} mt={2}>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                      {item.brought}

                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)" }}>
                      {item.amount}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}
                  >
                    {item.source}
                  </Typography>
                  {/* <Box display="flex" gap="20px" mt="10px">
                      <Box>
                        <Typography fontSize="12px" color="#B4B4B4">
                          {item.Liquidation}
                        </Typography>
                        <Typography variant="h6" color="#FFFFFF">
                          {item.value1}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize="12px" color="#B4B4B4">
                          {item.position}
                        </Typography>
                        <Typography fontSize="15px" color="#3EDD87">
                          {item.value2}
                        </Typography>
                      </Box>
                    </Box> */}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default MarkDataMetric;
