import { Box, Grid, Skeleton, Typography } from "@mui/material";

const LiquidationMapDataSkeleton = () => {
  return (
    <Box
      backgroundColor={"#161616"}
      mt={"10px"}
      padding={"25px"}
      borderRadius={"40px"}
    >
      {/* Heading */}
      <Skeleton
        variant="text"
        width={200}
        height={25}
        sx={{ bgcolor: "#333" }}
      />

      {/* Current BTC Price */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"20px"}
        flexDirection={"column"}
      >
        <Skeleton
          variant="text"
          width={150}
          height={30}
          sx={{ bgcolor: "#333" }}
        />
        <Skeleton
          variant="text"
          width={100}
          height={25}
          sx={{ bgcolor: "#333", mt: 1 }}
        />
      </Box>

      {/* Two Columns (Long & Short Liquidations) */}
      <Box mt={3}>
        <Grid container spacing={7}>
          {/* LEFT COLUMN - LONG */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Skeleton
              variant="text"
              width={160}
              height={20}
              sx={{ bgcolor: "#333", mb: 2 }}
            />

            {Array.from({ length: 5 }).map((_, index) => (
              <Box
                key={index}
                mb={2}
                backgroundColor={"#1C1C1C"}
                padding={"15px"}
                borderRadius={"20px"}
              >
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Skeleton
                    variant="text"
                    width={120}
                    height={25}
                    sx={{ bgcolor: "#333" }}
                  />
                  <Skeleton
                    variant="text"
                    width={60}
                    height={25}
                    sx={{ bgcolor: "#333" }}
                  />
                </Box>

                <Skeleton
                  variant="rectangular"
                  height={8}
                  width={"100%"}
                  sx={{ bgcolor: "#333", borderRadius: "20px" }}
                />
              </Box>
            ))}
          </Grid>

          {/* RIGHT COLUMN - SHORT */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Skeleton
              variant="text"
              width={180}
              height={20}
              sx={{ bgcolor: "#333", mb: 2 }}
            />

            {Array.from({ length: 5 }).map((_, index) => (
              <Box
                key={index}
                mb={2}
                backgroundColor={"#1C1C1C"}
                padding={"15px"}
                borderRadius={"20px"}
              >
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Skeleton
                    variant="text"
                    width={120}
                    height={25}
                    sx={{ bgcolor: "#333" }}
                  />
                  <Skeleton
                    variant="text"
                    width={60}
                    height={25}
                    sx={{ bgcolor: "#333" }}
                  />
                </Box>

                <Skeleton
                  variant="rectangular"
                  height={8}
                  width={"100%"}
                  sx={{ bgcolor: "#333", borderRadius: "20px" }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LiquidationMapDataSkeleton;
