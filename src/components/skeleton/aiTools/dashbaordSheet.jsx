import { Box, Grid, Typography, Skeleton } from "@mui/material";

const DashboardStatsSkeleton = () => {
  return (
    <>
      <Box mt="10px">
        <Grid container spacing={3}>
          <Grid item size={{xs : 6}} >
            <Skeleton variant="text" width={120} height={30} />
          </Grid>
          <Grid item  size={{xs : 6}} >
            <Skeleton variant="text" width={120} height={30} />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: 2,
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {/* Bullish Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Skeleton variant="text" width={100} height={15} />
            <Skeleton variant="text" width={60} height={25} />
            <Skeleton variant="text" width={40} height={30} />
          </Box>

          {/* Bearish Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Skeleton variant="text" width={100} height={15} />
            <Skeleton variant="text" width={60} height={25} />
            <Skeleton variant="text" width={40} height={30} />
          </Box>

          {/* Trend Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Skeleton variant="text" width={80} height={15} />
            <Skeleton variant="text" width={60} height={30} />
          </Box>

          {/* Signal Level Card */}
          <Box
            sx={{
              flex: "1 1 180px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <Skeleton variant="text" width={100} height={15} />
            <Skeleton variant="text" width={60} height={30} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardStatsSkeleton;
