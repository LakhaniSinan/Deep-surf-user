import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../../components/headerText'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"
import CheckIocn from "../../../assets/icons/checkBtn.svg"
import CancelIcon from "../../../assets/icons/cancelBtn.svg"
import FireIcon from "../../../assets/icons/fireIcon.svg"
import WarningIcon from "../../../assets/icons/warningIcon.svg"


const AllAnalysisSignal = () => {
    const analysisData = [
        {
            icon: CheckIocn,
            name: "MACD Bullish"
        },
        {
            icon: CheckIocn,
            name: "Strong upward structure (HH+HL)"
        },
        {
            icon: WarningIcon,
            name: "Close liquidation zone LONG (-2.0%) - price magnet"
        },
        {
            icon: CancelIcon,
            name: "RSI Overbought"
        },
        {
            icon: CheckIocn,
            name: "Supertrend: Bullish trend"
        },
        {
            icon: WarningIcon,
            name: "Close liquidation zone SHORT (+2.0%) - price magnet"
        },
        {
            icon: CheckIocn,
            name: "MACD Bullish"
        },
        {
            icon: CancelIcon,
            name: "Strong resistance nearby"
        },
        {
            icon: CancelIcon,
            name: "Price at upper BB"
        },
        {
            icon: FireIcon,
            name: "Strong resistance nearby"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"} mt={2}>
            <Box>
                <HeaderText
                    title="All Analysis Signals"
                    icon={<img src={DrowpDownIcon} />}
                />
            </Box>
            <Box mt={3}>
                <Grid container spacing={1}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CheckIocn} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    MACD Bullish
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CheckIocn} />
                            </Box>
                            <Box>
                                <Typography fontSize={"14px"} color='neutral.Snowwhite'>
                                    Strong upward structure (HH+HL)
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={WarningIcon} />
                            </Box>
                            <Box>
                                <Typography fontSize={"15px"} width={"100%"} color='neutral.Snowwhite'>
                                    Close liquidation zone LONG (-2.0%) - price magnet
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CancelIcon} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    RSI Overbought
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CheckIocn} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    Supertrend: Bullish trend
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={WarningIcon} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    Close liquidation zone SHORT (+2.0%) - price magnet
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CheckIocn} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    MACD Bullish
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CancelIcon} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    Strong resistance nearby
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={CancelIcon} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    Price at upper BB
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box display={"flex"} gap={"10px"}>
                            <Box>
                                <img src={FireIcon} />
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    Strong resistance nearby
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default AllAnalysisSignal