import { Box, Grid, Paper, Typography } from "@mui/material";
// import BianceLogo from "../../assets/icons/bitcoin-logo.svg";
// import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
// import EthIcon from "../../assets/icons/eth-icon.svg";
// import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ScienceIcon from "@mui/icons-material/Science";
import CustomButton from "../../components/customButton";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";

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
      icon: <BtcIcon sx={{ color: "#F7931A" }} />, // Orange for BTC
    },
    {
      title: "ETH ETF",
      value: "+ $314M (yesterday)",
      text: "Recovery of interest",
      icon: <ScienceIcon sx={{ color: "#627EEA" }} />, // Blueish color for ETH
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
        <Typography variant="h3">Cryptocurrency Events</Typography>
      </Box>
      <Box mt="12px">
        <Typography variant="body1">
          APEX Token Unlock (Friday, 00:00 UTC)
        </Typography>
        <Typography variant="body1" mt="20px" fontSize="12px">
          Supply: 50M APEX ($10.5M)|% of supply: 3.2%
        </Typography>
        <Typography variant="body1" mt="5px">
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
        <Typography color="#fff" fontSize="17px">
          Best entry: 1-2 days after unlock, when selling subsides. Monitor
          on-chain wallet movements of the team.
        </Typography>
      </Box>
      <Box mt="20px" variant="h6">
        <Typography>ETF Flows</Typography>
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
                {/* Icon + Title */}
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                 <img src={item.icon} alt="" />
                  <Typography fontWeight={600} fontSize="16px">
                    {item.title}
                  </Typography>
                </Box>

                {/* Value + Text */}
                <Box display="flex" gap={0.5}>
                  <Typography
                    sx={{ color: "#4caf50", fontWeight: 500, fontSize: "15px" }}
                  >
                    {item.value}
                  </Typography>
                  {item.text && (
                    <Typography sx={{ fontSize: "14px", color: "#ccc" }}>
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
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="25px"
        mt="20px"
      >
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 2 }}>
            <CustomButton
              variant={"gradient"}
              title="Conclusion"
              sx={{
                borderRadius: "20px",
                width: { xs: "100%", md: "auto" },
                backgroundColor: "#FFE600",
                color: "#000000",
                marginTop: "10px",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 10 }} marginTop={1}>
            <Typography fontSize={14}>
              Sustained inflows into BTC/ETH ETFs — a strong bullish indicator.
              Institutions are accumulating positions. Supports further growth.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt="15px">
        <Typography variant="h5">On-Chain Signals</Typography>
      </Box>
      <Grid container spacing={2} mt="12px">
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography>Exchange Netflow</Typography>
          <Typography mt="10px" fontSize="14px">
            -15,000 BTC withdrawn from exchanges in a week —
            <span style={{ color: "#3EDD87" }}>Bullish</span>
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography>Long/Short Ratio</Typography>
          <Typography mt="10px" fontSize="14px">
            52/48 <br /> slight imbalance, healthy balance
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography>Funding Rate</Typography>
          <Typography mt="10px" fontSize="15px">
            +0.008% <br /> <span style={{ color: "#FFE600" }}>Neutral,</span> no
            overheating
          </Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography>Open Interest</Typography>
          <Typography mt="10px" fontSize="15px">
            +8% over the week interest is growing
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptocurrencyEvents;
