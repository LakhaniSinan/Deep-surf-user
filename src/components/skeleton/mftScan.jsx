import { Box, Grid } from "@mui/material";
import React from "react";

const MTFSectionSkeleton = () => {
  const rows = [1, 2, 3]; // Table ke liye 3 placeholder rows

  return (
    <Box sx={{ marginTop: "40px" }}>
      {/* Price & Recommendation Skeleton */}
      <Box sx={{ backgroundColor: "#161616", borderRadius: "20px", padding: "25px", mb: 4 }}>
        {/* Coin Pair */}
        <Box sx={{ width: "120px", height: "20px", backgroundColor: "#2A2A2A", borderRadius: "5px", mb: 2 }} />
        {/* Price */}
        <Box sx={{ width: "100px", height: "30px", backgroundColor: "#2A2A2A", borderRadius: "5px", mb: 3 }} />
        {/* AI Recommendation */}
        <Box sx={{ width: "70%", height: "20px", backgroundColor: "#2A2A2A", borderRadius: "5px", mb: 1 }} />
        <Box sx={{ width: "50%", height: "20px", backgroundColor: "#2A2A2A", borderRadius: "5px" }} />
      </Box>

      {/* Table Skeleton */}
      <Box sx={{ backgroundColor: "#161616", borderRadius: "20px", padding: "25px" }}>
        <Grid container spacing={2}>
          {rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row}>
              <Box sx={{ backgroundColor: "#2A2A2A", height: "100px", borderRadius: "15px" }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Interpretation Button Skeleton */}
      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        <Box sx={{ width: "150px", height: "40px", backgroundColor: "#2A2A2A", borderRadius: "20px" }} />
        <Box sx={{ width: "70%", height: "30px", backgroundColor: "#2A2A2A", borderRadius: "10px" }} />
      </Box>
    </Box>
  );
};

export default MTFSectionSkeleton;
