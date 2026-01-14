import { Box, Grid, Paper, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import AttentionIcon from "../../assets/icons/effects.svg";
import WarningIcon from "../../assets/icons/warning-icon.svg"
import { useTranslation } from "react-i18next";
const Trading = ({ tradingData }) => {
  const { t } = useTranslation();
  const data = [
    {
      icon: BtcIcon,
      title: tradingData?.keyLevels?.btc?.symbol,
      price: tradingData?.keyLevels?.btc?.price,
      resistance: [
        tradingData?.keyLevels?.btc?.resistance[0],
        tradingData?.keyLevels?.btc?.resistance[1],
      ],
      support: [
        tradingData?.keyLevels?.btc?.support[0],
        tradingData?.keyLevels?.btc?.support[1],
      ],
    },
    {
      icon: EthIcon,
      title: tradingData?.keyLevels?.eth?.symbol,
      price: tradingData?.keyLevels?.eth?.price,
      resistance: [
        tradingData?.keyLevels?.eth?.resistance[0],
        tradingData?.keyLevels?.eth?.resistance[1],
      ],
      support: [
        tradingData?.keyLevels?.eth?.support[0],
        tradingData?.keyLevels?.eth?.support[1],
      ],
    },
    {
      icon: SolanaIcon,
      title: tradingData?.keyLevels?.sol?.symbol,
      price: tradingData?.keyLevels?.sol?.price,
      resistance: [
        tradingData?.keyLevels?.sol?.resistance[0],
        tradingData?.keyLevels?.sol?.resistance[1],
      ],
      support: [
        tradingData?.keyLevels?.sol?.support[0],
        tradingData?.keyLevels?.sol?.support[1],
      ],
    },
  ];
  return (
    <>
      <Box
        backgroundColor="background.charcoal"
        borderRadius="20px"
        padding="25px"  
        mt="20px"
      >
        <Typography variant="h4" fontSize={"25px"} fontWeight={600}>
          {t("MarketOutlook.TradingRecommendations.tradingRecommendationsToday")}
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"}>
              <Typography color="neutral.brightGreen" fontWeight={550}>{t("MarketOutlook.TradingRecommendations.longSetupsTitle")}</Typography>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} color="neutral.Snowwhite" fontWeight={500} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[0]?.asset}: {tradingData?.longSetups?.[0]?.description}
                </Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} color="neutral.Snowwhite" fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[1]?.asset} : {tradingData?.longSetups?.[1]?.description}
                </Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} color="neutral.Snowwhite" fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[2]?.asset} : {tradingData?.longSetups?.[2]?.description}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"}>
              <Typography color="neutral.brightRed">{t("MarketOutlook.TradingRecommendations.shortSetupsTitle")}</Typography>
              <Box display={"flex"} gap={"3px"} mt={1} flexWrap={"nowrap"}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"} >{tradingData?.longSetups?.[0]?.asset} : {tradingData?.longSetups?.[0]?.description}</Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[1]?.asset} : {tradingData?.longSetups?.[1]?.description}</Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[2]?.asset} : {tradingData?.longSetups?.[2]?.description}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box backgroundColor="neutral.darkGrey" p={2} borderRadius={"20px"} mt={"20px"}>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 12, md: 2.6 }}>
              <CustomButton
                variant={"body1"}
                title={t("MarketOutlook.TradingRecommendations.riskManagementTitle")}
                icon={<img src={WarningIcon} />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "neutral.brightYellow",
                  color: "#000000",
                  marginTop: "10px",
                  px: "30px",
                  fontFamily: "inter Tight"
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 5 }}>
              <Typography fontSize="15px" mt="10px" fontFamily={"inter Tight"} fontWeight={600}>
                {tradingData?.riskManagement?.actions}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography mt="20px" fontFamily={'inter Tight'} color="neutral.Snowwhite" variant="h5" fontSize="25px" fontWeight={600}>
          {t("MarketOutlook.TradingRecommendations.keyLevelsTitle")}
        </Typography>
        <Box sx={{ color: "neutral.Snowwhite", marginTop: "20px" }}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  sx={{
                    bgcolor: "neutral.darkGrey",
                    p: 2,
                    borderRadius: "14px",
                    height: "100%",
                  }}
                  elevation={3}
                >
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <img src={item.icon} alt="" />
                    <Typography fontWeight={600}>
                      {item.title} - {item.price}
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 6 }}>
                      <Typography
                        fontSize="13px"
                        sx={{ color: "neutral.lightgray", mb: 1, fontWeight: 590, fontSize: "15px" }}
                      >
                        {t("MarketOutlook.TradingRecommendations.resistanceAreasTitle")}
                      </Typography>
                      {item.resistance.map((lvl, i) => (
                        <Typography key={i} fontSize="18px" fontFamily={"inter Tight"} fontWeight={600} color="neutral.Snowwhite">
                          {lvl}
                        </Typography>
                      ))}
                    </Grid>

                    <Grid item size={{ xs: 6 }}>
                      <Typography
                        fontSize="13px"
                        sx={{ color: "neutral.lightgray", mb: 1, fontWeight: 590, fontSize: "15px" }}
                      >
                         {t("MarketOutlook.TradingRecommendations.supportAreasTitle")}
                      </Typography>
                      {item.support.map((lvl, i) => (
                        <Typography key={i} fontSize="18px" fontFamily={"inter Tight"} fontWeight={600} color="neutral.Snowwhite">
                          {lvl}
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box backgroundColor="neutral.darkGrey" borderRadius="20px" p={2} mt={4}>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 12, md: 2 }}>
              <CustomButton
                title={t("MarketOutlook.TradingRecommendations.alsVerdictTitle")}
                icon={<img src={AttentionIcon} color="neutral.Snowwhite" />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FF6421",
                  color: "neutral.Snowwhite",
                  px: "30px",
                  fontSize: "15px",
                  fontWeight: 400
                  // marginTop: "5px",
                }}
              />
            </Grid>
            <Grid mt="5px" size={{ xs: 12, sm: 12, md: 9 }}>
              <Typography fontSize="13px" color="#fff" fontWeight={600}>
                {tradingData?.aiVerdict?.message}
                <br />
                {tradingData?.aiVerdict?.mainRisk}
                {tradingData?.aiVerdict?.confidenceLevel}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Trading;
