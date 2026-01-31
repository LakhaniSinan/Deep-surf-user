import { Box, Grid, Typography } from '@mui/material'
import Speedometer from '../../components/speedMeter'
import BitcoinImage from "../../assets/icons/bitcoin-logo.svg"
import EtherumIcon from "../../assets/icons/etherumIcon.svg"
import { index } from 'd3'
const FearAndGreedIndex = () => {
    const marketData = [
        {
            icon: BitcoinImage,
            name: "BTC Market Cap",
            value: "$1.90T",
            percen: "+3.56% 24h"
        },
        {
            name: "Total Crypto Market Cap",
            value: "$3.34T",
            percen: "+3.57% 24h"
        },
        {
            name: "Altcoins Market Cap",
            value: "$1.43T",
            percen: "+0.01% 24h"
        }
    ]

    const data = [
        {
            value: "$2.8B",
            name: "Daily Total Flows"
        },
        {
            value: "$15.2B",
            name: "Weekly Total Flows"
        },
        {
            value: "$185",
            name: "Total ETF Assets"
        },
        {
            value: "6.8%",
            name: "Market Cap Impact"
        }
    ]
    const topGainersData = [
        {
            rank: "#1",
            name: "BNX",
            value: "+66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightGreen",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#2",
            name: "币安人生",
            value: "+45.29%",
            percen: "$571M vol",
            rankColor: "neutral.brightGreen",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#3",
            name: "DASH",
            value: "+39.79%",
            percen: "$492M vol",
            rankColor: "neutral.brightGreen",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#4",
            name: "BERA",
            value: "+66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightGreen",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#5",
            name: "AXS",
            value: "+66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightGreen",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"

        }
    ]
    const topLossData = [
        {
            rank: "#1",
            name: "PORT3",
            value: "-66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightRed",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#2",
            name: "BSW",
            value: "-45.29%",
            percen: "$571M vol",
            rankColor: "neutral.brightRed",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#3",
            name: "NEIROETH",
            value: "-39.79%",
            percen: "$492M vol",
            rankColor: "neutral.brightRed",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#4",
            name: "VIDT",
            value: "-66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightRed",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"
        },
        {
            rank: "#5",
            name: "AMB",
            value: "-66.38%",
            percen: "$492M vol",
            rankColor: "neutral.brightRed",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.brightGreen",
            percenColor: "text.neutralGray"

        }
    ]
    return (
        <>
            <Box bgcolor={"neutral.darkGrey"} mt={4} p={1.5} borderRadius={"15px"}>
                <Typography fontSize={"20px"} color='neutral.Snowwhite' fontWeight={600}>
                    Fear and Greed Index
                </Typography>
                <Box display={"flex"} justifyContent={"space-between"} mt={1}>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                        <Box>
                            <Typography color='rgba(241, 230, 78, 1)' fontSize={"35px"} fontWeight={600}>
                                48 ↗
                            </Typography>
                            <Typography color='rgba(241, 230, 78, 1)' fontSize={"25px"} fontWeight={400}>
                                Neutral
                            </Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Speedometer
                            size={50}
                            score={73}
                        // score={homeResponse?.overallSentiment?.score}
                        />
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography color='neutralSnowwhite' fontWeight={600} fontSize={"18px"}>
                        30-day history:
                    </Typography>
                    <Box bgcolor={"rgba(39, 39, 39, 1)"} p={2} borderRadius={"15px"} mt={2}>
                        <Box display={"flex"}>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"5px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"46px"} height={"6px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"7px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>   <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"43px"} height={"3px"}>

                            </Box>
                            <Box bgcolor={"rgba(255, 76, 76, 1)"} width={"42px"} height={"10px"}>

                            </Box>
                        </Box>


                    </Box>

                </Box>
            </Box>
            <Box mt={2.5}>
                <Grid container spacing={2}>
                    {marketData.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"}>
                                <Box display={"flex"} gap={"10px"} alignItems={"center"} height={"50px"}>
                                    <Box>
                                        <img src={item.icon} />
                                    </Box>
                                    <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                        {item.name}
                                    </Box>
                                </Box>
                                <Box mt={2}>
                                    <Typography fontSize={"25px"} fontWeight={600}>
                                        {item.value}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        {item.percen}
                                    </Typography>
                                </Box>

                            </Box>

                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"}>
                            <Box>
                                <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"17px"} fontWeight={600} letterSpacing={"1px"}>
                                    Stablecoin Liquidity
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"25px"}>
                                    $261.78B
                                </Typography>
                                <Typography fontSize={"12px"} color='rgba(235, 53, 73, 1)'>
                                    -0.01% recent
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"} height={"140px"}>
                            <Box mt={2}>
                                <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"15px"} fontWeight={500} letterSpacing={"1px"}>
                                    Leverage & Derivs
                                </Typography>
                                <Typography mt={2} color='rgba(255, 255, 255, 1)' fontSize={"15px"} fontWeight={600} letterSpacing={"1px"}>
                                    Leverage: Normal • Funding: Positive
                                </Typography>
                            </Box>

                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box mt={2.5}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box>
                                    <img src={BitcoinImage} />
                                </Box>
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    BTC Dominance
                                </Box>
                            </Box>
                            <Box mt={14}>
                                <Box >
                                    <Typography fontSize={"25px"} fontWeight={600}>
                                        $3,938.89
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        Stable
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box>
                                    <img src={BitcoinImage} />
                                </Box>
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    BTC Dominance
                                </Box>
                            </Box>
                            <Box mt={14}>
                                <Box >
                                    <Typography fontSize={"25px"} fontWeight={600}>
                                        $3,938.89
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        $95,109.6
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box>
                                    <img src={EtherumIcon} />
                                </Box>
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    ETH 24h
                                </Box>
                            </Box>
                            <Box mt={14}>
                                <Box >
                                    <Typography fontSize={"25px"} fontWeight={600}>
                                        +6.70%
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        $3,334.48
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box>
                                    <img src={BitcoinImage} />
                                </Box>
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    BTC ETF Flows
                                </Box>
                            </Box>
                            <Box mt={0.5}>
                                <Box >
                                    <Typography fontSize={"10px"} fontWeight={550} color='rgba(141, 141, 141, 1)'>
                                        Today (Jan 14):
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"17px"} fontWeight={600}>
                                        -227 BTC
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"13px"}>
                                        $-19.98M
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='rgba(141, 141, 141, 1)' fontSize={"13px"}>
                                        7 days:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"17px"} fontWeight={600}>
                                        -8,319 BTC
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"13px"}>
                                        $732.45M
                                    </Typography>
                                </Box>
                                <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={0.5}>
                                    <Typography fontSize={"10px"} color='rgba(255, 255, 255, 0.5)' >
                                        Capital outflow - investors
                                        take profits
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box>
                                    <img src={BitcoinImage} />
                                </Box>
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    BTC ETF Flows
                                </Box>
                            </Box>
                            <Box mt={0.5}>
                                <Box >
                                    <Typography fontSize={"10px"} fontWeight={550} color='rgba(141, 141, 141, 1)'>
                                        Today (Jan 14):
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"17px"} fontWeight={600}>
                                        -227 BTC
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"13px"}>
                                        $-19.98M
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='rgba(141, 141, 141, 1)' fontSize={"13px"}>
                                        7 days:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"17px"} fontWeight={600}>
                                        -8,319 BTC
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightRed' fontSize={"13px"}>
                                        $732.45M
                                    </Typography>
                                </Box>
                                <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={0.5}>
                                    <Typography fontSize={"10px"} color='rgba(255, 255, 255, 0.5)' >
                                        Capital outflow - investors
                                        take profits
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >
                                <Box textAlign={"right"} color={"neutral.Snowwhite"} fontSize={"15px"} fontWeight={600}>
                                    SOL ETF Flows
                                </Box>
                            </Box>
                            <Box mt={0.5}>
                                <Box >
                                    <Typography fontSize={"10px"} fontWeight={550} color='rgba(141, 141, 141, 1)'>
                                        Today (Jan 14):
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"17px"} fontWeight={600}>
                                        +22,448 SOL
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        $+2.78M
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='rgba(141, 141, 141, 1)' fontSize={"13px"}>
                                        7 days:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"17px"} fontWeight={600}>
                                        +87,906 SOL
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontSize={"13px"}>
                                        +$10.90M
                                    </Typography>
                                </Box>
                                <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={0.5}>
                                    <Typography fontSize={"10px"} color='rgba(255, 255, 255, 0.5)' >
                                        Capital influx - interest in SOL is growing
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2.4 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"} height={"250px"}>
                            <Box display={"flex"} gap={"10px"} alignItems={"center"} mt={1} >

                                <Box textAlign={"right"} color="rgba(141, 141, 141, 1)" fontSize={"15px"} fontWeight={600}>
                                    XRP ETF Flows
                                </Box>
                            </Box>
                            <Box mt={0.5}>
                                <Box >
                                    <Typography fontSize={"10px"} fontWeight={550} color="rgba(141, 141, 141, 1)">
                                        Today (Jan 14):
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="rgba(141, 141, 141, 1)" fontSize={"17px"} fontWeight={600}>
                                        TBA
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="rgba(141, 141, 141, 1)" fontSize={"13px"}>
                                        The launch is expected in 2025.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="rgba(141, 141, 141, 1)" fontSize={"13px"}>
                                        7 days:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="rgba(141, 141, 141, 1)" fontSize={"17px"} fontWeight={600}>
                                        N/A
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color="rgba(141, 141, 141, 1)" fontSize={"13px"}>
                                        The ETF is not yet trading.
                                    </Typography>
                                </Box>
                                <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={0.5}>
                                    <Typography fontSize={"10px"} color='rgba(255, 255, 255, 0.5)' >
                                        XRP ETF awaits SEC approval.
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2} mt={2} >
                <Box display={"flex"} justifyContent={"center"}>
                    <Typography color='neutral.Snowwhite' fontWeight={500} fontSize={"15px"}>
                        ETF Market Impact (December 2025)
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={0}>
                        {data.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 3 }} key={index}>
                                <Box textAlign={"center"}>
                                    <Box>
                                        <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"28px"}>
                                            {item.value}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"13px"}>
                                            {item.name}
                                        </Typography>
                                    </Box>

                                </Box>

                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Box>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite' fontSize={"18px"} fontWeight={600}>
                    Top Movers (24h)
                </Typography>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={1}>
                                <Box>
                                    <Typography color='neutral.brightGreen' fontWeight={550} fontSize={"15px"}>
                                        Top Gainers
                                    </Typography>
                                    <Typography color='rgba(141, 141, 141, 1)' fontSize={"13px"}>
                                        Highest % gains
                                    </Typography>
                                </Box>
                                {topGainersData.map((item, index) => (
                                    <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={1} key={index}>
                                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={1.2}>
                                            <Box display={"flex"} gap={"20px"}>
                                                <Box>
                                                    <Typography color={item.rankColor}>
                                                        {item.rank}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.nameColor} fontWeight={600}>
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box textAlign={"right"}>
                                                <Typography fontSize={"16px"} color={item.valueColor}>
                                                    {item.value}
                                                </Typography>
                                                <Typography fontSize={"10px"} color={item.percenColor}>
                                                    {item.percen}
                                                </Typography>

                                            </Box>
                                        </Box>

                                    </Box>
                                ))}

                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={1}>
                                <Box>
                                    <Typography color='neutral.brightRed' fontWeight={550} fontSize={"15px"}>
                                        Top Losers
                                    </Typography>
                                    <Typography color='rgba(141, 141, 141, 1)' fontSize={"13px"}>
                                        Highest % losses
                                    </Typography>
                                </Box>
                                {topLossData.map((item, index) => (
                                    <Box bgcolor={"background.charcoal"} p={1} borderRadius={"10px"} mt={1} key={index}>
                                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={1.2}>
                                            <Box display={"flex"} gap={"20px"}>
                                                <Box>
                                                    <Typography color={item.rankColor}>
                                                        {item.rank}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography color={item.nameColor} fontWeight={600}>
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box textAlign={"right"}>
                                                <Typography fontSize={"16px"} color={item.valueColor}>
                                                    {item.value}
                                                </Typography>
                                                <Typography fontSize={"10px"} color={item.percenColor}>
                                                    {item.percen}
                                                </Typography>

                                            </Box>
                                        </Box>

                                    </Box>
                                ))}

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default FearAndGreedIndex