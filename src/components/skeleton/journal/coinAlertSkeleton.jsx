import React from "react";
import { Grid, Paper, Skeleton, Box, Typography } from "@mui/material";

const CoinAlertSkeleton = () => {
    return (
        <>
            {Array.from(new Array(4)).map((_, index) => (
                <Grid item size={{ xs: 12, sm: 6, md: 3 }}  key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor: "#1C1C1C",
                            borderRadius: "12px",
                            p: 2,
                        }}
                    >
                        {/* Ticker Skeleton */}
                        <Skeleton variant="text" width="60%" height={28} />

                        {/* Icons Row Skeleton */}
                        <Box display="flex" justifyContent="flex-start" gap="10px" mt={1}>
                            <Skeleton variant="circular" width={24} height={24} />
                            <Skeleton variant="circular" width={24} height={24} />
                        </Box>

                        {/* Price Skeleton */}
                        <Skeleton variant="text" width="80%" height={20} sx={{ mt: 2 }} />

                        {/* CreatedAt Skeleton */}
                        <Skeleton variant="text" width="50%" height={20} sx={{ mt: 4 }} />
                    </Paper>
                </Grid>
            ))}
        </>
    );
};

export default CoinAlertSkeleton;
