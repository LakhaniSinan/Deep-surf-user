import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import VolumeCard from "../volumeCard";

const TopVolumeSection = ({ data }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

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
              border: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor:
                  selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
                boxShadow: "none",
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
              border: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor:
                  selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
                boxShadow: "none",
              },
            }}
          >
            7d
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={item.id}>
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

export default TopVolumeSection;
