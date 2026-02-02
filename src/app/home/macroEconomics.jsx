import { Box, Typography } from "@mui/material";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
import Macroecomic from "../../assets/icons/warning-image.svg"
import { useTranslation } from "react-i18next";
const MacroEconomics = ({ data }) => {
    const { t } = useTranslation();
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
            value: `${t("MarketOutlook.Macroeconomics.forecast")}: ${data?.unemploymentRate?.forecast} ${data?.unemploymentRate?.previous}`,
            description: ` ${t("MarketOutlook.Macroeconomics.impact")} : ${data?.unemploymentRate?.impact}`,
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
                    {t("MarketOutlook.Macroeconomics.macroEconomicTitle")}
                </Typography>
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