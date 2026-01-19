import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../../components/customInput'
import IconImage from "../../assets/icons/Vector.svg";
import StarIcon from "../../assets/icons/stairs.svg";
import CustomButton from '../../components/customButton';
import TechnicalIndicator from './techinalIndicator';
import Community from './community';
import IctLiquidityLevel from './ictLiquidityLevel';
import EnhanceMarketIntelligence from './enhanceMarketIntelligence';
import Pattern from './pattern';
import IndicatorAnalysis from './indicatorAnalysis';
const AiProof = () => {
    const confluenceData1 = [
        {
            title: "Confluence Score",
            symbol: "Bullish",
            value: 6
        },
        {
            title: "Confluence Score",
            symbol: "Bearish",
            value: 6
        }

    ]
    const confluenceData2 = [
        {
            title: "Trend",
            symbol: "Bullish",
        },
        {
            title: "Signal Level",
            symbol: "$3 120,88",
        }
    ]
    return (
        <Box mt={2}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Box color={"white"} bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2}>
                        <Box>
                            <Box fontSize={"30px"} fontWeight={600}>
                                Ai Proof
                            </Box>
                        </Box>
                        <Box mt={2}>
                            <CustomInput
                                placeholder="ETH"
                                InputEndIcon={<img src={IconImage} style={{ width: "25px" }} />}
                            />
                        </Box>
                        <Box mt={"20px"}>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Box color={"rgba(174, 176, 179, 1)"}>
                                    <Typography fontSize={"20px"} fontWeight={600}>
                                        ETH/USDT
                                    </Typography>
                                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                        <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                                            $3300,51
                                        </Typography>
                                        <Typography color='neutral.brightRed' fontSize={"20px"} fontWeight={600} >
                                            + 2.87%
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                gap="20px"
                                flexWrap={{ xs: "wrap", md: "nowrap" }}
                                bgcolor="neutral.darkGrey"
                                borderRadius={"20px"}
                                mt={2}
                                p={2}

                            >
                                <CustomButton
                                    title="Recommendation"
                                    icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
                                    sx={{
                                        borderRadius: "20px",
                                        padding: "4px 30px",
                                        minWidth: "auto",
                                        width: { xs: "100%", md: "auto" },
                                        backgroundColor: "#FF6421",
                                        color: "#fff",
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    fontSize="14px"
                                    flex={{ xs: "100%", md: "1" }}
                                >
                                    <span style={{ color: "rgba(255, 230, 0, 1)", fontWeight: 600, fontSize: "15px" }}>
                                        Hold
                                    </span >
                                    <br />
                                    Confidence: 84%
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                    Confluence Score
                                </Typography>
                            </Box>
                            <Grid container spacing={"20px"}>
                                {
                                    confluenceData1.map((item) => (
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    bgcolor: "neutral.surface",
                                                    p: 2,
                                                    borderRadius: "12px",
                                                    textAlign: "center",
                                                    mt: 2
                                                }}
                                            >
                                                <Typography variant="caption" color="neutral.coolGrey">
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={{ color: item.symbol === "Bearish" ? "neutral.brightGreen" : "rgba(255, 129, 129, 1)", fontSize: "18px", fontWeight: 600 }}
                                                >
                                                    {item.symbol}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: "neutral.brightGreen",
                                                        fontSize: "22px",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.value}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                    Supertrend
                                </Typography>
                            </Box>
                            <Grid container spacing={"20px"}>
                                {
                                    confluenceData2.map((item) => (
                                        <Grid item size={{ xs: 12, sm: 6 }}>
                                            <Box
                                                sx={{
                                                    bgcolor: "neutral.surface",
                                                    p: 2,
                                                    borderRadius: "12px",
                                                    textAlign: "center",
                                                    mt: 2
                                                }}
                                            >
                                                <Typography variant="caption" color="neutral.coolGrey">
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    sx={{ color: item.symbol === "Bullish" ? "rgba(62, 221, 135, 1)" : "rgba(255, 255, 255, 1)", fontSize: "18px", fontWeight: 600 }}
                                                >
                                                    {item.symbol}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Box>
                        <Box>
                            <TechnicalIndicator />
                            <Community />
                            <IctLiquidityLevel />
                            <EnhanceMarketIntelligence />
                            <Pattern />
                            <IndicatorAnalysis />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AiProof
