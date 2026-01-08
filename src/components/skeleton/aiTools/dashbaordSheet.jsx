import { Box, Grid, Skeleton } from "@mui/material";

const DashboardStatsSkeleton = () => {
  return (
    <>
      {/* Header Skeleton */}
      <Box mt="10px">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Skeleton variant="text" width={120} height={30} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="text" width={120} height={30} />
          </Grid>
        </Grid>
      </Box>

      {/* Cards Skeleton */}
      <Box sx={{ width: "100%", mt: 2, borderRadius: "16px" }}>
        <Grid container spacing={3}>
          {/* Bullish Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "#1C1C1C",
                p: 2,
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width={100} height={15} sx={{ mx: "auto" }} />
              <Skeleton variant="text" width={60} height={25} sx={{ mx: "auto", mt: 1 }} />
              <Skeleton variant="text" width={40} height={30} sx={{ mx: "auto", mt: 1 }} />
            </Box>
          </Grid>

          {/* Bearish Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "#1C1C1C",
                p: 2,
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width={100} height={15} sx={{ mx: "auto" }} />
              <Skeleton variant="text" width={60} height={25} sx={{ mx: "auto", mt: 1 }} />
              <Skeleton variant="text" width={40} height={30} sx={{ mx: "auto", mt: 1 }} />
            </Box>
          </Grid>

          {/* Trend Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "#1C1C1C",
                p: 2,
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width={80} height={15} sx={{ mx: "auto" }} />
              <Skeleton variant="text" width={60} height={30} sx={{ mx: "auto", mt: 1 }} />
            </Box>
          </Grid>

          {/* Signal Level Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                background: "#1C1C1C",
                p: 2,
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <Skeleton variant="text" width={100} height={15} sx={{ mx: "auto" }} />
              <Skeleton variant="text" width={60} height={30} sx={{ mx: "auto", mt: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardStatsSkeleton;
