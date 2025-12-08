import React from "react";
import { Box, Grid, Paper, Skeleton } from "@mui/material";

const CryptocurrencyEventsSkeleton = () => {
    return (
        <Box backgroundColor="#161616" borderRadius="20px" padding="25px" mt="20px">
            {/* Title */}
            <Skeleton width={220} height={25} />

            {/* Event title and description */}
            <Box mt="12px">
                <Skeleton width="60%" height={20} />
                <Skeleton width="100%" height={15} sx={{ mt: 1 }} />
                <Skeleton width="80%" height={15} sx={{ mt: 0.5 }} />
            </Box>

            {/* Market Data Cards */}
            <Box mt="20px">
                <Grid container spacing={2}>
                    {[1, 2, 3].map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 12, md: 4 }} key={index}>
                            <Box
                                sx={{
                                    color: "#fff",
                                    padding: 2,
                                    borderRadius: "30px",
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: "#1C1C1C",
                                }}
                            >
                                <Skeleton width="50%" height={20} />
                                <Skeleton width="90%" height={15} sx={{ mt: 1 }} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Best Entry */}
            <Box mt="10px">
                <Skeleton width="40%" height={15} />
            </Box>

            {/* ETF Flows */}
            <Box mt="20px">
                <Skeleton width={120} height={25} />
                <Grid container spacing={2} mt={2}>
                    {[1, 2, 3].map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    backgroundColor: "#1C1C1C",
                                    borderRadius: "12px",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    minHeight: "120px",
                                }}
                            >
                                <Skeleton variant="circular" width={24} height={24} />
                                <Skeleton width="60%" height={20} sx={{ mt: 1, mb: 1 }} />
                                <Skeleton width="80%" height={15} />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Conclusion Button + Message */}
            <Box
                mt="20px"
                backgroundColor="#1C1C1C"
                padding="20px"
                borderRadius="25px"
            >
                <Box display="flex" alignItems="center" gap="20px" flexWrap="wrap">
                    <Skeleton variant="rectangular" width={120} height={35} />
                    <Skeleton width="50%" height={20} />
                </Box>
            </Box>

            {/* On-Chain Signals */}
            <Box mt="15px">
                <Skeleton width={150} height={20} />
            </Box>
            <Grid container spacing={3} mt="12px">
                {[1, 2, 3, 4].map((item, index) => (
                    <Grid item szie={{xs : 12 , md : 3}}  key={index}>
                        <Skeleton width="70%" height={20} />
                        <Skeleton width="100%" height={35} sx={{ mt: 1 }} />
                        <Skeleton width="90%" height={30} sx={{ mt: 0.5 }} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CryptocurrencyEventsSkeleton;
