import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";

const MacroeconomicsSkeleton = ({ rows = 2 }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1C1C1C", // Skeleton me dark background
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      {/* Title Skeleton */}
      <Skeleton variant="text" width={120} height={24} mb={3} />

      <Box display="flex" flexDirection="column" gap={3}>
        {Array.from({ length: rows }).map((_, index) => (
          <Box key={index}>
            {/* Report Title */}
            <Skeleton variant="text" width={100} height={16} mb={1.5} />

            {/* Forecast & Impact */}
            <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
              <Skeleton variant="text" width={80} height={12} />
              <Skeleton variant="text" width={60} height={12} />
            </Box>

            {/* Summary Box */}
            <Box
              sx={{
                backgroundColor: "#2a2a2a",
                borderRadius: "16px",
                padding: "9px",
                display: "flex",
                alignItems: "flex-start",
                gap: 0.5,
              }}
            >
              {/* Icon placeholder */}
              <Skeleton variant="circular" width={20} height={20} />
              {/* Description placeholder */}
              <Skeleton variant="text" width="80%" height={12} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MacroeconomicsSkeleton;
