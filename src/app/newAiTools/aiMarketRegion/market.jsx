import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import TradingCard from '../../../components/tradeCard'
import AiPumpScannerIcon from "../../../assets/icons/ai-pump-scanner.svg"
import TransitionDitector from './transitionDitector'
import StrategyRecomendation from './strategy'

const Market = () => {
    const tardingCardData = [
        {
            name: "BTC Price",
            value: "$94,536",
            percentage: "-2.14%",
            titleColor: "neutral.cadetGrey",
            valueColor: "text.almostWhite",
            perColor: "text.carmineRed"
        },
        {
            name: "Funding Rate",
            value: "+0.0025%",
            percentage: "Longs Pay",
            titleColor: "neutral.cadetGrey",
            valueColor: "neutral.cadetGrey",
            perColor: "neutral.cadetGrey"

        },
        {
            name: "RSI (14)",
            value: "64",
            percentage: "Neutral",
            titleColor: "neutral.cadetGrey",
            valueColor: "text.almostWhite",
            perColor: "neutral.cadetGrey"

        },
        {
            name: "Open Interest",
            value: "$0.00B",
            percentage: "Total OI",
            titleColor: "neutral.cadetGrey",
            valueColor: "text.almostWhite",
            perColor: "neutral.cadetGrey"
        },
    ]

    const localTradingdata = [
        {
            time: "4H",
            decription: "DISTRIBUTION",
            percentage: "70%",
            bodrer: "1px solid rgba(239, 68, 68, 1)",
            backgroundColor: "rgba(239, 68, 68, 0.13)",
            decritionTextColor: "rgba(239, 68, 68, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
        {
            time: "8H",
            decription: "MARKUP",
            percentage: "80%",
            bodrer: "1px solid rgba(16, 185, 129, 1)",
            backgroundColor: "rgba(41, 65, 52, 1)",
            decritionTextColor: "rgba(255, 255, 255, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
        {
            time: "1D",
            decription: "MARKUP",
            percentage: "100%",
            bodrer: "1px solid rgba(16, 185, 129, 1)",
            backgroundColor: "rgba(41, 65, 52, 1)",
            decritionTextColor: "rgba(255, 255, 255, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },

    ]
    const globalTadingdata = [
        {
            time: "4H",
            decription: "UNKN",
            percentage: "70%",
            bodrer: "1px solid rgba(107, 114, 128, 1)",
            backgroundColor: "rgba(107, 114, 128, 0.13)",
            decritionTextColor: "rgba(107, 114, 128, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
        {
            time: "8H",
            decription: "MARK",
            percentage: "80%",
            bodrer: "1px solid rgba(16, 185, 129, 1)",
            backgroundColor: "rgba(41, 65, 52, 1)",
            decritionTextColor: "rgba(255, 255, 255, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
        {
            time: "1D",
            decription: "MARK",
            percentage: "100%",
            bodrer: "1px solid rgba(16, 185, 129, 1)",
            backgroundColor: "rgba(41, 65, 52, 1)",
            decritionTextColor: "rgba(255, 255, 255, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
        {
            time: "6M",
            decription: "MARK",
            percentage: "100%",
            bodrer: "1px solid rgba(16, 185, 129, 1)",
            backgroundColor: "rgba(41, 65, 52, 1)",
            decritionTextColor: "rgba(255, 255, 255, 1)",
            timeTittle: "neutral.cadetGrey",
            percentageColor: "neutral.cadetGrey"
        },
    ]
    return (
        <Box>
            <Grid container spacing={1}>
                {tardingCardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 3 }}>
                        <Box>
                            <TradingCard
                                title={item.name}
                                value={item.value}
                                time={item.percentage}
                                titleColor={item.titleColor}
                                valueColor={item.valueColor}
                                timeColor={item.perColor}
                                padding={"20px"}
                                titleFontSize={"12px"}
                                valueFontSize={"26px"}
                                valueFontWeight={600}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Box>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"background.almostBlack"} borderRadius={"10px"} p={2} mt={2}>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"18px"}>
                                    LOCAL REGIME (short-term)
                                </Typography>
                            </Box>
                            <Box textAlign={"center"} mt={3}>
                                <Box>
                                    <img src={AiPumpScannerIcon} style={{ width: "60px" }} />
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"25px"}>
                                        MARKUP
                                    </Typography>
                                    <Typography fontSize={"13px"} color='neutral.cadetGrey'>
                                        Alignment: 67%
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Grid container spacing={1}>
                                    {localTradingdata.map((item) => (
                                        <Grid size={{ xs: 12, md: 4 }}>

                                            <Box bgcolor={item.backgroundColor} border={item.bodrer} textAlign={"center"} borderRadius={"10px"} p={1} mt={2}>
                                                <Box>
                                                    <Typography color={item.timeTittle} fontSize={"12px"} fontWeight={400}>
                                                        {item.time}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.decritionTextColor} fontSize={"15px"} fontWeight={600}>
                                                        {item.decription}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.percentageColor} fontSize={"12px"} fontWeight={400}>
                                                        {item.percentage}
                                                    </Typography>
                                                </Box>

                                            </Box>
                                        </Grid>

                                    ))
                                    }


                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"background.almostBlack"} borderRadius={"10px"} p={2} mt={2}>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"18px"}>
                                    GLOBAL REGIME (long-term)
                                </Typography>
                            </Box>
                            <Box textAlign={"center"} mt={3}>
                                <Box>
                                    <img src={AiPumpScannerIcon} style={{ width: "60px" }} />
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"25px"}>
                                        MARKUP
                                    </Typography>
                                    <Typography fontSize={"13px"} color='neutral.cadetGrey'>
                                        Alignment: 67%
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Grid container spacing={1}>
                                    {globalTadingdata.map((item) => (
                                        <Grid size={{ xs: 12, md: 3 }}>

                                            <Box bgcolor={item.backgroundColor} border={item.bodrer} textAlign={"center"} borderRadius={"10px"} p={1} mt={2}>
                                                <Box>
                                                    <Typography color={item.timeTittle} fontSize={"12px"} fontWeight={400}>
                                                        {item.time}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.decritionTextColor} fontSize={"13px"} fontWeight={600}>
                                                        {item.decription}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.percentageColor} fontSize={"12px"} fontWeight={400}>
                                                        {item.percentage}
                                                    </Typography>
                                                </Box>

                                            </Box>
                                        </Grid>

                                    ))
                                    }
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <TransitionDitector />
                <StrategyRecomendation />
            </Box>
        </Box>


    )
}

export default Market