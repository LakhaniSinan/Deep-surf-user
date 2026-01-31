import { Box, Grid, MenuItem, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'
import ShortLongCard from '../../components/shortLongCard'
import ProgressBar from '../../components/progressBar'
import TradingCard from '../../components/tradeCard'
import AccordingHeader from '../../components/accordingHeader'

const TopTraders = () => {
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
    ]
    const data = [
        {
            name: "L/S Ratio",
            tittle: "2.59"
        },
        {
            name: "6-Hour Trend",
            tittle: "-0.1%"
        },
        {
            name: "Long Accounts",
            tittle: "75.6%"
        }
    ]
    const tradeData = [
        "Top traders are heavily long. Historically, this often precedes a correction."
    ]
    const shortLongData = [
        {
            name: "Long Positions",
            percen: "72.1%",
            progresBar: <ProgressBar sx={{
                "& .MuiLinearProgress-bar": {
                    backgroundColor: "neutral.brightGreen",
                    borderRadius: 2,
                },
            }} value={72} />,
            border: "1px solid rgba(62, 221, 135, 1)",
            bgcolor: "background.mintGreen",
            nameColor: "neutral.brightGreen",
            valueColor: "neutral.Snowwhite"
        }
        , {
            name: "Short Positions",
            percen: "72.1%",
            progresBar: <ProgressBar sx={{
                "& .MuiLinearProgress-bar": {
                    backgroundColor: "text.dangerRed",
                    borderRadius: 2,
                },
            }} value={45} />,
            border: "1px solid rgba(212, 51, 51, 1)",
            bgcolor: "background.transparentRed",
            nameColor: "text.dangerRed",
            valueColor: "neutral.Snowwhite"
        }
    ]
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={5} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Top Traders Positions"}
                    tittleFontSize={"20px"}
                    color={"neutral.Snowwhite"}
                    btnText={"Load"}
                    titleFontWeight={600}
                />
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <CustomSelect placeholder='Binance'>
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
                                }} value="Binance">Binance</MenuItem>
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
                                }} value="Bybit">Bybit</MenuItem>
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
                                }} value="OKX">OKX</MenuItem>
                            </CustomSelect>

                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <CustomInput placeholder="SOL" sx={{
                                "& .MuiOutlinedInput-root": {
                                    border: "0.1px solid rgba(127, 127, 127, 1)",
                                    borderRadius: "20px",
                                }
                            }} />
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
                    <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"rgba(28, 28, 28, 1)"}>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                            {item.name}
                        </Typography>

                    </Box>

                ))}

            </Box>
            <Box>
                <Grid container spacing={1}>
                    {shortLongData.map((item, index) => (
                        <Grid item size={{ xs: 12 }}>
                            <Box key={index}>
                                <ShortLongCard
                                    positionTittle={item.name}
                                    percen={item.percen}
                                    progressBar={item.progresBar}
                                    bgcolor={item.bgcolor}
                                    border={item.border}
                                    color={item.nameColor}
                                    perColor={item.valueColor}

                                />
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box mt={1}>
                <Grid container spacing={1}>
                    {data.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Box bgcolor={"rgba(28, 28, 28, 1)"} key={index} mt={2} borderRadius={"15px"} p={"2px"}>
                                <TradingCard
                                    title={item.name}
                                    value={item.tittle}
                                    textAlign={"left"}
                                    titleFontSize={"18px"}
                                    titleFontWeight={400}
                                    titleColor={"neutral.Snowwhite"}
                                    valueFontSize={"28px"}
                                    valueFontWeight={600}
                                    valueColor={"neutral.Snowwhite"}
                                />
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box mt={3} p={1}>
                <Typography color="neutral.Snowwhite" fontSize={"15px"}>
                    Long overcrowding - risk of a long squeeze.
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
    )
}

export default TopTraders