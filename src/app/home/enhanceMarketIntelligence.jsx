import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const EnhanceMarketIntelligence = ({ data }) => {
    console.log("fufgfgrfgurfgurfurfgurfgurf", data);

    const marketStats = [
        {
            title: "Funding Rate",
            value: "-0.005%",
            description: "Neutral",
        },
        {
            title: "L/S Ratio",
            value: "2.26",
            description: "Heavily long",
        },
        {
            title: "24h Volume",
            value: "$31.1B",
            description: "Top 0% | Vol: 11.44%",
        },
        {
            title: "Liq. Risk",
            value: "2.0%",
            value1: "2.0%",
            description: "Nearest zones",
        },
    ];
    return (
        <Box mt={1.5}>
            <Typography color='neutral.Snowwhite' fontSize={"22px"}>
                Enhanced Market Intelligence
            </Typography>
            <Grid container spacing={2} marginTop={2}>
                {marketStats.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Box key={index} mb={2} p={2} bgcolor="neutral.myGrey" borderRadius={2}>
                            <Typography variant="body2" color="neutral.Snowwhite">
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
