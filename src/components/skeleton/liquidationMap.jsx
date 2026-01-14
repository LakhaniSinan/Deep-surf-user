import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

const FuturesMetricsSkeleton = () => {
  return (
    <Box
      backgroundColor={"#161616"}
      mt={"15px"}
      padding={"25px"}
      borderRadius={"40px"}
    >
      {/* Title */}
      <Skeleton
        variant="text"
        width={150}
        height={30}
        sx={{ bgcolor: "#2A2A2A" }}
      />

      {/* ETH Price Section */}
      <Box
        mt={"20px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Skeleton
          variant="text"
          width={180}
          height={24}
          sx={{ bgcolor: "#2A2A2A", mb: 1 }}
        />
        <Skeleton
          variant="text"
          width={120}
          height={26}
          sx={{ bgcolor: "#2A2A2A" }}
        />
      </Box>

      {/* Metric Cards */}
      <Grid container spacing={1} mt={5}>
        {[...Array(5)].map((_, i) => (
          <Grid item key={i} size={{ xs: 12, sm: 6, md: 2.4 }}>
            <Box
              sx={{
                backgroundColor: "#1C1C1C",
                borderRadius: "15px",
                padding: "15px",
                border: "1px solid #2A2A2A",
                height: "182px",
                marginTop: "10px",
              }}
            >
              <Skeleton variant="text" width="60%" height={20} sx={{ bgcolor: "#2A2A2A" }} />
              <Skeleton variant="text" width="40%" height={20} sx={{ bgcolor: "#2A2A2A", mt: 1 }} />
              <Skeleton variant="rectangular" width="100%" height={5} sx={{ bgcolor: "#2A2A2A", mt: 2, borderRadius: 1 }} />
              <Skeleton variant="text" width="50%" height={20} sx={{ bgcolor: "#2A2A2A", mt: 3 }} />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Reading Info Skeleton */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Skeleton variant="text" width={"90%"} height={60} sx={{ bgcolor: "#2A2A2A" }} />
      </Box>
    </Box>
  );
};

export default FuturesMetricsSkeleton;
