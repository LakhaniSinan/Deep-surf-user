import { Box, Typography, Skeleton } from "@mui/material";
import React from "react";

const AiMarketAnalysisSkeleton = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
            mt={3}
        >
            {/* Left side skeleton */}
            <Box mb={{ xs: 2, md: 0 }}>
                <Skeleton variant="text" width={120} height={20} />
                <Skeleton variant="text" width={250} height={15} sx={{ mt: 1 }} />
                <Skeleton variant="text" width={200} height={15} sx={{ mt: 0.5 }} />
            </Box>

            {/* Right side button skeleton */}
            <Box>
                <Skeleton
                    variant="rectangular"
                    width={{ xs: "100%", md: 120 }}
                    height={40}
                    sx={{ borderRadius: "20px", mt: { xs: 2, md: 3 } }}
                />
            </Box>
        </Box>
    );
};

export default AiMarketAnalysisSkeleton;
