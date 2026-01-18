import { Box, Grid, Paper, Typography } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
const CryptocurrencyEvents = ({ data, data2, data3 }) => {
  const { t } = useTranslation();
  const marketData = [
    {
      title: data?.event_0?.scenarios?.bearish?.label,
      titleColor: "neutral.brightRed",
      description: data?.event_0?.scenarios?.bearish?.description,
    },
    {
      title: data?.event_0?.scenarios?.neutral?.label,
      titleColor: "neutral.brightYellow",
      description: data?.event_0?.scenarios?.neutral?.description,
    },
    {
      title: data?.event_0?.scenarios?.bullish?.label,
      titleColor: "neutral.brightGreen",
      description: data?.event_0?.scenarios?.bullish?.description,
    },
  ];

  const cards = [
    {
      // title: data2.btcETF?.symbol,
      title: t("MarketOutlook.CryptocurrencyEvents.btcEtfTitle"),
      value: data2?.btcETF?.priceChange24h,
      text: data2?.btcETF?.flowDescription,
      icon: BtcIcon,
    },
    {
      title: t("MarketOutlook.CryptocurrencyEvents.ethEtfTitle"),
      value: data2?.ethETF?.priceChange24h,
      text: data2?.ethETF?.flowDescription,
      icon: EthIcon,
    },
    {
      title: t("MarketOutlook.CryptocurrencyEvents.trendTitle"),
      value: data2?.trendAnalysis,
      text: "",
      icon: null,
    },
  ];
  return (
    <Box backgroundColor="background.charcoal" borderRadius="20px" padding="25px" mt="20px">
      <Box>
        <Typography variant="h5" fontSize="25px">
          {t("MarketOutlook.CryptocurrencyEvents.cryptocurrencyTitle")}
        </Typography>
      </Box>
      <Box mt="25px">
        <Typography variant="body1" fontWeight={600} fontSize="16px">
          {data?.event_0?.title}
        </Typography>
        <Typography variant="body1" mt="20px" fontSize="14px" fontWeight={400}>
          {data?.event_0?.description}
        </Typography>
        <Typography variant="body1" fontSize="14px" mt="5px" fontWeight={400} >
          {data?.event_0?.recipients}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} marginTop={3}>
          {marketData.map((item, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 12, md: 4 }}>
              <Box
                sx={{
                  color: "neutral.Snowwhite",
                  padding: 2,
                  borderRadius: "30px",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "neutral.darkGrey",
                }}
              >
                <Typography
                  sx={{ color: item.titleColor, fontWeight: 500, fontSize: "20px", fontFamily: "inter Tight" }}
                  variant="body1"
                >
                  {item.title}
                </Typography>
                <Typography mt="10px" variant="body1" fontSize="14px" fontFamily={"inter Tight"}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Grid></Grid>
        </Grid>
      </Box>
      <Box mt="10px">
        <Typography color="neutral.Snowwhite" fontSize="14px">
          {data?.event_0?.bestEntry}
        </Typography>
      </Box>
      <Box mt="40px" variant="h6">
        <Typography variant="h4" fontSize="22px" fontFamily={"inter Tight"} fontWeight={550}>
          {t("MarketOutlook.CryptocurrencyEvents.etfFlowsTitle")}
        </Typography>
      </Box>
      <Box sx={{ color: "neutral.Snowwhite", mt: 2 }}>
        <Grid container spacing={2}>
          {cards.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.8,
                  backgroundColor: "neutral.darkGrey",
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "90px",
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <img src={item.icon} alt="" />
                  <Typography fontWeight={600} fontSize="18px" fontFamily={"inter Tight"}>
                    {item.title}
                  </Typography>
                </Box>
                <Box display="flex" gap="5px">
                  <Typography
                    sx={{
                      color:
                        index === 2
                          ? "neutral.brightGreen"
                          : item.value?.includes("-")
                            ? "neutral.brightRed"
                            : "neutral.brightGreen",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                  >
                    {item.value}
                  </Typography>

                  {item.text && (
                    <Typography sx={{ fontSize: "13px", color: "neutral.Snowwhite" }}>
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
        mt="25px"
        backgroundColor="neutral.darkGrey"
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
            title={t("MarketOutlook.CryptocurrencyEvents.conclusionTitle")}
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
      <Box mt="40px">
        <Typography variant="h6" fontSize={"22px"}>
          {t("MarketOutlook.CryptocurrencyEvents.onChainSignalsTitle")}
        </Typography>
      </Box>
      <Grid container spacing={3} mt="12px">
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="20px" fontWeight={500} color="neutral.Snowwhite">
            {t("MarketOutlook.CryptocurrencyEvents.exchangeNetflowTitle")}
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
          <Typography variant="h5" fontSize="20px" fontWeight={500} color="neutral.Snowwhite">
            {t("MarketOutlook.CryptocurrencyEvents.longShortRatioTitle")}
          </Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            {data3?.longShortRatio?.value} <br />
            {data3?.longShortRatio?.description}
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="20px" fontWeight={500} color="neutral.Snowwhite">
            {t("MarketOutlook.CryptocurrencyEvents.fundingRateTitle")}
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
          <Typography variant="h5" fontSize="20px" fontWeight={500} color="neutral.Snowwhite">
            {t("MarketOutlook.CryptocurrencyEvents.openInterestTitle")}
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
