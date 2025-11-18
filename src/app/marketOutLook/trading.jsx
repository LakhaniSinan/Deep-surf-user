import { Box, Grid, Paper, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import StarIcon from "../../assets/icons/Vector (3).svg";

const Trading = () => {
  const longData = [
    {
      tittle: "LONG setups",
      description:
        "BTC: Pullback to $108,836-109,389 — a good entry for swing. Target $114,361, stop $107,732 ETH: If it holds at $3,891 — target $4,126. The ETH/BTC pair shows strength SOL: If it breaks $197 with volume — momentum trade up to $209",
      color: "#3EDD87",
    },
    {
      tittle: "SHORT setups",
      description:
        "BTC: Pullback to $108,836-109,389 — a good entry for swing. Target $114,361, stop $107,732 ETH: If it holds at $3,891 — target $4,126. The ETH/BTC pair shows strength SOL: If it breaks $197 with volume — momentum trade up to $209",
      color: "#FF4C4C",
    },
  ];

  const data = [
    {
      icon: BtcIcon,
      title: "BTC",
      price: "$111,586",
      resistance: ["$110,046", "$114,328"],
      support: ["$109,302", "$107,457"],
    },
    {
      icon: EthIcon,
      title: "ETH",
      price: "$4,279",
      resistance: ["$4,047", "$4,107"],
      support: ["$3,845", "$3,787"],
    },
    {
      icon: SolanaIcon,
      title: "SOL",
      price: "$201",
      resistance: ["$213", "$233"],
      support: ["$194", "$200"],
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
        <Typography variant="h4">Trading recommendations for today</Typography>
        <Grid container spacing={1} mt={2}>
          {longData.map((item, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: "20px",
                  borderRadius: 2,
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#1C1C1C",
                }}
              >
                <Typography style={{ color: item.color }} variant="h5">
                  {item.tittle}
                </Typography>
                <Typography mt="8px" fontSize="15px">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box>
          <Grid container spacing={2} mt="15px">
            <Grid item size={{ xs: 12, sm: 3 }}>
              <CustomButton
                variant={"h6"}
                title="Risk management"
                icon={<img src={AttentionIcon} />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#000000",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 9 }}>
              <Typography fontSize="15px">
                Reduce position sizes by 30-50% before CPI (Wednesday) Use a
                take-profit ladder: 30% at TP1, 40% at TP2, 30% trailing.
                Leverage no more than 5-10x under current condition Watch the
                funding rate — if >0.03%, risk of correction.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography mt="20px" variant="h3">
          Key levels
        </Typography>
        <Box sx={{ color: "#fff", marginTop: "20px" }}>
          <Grid container spacing={2} backgroundColor="#1C1C1C">
            {data.map((item, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Paper
                  sx={{
                    background: "#121212",
                    p: 3,
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
                        <Typography key={i} fontSize="20px">
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
                        <Typography key={i} fontSize="20px">
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
        <Box>
          <Grid container spacing={2} mt="15px">
            <Grid item size={{ xs: 12, sm: 2 }}>
              <CustomButton
                variant={"gradient"}
                title="Al's Verdict"
                icon={<img src={StarIcon} />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#fff",
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid mt="25px" size={{ xs: 12, sm: 10 }}>
              <Typography fontSize="14px">
                The macroeconomic backdrop is favourable for risk assets. ETF
                inflows and on-chain metrics confirm accumulation. A moderate
                LONG position in BTC/ETH is recommended with readiness to close
                50% before CPI (Wednesday). Main risk: CPI above forecast may
                trigger a correction of -5-8%. Be prepared. Confidence Level:
                7.5/10 — Moderately bullish outlook considering short-term
                risks.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Trading;
