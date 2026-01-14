import React from "react";
import { Box, Grid, Card, Skeleton } from "@mui/material";

const MarkDataMetricSkeleton = () => {
    const cardStyle = {
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "14px",
        height: "150px",
    };

    return (
        <Box backgroundColor="#161616" borderRadius="20px" padding="25px" mt="20px">
            <Skeleton width={250} height={30} />

            {/* Market Metrics */}
            <Box mt={3}>
                <Grid container spacing={2}>
                    {[...Array(5)].map((_, idx) => (
                        <Grid item size={{ xs: 12, sm: 6, md: idx === 0 ? 3 : idx === 1 ? 2 : idx === 2 || idx === 3 ? 2.5 : 2 }} key={idx}>
                            <Card sx={cardStyle}>
                                <Skeleton width="40%" height={20} sx={{ mb: 1 }} />
                                <Skeleton width="60%" height={30} sx={{ mb: 1 }} />
                                <Skeleton variant="rectangular" width="100%" height={60} sx={{ borderRadius: "8px" }} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Top Movers */}
            <Box mt={3}>
                <Skeleton width={200} height={25} />
                <Grid container spacing={2} mt={1}>
                    {[...Array(5)].map((_, idx) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={idx}>
                            <Box
                                sx={{
                                    backgroundColor: "#1C1C1C",
                                    padding: "16px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <Skeleton width="30%" height={20} />
                                <Skeleton width="20%" height={20} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Risk Calendar */}
            <Box mt={3}>
                <Skeleton width={180} height={25} />
                <Grid container spacing={2} mt={1}>
                    {[...Array(2)].map((_, idx) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={idx}>
                            <Skeleton width="100%" height={60} sx={{ borderRadius: "15px" }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Whales Tracker */}
            <Box mt={3}>
                <Skeleton width={180} height={25} />
                <Grid container spacing={2} mt={1}>
                    {[...Array(3)].map((_, idx) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={idx}>
                            <Skeleton width="100%" height={120} sx={{ borderRadius: "12px" }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default MarkDataMetricSkeleton;
