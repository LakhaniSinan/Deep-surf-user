import { Box, Grid, Paper, Skeleton } from "@mui/material";
import { statCardStyles } from "./style";

const StatCardSkeleton = ({ count = 3, sx }) => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item size={{ xs: 12, sm: 4 }} key={index}>
          <Paper elevation={0} sx={{ ...statCardStyles.card, ...sx }}>
            {/* Icon + Title Skeleton */}
            <Box mb={1.5} display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={30} height={30} />
              <Box>
                <Skeleton width={80} height={22} />
                <Skeleton width={60} height={16} />
              </Box>
            </Box>

            {/* Price & Percent Skeleton */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton width={70} height={28} />
              <Skeleton width={40} height={20} />
            </Box>

            {/* Graph/Image Skeleton */}
            <Box mt={1}>
              <Skeleton variant="rectangular" width="100%" height={50} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCardSkeleton;
