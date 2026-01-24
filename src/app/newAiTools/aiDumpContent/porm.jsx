import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import PumpScoreCard from '../../../components/pumpScoreCard'
import ProfitText from '../../../components/profitText'
import TradingCard from '../../../components/tradeCard'
import VolumeProfitCard from '../../../components/volumeProfitCard'
import DynamicBox from '../../../components/dynamicBox'
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg"

const DumpPornContent = () => {
    const tradingCarddata = [
        {
            title: "TP1: -52.2%",
            price: "$1.91",
            time: "8-24 hours"
        },
        {
            title: "TP2: -75.0%",
            price: "$0.997023",
            time: "1-3 days"
        },
        {
            title: "TP3: -80.0%",
            price: "$0.797619",
            time: "1-3 days"
        }
    ]
    const volumeCardData = [
        {
            name: "VAL",
            value: "$3.97"
        },
        {
            name: "POC",
            value: "$4.07",
            border: "1px solid rgba(255, 255, 255, 1)",
            bgcolor: "rgba(29, 29, 29, 1)"
        },
        {
            name: "VAH",
            value: "$4.53"
        },
    ]
    const fundingData = [
        {
            title: "Open Interest",
            value: "+128.2% 24h",
            color: "neutral.brightGreen"
        },
        {
            title: "Funding Rate",
            value: "-0.6595%",
            color: "neutral.cadetGrey"

        },
        {
            title: "Liquidation Zones",
            rightValue: "Short: 9",
            leftValue: "Long: 9",
            rightColor: "rgba(62, 221, 135, 1)",
            leftColor: "white"
        }
    ]
    const factorData = [
        {
            title: "Price Decline 24h:(+25.0)"
        }
        ,
        {
            title: "Volume Spike on Drop:(+0.0)"
        },
        {
            title: "Funding Rate:(+2.0)"
        }
        ,
        {
            title: "Long Liq Zones:(+3.0)"
        },
    ]
    const pumpScore = [
        {
            title: "BBXN",
            btnText: "VERY HIGN",
            value: "$0.01752",
            number: "91",
            score: "Dump Score",
            potential: "290% potential"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} p={4} borderRadius={"10px"} border={"2px solid rgba(57, 57, 57, 1)"} mt={3}>
            <Box>
                {
                    pumpScore.map((item) => (
                        <PumpScoreCard
                            title={item.title}
                            value={item.value}
                            btnText={item.btnText}
                            number={item.number}
                            PumpScore={item.score}
                            potential={item.potential}
                            icon={ArrowDownIcon}
                            btnBackground={"text.brightRed"}
                            numberTextColor={"text.brightRed"}
                            bgColor={"rgba(239, 68, 68, 0.15)"}
                            potentialTextColor={"text.carmineRed"}

                        />
                    ))
                }
            </Box>
            <Box>
                <ProfitText />
            </Box>
            <Box display={"flex"} gap={"50px"}>
                <Box>
                    <Typography color='neutral.cadetGrey'>
                        Entry Zone:
                    </Typography>
                    <Typography color='text.almostWhite' fontWeight={600}>
                        $3.93 - $4.05
                    </Typography>

                </Box >
                <Box>
                    <Typography color='neutral.cadetGrey'>
                        Stop Loss (+2.0%):
                    </Typography>
                    <Typography color='text.almostWhite' fontWeight={600}>
                        $4.07
                    </Typography>

                </Box >
            </Box>
            <Box mt={2}>
                <Typography color='neutral.cadetGrey' fontSize={"14px"}>
                    Take Profits:
                </Typography>
                <Box>
                    <Grid container spacing={1}>

                        {
                            tradingCarddata.map((item) => (
                                <Grid size={{ xs: 12, sm: 4 }}>
                                    <TradingCard
                                        title={item.title}
                                        value={item.price}
                                        time={item.time}

                                    />
                                </Grid>
                            ))
                        }

                    </Grid>
                </Box>
            </Box>
            <Box display={"flex"} gap={"50px"} mt={2}>
                <Box>
                    <Typography color='neutral.cadetGrey'>
                        Risk:Reward:
                    </Typography>
                    <Typography color='neutral.brightGreen' fontWeight={600}>
                        26.10:1
                    </Typography>

                </Box >
                <Box>
                    <Typography color='neutral.cadetGrey'>
                        Volatility:
                    </Typography>
                    <Typography color='text.almostWhite' fontWeight={600}>
                        EXTREME
                    </Typography>

                </Box >
            </Box>
            <Box bgcolor={"background.almostBlack"} p={1.5} borderRadius={"8px"} mt={2}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"14px"} fontWeight={600}>
                        Volume Profile:
                    </Typography>
                    <Box mt={2}>
                        <Grid container spacing={0}>
                            {volumeCardData.map((item) => (
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <VolumeProfitCard
                                        name={item.name}
                                        value={item.value}
                                        border={item.border}
                                        backgroundColor={item.bgcolor}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

            </Box>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite' fontWeight={600}>
                    Dump Patterns:
                </Typography>
                <Typography color='neutral.Snowwhite'>
                    • Resistance deviation → downward reversal, bearish signal
                </Typography>
            </Box>
            <Box mt={3}>
                <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                    Detailed Analysis:
                </Typography>
                <Box>
                    <Grid container spacing={1}>
                        {fundingData.map((item, index) => (
                            <Grid key={index} size={{ xs: 12, md: 6 }}>
                                <DynamicBox
                                    title={item.title}
                                    value={item.value}
                                    leftValue={item.leftValue}
                                    rightValue={item.rightValue}
                                    valueColor={item.color}
                                    rightColor={item.rightColor}
                                    leftColor={item.leftColor}
                                    fontValue={"20px"}
                                    fontWeightValue={700}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box mt={3}>
                    <Typography color='neutral.cadetGrey' fontSize={"15px"}>
                        Factors:
                    </Typography>
                    <Box display="flex" gap="10px" flexWrap="wrap" mt={2} >
                        {factorData.map((item, index) => (
                            <Box bgcolor={"background.almostBlack"} p={1} width={"235px"} borderRadius={"7px"}>
                                <Typography key={index} color='text.almostWhite' fontWeight={400}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default DumpPornContent