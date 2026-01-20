import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
const MacroEconomics = () => {
    const widgetStyle = {
        background: "#151515",
        borderRadius: "16px",
        // padding: "16px",
        height: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };
    const macroData = [
        {
            title: "US Unemployment Rate Thursday, February 5 at 07:00 PM",
            value: "Forecast: 4.4% (previous 4.5%)",
            description: "Impact: Positive for risk assets",
            icon: StarIcon,
            heading: "Unemployment decreased from 4.5% to 4.4%, indicating labor market strength.",
        },
        {
            title: "US CPI Data Friday, February 13 at 06:30 PM",
            value: "Forecast: 2.8% (previous 2.9%)",
            description: "Impact: Moderately positive for risk assets",
            icon: StarIcon,
            heading: "Inflation cooling down, supporting potential Fed rate cuts.",
        },
    ];
    return (
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

                    {/* <IconButton
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
                    </IconButton> */}
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
    )
}

export default MacroEconomics