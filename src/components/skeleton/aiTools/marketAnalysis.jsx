import { Box, Grid, Skeleton, Typography } from "@mui/material";

const MarketIntelligenceSkeleton = () => {
  return (
    <>
      {/* Heading Skeleton */}
      <Box mt="25px">
        <Skeleton variant="text" width={250} height={25} />
      </Box>

      {/* Cards Skeleton */}
      <Box>
        <Grid container spacing={2} marginTop={2}>
          {[...Array(4)].map((_, index) => (
            <Grid item size={{xs : 12, sm : 6 , md  : 3}} key={index}>
              <Box mb={2} p={2} bgcolor="#1C1C1C" borderRadius={2}>
                {/* Title Skeleton */}
                <Skeleton variant="text" width={100} height={15} />
                {/* Value Skeleton */}
                <Skeleton variant="text" width={60} height={25} sx={{ mt: 1 }} />
                {/* Description Skeleton */}
                <Skeleton variant="text" width={80} height={15} sx={{ mt: 1.5 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MarketIntelligenceSkeleton;
