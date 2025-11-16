import { Box, Grid, Typography } from "@mui/material";
const MarketIntelligence = () => {
  const marketStats = [
    {
      title: "Funding Rate",
      value: "-0.005%",
      description: "Neutral",
    },
    {
      title: "L/S Ratio",
      value: "2.26",
      description: "Heavily long",
    },
    {
      title: "24h Volume",
      value: "$31.1B",
      description: "Top 0% | Vol: 11.44%",
    },
    {
      title: "Liq. Risk",
      value: "2.0% 2.0%",
      description: "Nearest zones",
    },
  ];

  return (
    <>
      <Box mt={"25px"}>
        <Typography variant="h5">Enhanced Market Intelligence </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} marginTop={2}>
          {marketStats.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
              <Box key={index} mb={2} p={2} bgcolor="#1C1C1C" borderRadius={2}>
                <Typography variant="body2" color="#FFFFFF">
                  {item.title}
                </Typography>
                <Typography
                  variant="h5"
                  mt="10px"
                  color={item.value === "2.0% 2.0%" ? "#3EDD87" : "#FFFFFF"}
                >
                  {item.value}
                </Typography>
                <Typography
                  variant="h6"
                  mt="10px"
                  color={
                    item.description === "Neutral"
                      ? "#FFD700"
                      : item.description === "Heavily long"
                      ? "#4CAF50"
                      : "#FFFFFF"
                  }
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MarketIntelligence;
