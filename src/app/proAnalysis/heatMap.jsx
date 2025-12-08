import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import VolumeCard from "../../components/volumeCard";
import { useState } from "react";

const HeatMap = ({ data }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

  const buttonData = [
    { id: 1, title: "24h Volume", value: "24h" },
    { id: 2, title: "7d Volume", value: "7d" },
    { id: 3, title: "Volatility", value: "volatility" },
  ];

  // 🔍 Select data based on current timeframe
  const getFilteredData = () => {
    if (selectedTimeframe === "24h") {
      return data?.heatMap?.by24hVolume;
    } else if (selectedTimeframe === "7d") {
      return data?.heatMap?.by7dVolume;
    } else if (selectedTimeframe === "volatility") {
      return data?.heatMap?.byVolatility;
    }
  };

  return (
    <Box
      backgroundColor={"neutral.surface"}
      mt={"40px"}
      p={"25px"}
      borderRadius={"25px"}
    >
      <Typography variant="h1" fontSize="16px">
        Heatmap—Volume & Volatility
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          color: "accent.contrastText",
          fontSize: "14px",
        }}
      >
        Top coins by trading volume and volatility (AtR/Price). Helps to find
        active trading instruments.
      </Typography>

      {/* 🔹 Buttons */}
      <Box
        display={"flex"}
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        gap={"15px"}
        marginTop={"40px"}
      >
        {buttonData.map((btn) => (
          <CustomButton
            key={btn.id}
            title={btn.title}
            fullWidth
            width={"100%"}
            onClick={() => setSelectedTimeframe(btn.value)}
            sx={{
              backgroundColor:
                selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
              color: selectedTimeframe === btn.value ? "#000" : "#9C9EA3",
              borderRadius: "12px",
              border: "1px solid #9C9EA3",
            }}
          />
        ))}
      </Box>

      <Box mt={"20px"}>
        <Typography variant="h6" color="#FFFFFF">
          {selectedTimeframe === "24h"
            ? "Top 20 by 24h volume:"
            : selectedTimeframe === "7d"
            ? "Top 20 by 7d volume:"
            : "Top coins by volatility:"}
        </Typography>
      </Box>
      <Grid container spacing={2} marginTop={"20px"}>
        {getFilteredData()?.map((item, index) => (
          <Grid
            item
            size={{ xs: 6, sm: 4, md: 1.2 }}
            key={index}
            // sx={{ flexBasis: "20%" }}
          >
            <VolumeCard
              name={item?.symbol}
              volume={item?.priceFormatted}
              percentChange={
                selectedTimeframe === "24h"
                  ? item?.change24hFormatted
                  : item?.change24hFormatted
              }
              isPositive={
                selectedTimeframe === "24h"
                  ? item?.change24h >= 0
                  : selectedTimeframe === "7d"
                  ? item?.change24h >= 0
                  : item?.change24h >= 0
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeatMap;
