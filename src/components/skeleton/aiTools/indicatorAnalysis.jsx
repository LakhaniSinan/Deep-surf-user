import { Box, Grid, Skeleton, Typography } from "@mui/material";

const IndicatorAnalysisSkeleton = () => {
  return (
    <>
      {/* Heading Skeleton */}
      <Box mt={5}>
        <Skeleton variant="text" width={200} height={25} />
      </Box>

      {/* Main Container Skeleton */}
      <Box mt={2} sx={{ backgroundColor: "#1C1C1C", borderRadius: 4, p: 2 }}>
        {[...Array(4)].map((_, rowIndex) => (
          <Grid
            container
            spacing={2}
            mt={rowIndex === 0 ? 1 : 3}
            key={rowIndex}
          >
            {[...Array(3)].map((_, colIndex) => (
              <Grid item size={{xs : 12}}  sm={colIndex === 2 ? 6 : 3} key={colIndex}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton
                    variant="text"
                    width={colIndex === 2 ? 200 : 100}
                    height={15}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default IndicatorAnalysisSkeleton;
