import { Box, Grid, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import CustomInput from '../../components/customInput'
import ProgressBar from '../../components/progressBar'
import ShortLongCard from '../../components/shortLongCard'
import TradingCard from '../../components/tradeCard'
import AccordingHeader from '../../components/accordingHeader'

const TakerRatio = () => {
    const coinName = [
        {
            name: "BTC",
        },
        {
            name: "ETH",
        },
        {
            name: "SOL",
        },
        {
            name: "BNB",
        },
        {
            name: "ARB",
        },
        {
            name: "DOGE",
        }

    ]
    const sellAndBuyData = [
        {
            name: "Taker Buy 41.2%",
            progressbar: <ProgressBar value={70} sx={{
                "& .MuiLinearProgress-bar": {
                    backgroundColor: "neutral.brightGreen",
                    borderRadius: 2,
                },
            }} />,
            bgcolor: "background.charcoal",
            nameColor: "neutral.brightGreen",
        },
        {
            name: "Taker Sell 41.2%",
            progressbar: <ProgressBar value={70} sx={{
                "& .MuiLinearProgress-bar": {
                    backgroundColor: "text.dangerRed",
                    borderRadius: 2,
                },
            }} />,
            bgcolor: "background.charcoal",
            nameColor: "text.dangerRed",
        }
    ]
    const data = [
        {
            name: "Buy/Sell Ratio",
            tittle: "0.70"
        },
        {
            name: "24h AVG",
            tittle: "49.2%"
        },
        {
            name: "Trend 6h",
            tittle: "2.59"
        },
        {
            name: "Signal",
            tittle: "1%"
        }
    ]
    const tradeData = [
        "Taker sell volume exceeds buy — sellers are more aggressive. Bearish signal."
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} mt={2} borderRadius={"10px"}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"20px"}>
                <Box>
                    <HeaderText
                        title={"Taker Buy/Sell Ratio"}
                        color={"neutral.Snowwhite"}
                        btnText={"Load"}
                    />
                </Box>
                <Box mt={2}>
                    <Grid container spacing={3}>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Box>
                                <CustomInput
                                    placeholder="Eth"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            border: "0.1px solid rgba(127, 127, 127, 1)",
                                            borderRadius: "20px",
                                        }
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 7 }}>
                            <Box display={"flex"} gap={"15px"} mt={0.8} alignItems={"center"}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                        Quick select:
                                    </Typography>
                                </Box>
                                {coinName.map((item, index) => (
                                    <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"rgba(28, 28, 28, 1)"}>
                                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                                            {item.name}
                                        </Typography>

                                    </Box>

                                ))}

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        {sellAndBuyData.map((item, index) => (
                            <Grid item size={{ xs: 12 }}>
                                <Box key={index}>
                                    <ShortLongCard
                                        positionTittle={item.name}
                                        progressBar={item.progressbar}
                                        bgcolor={item.bgcolor}
                                        border={"none"}
                                        color={item.nameColor}

                                    />
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box mt={1}>
                    <Grid container spacing={3}>
                        {data.map((item, index) => (
                            <Grid size={{ xs: 12, md: 3 }}>
                                <Box bgcolor={"background.charcoal"} key={index} mt={2} borderRadius={"15px"} p={"3px"}>
                                    <TradingCard
                                        title={item.name}
                                        value={item.tittle}
                                        textAlign={"left"}
                                        titleFontSize={"18px"}
                                        titleFontWeight={400}
                                        titleColor={"neutral.Snowwhite"}
                                        valueFontSize={"30px"}
                                        valueFontWeight={500}
                                        valueColor={"neutral.Snowwhite"}
                                    />
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box mt={3} p={2} borderRadius={"25px"} bgcolor={"background.charcoal"}>
                    <Typography color="neutral.Snowwhite" fontSize={"13px"} fontWeight={600}>
                        Aggressive selling dominates
                    </Typography>
                    <Box>
                        {tradeData?.map((item) => (
                            <AccordingHeader
                                tittle={item}
                                fontSize={"13px"}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TakerRatio