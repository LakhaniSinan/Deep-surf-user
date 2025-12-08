import { Box, Grid, Paper, Typography } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import CustomButton from "../../components/customButton";

const CryptocurrencyEvents = () => {
  const marketData = [
    {
      title: "Bearish (60%)",
      titleColor: "#FF4D4F",
      description: "Drop of 15-25% over 2-3 days. Shorting opportunities.",
    },
    {
      title: "Neutral (25%)",
      titleColor: "#FFE600",
      description: "The team does not sell immediately, drop of 5-10%.",
    },
    {
      title: "Bullish (15%)",
      titleColor: "#3EDD87",
      description: "Team buyback + news = growth",
    },
  ];
  const cards = [
    {
      title: "BTC ETF",
      value: "+ $623M (yesterday)",
      text: "7 consecutive days of inflows!",
      icon: BtcIcon,
    },
    {
      title: "ETH ETF",
      value: "+ $314M (yesterday)",
      text: "Recovery of interest",
      icon: EthIcon,
    },
    {
      title: "Trend",
      value: "Strong institutional demand",
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
        <Typography variant="h6" fontSize="15px">
          APEX Token Unlock (Friday, 00:00 UTC)
        </Typography>
        <Typography variant="body1" mt="20px" fontSize="12px">
          Supply: 50M APEX ($10.5M)|% of supply: 3.2%
        </Typography>
        <Typography variant="body1" fontSize="13px" mt="5px">
          Recipients: Team (60%), Early Investors (40%)
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
                  borderRadius: 2,
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
          Best entry: 1-2 days after unlock, when selling subsides. Monitor
          on-chain wallet movements of the team.
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
                    sx={{ color: "#4caf50", fontWeight: 500, fontSize: "13px" }}
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
      <Box mt="10px" backgroundColor="#1C1C1C" padding="20px" borderRadius="25px">
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap="wrap"
          borderRadius="20px"
        >
          <CustomButton
            variant="gradient"
            title="Conclusion"
            sx={{
              borderRadius: "20px",
              width: { xs: "100%", md: "auto" },
              backgroundColor: "#FFE600",
              color: "#ffff",
              padding: "4px 13px",
            }}
          />
          <Typography variant="h6" fontSize="13px">
            Sustained inflows into BTC/ETH ETFs — a strong bullish indicator.
            Institutions are accumulating positions. Supports further growth.
          </Typography>
        </Box>
      </Box>
      <Box mt="15px">
        <Typography variant="h6">On-Chain Signals</Typography>
      </Box>
      <Grid container spacing={3} mt="12px">
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">Exchange Netflow</Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            -15,000 BTC withdrawn from exchanges in a week —
            <span style={{ color: "#3EDD87" }}>Bullish</span>
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">Long/Short Ratio</Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            52/48 <br /> slight imbalance, healthy balance
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">Funding Rate</Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            +0.008% <br /> <span style={{ color: "#FFE600" }}>Neutral,</span> no
            overheating
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" fontSize="16px">Open Interest</Typography>
          <Typography mt="10px" variant="body1" fontSize="15px">
            +8% over the week interest is growing
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CryptocurrencyEvents;
