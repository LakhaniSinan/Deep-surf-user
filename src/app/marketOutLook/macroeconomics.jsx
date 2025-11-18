import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import StarIcon from "../../assets/icons/Vector (3).svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CircleIcon from "../../assets/icons/ellipse.svg";

const Macroeconomics = () => {
  const economicReports = [
    {
      title: "US CPI Report (Wednesday, 13:30 EST)",
      forecast: "Forecast: 2.9% (previous: 3.0%)",
      impact: "Impact:",
      status: " Extremely high (volatility 8-15%)",
    },
    {
      title: "US Unemployment Rate (Thursday, 8:30 EST)",
      forecast: "Forecast: 4.1% (previous: 4.2%)",
      impact: "Impact:",
      status: "Positive for risk assets",
    },
  ];

  const steps = [
    "24 hours BEFORE: Close 50% of positions with high leverage (10x). Set alerts at $50k and $53k.",
    "2 hours BEFORE: Full risk-off. Do not open new positions. Tighten stops.",
    "Exit moment: Wait 30–45 minutes! The first reaction is often false.",
    "In 1–2 hours: If the direction is confirmed, enter with the trend at a reduced size.",
    "In 2–4 hours: The market will find a new balance. Return to the usual strategy.",
  ];

  const marketData = [
    {
      title: "Bullish",
      titleColor: "text.greenColor",
      description: "Forecast data or better: BTC tests $108k, altcoins 3-5%",
    },
    {
      title: "Neutral",
      titleColor: "text.yellowColor",
      description: "Forecast data or better: BTC tests $108k, altcoins 3-5%",
    },
    {
      title: "Bearish",
      titleColor: "text.lightRedColor",
      description: "Forecast data or better: BTC tests $108k, altcoins 3-5%",
    },
  ];

  return (
    <>
      <Box
        backgroundColor="#161616"
        borderRadius="20px"
        padding="20px"
        mt="20px"
      >
        <Typography variant="h1" fontSize="20px">
          Macroeconomics
        </Typography>
        <Grid container spacing={1} padding="15px">
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              flexWrap={{ xs: "wrap", md: "nowrap" }}
            >
              <CustomButton
                variant="gradient"
                title="Attention"
                icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
                sx={{
                  borderRadius: "20px",
                  padding: "4px 10px",
                  minWidth: "auto",
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "#FFE600",
                  color: "#000000",
                }}
              />

              <Typography
                variant="body2"
                fontSize="14px"
                flex={{ xs: "100%", md: "1" }} // 👈 laptop per text properly stretch kare
              >
                The unemployment rate improved from 4.2% to 4.1%. This is a
                positive ('bullish') signal. A strong but not overheated labor
                market supports the Fed's view of a potential 'soft landing' for
                the economy.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} marginTop="10px">
          {economicReports.map((report, index) => (
            <Grid item key={index} size={{ xs: 12, sm: 12, md: 6 }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: 2,
                  borderRadius: 2,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Typography variant="h6" fontSize="14px">
                  {report.title}
                </Typography>
                <Typography mt="10px" variant="body1" fontSize="14px">
                  {report.forecast}
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="body1" fontSize="13px">
                    {report.impact}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize="14px"
                    marginRight="10px"
                  >
                    {report.status}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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
                  <Typography variant="body1" color={item.titleColor}>
                    {item.title}
                  </Typography>
                  <Typography mt="10px" variant="body1" fontSize="15px">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid></Grid>
          </Grid>
        </Box>
        <Box backgroundColor="#1C1C1C" padding="20px" borderRadius="25px">
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
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
                padding: "4px 13px",
              }}
            />
            <Typography variant="h4" fontSize="13px">
              Consumer Price Index (CPI) data — a key event for all markets!
              Expect high volatility — in the first 2 hours, movement could
              reach 8.7%.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: "16px", sm: "20px" }, // ⭐ Mobile: kam padding
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              mb: 2,
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Detailed action plan:
          </Typography>

          {steps.map((text, index) => (
            <Grid
              container
              key={index}
              sx={{
                marginBottom: "13px",
                display: "flex", // 👈 force flex layout
                flexDirection: "row", // 👈 ensure icon and text are side by side
                alignItems: "flex-start",
                flexWrap: "nowrap", // 👈 icon break na ho
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  alignItems: "flex-start",
                  marginRight: "10px",
                  flexShrink: 0, // 👈 icon compress na ho
                }}
              >
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "6px",
                      top: "18px",
                      width: "2px",
                      height: "calc(100% + 4px)",
                      backgroundColor: "#444",
                    }}
                  />
                )}

                <Box
                  component="img"
                  src={CircleIcon}
                  sx={{
                    width: "14px",
                    height: "14px",
                    marginTop: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#ccc",
                  fontSize: "13px",
                  wordBreak: "break-word",
                  flex: 1, // 👈 text ko expand hone do
                }}
              >
                {text}
              </Typography>
            </Grid>
          ))}

          <Typography
            sx={{
              mt: 2,
              color: "#aaa",
              fontSize: { xs: "12px", sm: "14px" }, // ⭐ Mobile: chota footnote
            }}
          >
            Historical data: If CPI comes in below forecast, the stock market
            (S&P 500) typically rises by +0.2% on average within 24 hours.
          </Typography>
        </Box>
        <Box padding="10px">
          <Typography variant="h3" fontSize="17px">Fed Speeches</Typography>
          <Typography mt="10px" fontSize="14px" variant="body1">
            Powell: No scheduled events
          </Typography>
          <Typography fontSize="14px" variant="body1" fontStyle="14px">
            Other members: Williams (Tuesday), Bostic (Wednesday) watch for
            hawkish rhetoric
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Macroeconomics;
