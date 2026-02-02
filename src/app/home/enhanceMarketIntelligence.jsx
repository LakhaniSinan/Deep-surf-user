import { Box, Grid, Typography } from '@mui/material'
import { useTranslation } from "react-i18next";
const EnhanceMarketIntelligence = ({ data }) => {
    const { t } = useTranslation();
    const marketStats = [
        {
            title: (t("AiTools.MarketIntelligence.fundingRate")),
            value: data?.fundingRate?.value,
            description: data?.fundingRate?.sentiment,
        },
        {
            title: (t("AiTools.MarketIntelligence.lsRatio")),
            value: ` ${data?.longShortRatio?.value}%`,
            description: data?.longShortRatio?.sentiment,
        },
        {
            title: (t("AiTools.MarketIntelligence.volume24h")),
            value: data?.volume24h?.value,
            description: data?.volume24h?.description,
        },
        {
            title: (t("AiTools.MarketIntelligence.liquidityRisk")),
            value: data?.liquidationRisk?.long,
            value1: data?.liquidationRisk?.short,
            description: data?.liquidationRisk?.zones,
        },
    ];
    return (
        <Box mt={1.5}>
            <Typography color='neutral.Snowwhite' fontSize={"25px"} fontWeight={600}>
                {t("AiTools.MarketIntelligence.enhancedMarketIntelligence")}{" "}
            </Typography>
            <Grid container spacing={2} marginTop={2}>
                {marketStats.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Box key={index} mb={1} p={1.8} bgcolor="neutral.darkGrey" borderRadius={"20px"}>
                            <Typography fontWeight={550} color="neutral.Snowwhite">
                                {item.title}
                            </Typography>
                            <Typography
                                variant="h5"
                                mt="10px"
                                sx={{
                                    color: item?.value?.toString()?.includes("-")
                                        ? "text.errorColor"
                                        : "text.greenColor",
                                }}
                            >
                                {item.value} {item.value1}
                            </Typography>
                            <Typography
                                variant="h6"
                                mt="12px"
                                fontSize={"16px"}
                                fontWeight={400}
                                color={
                                    item.description === "Neutral"
                                        ? "neutral.brightYellow"
                                        : item.description === "Heavily long"
                                            ? "neutral.brightGreen"
                                            : "neutral.Snowwhite"
                                }
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default EnhanceMarketIntelligence
