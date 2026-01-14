import React from "react";
import { Box, Grid, Paper, Skeleton } from "@mui/material";

const TradingSkeleton = () => {
    return (
        <Box backgroundColor="#161616" borderRadius="20px" padding="25px" mt="20px">
            {/* Title */}
            <Skeleton width={250} height={25} />

            {/* LONG and SHORT setups */}
            <Grid container spacing={2} mt={2}>
                {[1, 2].map((_, idx) => (
                    <Grid item szie={{ xs: 12, md: 6 }} key={idx}>
                        <Box bgcolor="#1C1C1C" p={2} borderRadius="20px">
                            <Skeleton width="40%" height={20} />
                            {[1, 2, 3].map((__, i) => (
                                <Box display="flex" gap="3px" mt={i === 0 ? 1 : 0} key={i}>
                                    <Skeleton width="20%" height={15} />
                                    <Skeleton width="70%" height={15} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Risk management */}
            <Box backgroundColor="#1C1C1C" p={2} borderRadius="20px" mt={2}>
                <Grid container spacing={1}>
                    <Grid item size={{ xs: 12, md: 5 }} >
                        <Skeleton width="120px" height={35} />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Skeleton width="100%" height={20} />
                    </Grid>
                </Grid>
            </Box>

            {/* Key Levels */}
            <Box mt="20px">
                <Skeleton width={150} height={25} />
                <Grid container spacing={2} mt={2}>
                    {[1, 2, 3].map((_, idx) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                            <Paper
                                sx={{
                                    background: "#1C1C1C",
                                    p: 2,
                                    borderRadius: "14px",
                                    height: "100%",
                                }}
                                elevation={3}
                            >
                                <Skeleton variant="circular" width={24} height={24} />
                                <Skeleton width="60%" height={20} sx={{ mt: 1, mb: 1 }} />

                                <Grid container spacing={2}>
                                    {[1, 2].map((__, i) => (
                                        <Grid item size={{ xs: 6 }} key={i}>
                                            <Skeleton width="70%" height={15} />
                                            <Skeleton width="90%" height={15} sx={{ mt: 0.5 }} />
                                            <Skeleton width="50%" height={15} sx={{ mt: 0.5 }} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* AI Verdict */}
            <Box backgroundColor="#1C1C1C" borderRadius="20px" p={2} mt={4}>
                <Grid container spacing={1}>
                    <Grid item szie={{ xs: 12, md: 4 }} >
                        <Skeleton width="120px" height={35} />
                    </Grid>
                    <Grid item szie={{ xs: 12, md: 8 }} mt={0.5}>
                        <Skeleton width="100%" height={50} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default TradingSkeleton;
