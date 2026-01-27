import { Box, Grid, MenuItem, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'
import { useState } from 'react'
import VolumeCard from '../../components/volumeCard'

const LargeTradeScanner = () => {
    const [timeframe, setTimeFrame] = useState("")

    const tradeData = [
        "Large BUY - whales buying → possible growth",
        " Large SELL - whales selling → possible drop",
        "Trade clusters - mass buying/selling"
    ]
    const coinName = [
        {
            name: "BTC",
            bgcolor: "neutral.darkGrey",
            border: "1px solid rgba(127, 127, 127, 1)"
        },
        {
            name: "ETH",
            bgcolor: "neutral.vermilionOrange"
        },
        {
            name: "SOL",
            bgcolor: "neutral.darkGrey",
            border: "1px solid rgba(127, 127, 127, 1)"


        },
        {
            name: "BNB",
            bgcolor: "neutral.darkGrey",
            border: "1px solid rgba(127, 127, 127, 1)"


        },
        {
            name: "ARB",
            bgcolor: "neutral.darkGrey",
            border: "1px solid rgba(127, 127, 127, 1)"


        },
        {
            name: "DOGE",
            bgcolor: "neutral.darkGrey",
            border: "1px solid rgba(127, 127, 127, 1)"


        }

    ]
    const heatMapData = [
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( sell )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Sell )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Sell )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
        {
            price: "$552.1K",
            value: '5.7180 @ $96555.00',
            change: "( Buy )4:54:30 PM"
        },
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} mt={2} borderRadius={"10px"}>
            <Box mt={0.5}>
                <HeaderText
                    title={"Large Trades Scanner"}
                    btnText={"Scan "}
                    color={"neutral.Snowwhite"}
                    tittleFontSize={"20px"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} mt={2} p={1.5} borderRadius={"20px"}>
                <Box>
                    <HeaderText
                        title={"Scanner detects large market orders (whale trades):"}
                        icon={<img src={ArrowBtn} />}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"15px"}
                        titleFontWeight={400}
                    />
                </Box>
                <Box>
                    {tradeData.map((item, index) => (
                        <AccordingHeader
                            key={index}
                            tittle={item}
                            fontSize="13px"
                            highlights={[
                                { word: "Large BUY", color: "rgba(255, 100, 33, 1)" },
                                { word: "Large SELL", color: "rgba(255, 100, 33, 1)" },
                                { word: "Trade clusters", color: "rgba(255, 100, 33, 1)" },
                            ]}
                        />
                    ))}
                </Box>
                <Box mt={2}>
                    <Typography color={"neutral.Snowwhite"}>
                        How to use:
                    </Typography>
                    <Typography color={"neutral.Snowwhite"} fontSize={"13px"}>
                        If multiple large BUY orders appear in short period (1-4h) - its accumulation signal. Whales preparing for growth.
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography color={"neutral.Snowwhite"}>
                        Important:
                    </Typography>
                    <Typography color={"neutral.Snowwhite"} fontSize={"13px"}>
                        Look not only at trade size, but their frequency. 10 large BUYs per hour = strong signal!
                    </Typography>
                </Box>
            </Box>
            <Box mt={3}>
                <Typography color={"neutral.Snowwhite"}>
                    Search coin
                </Typography>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 10 }}>
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
                    <Grid item size={{ xs: 12, md: 2 }}>
                        <Box>
                            <CustomSelect
                                value={timeframe}
                                placeholder="1h"
                                onChange={(e) => setTimeFrame(e.target.value)}
                                backgroundColor="rgba(28, 28, 28, 1)"
                                sx={{
                                    "& .MuiInputBase-root": {
                                        borderRadius: "10px",
                                    }
                                }}
                            >
                                <MenuItem sx={{

                                    "&.Mui-selected": {
                                        background:
                                            "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                        color: "neutral.white",
                                        borderRadius: "10px",
                                    },
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }} value="15min">15min</MenuItem>
                                <MenuItem sx={{
                                    "&.Mui-selected": {
                                        background:
                                            "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                        color: "neutral.white",
                                        borderRadius: "10px",
                                    },
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }} value="1Hr">1Hr</MenuItem>
                                <MenuItem sx={{
                                    "&.Mui-selected": {
                                        background:
                                            "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                        color: "neutral.white",
                                        borderRadius: "10px",
                                    },
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }} value="2Hr">2Hr</MenuItem>
                            </CustomSelect>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box display={"flex"} gap={"10px"} mt={2} alignItems={"center"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        Quick select:
                    </Typography>
                </Box>
                {coinName.map((item, index) => (
                    <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={item.border} bgcolor={item.bgcolor}>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                            {item.name}
                        </Typography>

                    </Box>

                ))}

            </Box>
            <Box mt={3}>
                <Grid container spacing={1}>
                    {heatMapData.map((item, index) => {
                        const isBuy = item.change.includes("Buy"); // 👈 yahin decision

                        return (
                            <Grid item key={index} size={{ xs: 12, md: 1.2 }}>
                                <VolumeCard
                                    name={item.price}
                                    volume={item.value}
                                    percentChange={item.change}
                                    isPositive={isBuy}     // 👈 green / red
                                    showIcon={false}
                                />
                            </Grid>
                        );
                    })}
                </Grid>

            </Box>

        </Box>
    )
}

export default LargeTradeScanner