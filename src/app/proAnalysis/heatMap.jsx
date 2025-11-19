import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import VolumeCard from "../../components/volumeCard";

const HeatMap = () => {
  const volumeData = [
    {
      id: 1,
      name: "ALPACA",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
    {
      id: 2,
      name: "APEX",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: false,
    },
    {
      id: 3,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
    {
      id: 4,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: false,
    },
    {
      id: 5,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
    {
      id: 6,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
    {
      id: 7,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: false,
    },
    {
      id: 8,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: false,
    },
    {
      id: 9,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
    {
      id: 10,
      name: "ATOM",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: false,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "ALPACA",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "APEX",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "BNB",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "ALPACA",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
     {
      id: 1,
      name: "ATOM",
      volume: "$2.9B",
      percentChange: 391.2,
      isPositive: true,
    },
  ];

  const buttonData = [
    {
      id: 1,
      color: "#fff",
      title: "24h Volume",
      fullWidth: true,
      stye: {
        backgroundColor: "#FFFFFF",
        color: "#000000",
        borderRadius: "12px",
      },
    },
    {
      id: 2,
      title: "7d Volume",
      fullWidth: true,
      stye: {
        backgroundColor: "#161514",
        color: "#9C9EA3",
        borderRadius: "12px",
        borderColor: "#757575",
        border: "1px solid #9C9EA3", 
      },
    },
    {
      id: 3,
      title: "Volatility",
      fullWidth: true,
      stye: {
        backgroundColor: "#161514",
        color: "#9C9EA3",
        borderRadius: "12px",
        borderColor: "#757575",
        border: "1px solid #9C9EA3", 
      },
    },
  ];
  return (
    <Box
      backgroundColor={"neutral.surface"}
      mt={"40px"}
      p={"25px"}
      borderRadius={"25px"}
    >
      <Typography variant="h1" fontSize="20px">Heatmap—Volume & Volatility </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          color: "accent.contrastText",
        }}
      >
        Top coins by trading volume and volatility (AtR/Price). Helps to find
        active trading instruments.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"15px"}
        margin={"auto"}
        marginTop={"40px"}
      >
        {buttonData.map((btn) => (
          <CustomButton
            key={btn.id}
            variant={btn.variant}
            title={btn.title}
            fullWidth={btn.fullWidth}
            width={"100%"}
            sx={btn.stye}
          />
        ))}
      </Box>
      <Box mt={"20px"}>
        <Typography variant="h6" color = "#FFFFFF">Top 20 by 24h volume:</Typography>
      </Box>
      <Grid container spacing={2} marginTop={"20px"}>
        {volumeData.map((item) => (
          <Grid item size={{ xs: 12, sm: 6, md: 1.2 }} key={item.id}>
            <VolumeCard
              name={item.name}
              volume={item.volume}
              percentChange={item.percentChange}
              isPositive={item.isPositive}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeatMap;
