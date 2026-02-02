import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderText from '../../components/headerText'
import RealodIcon from "../../assets/icons/relaod-Icon.svg"
import AccordingHeader from '../../components/accordingHeader'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import CustomButton from '../../components/customButton'
import CustomCheckbox from '../../components/cutomChecked'
import TradingCard from '../../components/tradeCard'
import VolumeCard from '../../components/volumeCard'
import { useTranslation } from "react-i18next";


const HeatMap = () => {
    const { t } = useTranslation();
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    const heatMapData = [
        " 24h Volume - top coins by 24h trading volume (liquidity)",
        " 7d Volume - sustained interest over the week",
        "Volatility (ATR) - volatility = trading opportunities"
    ]
    const buttonData = [
        { id: 1, title: "24h Volume", value: "24h" },
        { id: 2, title: "7d Volume", value: "7d" },
        { id: 3, title: "Volatility", value: "volatility" },
    ];
    const handleCheckBox = (e) => {
        console.log("kfnvkfnkfnvkjfnvjgbnvkgjlvgb", e.target.value);
    }
    const data = [
        {
            symbolName: "Total coins",
            value: "50",
            symbolColor: "neutral.Snowwhite",
            valueColor: "neutral.Snowwhite",
        }
        ,
        {
            symbolName: "Average %",
            value: "-1.90%",
            symbolColor: "neutral.Snowwhite",
            valueColor: "text.dangerRed"

        },
        {
            symbolName: "Bullish",
            value: "15",
            symbolColor: "neutral.Snowwhite",
            valueColor: "neutral.lightGreen"
        },
        {
            symbolName: "Bearish",
            value: "35",
            symbolColor: "neutral.Snowwhite",
            valueColor: "text.dangerRed"
        },

    ]

    const heatMapCoinData = [
        {
            symbolName: "ALPACA",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "APEX",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        }
        ,
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "ATOM",
            value: "$2.9B",
            percentage: "-391.2%"
        },
        {
            symbolName: "ALPACA",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "APEX",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        }
        ,
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "BNB",
            value: "$2.9B",
            percentage: "391.2%"
        },
        {
            symbolName: "ATOM",
            value: "$2.9B",
            percentage: "-391.2%"
        }

    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} borderRadius={"10px"} mt={2}>
            <Box mt={2}>
                <HeaderText
                    title={"Heatmap — Volume & Volatility"}
                    icon={<img src={RealodIcon} />}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={2} mt={4}>
                <Box>
                    <HeaderText
                        title={"How to use Heatmap:"}
                        icon={<img src={ArrowBtn} />}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"15px"}
                        titleFontWeight={400}
                    />
                </Box>
                <Box>
                    {heatMapData.map((item, index) => (
                        <AccordingHeader tittle={item} key={index} />
                    ))}
                </Box>
                <Box mt={3}>
                    <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                        Tip: High volume + high volatility = perfect for scalping and day trading
                    </Typography>
                </Box>
            </Box>
            <Box
                display={"flex"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap={"15px"}
                marginTop={"40px"}
            >
                {buttonData.map((btn) => (
                    <CustomButton
                        key={btn.id}
                        title={btn.title}
                        fullWidth
                        width={"100%"}
                        onClick={() => setSelectedTimeframe(btn.value)}
                        sx={{
                            backgroundColor:
                                selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
                            color: selectedTimeframe === btn.value ? "#000" : "rgba(156, 158, 163, 1)",
                            borderRadius: "12px",
                            border: "1px solid rgba(117, 117, 117, 1)",
                        }}
                    />
                ))}
            </Box>
            <Box display={"flex"} gap={"20px"} mt={3} alignItems={'center'}>
                <Box>
                    <Typography color='neutral.Snowwhite'>
                        Filters:
                    </Typography>
                </Box>
                <Box>
                    <CustomCheckbox
                        label="Top-50 only"
                        onChange={handleCheckBox}
                        color={"rgba(255, 255, 255, 0.5)"}
                    />
                    <CustomCheckbox
                        label="High volume (>$100M)"
                        onChange={handleCheckBox}
                        color={"rgba(255, 255, 255, 0.5)"}
                    />
                </Box>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    {data.map((item) => (
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={1.5} mt={3}>
                                <TradingCard
                                    title={item.symbolName}
                                    value={item.value}
                                    titleColor={item.symbolColor}
                                    valueColor={item.valueColor}
                                    titleFontSize={"20px"}
                                    titleFontWeight={400}
                                    valueFontSize={"18px"}
                                    valueFontWeight={600}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>
            <Box mt={3}>
                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={500}>
                    Top 20 by 24h volume:
                </Typography>
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    {heatMapCoinData.map((item) => (
                        <Grid item size={{ xs: 12, md: 1.2 }}>
                            <VolumeCard
                                name={item.symbolName}
                                volume={item.value}
                                percentChange={item.percentage}
                                isPositive={false}
                            />
                        </Grid>
                    ))}

                </Grid>
            </Box>

        </Box >
    )
}

export default HeatMap