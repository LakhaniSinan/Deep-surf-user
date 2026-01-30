import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'
import CustomButton from '../../components/customButton'
import AccordingHeader from '../../components/accordingHeader.jsx'
import CustomSelect from '../../components/customSelect/index.jsx'
import CumulativeData from './cumulativeData.jsx'
import OrderBookData from './orderBookData.jsx'
import VolumeProfileData from './volumeProfileData.jsx'
import LiquidityHeatMap from './liquidityHeatMap.jsx'
import LiveTape from './liveTape.jsx'

const OrderFlowEngine = () => {

    const orderFlowData = [
        "CVD (Cumulative Delta) - cumulative difference between Buy and Sell orders",
        "OBI (Orderbook Imbalance) - Bid/Ask imbalance in the order book",
        "Volume Profile - volume distribution across price levels",
        "Live Tape - stream of large trades in real time"
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography fontSize={"22px"} color='neutral.Snowwhite' fontWeight={550}>
                            Order Flow Engine
                        </Typography>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                        <Box>
                            <CustomSelect
                                placeholder='Safe'
                                height="40px"
                                width="150px"
                                backgroundColor={"neutral.richblack"}
                                border="none"
                                borderRadius="10px"
                                placeholderColor={"text.silverGrey"}
                            >

                            </CustomSelect>
                        </Box>
                        <Box>
                            <CustomButton
                                title="Use Main Symbol"
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    minHeight: "32px",
                                    backgroundColor: "neutral.vermilionOrange",
                                    borderRadius: "10px",
                                    color: "neutral.Snowwhite"
                                }}
                            />
                        </Box>
                        <Box>
                            <CustomButton
                                title={"Stop"}
                                sx={{
                                    py: "6px",
                                    px: "18px",
                                    minHeight: "32px",
                                    backgroundColor: "neutral.vermilionOrange",
                                    color: "neutral.Snowwhite"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box mt={1}>
                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"12px"}>
                        What is Order Flow?
                    </Typography>
                    <Typography color='neutral.coolGray' fontSize={"12px"}>
                        Order Flow shows the real pressure of buyers and sellers in the market:
                    </Typography>
                </Box>
                <Box mt={2}>
                    {orderFlowData.map((item, index) => (
                        <AccordingHeader tittle={item} key={index} fontSize={"14px"} fontWeight={550} />
                    ))}
                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"} mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography color='text.coolGrey' fontSize={"13px"}>
                            Status:  Остановлен Processed: 0
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color='text.coolGrey' fontSize={"13px"}>
                            — Ожидание данных
                        </Typography>
                    </Box>

                </Box>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 7 }}>
                        <Box>
                            <CumulativeData />
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12 }}>
                                <OrderBookData />
                            </Grid>
                            <Grid item size={{ xs: 12 }}>
                                <VolumeProfileData />
                            </Grid>
                        </Grid>
                        <Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 7 }}>
                        <Box>
                            <LiquidityHeatMap />
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Box>
                            <LiveTape />
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default OrderFlowEngine