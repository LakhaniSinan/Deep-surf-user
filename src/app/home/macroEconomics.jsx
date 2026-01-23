import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
import Macroecomic from "../../assets/icons/warning-image.svg"
const MacroEconomics = ({ data }) => {
    console.log("fuurgirgurigfuirgurgr", data?.cpiReport?.title);

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
            title: data?.unemploymentRate?.title,
            value: `Forecast: ${data?.unemploymentRate?.forecast} ${data?.unemploymentRate?.previous}`,
            description: ` impact : ${data?.unemploymentRate?.impact}`,
            icon: StarIcon,
            heading: data?.unemploymentRate?.description,
        },
        {
            title: data?.cpiReport?.title,
            value: `Forecast: ${data?.cpiReport?.forecast} ${data?.cpiReport?.previous}`,
            description: ` impact : ${data?.cpiReport?.impact}`,
            icon: Macroecomic,
            heading: data?.cpiReport?.description,
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
                        mt={1.8}
                        p={1.3}
                        borderRadius="15px"
                    >
                        <Box>
                            <img src={item.icon} alt="icon" />
                        </Box>
                        <Box>
                            <Typography color="neutral.Snowwhite" fontSize="15px">
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