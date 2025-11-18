import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import ButtonIcon from "../../assets/icons/Vector (3).svg";
import AttentionIcon from "../../assets/icons/attention.svg";
import CircleIcon from "../../assets/icons/ellipse.svg";

const Macroeconomics = () => {
  const economicReports = [
    {
      title: "US CPI Report (Wednesday, 13:30 EST)",
      forecast: "Forecast: 2.9% (previous: 3.0%)",
      impact: "Impact",
      status: ":   Extremely high (volatility 8-15%)",
    },
    {
      title: "US Unemployment Rate (Thursday, 8:30 EST)",
      forecast: "Forecast: 4.1% (previous: 4.2%)",
      impact: "Impact",
      status: ":Positive for risk assets",
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
      titleColor: "text.greenColor",
      description: "Forecast data or better: BTC tests $108k, altcoins 3-5%",
    },
    {
      title: "Bearish",
      titleColor: "text.greenColor",
      description: "Forecast data or better: BTC tests $108k, altcoins 3-5%",
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
        <Typography variant="h3">Macroeconomics</Typography>
        <Grid container spacing={2} mt="20px">
          <Grid item size={{ xs: 12, sm: 12, md: 2 }}>
            <CustomButton
              variant={"gradient"}
              title="AI Analysis"
              icon={<img src={ButtonIcon} />}
              sx={{
                borderRadius: "20px",
                width: { xs: "100%", md: "auto" },
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 12, md: 10 }}>
            <Typography variant="body1" color="#FFFFFF" fontSize="14px">
              The unemployment rate improved from 4.2% to 4.1%. This is a
              positive ('bullish') signal. A strong but not overheated labor
              market supports the Fed's view of a potential 'soft landing' for
              the economy.
            </Typography>
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
                <Typography variant="h6">{report.title}</Typography>
                <Typography mt="10px" variant="body1">
                  {report.forecast}
                </Typography>
                <Box display="flex" gap="10px">
                  <Typography variant="body1">{report.impact}</Typography>
                  <Typography variant="body1">{report.status}</Typography>
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
                  <Typography
                    // style={{ color: item.titleColor }}
                    variant="body1"
                  >
                    {item.title}
                  </Typography>
                  <Typography mt="10px" variant="body1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
            <Grid></Grid>
          </Grid>
        </Box>
        <Box backgroundColor="#1C1C1C" padding="20px" borderRadius="25px">
          <Grid container spacing={2}>
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
                  marginTop: "10px",
                }}
              />
            </Grid>
            <Grid item size={{ xs: 12, sm: 10 }} marginTop={2}>
              <Typography fontSize={14}>
                Consumer Price Index (CPI) data — a key event for all markets!
                Expect high volatility — in the first 2 hours, movement could
                reach 8.7%.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // backgroundColor: "#111",
            padding: { xs: "16px", sm: "20px" }, // ⭐ Mobile: kam padding
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: "1.1rem", sm: "1.25rem" }, // ⭐ Mobile: chota heading
            }}
          >
            Detailed action plan:
          </Typography>

          {steps.map((text, index) => (
            <Grid
              container
              key={index}
              sx={{
                marginBottom: "14px",
                alignItems: "flex-start",
              }}
            >
              {/* LEFT SIDE → ICON + VERTICAL LINE */}
              <Grid
                item
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: { xs: "24px", sm: "auto" }, // ⭐ Mobile: fixed width behtar alignment ke liye
                }}
              >
                <Box
                  component="img"
                  src={CircleIcon}
                  sx={{
                    width: { xs: "14px", sm: "16px" }, // ⭐ Mobile: chota icon
                    height: { xs: "14px", sm: "16px" },
                    marginRight: { xs: "10px", sm: "15px" },
                    marginTop: "3px",
                    flexShrink: 0, // ⭐ Mobile par shrink hone se bachata hai
                  }}
                />

                {/* Vertical Line */}
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "6px", sm: "7px" }, // ⭐ Mobile: adjusted position
                      top: "18px",
                      width: "2px",
                      height: "calc(100% + 4px)",
                      backgroundColor: "#444",
                    }}
                  />
                )}
              </Grid>

              {/* RIGHT SIDE TEXT */}
              <Grid item xs sx={{ minWidth: 0 }}>
                {" "}
                {/* ⭐ Mobile: overflow se bachata hai */}
                <Typography
                  sx={{
                    color: "#ccc",
                    fontSize: { xs: "12px", sm: "14px" }, // ⭐ Mobile: chota text
                    lineHeight: { xs: "18px", sm: "20px" }, // ⭐ Mobile: tight line height
                    wordWrap: "break-word", // ⭐ Mobile: lambay words ko handle karta hai
                  }}
                >
                  {text}
                </Typography>
              </Grid>
            </Grid>
          ))}

          <Typography
            sx={{
              mt: 2,
              color: "#aaa",
              fontSize: { xs: "12px", sm: "13px" }, // ⭐ Mobile: chota footnote
            }}
          >
            Historical data: If CPI comes in below forecast, the stock market
            (S&P 500) typically rises by +0.2% on average within 24 hours.
          </Typography>
        </Box>
        <Box padding="10px">
          <Typography variant="h6">Fed Speeches</Typography>
          <Typography mt='10px' fontSize="15px" variant="body1">
            Powell: No scheduled events
          </Typography>
          <Typography fontSize="14px" variant="body1">
            Other members: Williams (Tuesday), Bostic (Wednesday) watch for
            hawkish rhetoric
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Macroeconomics;
