import { Box, Grid, Paper, Typography } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import CustomButton from "../../components/customButton";

const CryptocurrencyEvents = ({ data, data2, data3 }) => {
  console.log("OnChainSignals: ", data3); // ✅ Correct console

  const marketData = [
    {
      title: data?.event_0?.scenarios?.bearish?.label,
      titleColor: data?.event_0?.scenarios?.bearish?.color,
      description: data?.event_0?.scenarios?.bearish?.description,
    },
    {
      title: data?.event_0?.scenarios?.neutral?.label,
      titleColor: data?.event_0?.scenarios?.neutral?.color,
      description: data?.event_0?.scenarios?.neutral?.description,
    },
    {
      title: data?.event_0?.scenarios?.bullish?.label,
      titleColor: data?.event_0?.scenarios?.bullish?.color,
      description: data?.event_0?.scenarios?.bullish?.description, // 🔥 Corrected
    },
  ];

  const cards = [
    {
      // title: data2.btcETF?.symbol,
      title: "BTC ETF",
      value: data2?.btcETF?.priceChange24h,
      text: data2?.btcETF?.flowDescription,
      icon: BtcIcon,
    },
    {
      title: "ETH ETF",
      value: data2?.ethETF?.priceChange24h,
      text: data2?.ethETF?.flowDescription,
      icon: EthIcon,
    },
    {
      title: "Trend",
      value: data2.trendAnalysis,
      text: "",
      icon: null, // No icon
    },
  ];
  return (
    <Box backgroundColor="#161616" borderRadius="20px" padding="25px" mt="20px">
      <Box>
        <Typography variant="h4" fontSize="20px">
          Cryptocurrency Events
        </Typography>
      </Box>
      <Box mt="12px">
        <Typography variant="body1" fontWeight={500} fontSize="16px">
          {data?.event_0?.title}
        </Typography>
        <Typography variant="body1" mt="20px" fontSize="12px">
          {data?.event_0?.description}
        </Typography>
        <Typography variant="body1" fontSize="13px" mt="5px">
          {data?.event_0?.recipients}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} marginTop={3}>
          {marketData.map((item, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 12, md: 4 }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: 2,
                  borderRadius: "30px",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#1C1C1C",
                }}
              >
                <Typography
                  sx={{ color: item.titleColor, fontWeight: 600 }}
                  variant="body1"
                >
                  {item.title}
                </Typography>
                <Typography mt="10px" variant="body1" fontSize="14px">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Grid></Grid>
        </Grid>
      </Box>
      <Box mt="10px">
        <Typography color="#fff" fontSize="14px">
          {/* {data?.cryptoEvent?.event_0?.bestEntry} */}
          {data?.event_0?.bestEntry}
        </Typography>
      </Box>
      <Box mt="20px" variant="h6">
        <Typography variant="h4" fontSize="17px">
          ETF Flows
        </Typography>
      </Box>
      <Box sx={{ color: "#fff", mt: 3 }}>
        <Grid container spacing={2}>
          {cards.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  backgroundColor: "#1C1C1C",
                  borderRadius: "12px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "120px",
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <img src={item.icon} alt="" />
                  <Typography fontWeight={600} fontSize="16px">
                    {item.title}
                  </Typography>
                </Box>

                <Box display="flex" gap="5px">
                  <Typography
                    sx={{ color: data2?.btcETF?.priceChange24h.includes("-") ? "text.errorColor" : "text.greenColor", fontWeight: 500, fontSize: "13px" }}
                  >
                    {item.value}
                  </Typography>
                  {item.text && (
                    <Typography sx={{ fontSize: "12px", color: "#ccc" }}>
                      {item.text}
                    </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        mt="10px"
        backgroundColor="#1C1C1C"
        padding="20px"
        borderRadius="25px"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap="wrap"
          borderRadius="20px"
        >
          <CustomButton
            title={data2?.conclusion?.label}
            sx={{
              borderRadius: "20px",
              width: { xs: "100%", md: "auto" },
              backgroundColor: "#FF6421",
              color: "#ffff",
              padding: "3px 35px",
            }}
          />
          <Typography variant="h6" fontSize="13px" fontWeight={600}>
            {data2?.conclusion?.message}
          </Typography>
        </Box>
      </Box>
      <Box mt="15px">
        <Typography variant="h6" fontSize={"14px"}>
          On-Chain Signals
        </Typography>
      </Box>
      <Grid container spacing={3} mt="12px">
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="14px">
            Exchange Netflow
          </Typography>
          <Typography
            mt="10px"
            variant="body1"
            fontWeight={400}
            fontSize="15px"
          >
            {data3?.exchangeNetflow?.description}{" "}
            <span style={{ color: "#3EDD87" }}>
              {data3?.exchangeNetflow?.sentiment}
            </span>
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="15px">
            Long/Short Ratio
          </Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            {data3?.longShortRatio?.value} <br />
            {data3?.longShortRatio?.description}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">
            Funding Rate
          </Typography>
          <Typography mt="10px" variant="body1" fontSize="15px" sx={{ color: data3?.fundingRate?.value.includes("-") ? "text.errorColor" : "text.greenColor" }}>
            +{data3?.fundingRate?.value} <br />{" "}
            <span style={{ color: "#FFE600" }}>
              {data3?.fundingRate?.sentiment}{" "}
            </span>
            {data3?.fundingRate?.description}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">
            Open Interest
          </Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            {data3?.openInterest?.value} <span>{data3?.openInterest?.description} </span>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptocurrencyEvents;
