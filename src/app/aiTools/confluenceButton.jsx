import { Box, Grid, Typography } from "@mui/material";
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
      <Grid container spacing={10} marginTop={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
          <Grid container spacing={5}>
            {statsData.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                <StatCard
                  title={item.title}
                  subtitle={item.subtitle}

                  // price={item.price}
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
      </Grid>
    </>
  );
}

export default DashboardStats;
