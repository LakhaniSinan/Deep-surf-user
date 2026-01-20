import { Box, Grid, Skeleton, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CryptoEventsSkeleton = () => {
    return (
        <Box
            backgroundColor="rgba(22, 22, 22, 1)"
            borderRadius="20px"
            padding="16px"
        >
            {/* Header */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Skeleton
                    variant="text"
                    width={220}
                    height={35}
                    sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
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

            {/* Title & description */}
            <Box mt={1}>
                <Skeleton
                    variant="text"
                    width="60%"
                    height={24}
                    sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
                />
                <Skeleton
                    variant="text"
                    width="100%"
                    height={18}
                    sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                />
                <Skeleton
                    variant="text"
                    width="80%"
                    height={16}
                    sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                />
            </Box>

            {/* Scenarios */}
            <Box mt={2}>
                <Grid container spacing={2}>
                    {[1, 2, 3].map((item) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={item}>
                            <Box
                                backgroundColor="rgba(28, 28, 28, 1)"
                                p={2}
                                borderRadius="15px"
                            >
                                <Skeleton
                                    variant="text"
                                    width="40%"
                                    height={22}
                                    sx={{ bgcolor: "rgba(255,255,255,0.12)" }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="100%"
                                    height={18}
                                    sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="90%"
                                    height={18}
                                    sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Best entry */}
            <Box mt={2}>
                <Skeleton
                    variant="text"
                    width="70%"
                    height={20}
                    sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
                />
            </Box>
        </Box>
    );
};

export default CryptoEventsSkeleton;
