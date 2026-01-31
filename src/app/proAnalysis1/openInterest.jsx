import { Box, Grid, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomInput from '../../components/customInput'
import SearchIcon from "../../assets/icons/Vector.svg"
import TradingCard from '../../components/tradeCard'
import SymbolCard from '../../components/symbolCard'
import ProgressBar from '../../components/progressBar'
const OpenInterest = () => {
    const data1 = [
        "OI grows + Price grows → New LONG positions opening =  BULLISH",
        "OI grows + Price falls → New SHORT positions opening = BEARISH",
        "OI falls + Price grows → SHORTs closing (short squeeze) =  BULLISH",
        "OI falls + Price falls → LONGs closing (long liquidation) = ️ BEARISH"
    ]
    const data2 = [
        "Rising OI = new positions opening, trend is strong",
        "Falling OI = positions closing, trend weakening",
        "High OI = lots of leverage, liquidation risk",
    ]
    const coinData = [
        {
            name: "Coins analyzed",
            value: "29",
            nameColor: "neutral.Snowwhite",
            valeColor: "neutral.Snowwhite",
        },
        {
            name: "Total OI Value",
            value: "$21.81B",
            nameColor: "neutral.Snowwhite",
            valeColor: "neutral.Snowwhite",
        },
        {
            name: "Bullish",
            value: "15",
            nameColor: "neutral.Snowwhite",
            valeColor: "neutral.brightGreen",

        },
        {
            name: "Bearish",
            value: "14",
            nameColor: "neutral.Snowwhite",
            valeColor: "neutral.brightRed",

        }
    ]
    const btcData = [
        {
            title: "24h Change",
            value: "+2.59%",
            // progressBar: <ProgressBar value={100} />
            change: "+3.70% (24h)"
        }
        ,
        {
            title: "Price",
            value: "1.9M",
            change: "$96703.10"
        },
        {
            title: "OI Relative Size:",
            value: "41.8% of total",
            progressBar: <ProgressBar value={100}
                sx={{
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "neutral.brightGreen",
                        borderRadius: 2,
                    },
                }}
            />,
            change: "Everyone is longing ETH. Be careful!"
        },
        {
            title: "Volume 24h:",
            value: "$16439M",
            change: "Open Interest $7.72B"
        }
    ]
    const buyData = [
        "OI is rising + Price is rising = new LONG positions are opening → strong bullish trend",
        "OI is falling + Price is rising = SHORT positions are closing (squeeze) → continuation of the rise is likely"
    ]
    const sellData = [
        "OI is rising + Price is rising = new LONG positions are opening → strong bullish trend",
        "OI is falling + Price is rising = SHORT positions are closing (squeeze) → continuation of the rise is likely"
    ]
    const highRiskData = [
        "A lot of leverage in the market",
        "Sharp movements (liquidations) are possible",
        "Keep an eye on the Funding Rate"
    ]
    const ProTipData = [
        "Compare OI between coins - if BTC's OI is rising while altcoins' OI is falling, capital is flowing into BTC (risk-off)."
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} borderRadius={"15px"} mt={2}>
            <Box mt={0.5}>
                <HeaderText
                    title={"Open Interest Flow Tracker"}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={2.5} height={{ xs: "auto", md: "420px" }} mt={2} borderRadius={"25px"}>
                <Box>
                    <HeaderText
                        title={"What is Open Interest (OI)?"}
                        color={"neutral.Snowwhite"}
                        icon={<img src={ArrowBtn} />}
                        tittleFontSize={"14px"}
                    />
                </Box>
                <Box>
                    <Typography color={"neutral.Snowwhite"} fontSize={"13px"}>
                        Open Interest - total number of open positions (contracts) in futures market
                    </Typography>
                </Box>
                <Box mt={1.5}>
                    <Typography color={"neutral.Snowwhite"} fontSize={"14px"}>
                        How to interpret OI changes:
                    </Typography>
                </Box>
                <Box>
                    {data1.map((item, index) => (
                        <AccordingHeader
                            key={index}
                            tittle={item}
                            fontSize="13px"
                            highlights={[
                                { word: "OI grows + Price grows", color: "rgba(255, 100, 33, 1)" },
                                { word: "OI grows + Price falls", color: "rgba(255, 100, 33, 1)" },
                                { word: "OI falls + Price grows", color: "rgba(255, 100, 33, 1)" },
                                { word: "OI falls + Price falls", color: "rgba(255, 100, 33, 1)" },
                            ]}
                        />
                    ))}
                </Box>
                <Box mt={2.5}>
                    <Typography color={"neutral.Snowwhite"} fontSize={"14px"}>
                        How to use:
                    </Typography>
                </Box>
                <Box>
                    {data2.map((item, index) => (
                        <AccordingHeader
                            key={index}
                            tittle={item}
                            fontSize="13px"
                            highlights={[
                                { word: "Rising OI", color: "rgba(255, 100, 33, 1)" },
                                { word: "Falling OI", color: "rgba(255, 100, 33, 1)" },
                                { word: "High OI", color: "rgba(255, 100, 33, 1)" },
                            ]}
                        />
                    ))}
                </Box>
                <Box mt={2}>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        <span style={{ color: "rgba(255, 100, 33, 1)" }}>Important:</span>  Look at OI together with price and volume for full picture
                    </Typography>
                </Box>
            </Box>
            <Box mt={3}>
                <Typography color='neutral.Snowwhite'>
                    Filter (optional)
                </Typography>
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid item size={{ xs: 12, md: 11 }}>
                        <Box>
                            <CustomInput
                                placeholder="ETH"
                                InputEndIcon={<img src={SearchIcon} />}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        border: "0.1px solid rgba(127, 127, 127, 1)",
                                        borderRadius: "20px",
                                    }
                                }}
                            />
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 1 }}>
                        <Box bgcolor={"neutral.vermilionOrange"} height={"40px"} borderRadius={"10px"} textAlign={"center"} p={0.8} width={"100px"}>
                            <Typography color="neutral.Snowwhite" fontSize={"16px"} fontWeight={550}>
                                Load
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    {coinData.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box key={index} bgcolor={"neutral.darkGrey"} borderRadius={"15px"} p={0.3}>
                                <TradingCard
                                    title={item.name}
                                    value={item.value}
                                    textAlign={"left"}
                                    titleColor={item.nameColor}
                                    valueColor={item.valeColor}
                                    titleFontSize={"18px"}
                                    valueFontSize={"30px"}
                                    titleFontWeight={400}
                                    valueFontWeight={550}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* BTC section */}
            <Box bgcolor={"neutral.darkGrey"} p={3} borderRadius={"20px"} mt={2}>
                <Box mt={0.5}>
                    <HeaderText
                        title={"BTC"}
                        subtile={" LONG Positions Opening"}
                        width={"200px"}
                        backgroundColor={"neutral.brightGreen"}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"22px"}
                        borderRadius={"20px"}
                        border={"1.5px solid rgba(127, 127, 127, 1)"}
                        fontSize={"15px"}
                        fontWeight={500}
                    />
                </Box>
                <Box>
                    <Grid container spacing={1}>
                        {btcData.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 3 }}>
                                <Box key={index}>
                                    <SymbolCard
                                        title={item.title}
                                        value={item.value}
                                        progressBar={item.progressBar}
                                        change={item.change}
                                    />
                                </Box>
                            </Grid>

                        ))}

                    </Grid>

                </Box>
            </Box>
            {/* ETH section */}
            <Box bgcolor={"neutral.darkGrey"} p={3} borderRadius={"20px"} mt={2}>
                <Box mt={0.5}>
                    <HeaderText
                        title={"ETH"}
                        subtile={" LONG Positions Opening"}
                        width={"200px"}
                        backgroundColor={"neutral.brightGreen"}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"22px"}
                        borderRadius={"20px"}
                        border={"1.5px solid rgba(127, 127, 127, 1)"}
                        fontSize={"15px"}
                        fontWeight={500}
                    />
                </Box>
                <Box>
                    <Grid container spacing={1}>
                        {btcData.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 3 }}>
                                <Box key={index}>
                                    <SymbolCard
                                        title={item.title}
                                        value={item.value}
                                        progressBar={item.progressBar}
                                        change={item.change}
                                    />
                                </Box>
                            </Grid>

                        ))}

                    </Grid>

                </Box>
            </Box>
            {/* SOL section */}
            <Box bgcolor={"neutral.darkGrey"} p={3} borderRadius={"20px"} mt={2}>
                <Box mt={0.5}>
                    <HeaderText
                        title={"SOL"}
                        subtile={" LONG Positions Opening"}
                        width={"200px"}
                        backgroundColor={"neutral.brightGreen"}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"22px"}
                        borderRadius={"20px"}
                        border={"1.5px solid rgba(127, 127, 127, 1)"}
                        fontSize={"15px"}
                        fontWeight={500}
                    />
                </Box>
                <Box>
                    <Grid container spacing={1}>
                        {btcData.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 3 }}>
                                <Box key={index}>
                                    <SymbolCard
                                        title={item.title}
                                        value={item.value}
                                        progressBar={item.progressBar}
                                        change={item.change}
                                    />
                                </Box>
                            </Grid>

                        ))}

                    </Grid>

                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} mt={2} p={3} borderRadius={"25px"}>
                <Box>
                    <HeaderText
                        title={"How to read Open Interest Flow"}
                        tittleFontSize={"18px"}
                        color={"neutral.Snowwhite"}
                        icon={<img src={ArrowBtn} />}
                    />
                </Box>
                <Box mt={2}>
                    <Typography color='neutral.vermilionOrange' fontSize={"15px"}>
                        Bullish scenarios (buy):
                    </Typography>
                    <Box>
                        {buyData.map((item, index) => (
                            <AccordingHeader
                                key={index}
                                tittle={item}
                                fontSize="13px"
                            />
                        ))}
                    </Box>
                </Box>
                <Box mt={2}>
                    <Typography color='neutral.vermilionOrange' fontSize={"15px"}>
                        Bullish scenarios (Sell):
                    </Typography>
                    <Box>
                        {sellData.map((item, index) => (
                            <AccordingHeader
                                key={index}
                                tittle={item}
                                fontSize="13px"
                            />
                        ))}
                    </Box>
                </Box>
                <Box mt={2}>
                    <Typography color='neutral.vermilionOrange' fontSize={"15px"}>
                        High OI = risk:
                    </Typography>
                    <Box>
                        {highRiskData.map((item, index) => (
                            <AccordingHeader
                                key={index}
                                tittle={item}
                                fontSize="13px"
                            />
                        ))}
                    </Box>
                </Box>
                <Box mt={2}>
                    <Typography color='neutral.vermilionOrange' fontSize={"15px"}>
                         Pro-Tip:
                    </Typography>
                    <Box>
                        {ProTipData.map((item, index) => (
                            <AccordingHeader
                                key={index}
                                tittle={item}
                                fontSize="13px"
                            />
                        ))}
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default OpenInterest