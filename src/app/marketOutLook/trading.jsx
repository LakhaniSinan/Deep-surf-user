import { Box, Grid, Paper, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import AttentionIcon from "../../assets/icons/effects.svg";

import StarIcon from "../../assets/icons/stairs.svg";

const Trading = ({ tradingData }) => {
  // console.log("efygefegyuhfefbejnfe", tradingData?.longSetups[0]?.asset);

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
        backgroundColor="#161616"
        borderRadius="20px"
        padding="25px"
        mt="20px"
      >
        <Typography variant="h4" fontSize={"18px"} fontWeight={500}>
          Trading recommendations for today
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box bgcolor={"#1C1C1C"} p={2} borderRadius={"20px"}>
              <Typography color="#3EDD87">LONG setups</Typography>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[0]?.asset} : {tradingData?.longSetups?.[0]?.description}
                </Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[1]?.asset} : {tradingData?.longSetups?.[1]?.description}
                </Box>
              </Box>
              <Box display={"flex"} gap={"3px"} mt={1}>
                <Box fontSize={"13px"} fontFamily={"Inter Tight"}>{tradingData?.longSetups?.[2]?.asset} : {tradingData?.longSetups?.[2]?.description}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box bgcolor={"#1C1C1C"} p={2} borderRadius={"20px"}>
              <Typography color="#FF4C4C">SHORT setups</Typography>
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
        <Box backgroundColor="#1C1C1C" p={2} borderRadius={"20px"} mt={"20px"}>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 12, md: 2.6 }}>
              <CustomButton
                variant={"body1"}
                title="Risk management"
                icon={<img src={AttentionIcon} />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#000000",
                  marginTop: "10px",
                  px: "30px",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 5 }}>
              <Typography fontSize="12px" mt="10px">
                {tradingData?.riskManagement?.actions}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography mt="20px" variant="h5" fontSize="20px">
          Key levels
        </Typography>
        <Box sx={{ color: "#fff", marginTop: "20px" }}>
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  sx={{
                    background: "#1C1C1C",
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
                        sx={{ color: "#aaa", mb: 1, fontWeight: 500 }}
                      >
                        Resistance areas
                      </Typography>
                      {item.resistance.map((lvl, i) => (
                        <Typography key={i} fontSize="15px">
                          {lvl}
                        </Typography>
                      ))}
                    </Grid>

                    <Grid item size={{ xs: 6 }}>
                      <Typography
                        fontSize="13px"
                        sx={{ color: "#aaa", mb: 1, fontWeight: 500 }}
                      >
                        Support areas
                      </Typography>
                      {item.support.map((lvl, i) => (
                        <Typography key={i} fontSize="15px">
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
        <Box backgroundColor="#1C1C1C" borderRadius="20px" p={2} mt={4}>
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, sm: 12, md: 2 }}>
              <CustomButton
                title="Al's Verdict"
                icon={<img src={AttentionIcon} color="#fff" />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FF6421",
                  color: "#fff",
                  px: "30px",
                  // marginTop: "5px",
                }}
              />
            </Grid>
            <Grid mt="5px" size={{ xs: 12, sm: 12, md: 9 }}>
              <Typography fontSize="13px" color="#fff" fontWeight={400}>
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
