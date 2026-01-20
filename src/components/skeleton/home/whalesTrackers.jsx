import { Box, Grid, Skeleton, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const WhalesTrackersSkeleton = () => {
    return (
        <>
            {/* Header */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Skeleton
                    variant="text"
                    width={200}
                    height={35}
                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                />

                <IconButton
                    size="small"
                    sx={{
                        bgcolor: "rgba(255, 76, 76, 0.6)",
                        color: "#fff",
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Cards */}
            <Grid container spacing={2} mt="20px">
                {[1, 2, 3, 4].map((_, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                            }}
                        >
                            {/* Top row */}
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Skeleton
                                    variant="text"
                                    width="40%"
                                    height={20}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />
                                <Skeleton
                                    variant="text"
                                    width={60}
                                    height={20}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />
                            </Grid>

                            {/* Action text */}
                            <Box mt={2}>
                                <Skeleton
                                    variant="text"
                                    width="70%"
                                    height={22}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="40%"
                                    height={16}
                                    sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                                />
                            </Box>

                            {/* Bottom row */}
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                mt={2}
                            >
                                <Skeleton
                                    variant="text"
                                    width="20%"
                                    height={22}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />

                                <Skeleton
                                    variant="text"
                                    width="25%"
                                    height={22}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default WhalesTrackersSkeleton;
