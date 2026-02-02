import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from "react-i18next";


const Community = ({ data }) => {
    const { t } = useTranslation();
    const levels = [
        {
            label: (t("AiTools.CommunitySentiment.support")),
            value: data?.support,
            color: "neutral.brightGreen",
        },
        {
            label: (t("AiTools.CommunitySentiment.resistance")),
            value: data?.resistance,
            color: "neutral.pink",
        },
    ];
    const longPercentValue = Number(
        String(data?.longPercent || "0").replace("%", "")
    );

    const shortPercentValue = Number(
        String(data?.shortPercent || "0").replace("%", "")
    );

    return (
        <Box mt={3} >
            <Box>
                <Typography color={"white"} mt={3} fontSize={"22px"} fontWeight={600}>
                    {t("AiTools.CommunitySentiment.communitySentimentHeading")}
                </Typography>
            </Box>
            <Box
                position="relative"
                width="100%"
                height="50px"
                borderRadius="30px"
                display="flex"
                overflow="hidden"
                mt={2}
            >
                {/* Long Bar */}
                <Box
                    width={`${longPercentValue}%`}
                    height="100%"
                    bgcolor="#0B2015"
                    borderRadius="30px 0 0 30px"
                    transition="width 0.3s ease"
                />

                {/* Short Bar */}
                <Box
                    width={`${shortPercentValue}%`}
                    height="100%"
                    bgcolor="#8B0000"
                    borderRadius="0 30px 30px 0"
                    transition="width 0.3s ease"
                />

                {/* Long Text (CENTER OF LONG BAR) */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `${longPercentValue / 2}%`,
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#4CAF50",
                        whiteSpace: "nowrap",
                    }}
                >
                    {longPercentValue}%
                </Typography>

                {/* Short Text (CENTER OF SHORT BAR) */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `${longPercentValue + shortPercentValue / 2}%`,
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#FF6666",
                        whiteSpace: "nowrap",
                    }}
                >
                    {shortPercentValue}%
                </Typography>
            </Box>



            <Box sx={{ p: { xs: 0, md: 0 }, borderRadius: 2, marginTop: 2, }}>
                <Grid container spacing={2}>
                    {levels.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                            <Box
                                backgroundColor="neutral.darkGrey"
                                borderRadius="10px"
                                p={2}
                            >
                                <Typography fontSize={"20px"} color='neutral.Snowwhite' fontWeight={600}>
                                    {item.label}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: item.color,
                                        fontSize: "15px",
                                    }}
                                >
                                    {item.value}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>


        </Box >
    )
}
export default Community
