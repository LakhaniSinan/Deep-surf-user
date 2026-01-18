import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import VolumeCard from "../../components/volumeCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HeatMap = ({ data }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const { t } = useTranslation();
  const buttonData = [
    { id: 1, title: (t("ProAnalytics.HeatMapVolume.volume24h")), value: "24h" },
    { id: 2, title: (t("ProAnalytics.HeatMapVolume.volume7d")), value: "7d" },
    { id: 3, title: (t("ProAnalytics.HeatMapVolume.volatility")), value: "volatility" },
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
        {t("ProAnalytics.HeatMapVolume.heatmapVolumeVolatility")}
      </Typography>
      <Typography mt={1} color="neutral.Snowwhite" fontSize={"14px"}>
        {t("ProAnalytics.HeatMapVolume.topCoinsInfo")}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          color: "accent.contrastText",
          fontSize: "14px",
        }}
      >
        {/* {t("ProAnalytics.HeatMapVolume.topCoinsDescription")} */}
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
            ? (t("ProAnalytics.HeatMapVolume.top20Volume24h"))
            : selectedTimeframe === "7d"
              ? (t("ProAnalytics.HeatMapVolume.top20Volume7d"))
              : (t("ProAnalytics.HeatMapVolume.topCoinsByVolatility"))
          }
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
