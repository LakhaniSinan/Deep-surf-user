import { Box, Grid } from "@mui/material";

const MacroEconomics = () => {
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
                        Macroeconomics
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

                {macroData.map((item, index) => (
                    <Box key={index} mb={3}>
                        <Typography fontSize="15px" fontWeight={700} color="neutral.Snowwhite">
                            {item.title}
                        </Typography>
                        <Typography mt={1} fontSize="12px" color="neutral.Snowwhite">
                            {item.value}
                        </Typography>
                        <Typography fontSize="12px" color="neutral.Snowwhite">
                            {item.description}
                        </Typography>
                        <Box
                            bgcolor="rgba(36, 36, 36, 1)"
                            display="flex"
                            gap="8px"
                            mt={2}
                            p={1.2}
                            borderRadius="15px"
                            alignItems="center"
                        >
                            <Box>
                                <img src={item.icon} alt="icon" />
                            </Box>
                            <Box>
                                <Typography color="neutral.Snowwhite" fontSize="14px">
                                    {item.heading}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Grid>
    )
}

export default MacroEconomics