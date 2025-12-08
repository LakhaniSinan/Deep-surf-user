import React, { useState } from "react";
import { Box, Typography, Button, Grid, Skeleton } from "@mui/material";
import VolumeCard from "../volumeCard";
import VolumeCardSkeleton from "../../components/skeleton/volumeCardSkeleton";

const TopVolumeSection = ({ data1, data2, isLoading }) => {
  console.log("fhfyfyrfrjfffrfrf" , data1 , data2);
  
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const data = selectedTimeframe === "24h" ? data1 : data2;

  const finalData = data?.map((item) => ({
    ...item,
    volumeFormatted:
      selectedTimeframe === "24h"
        ? item.volumeFormatted
        : item.volume7dFormatted,
    changeFormatted:
      selectedTimeframe === "24h"
        ? item.change24hFormatted
        : item.change7dFormatted,
  }));

  return ( 
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Typography variant="h4" fontSize="1rem" color="text.primary">
          Top 10 by volume
        </Typography>

        {/* Buttons */}
        <Box display="flex" gap={1}>
          <Button
            onClick={() => setSelectedTimeframe("24h")}
            sx={{
              minWidth: "50px",
              padding: "6px 16px",
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor:
                selectedTimeframe === "24h" ? "#2a2a2a" : "transparent",
              color: "text.primary",
              "&:hover": {
                backgroundColor:
                  selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
              },
            }}
          >
            24h
          </Button>
          <Button
            onClick={() => setSelectedTimeframe("7d")}
            sx={{
              minWidth: "50px",
              padding: "6px 16px",
              borderRadius: "20px",
              textTransform: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor:
                selectedTimeframe === "7d" ? "#2a2a2a" : "transparent",
              color: "text.primary",
              "&:hover": {
                backgroundColor:
                  selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
              },
            }}
          >
            7d
          </Button>
        </Box>
      </Box>

      {/* Cards Grid */}

      {isLoading ? (
        <VolumeCardSkeleton />
      ) : finalData?.length === 0 ? (
        <Typography textAlign={"center"} color="#fff" mt={2} fontWeight={600}>
          No Data Found
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {finalData?.map((item, index) => (
            <Grid item size={{ xs: 4, sm: 3, md: 2.4 }} key={index}>
              <VolumeCard
                name={item.symbol}
                volume={item.volumeFormatted}
                percentChange={item.changeFormatted}
                isPositive={item?.changeFormatted?.includes("-") ? false : true}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TopVolumeSection;
