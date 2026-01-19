import { Box, Grid } from "@mui/material";


const TopCoins = () => {
    return (
        <Grid item size={{ xs: 12, md: 6 }}>
            <Box sx={widgetStyle}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Typography
                        variant="h6"
                        color="neutral.Snowwhite"
                        fontSize="25px"
                        fontWeight={600}
                    >
                        Top coins
                    </Typography>

                    <IconButton
                        size="small"
                        sx={{
                            color: "neutral.Snowwhite",
                            bgcolor: "neutral.vermilionOrange",
                            "&:hover": {
                                bgcolor: "neutral.vermilionOrange",
                            },
                        }}
                        onClick={() => {
                            console.log("Macroeconomics closed");
                            // yahan hide / close logic add kar sakte ho
                        }}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Grid container spacing={2}>
                    {/* LEFT COLUMN - 5 coins */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {leftCoins.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                p={1}
                                sx={{
                                    background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center">
                                    <img src={item.icon} alt={item.title} style={{ width: "40px", height: "40px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="14px" fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item.symbol}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Center: Graph */}
                                <Box>
                                    <img src={item.graphyIcon} style={{ width: "80px", height: "30px" }} alt="graph" />
                                </Box>

                                {/* Right: Price + Percentage */}
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="14px" fontWeight={600}>
                                        {item.value1}
                                    </Typography>
                                    <Typography
                                        color={item.value2.startsWith('+') ? '#00D9A3' : '#FF4444'}
                                        fontSize="12px"
                                    >
                                        {item.value2}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {rightCoins.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                p={1.2}
                                sx={{
                                    background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center">
                                    <img src={item.icon} alt={item.title} style={{ width: "40px", height: "40px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="14px" fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item.symbol}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <img src={item.graphyIcon} style={{ width: "80px", height: "30px" }} alt="graph" />
                                </Box>
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="14px" fontWeight={600}>
                                        {item.value1}
                                    </Typography>
                                    <Typography
                                        color={item.value2.startsWith('+') ? '#00D9A3' : '#FF4444'}
                                        fontSize="12px"
                                    >
                                        {item.value2}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default TopCoins