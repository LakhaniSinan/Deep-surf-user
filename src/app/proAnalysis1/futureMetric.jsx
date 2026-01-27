import { Box, Grid, Typography } from '@mui/material'
import RealodIcon from "../../assets/icons/relaod-Icon.svg"
import HeaderText from '../../components/headerText'
import CustomInput from '../../components/customInput'
import SearchIcon from "../../assets/icons/Vector.svg"
import ProgressBar from '../../components/progressBar'
import AccordingHeader from '../../components/accordingHeader'


const FutureMetric = () => {
    const futureMetricData = [
        {
            title: "Funding Rate",
            value: "0.000%",
            symbol: "Neutral",
            valueColor: 'neutral.Snowwhite',
            symbolcolor: "neutral.brightYellow"
        },
        {
            title: "Open Interest",
            value: "1.5M",
            symbol: "+3.70% (24h)",
            valueColor: 'neutral.Snowwhite',
            symbolcolor: "neutral.brightGreen"


        },
        {
            title: "L/S Positions",
            value: "2.34",
            description: "Everyone is longing ETH. Be careful!",
            valueColor: 'neutral.Snowwhite',
            decriptionColor: "neutral.brightYellow",
            symbol:
                <ProgressBar value={100}
                    sx={{
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: "neutral.brightGreen",
                            borderRadius: 2,
                        },
                    }} />,

        }
        ,
        {
            title: "L/S Accounts",
            value: "2.75",
            valueColor: 'neutral.Snowwhite',
            symbol:
                <ProgressBar value={100}
                    sx={{
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: "neutral.brightGreen",
                            borderRadius: 2,
                        },
                    }} />,

        },
        {
            title: "Cumulative Delta",
            value: "+0.20M",
            description: "Buying is predominant",
            valueColor: 'neutral.brightGreen',
            decriptionColor: "neutral.brightGreen"


        }
    ]
    const heatMapData = [
        " Funding > 0.01% = Longs pay shorts (market overheating) ",
        "  L/S > 1.5 = Dangerous skew towards LONG (correction possible) ",
        " OI rising + price rising = strong upward trend ",
        " OI falling = position closures, reversal possible"
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={2} mt={2} borderRadius={"10px"}>
            <Box mt={2}>
                <HeaderText
                    title={"Futures Metrics"}
                    icon={<img src={RealodIcon} />}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box mt={2}>
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
            <Box mt={2}>
                <Typography textAlign={"center"} color='neutral.Snowwhite' fontSize={"25px"}>
                    Current ETH Price
                </Typography>
                <Typography textAlign={"center"} color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                    $4,321.7
                </Typography>
            </Box>
            <Box mt={2} >
                <Grid container spacing={1}>
                    {futureMetricData.map((item) => (
                        <Grid size={{ xs: 12, md: 2.3 }}>
                            <Box bgcolor={"neutral.darkGrey"} borderRadius={"18px"} p={1.5} height={"170px"}>
                                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={400}>
                                    {item.title}
                                </Typography>
                                <Typography color={item.valueColor} mt={1} fontSize={"28px"} fontWeight={600}>
                                    {item.value}
                                </Typography>
                                <Typography color={item.symbolcolor} mt={2}>
                                    {item.symbol}
                                </Typography>
                                <Typography color={item.decriptionColor} fontSize={"11px"}>
                                    {item.description}
                                </Typography>
                            </Box>

                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"18px"} p={2.5} mt={2}>
                <Box>
                    <Typography color='rgba(141, 141, 141, 1)'>
                        How to read:
                    </Typography>
                    <Box>
                        {heatMapData.map((item, index) => (
                            <Box  >
                                <AccordingHeader mt={0} tittle={item} bgGroundColor={"rgba(141, 141, 141, 1)"} color={"rgba(141, 141, 141, 1)"} key={index} lineHeight={"1px"} />
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default FutureMetric