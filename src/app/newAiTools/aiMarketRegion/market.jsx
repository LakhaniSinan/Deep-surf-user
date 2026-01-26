import { Box, Grid } from '@mui/material'
import React from 'react'
import TradingCard from '../../../components/tradeCard'
import TradingRegimeCard from '../../../components/tradingRegimeCard'

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
                <TradingRegimeCard />
            </Box>
        </Box>


    )
}

export default Market