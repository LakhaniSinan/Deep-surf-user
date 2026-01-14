import React from "react";
import { Box, Grid, Paper, Skeleton } from "@mui/material";

const cardStyle = {
    backgroundColor: "#111",
    padding: "20px",
    borderRadius: "16px",
    color: "white",
};

const CoinSkeleton = () => {
    return (
        <Box sx={{ background: "#000", marginTop: "25px" }}>
            <Grid container spacing={3}>
                {/* LEFT CARD SKELETON */}
                <Grid item size={{xs : 12 , sm : 6 , md : 5}} >
                    <Paper elevation={4} sx={{ ...cardStyle, height: "200px" }}>
                        <Box>
                            <Skeleton width={100} height={20} />
                            <Skeleton width={60} height={15} sx={{ mt: 1 }} />
                        </Box>
                        <Skeleton width={80} height={15} sx={{ mt: 5 }} />
                    </Paper>
                </Grid>

                {/* TOP COINS CARD SKELETON */}
                <Grid item size={{xs : 12 , sm : 6 , md  : 4}} >
                    <Paper
                        elevation={2}
                        sx={{
                            ...cardStyle,
                            height: "200px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Skeleton width={100} height={20} sx={{ mb: 1 }} />

                        {[1, 2, 3].map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    px: 1,
                                    py: 0.5,
                                    gap: { xs: 1, sm: 0 },
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Skeleton variant="circular" width={30} height={30} />
                                    <Box>
                                        <Skeleton width={60} height={15} />
                                        <Skeleton width={40} height={15} sx={{ mt: 0.5 }} />
                                    </Box>
                                </Box>
                                <Skeleton width={80} height={20} />
                                <Box sx={{ textAlign: "right" }}>
                                    <Skeleton width={50} height={15} />
                                    <Skeleton width={40} height={15} sx={{ mt: 0.5 }} />
                                </Box>
                            </Box>
                        ))}
                    </Paper>
                </Grid>

                {/* OVERALL SENTIMENT CARD SKELETON */}
                <Grid item size={{xs : 12 , sm : 6 , md : 3}}>
                    <Paper
                        elevation={4}
                        sx={{
                            ...cardStyle,
                            height: "200px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Skeleton width={120} height={20} />
                        <Skeleton width={60} height={15} sx={{ mt: 1 }} />
                        <Skeleton
                            variant="circular"
                            width={50}
                            height={50}
                            sx={{ mt: 3 }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CoinSkeleton;
