import { Box, Grid, Skeleton, Typography } from "@mui/material";

const PatternSkeleton = () => {
  return (
    <>
      {/* Heading + Button Skeleton */}
      <Box>
        <Grid container spacing={2} mt="15px">
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="20px"
            >
              <Skeleton variant="text" width={150} height={25} />
              <Skeleton
                variant="rectangular"
                width={100}
                height={30}
                sx={{ borderRadius: "15px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {[...Array(2)].map((_, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          backgroundColor="#1C1C1C"
          padding="15px"
          borderRadius="8px"
          marginTop="20px"
          gap={{ xs: 2, md: 0 }}
        >
          {/* Left Text Content Skeleton */}
          <Box gap="12px" width={{ xs: "100%", md: "60%" }}>
            <Skeleton variant="text" width={120} height={20} />
            <Skeleton variant="text" width={100} height={15} />
            <Skeleton variant="text" width="100%" height={50} sx={{ mt: 1 }} />

            <Box
              mt="10px"
              display="flex"
              gap={2}
              flexWrap={{ xs: "wrap", md: "nowrap" }}
            >
              <Skeleton
                variant="rectangular"
                width={100}
                height={30}
                sx={{ borderRadius: 2 }}
              />
              {index === 1 && (
                <Skeleton
                  variant="rectangular"
                  width={100}
                  height={30}
                  sx={{ borderRadius: 2 }}
                />
              )}
            </Box>
          </Box>

          {/* Right Confidence Bar Skeleton */}
          <Box width={{ xs: "100%", md: "35%" }} mt={{ xs: 2, md: 0 }}>
            <Skeleton variant="text" width={80} height={15} />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={10}
              sx={{ borderRadius: "30px", mt: 1 }}
            />
          </Box>
        </Box>
      ))}

      {/* AI Analysis Section Skeleton */}
      <Grid container spacing={2} marginTop={5}>
        <Grid item xs={12} sm={2}>
          <Skeleton
            variant="rectangular"
            width={120}
            height={40}
            sx={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Skeleton variant="text" width="100%" height={50} />
        </Grid>
      </Grid>
    </>
  );
};

export default PatternSkeleton;
