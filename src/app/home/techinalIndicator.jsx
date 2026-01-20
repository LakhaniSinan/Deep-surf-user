import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const TechnicalIndicator = ({ data }) => {
    console.log("fuubvubvurbvrbvoruvrv", data);

    const indicatorData = [
        {
            title: ` RSI ${data?.rsi}`

        },
        {
            title: ` MACD ${data?.macd}`

        },
        {
            title: ` Stochastic ${data?.stochRsi}`

        },
        {
            title: `BB Position :  ${data?.bbPosition}`

        },
        {
            title: `Trend :  ${data?.trend}`

        },
        {
            title: `volume ${data?.volume}`

        },
    ]
    return (
        <Box mt={2}>
            <Box color={"neutral.Snowwhite"} fontSize={"22px"} fontWeight={600}>
                Technical Indicators
            </Box>
            <Box mt={2} >
                <Box>
                    <Grid container spacing={"5px"}>
                        {
                            indicatorData.map((item) => (
                                <Grid size={{ xs: 12, md: 4 }} sx={{ mt: "2px" }}>
                                    <Box border="0.3px solid rgba(255, 255, 255, 1)" p={1} borderRadius={"8px"}>
                                        <Typography color='neutral.neutralGray' textAlign={"center"}>
                                            {
                                                item.title
                                            }
                                        </Typography>
                                    </Box>

                                </Grid>

                            ))
                        }
                    </Grid>
                </Box>
            </Box>

        </Box >
    )
}
export default TechnicalIndicator
