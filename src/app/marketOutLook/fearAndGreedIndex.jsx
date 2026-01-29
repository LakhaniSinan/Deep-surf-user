import { Box, Grid, Typography } from '@mui/material'
import Speedometer from '../../components/speedMeter'
import BitcoinImage from "../../assets/icons/bitcoin-logo.svg"
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
        </>
    )
}

export default FearAndGreedIndex