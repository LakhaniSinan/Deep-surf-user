import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../../components/customInput'
import TradingCard from '../../components/tradeCard'
import { index } from 'd3'
import AccordingHeader from '../../components/accordingHeader'

const VolalityAnalysis = () => {
    const volatilityData = [
        {
            time: "15m",
            percentage: "0.34%",
            name: "Низкая",
            timeColor: "neutral.Snowwhite",
            percenColor: "neutral.Snowwhite",
            nameColor: "neutral.vermilionOrange"
        }
        ,
        {
            time: "1h",
            percentage: "0.59%",
            name: "Низкая",
            timeColor: "neutral.Snowwhite",
            percenColor: "neutral.Snowwhite",
            nameColor: "neutral.vermilionOrange"
        },
        {
            time: "4h",
            percentage: "0.98%",
            name: "Низкая",
            timeColor: "neutral.Snowwhite",
            percenColor: "neutral.Snowwhite",
            nameColor: "neutral.vermilionOrange"
        },
        {
            time: "1d",
            percentage: "3.75%",
            name: "Высокая",
            timeColor: "neutral.Snowwhite",
            percenColor: "neutral.Snowwhite",
            nameColor: "neutral.vermilionOrange"
        }
    ]
     const data = [
        "< 1.5% = Низкая волатильность (консолидация)",
        "1.5-3% = Нормальная волатильность",
        " OI rising + price rising = strong upward trend ",
        "> 3% = Высокая волатильность (будьте осторожны со стопами)"
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={2} mt={2} borderRadius={"10px"}>
            <Box bgcolor={"neutral.darkGrey"} p={3} borderRadius={"20px"} mt={2}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                        Volatility Analysis
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 6, md: 4 }}>
                            <Box>
                                <CustomInput
                                    placeholder="ETH"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            border: "0.1px solid rgba(127, 127, 127, 1)",
                                            borderRadius: "20px",
                                        }
                                    }}
                                />
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 6, md: 1 }}>
                            <Box bgcolor={"neutral.vermilionOrange"} height={"40px"} borderRadius={"15px"} p={0.8} textAlign={"center"} width={"110px"}>
                                <Typography color='neutral.Snowwhite'>
                                    Analyze
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        {volatilityData.map((item, index) => (
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Box key={index} bgcolor={"background.charcoal"} borderRadius={"15px"} p={0.5} >
                                    <TradingCard
                                        title={item.time}
                                        value={item.percentage}
                                        time={item.name}
                                        textAlign={"left"}
                                        titleColor={item.timeColor}
                                        valueColor={item.percenColor}
                                        timeColor={item.nameColor}
                                        titleFontSize={"20px"}
                                        titleFontWeight={400}
                                        valueFontSize={"35px"}
                                        timeFontSize={"15px"}
                                    />

                                </Box>

                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box bgcolor={"background.charcoal"} borderRadius={"40px"} mt={2} p={3}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                            ATR (Average True Range) показывает среднюю волатильность.
                        </Typography>
                    </Box>
                    <Box>
                        {data.map((item) => (
                            <AccordingHeader tittle={item} fontSize={"12px"} />
                        ))}
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default VolalityAnalysis