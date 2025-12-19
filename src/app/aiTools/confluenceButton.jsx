import { Box, Grid, Paper, Typography } from "@mui/material";
import StatCard from "../../components/statCard/index";

function DashboardStats({ coinData }) {
  const statsData = [
    {
      title: "Confluence Score",
      subtitle: "Bullish ",
    },
    {
      title: "Trend",
      subtitle: "Bearish",
      price: "4",
    },
  ];

  const statsData2 = [
    { title: "Trend", subtitle: "Bullish" },

    { title: "Signal Level", subtitle: "$3 120,88" },
  ];

  return (
    <>
      <Box mt={"10px"}
      >
        <Grid container spacing={6}>
          <Grid item size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="h5"
              fontSize={{ xs: 16, md: 23 }}
              fontWeight={600}
              color="#FFFFFF"
            >
              Confluence Score
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="h5"
              fontSize={{ xs: 16, md: 23 }}
              fontWeight={600}
              color="#FFFFFF"
            >
              Supertrend
            </Typography>
          </Grid>
        </Grid>
      </Box >
      <Box
        sx={{
          width: "100%",
          mt: 2,
          color: "#fff",
          // p: 3,
          borderRadius: "16px",
          backgroundColor: "#rgba(28, 28, 28, 1)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",

              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.coolGrey">
              Confluence Score
            </Typography>
            <Typography
              sx={{ color: "neutral.brightGreen", fontSize: "18px", fontWeight: 600 }}
            >
              Bullish
            </Typography>
            <Typography
              sx={{
                color: "neutral.brightGreen",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {coinData?.confluenceScore?.bullish}
            </Typography>
          </Box>

          {/* Bearish Card */}
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.coolGrey">
              Confluence Score
            </Typography>
            <Typography
              sx={{ color: "text.SalmonRed", fontSize: "18px", fontWeight: 600 }}
            >
              Bearish
            </Typography>
            <Typography
              sx={{
                color: "text.SalmonRed",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {coinData?.confluenceScore?.bullish}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="neutral.Snowwhite" fontWeight="500px">
              Trend
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "text.greenColor",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {coinData?.supertrend?.trend}
            </Typography>
          </Box>

          {/* Signal Level Card */}
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.Snowwhite">
              Signal Level
            </Typography>
            <Typography
              sx={{ mt: 1, color: "accent.contrastText", fontSize: "22px", fontWeight: 600 }}
            >
              {coinData?.supertrend?.signalLevel}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DashboardStats;
