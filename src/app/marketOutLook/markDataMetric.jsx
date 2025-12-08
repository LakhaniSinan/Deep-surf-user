import { Box, Grid, Card, Typography, Button } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import DropDownIcon from "../../assets/icons/Arrow.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CustomButton from "../../components/customButton";
import ReLoadIcon from "../../assets/icons/relaod-Icon.svg";
import Speedometer from "../../components/speedMeter";

const MarkDataMetric = ({ top, marketMetricesData, riskCalendar }) => {
  console.log(
    "fijfrufhjncfmdcfdcfdfr",
    riskCalendar?.riskCalendar?.events[0].title
  );

  const cardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "14px",
    color: "#fff",
    height: "170px",
  };

  // Check if gainers data exists and has enough items
  const hasGainersData = top?.gainers && top.gainers.length >= 5;
  const hasloserData = top?.losers && top.losers.length >= 5;
  console.log("gvrdfvdfefdrfcd", hasloserData);

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
        <Typography variant="h5" fontSize="20px">
          Market Data & Metrics
        </Typography>
        <Typography sx={{ mt: 2, color: "#8D8D8D" }}>
          Loading market data...
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box
        backgroundColor="#161616"
        borderRadius="20px"
        padding="25px"
        mt="20px"
      >
        <Typography variant="h5" fontSize="20px">
          Market Data & Metrics
        </Typography>
        <Box mt="20px">
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={cardStyle}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#b3b3b3",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Fear and Greed Index
                </Typography>
                <Typography variant="h6" textAlign="center">
                  {marketMetricesData?.fearGreedIndex?.sentiment}
                </Typography>
                {/* <Box
                  sx={{
                    width: 150,
                    height: 70,
                    background: "#222",
                    borderRadius: "150px 150px 0 0",
                    overflow: "hidden",
                    margin: " 10px auto",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, red, yellow, green)",
                      position: "absolute",
                    }}
                  />

                  <Box
                    sx={{
                      width: 100,
                      height: 50,
                      background: "#111",
                      borderRadius: "100px 100px 0 0",
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 26,
                    }}
                  >
                    {marketMetricesData?.fearGreedIndex?.value}
                  </Box>
                </Box> */}
                <Box textAlign={"center"}>

                  <Speedometer
                    percentage={30}
                    size={50}
                  // maxValue={overallSentimentData?.score}
                  />

                </Box>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2 }}>
              <Card sx={cardStyle}>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  sx={{ color: "#fff" }}
                >
                  BTC Dominance
                </Typography>
                <Box display="flex" gap="20px">
                  <Typography fontSize="25px" variant="h6" sx={{ mt: 1 }}>
                    {marketMetricesData?.btcDominance?.value}
                  </Typography>
                  <Typography fontSize="22px" variant="h6" sx={{ mt: 1 }}>
                    <img src={DropDownIcon} alt="" />
                  </Typography>
                </Box>
                <Typography sx={{ color: "#4ade80", fontSize: "13px" }}>
                  {marketMetricesData?.btcDominance?.trend}
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                    <img src={BtcIcon} alt="" />
                  </Box>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    sx={{ color: "#fff" }}
                  >
                    BTC 24h
                  </Typography>
                </Box>
                <Typography
                  fontSize="20px"
                  fontWeight={400}
                  variant="h6"
                  sx={{ mt: 1 }}
                >
                  {marketMetricesData?.prices24h?.btc?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.btc?.change?.includes("-") ? "red" : "green", fontSize: "13px" }}>
                  {marketMetricesData?.prices24h?.btc?.change}
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.5 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                    <img src={EthIcon} alt="" />
                  </Box>
                  <Typography
                    variant="caption"
                    fontWeight={600}
                    sx={{ color: "#fff" }}
                  >
                    ETH 24h
                  </Typography>
                </Box>
                <Typography
                  fontSize="20px"
                  fontWeight={400}
                  variant="h6"
                  sx={{ mt: 1 }}
                >
                  {marketMetricesData?.prices24h?.eth?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.eth?.change.includes("-") ? "red" : "green", fontSize: "13px" }}>
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
                    sx={{ color: "#fff" }}
                  >
                    SOL 24h
                  </Typography>
                </Box>
                <Typography
                  fontSize="22px"
                  fontWeight={400}
                  variant="h6"
                  sx={{ mt: 1 }}
                >
                  {marketMetricesData?.prices24h?.sol?.price}
                </Typography>
                <Typography sx={{ color: marketMetricesData?.prices24h?.sol?.change?.includes("-") ? "red" : "green", fontSize: "13px" }}>
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
                <img src={BtcIcon} alt="" />

                <Typography variant="h2" fontSize="14px">
                  BTC ETF Flows
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography variant="h4" fontSize="12px" marginTop="12px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="10px" marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.today?.amount}
                  </Typography>
                </Box>
                <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                <Box>
                  <Typography marginTop="10px" variant="h4" fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.btc?.in2Days?.label}
                  </Typography>
                  <Typography
                    marginTop="10px"
                    variant="h4"
                    fontSize={{ xs: "8px", md: "16px" }}
                  >
                    {marketMetricesData?.etfFlowsSummary?.btc?.in2Days?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="13px" marginTop="10px">
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

                <Typography variant="h2" fontSize="14px">
                  ETH ETF Flows
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography variant="h4" fontSize="12px" marginTop="12px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.label}
                  </Typography>
                  <Typography variant="h4" marginTop="10px" fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="10px" marginTop="10px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.today?.usdValue}
                  </Typography>
                </Box>
                <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                <Box>
                  <Typography marginTop="10px" variant="h4" fontSize="15px">
                    {marketMetricesData?.etfFlowsSummary?.eth?.in2Days?.label}
                  </Typography>
                  <Typography
                    marginTop="10px"
                    variant="h4"
                    fontSize={{ xs: "8px", md: "16px" }}
                  >
                    {marketMetricesData?.etfFlowsSummary?.eth?.in2Days?.amount}
                  </Typography>
                  <Typography variant="h4" fontSize="14px" marginTop="10px">
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

        <Typography variant="h6" fontSize={"16px"} mt={2}>
          {"Top Movers in 24h (volume > £50M )"}
        </Typography>
        <Grid container spacing={2} marginTop="20px">
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography fontSize={"15px"} fontFamily={"'inter'"} color="#3EDD87">
              Gainers
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
                      sx={{ color: "#fff", fontWeight: 600, fontSize: "16px" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{ color: "#31D0AA", fontWeight: 600, fontSize: "13px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography fontSize={"16px"} color="#FF4C4C" fontFamily={"'inter'"}>
              Losers
            </Typography>
            {Losers?.slice(0, 5).map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "#1C1C1C",
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
                        color: "#8D8D8D",
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    >
                      {item.id}
                    </Typography>
                    <Typography
                      sx={{ color: "#fff", fontWeight: 600, fontSize: "16px" }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{ color: "#FF4C4C", fontWeight: 600, fontSize: "13px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box mt="20px">
          <Typography variant="h6" fontFamily={"'inter'"}>Risk Calendar (30 days)</Typography>
        </Box>
        <Box marginTop="20px" backgroundColor="#1C1C1C">
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
                  title="Attention"
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
                  backgroundColor: "#1C1C1C",
                  padding: "14px 18px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#B0B0B0", fontSize: "14px", mt: "4px" }}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <CustomButton
                  title={item.buttonText}
                  sx={{
                    fontSize: "12px",
                    borderRadius: "10px",
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    borderRadius: "20px",
                    px: "40px",
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
                  backgroundColor: "#1C1C1C",
                  padding: "20px 30px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#B0B0B0", fontSize: "14px", mt: "4px" }}
                  >
                    {item.date}
                  </Typography>
                </Box>

                <CustomButton
                  title={item.buttonText}
                  sx={{
                    fontSize: "12px",
                    borderRadius: "10px",
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    borderRadius: "20px",
                    px: "40px",
                    py: "0px",
                    minHeight: "40px",
                  }}
                ></CustomButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box backgroundColor="#161616" borderRadius={"20px"} p={2} mt={"10px"}>
          <Box mt="10px" display="flex" justifyContent="space-between">
            <Typography variant="h3" fontSize={"18px"}>
              Whales tracker
            </Typography>
            <img src={ReLoadIcon} alt="" />
          </Box>
          <Grid container spacing={2} mt="12px">
            {data.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                <Box
                  sx={{
                    background: "#1C1C1C",
                    padding: "15px",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
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
                      <Typography sx={{ fontSize: "14px" }}>
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
                      <Typography sx={{ fontSize: "12px", color: "#B4B4B4" }}>
                        {item.amount}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      sx={{ fontSize: "13px", marginTop: "30px", color: "#FFF" }}
                    >
                      {item.source}
                    </Typography>
                    <Box display="flex" gap="20px" mt="10px">
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
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default MarkDataMetric;
