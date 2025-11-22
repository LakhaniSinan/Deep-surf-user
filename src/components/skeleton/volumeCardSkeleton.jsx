import React from "react";
import { Box, Skeleton, Grid, Paper } from "@mui/material";
import { statCardStyles } from "./style";

const VolumeCardSkeleton = ({ count = 10, sx }) => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item size={{ xs: 4, sm: 3, md: 2.4 }} key={index}>
          <Paper
            sx={{
              ...statCardStyles.card, // yaha style apply
              borderRadius: "8px",
              padding: "6px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              ...sx, // custom sx prop apply
            }}
          >
            {/* Name */}
            <Skeleton variant="text" width="60%" height={14} />
            {/* Volume */}
            <Skeleton variant="text" width="40%" height={12} />
            {/* Percent with arrow */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={16} height={16} />
              <Skeleton variant="text" width="30%" height={12} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default VolumeCardSkeleton;
