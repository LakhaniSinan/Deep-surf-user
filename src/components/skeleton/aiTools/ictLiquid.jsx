import { Box, Grid, Skeleton, Typography } from "@mui/material";

const IctLiquidSkeleton = () => {
  return (
    <Box mt={2}>
      {/* Heading Skeleton */}
      <Skeleton variant="text" width={200} height={25} />

      {/* Card Skeleton */}
      <Box backgroundColor="#1C1C1C" padding={2} borderRadius={8} mt={2}>
        <Grid container spacing={2}>
          {[...Array(2)].map((_, index) => (
            <Grid item size={{xs : 12 , sm : 6 , lg : 3}} key={index}>
              <Box display="flex" gap={1} alignItems="center">
                <Skeleton variant="circular" width={20} height={20} />
                <Skeleton variant="text" width={120} height={15} />
              </Box>
            </Grid>
          ))}
        </Grid>

        {[...Array(2)].map((_, index) => (
          <Box display="flex" gap={1} alignItems="center" mt={2} key={index}>
            <Skeleton variant="circular" width={20} height={20} />
            <Skeleton variant="text" width={150} height={15} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IctLiquidSkeleton;
