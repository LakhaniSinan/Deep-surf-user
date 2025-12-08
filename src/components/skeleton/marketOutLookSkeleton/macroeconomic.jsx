import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const MacroeconomicsSkeleton = () => {
    return (
        <Box backgroundColor="#161616" borderRadius="20px" padding="25px" mt="20px">
            {/* Title */}
            <Skeleton width={200} height={25} />

            {/* Attention + Summary */}
            <Grid container spacing={1} mt={2}>
                <Grid item size={{ xs: 12 }} >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap="20px"
                        flexWrap={{ xs: "wrap", md: "nowrap" }}
                        backgroundColor="#1C1C1C"
                        padding="20px"
                        borderRadius="20px"
                    >
                        <Skeleton variant="rectangular" width={120} height={40} />
                        <Skeleton width="100%" height={20} />
                    </Box>
                </Grid>
            </Grid>

            {/* Economic Reports */}
            <Grid container spacing={2} marginTop="10px">
                {[1, 2].map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 12, md: 6 }} key={index}>
                        <Box
                            sx={{
                                color: "#fff",
                                padding: 2,
                                borderRadius: 2,
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <Skeleton width={120} height={20} />
                            <Skeleton width="80%" height={15} sx={{ mt: 1 }} />
                            <Skeleton width="60%" height={15} sx={{ mt: 1 }} />
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Market Data */}
            <Grid container spacing={2} marginTop={3}>
                {[1, 2, 3].map((item, index) => (
                    <Grid item size={{xs : 12 , sm : 12 , md  : 4}}  key={index}>
                        <Box
                            sx={{
                                color: "#fff",
                                padding: 2,
                                borderRadius: 2,
                                height: "100%",
                                width: "100%",
                                backgroundColor: "#1C1C1C",
                            }}
                        >
                            <Skeleton width="60%" height={20} />
                            <Skeleton width="90%" height={15} sx={{ mt: 1 }} />
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Action Button + Summary */}
            <Box
                backgroundColor="#1C1C1C"
                padding="20px"
                borderRadius="25px"
                mt={3}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    gap="20px"
                    flexDirection={{ xs: "column", md: "row" }}
                >
                    <Skeleton variant="rectangular" width={120} height={35} />
                    <Skeleton width="100%" height={20} />
                </Box>
            </Box>

            {/* Detailed Action Plan */}
            <Box sx={{ padding: { xs: "16px", sm: "20px" }, borderRadius: "12px" }} mt={3}>
                <Skeleton width={180} height={20} sx={{ mb: 2 }} />

                {[1, 2, 3, 4, 5].map((step, index) => (
                    <Grid container key={index} sx={{ marginBottom: "13px" }}>
                        <Box sx={{ marginRight: "20px", flexShrink: 0 }}>
                            <Skeleton variant="circular" width={14} height={14} />
                        </Box>
                        <Skeleton width="90%" height={15} />
                    </Grid>
                ))}

                <Skeleton width="100%" height={20} sx={{ mt: 3 }} />
            </Box>

            {/* Fed Speeches */}
            <Box padding="10px" mt={3}>
                <Skeleton width={120} height={25} />
                <Skeleton width="80%" height={15} sx={{ mt: 1 }} />
                <Skeleton width="90%" height={15} sx={{ mt: 1 }} />
            </Box>
        </Box>
    );
};

export default MacroeconomicsSkeleton;
