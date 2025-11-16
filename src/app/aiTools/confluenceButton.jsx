import { Box, Grid, Paper, Typography } from "@mui/material";
import StatCard from "../../components/statCard/index";

function DashboardStats() {
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
      <Box mt={"10px"}>
        <Typography variant="h4" color="#FFFFFF">
          Confluence Score
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 3,
          color: "#fff",
          p: 3,
          borderRadius: "16px",
          background: "#111",
        }}
      >
        {/* TOP HEADINGS ROW */}
        <Box sx={{ position: "relative", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Confluence Score
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)", // exactly center
            }}
          >
            Supertrend
          </Typography>
        </Box>

        {/* ALL CARDS ROW IN ONE FLEX CONTAINER */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {/* Bullish Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#0F0F0F",
              p: 2,
              borderRadius: "12px",
            }}
          >
            <Typography variant="caption" sx={{ color: "#bbb" }}>
              Confluence Score
            </Typography>
            <Typography
              sx={{ color: "#4CAF50", fontSize: "18px", fontWeight: 600 }}
            >
              Bullish
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "#4CAF50",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              6
            </Typography>
          </Box>

          {/* Bearish Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#0F0F0F",
              p: 2,
              borderRadius: "12px",
            }}
          >
            <Typography variant="caption" sx={{ color: "#bbb" }}>
              Confluence Score
            </Typography>
            <Typography
              sx={{ color: "#ff4d4d", fontSize: "18px", fontWeight: 600 }}
            >
              Bearish
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "#ff4d4d",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              4
            </Typography>
          </Box>

          {/* Trend Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#0F0F0F",
              p: 2,
              borderRadius: "12px",
            }}
          >
            <Typography variant="caption" sx={{ color: "#bbb" }}>
              Trend
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "#4CAF50",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Bullish
            </Typography>
          </Box>

          {/* Signal Level Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#0F0F0F",
              p: 2,
              borderRadius: "12px",
            }}
          >
            <Typography variant="caption" sx={{ color: "#bbb" }}>
              Signal Level
            </Typography>
            <Typography
              sx={{ mt: 1, color: "#fff", fontSize: "22px", fontWeight: 700 }}
            >
              $3 120.88
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <Grid container spacing={10} marginTop={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
          <Grid container spacing={5}>
            {statsData.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                <StatCard
                  title={item.title}
                  subtitle={item.subtitle}

                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
          <Grid container spacing={5}>
            {statsData2.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                <StatCard
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </>
  );
}

export default DashboardStats;
