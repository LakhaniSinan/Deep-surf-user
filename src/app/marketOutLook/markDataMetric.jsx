import { Box, Grid, Card, Typography, Button } from "@mui/material";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
import DropDownIcon from "../../assets/icons/Arrow.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CustomButton from "../../components/customButton";
import ReLoadIcon from "../../assets/icons/relaod-Icon.svg";

const MarkDataMetric = () => {
  const cardStyle = {
    backgroundColor: "#1a1a1a",
    padding: "20px",
    borderRadius: "14px",
    color: "#fff",
    height: "150px",
  };

  const Gainers = [
    { id: 1, title: "ALPACA", percentage: "+391.23%" },
    { id: 2, title: "BTC", percentage: "+256.18%" },
    { id: 3, title: "ETH", percentage: "+189.45%" },
    { id: 4, title: "SOL", percentage: "+98.34%" },
    { id: 5, title: "XRP", percentage: "+65.72%" },
  ];
  const Losers = [
    { id: 1, title: "ALPACA", percentage: "-82.23%" },
    { id: 2, title: "BSW", percentage: "-82.23%" },
    { id: 3, title: "BNX", percentage: "-82.23%" },
    { id: 4, title: "H", percentage: "-82.23%" },
    { id: 5, title: "MEN", percentage: "-82.23%" },
  ];

  const events = [
    {
      title: "LDO Token Unlock (420M tokens)",
      date: "26th Oct. • Tomorrow",
      color: "#000000",
      backgroundColor: "#FFE600",
      buttonText: "mid",
    },
    {
      title: "US Core PCE Price Index",
      date: "27th Oct. • In 2 days",
      color: "#FFFFFF",
      backgroundColor: "#FF4C4C",
      buttonText: "Critical",
    },
  ];

  const data = [
    {
      shortCode: "21ism...29e",
      buttonTitle: "Buy",
      brought: "BOUGHT 213 BTC",
      amount: "$12,000,009.21",
      source: "Binance",
      time: "1 hour ago",
      buttonColor: "#3EDD87",
    },
    {
      shortCode: "21ism...29e",
      buttonTitle: "Long",
      brought: "BOUGHT 213 BTC",
      amount: "$12,000,009.21",
      source: "Binance",
      time: "2 hours ago",
      buttonColor: "#FF4C4C",
    },
    {
      shortCode: "21ism...29e",
      buttonTitle: "Sell",
      brought: "OPENED 25 x LONG 100 ETH",
      amount: "$5,340,800.80",
      source: "Coinbase",
      time: "3 hours ago",
      buttonColor: "#FF4C4C",
      Liquidation: "Liquidation",
      position: "Last 4 positions",
      value1: "$5202",
      value2: "+$2,209,122",
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
        <Typography variant="h4">Market Data & Metrics</Typography>
        <Box mt="20px">
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={cardStyle}>
                <Typography
                  textAlign="center"
                  variant="caption"
                  sx={{ color: "#b3b3b3" }}
                >
                  Fear and Greed Index
                </Typography>
                <Typography variant="h6" textAlign="center">
                  Neutral
                </Typography>
                <Box
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
                    50
                  </Box>
                </Box>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={cardStyle}>
                <Typography variant="caption" sx={{ color: "#b3b3b3" }}>
                  BTC Dominance
                </Typography>
                <Box display="flex" gap="20px">
                  <Typography fontSize="30px" variant="h6" sx={{ mt: 1 }}>
                    57.98%
                  </Typography>
                  <Typography fontSize="30px" variant="h6" sx={{ mt: 1 }}>
                    <img src={DropDownIcon} alt="" />
                  </Typography>
                </Box>
                <Typography sx={{ color: "#4ade80", fontSize: "13px" }}>
                  Stable
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                  <img src={BtcIcon} alt="" />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#b3b3b3" }}>
                    BTC 24h
                  </Typography>
                </Box>
                <Typography fontSize="30px" variant="h6" sx={{ mt: 1 }}>
                  $111,540.7
                </Typography>
                <Typography sx={{ color: "#4ade80", fontSize: "13px" }}>
                  +0.32%
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                    <img src={EthIcon} alt="" />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#b3b3b3" }}>
                    BTC 24h
                  </Typography>
                </Box>
                <Typography fontSize="30px" variant="h6" sx={{ mt: 1 }}>
                  $3,938.89
                </Typography>
                <Typography sx={{ color: "#f87171", fontSize: "13px" }}>
                  -0.53%
                </Typography>
              </Card>
            </Grid>

            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Card sx={cardStyle}>
                <Box display="flex" gap="10px">
                  <Box>
                    <img src={SolanaIcon} alt="" />
                  </Box>
                  <Typography variant="caption" sx={{ color: "#b3b3b3" }}>
                    BTC 24h
                  </Typography>
                </Box>
                <Typography fontSize="30px" variant="h6" sx={{ mt: 1 }}>
                  $214.15
                </Typography>
                <Typography sx={{ color: "#4ade80", fontSize: "13px" }}>
                  +3.45%
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box padding="15px" borderRadius="25px" mt="20px">
          <Grid container spacing={2}>
            <Grid
              item
              backgroundColor="#1C1C1C"
              padding="15px"
              size={{ xs: 6, sm: 6 }}
            >
              <Grid size={{ xs: 6, sm: 6 }}>
                <Box display="flex" gap="10px" marginTop="10px">
                  <img src={BtcIcon} alt="" />

                  <Typography>BTC ETF Flows</Typography>
                </Box>
                <Box>
                  <Typography marginTop="10px">Today (3rd Oct)</Typography>
                  <Typography marginTop="10px">+5,256 BTC</Typography>
                  <Typography>$632.13M</Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid
              padding="15px"
              backgroundColor="#1C1C1C"
              item
              size={{ xs: 6, sm: 6 }}
            >
              <Box display="flex" gap="10px" marginTop="10px">
                <img src={EthIcon} alt="" />

                <Typography>BTC ETF Flows</Typography>
              </Box>
              <Box>
                <Typography marginTop="10px">Today (3rd Oct)</Typography>
                <Typography marginTop="10px">+5,256 BTC</Typography>
                <Typography>$632.13M</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5">
          Top Movers in 24h (volume > £50M ){" "}
        </Typography>
        <Grid container spacing={2} marginTop="20px">
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            {Gainers.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "#1C1C1C",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: "16px" }}
                  >
                    {item.id} {item.title}
                  </Typography>

                  <Typography
                    sx={{ color: "#31D0AA", fontWeight: 600, fontSize: "16px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            {Losers.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Box
                  sx={{
                    backgroundColor: "#1C1C1C",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: "16px" }}
                  >
                    {item.id} {item.title}
                  </Typography>

                  <Typography
                    sx={{ color: "#FF4C4C", fontWeight: 600, fontSize: "16px" }}
                  >
                    {item.percentage}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box mt="20px">
          <Typography variant="h5">Risk Calendar (30 days)</Typography>
        </Box>
        <Box marginTop="50px" backgroundColor="#1C1C1C">
          <Grid container spacing={2} mt="15px" padding="15px">
            <Grid item size={{ xs: 12, sm: 2 }}>
              <CustomButton
                variant={"h6"}
                title="Attention"
                icon={<img src={AttentionIcon} />}
                sx={{
                  borderRadius: "20px",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#000000",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 10 }}>
              <Typography variant="h6" marginTop="10px">
                Critical event within 48 hours! Be cautious with opening
                positions.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={2}>
          {events.map((item) => (
            <Grid item size={{ xs: 12, md: 6 }} key={item.id}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}
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
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "8px",
                    padding: "6px 16px", 
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    width: "100px",
                  }}
                ></CustomButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {events.map((item) => (
            <Grid item size={{ xs: 12, md: 6 }} key={item.id}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}
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
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "8px",
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    width: "100px",
                  }}
                ></CustomButton>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box mt="10px" display="flex" justifyContent="space-between">
          <Typography variant="h3">Whales tracker</Typography>
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
                    <Box display="flex" alignItems="center" gap={1}>
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
                          fontSize: "12px",
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

                <Typography sx={{ mt: 1, fontWeight: 600, fontSize: "15px" }}>
                  {item.brought}
                  <span style={{ fontSize: "12px", color: "#B4B4B4" }}>
                    {item.amount}
                  </span>
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    sx={{ fontSize: "13px", opacity: 0.8, marginTop: "30px" }}
                  >
                    {item.source}
                  </Typography>
                  <Box display="flex" gap="20px" mt="10px">
                    <Box>
                      <Typography fontSize="12px" color="#B4B4B4">{item.Liquidation}</Typography>
                      <Typography  variant="h6" color="#FFFFFF">{item.value1}</Typography>
                    </Box>
                    <Box>
                      <Typography fontSize="12px" color="#B4B4B4">{item.position}</Typography>
                      <Typography fontSize="15px" color="#3EDD87">{item.value2}</Typography>
                    </Box>
                  </Box>
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
