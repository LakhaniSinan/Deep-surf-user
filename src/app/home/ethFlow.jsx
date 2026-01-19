import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import EtfFlowIcon from "../../assets/icons/bitcoin-logo.svg"
import EthIcon from "../../assets/icons/eth-icon.svg"
import CustomButton from '../../components/customButton'
const EtfFlow = () => {
    const etfFlow = [
        {
            iocn: EtfFlowIcon,
            title: "BTC ETF",
            description1: "+ $632M (yesterday)",
            description2: "7 consecutive days of inflows!",
            color: "rgba(62, 221, 135, 1)"
        },
        {
            iocn: EthIcon,
            title: "BTC ETF",
            description1: "+ $632M (yesterday)",
            description2: "7 consecutive days of inflows!",
            color: "rgba(62, 221, 135, 1)"

        },
        {
            iocn: null,
            title: "Trend",
            description1: "Strong institutional demand",
            description2: null,
            color: "rgba(62, 221, 135, 1)"
        }
    ]
    return (
        <Box mt={2} color={"neutral.Snowwhite"} backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"}>
            <Typography color='neutral.Snowwhite' fontSize={"25px"} fontWeight={600}>
                ETF Flows
            </Typography>
            <Box>
                {
                    etfFlow.map((item) => (
                        <Box bgcolor={"neutral.darkGrey"} p={1.8} borderRadius={"20px"} mt={1.2}>
                            <Grid container spacing={2}>
                                <Grid item size={{ xs: 12 }}>
                                    <Box display={"flex"} gap={"10px"} >
                                        <Box>
                                            <img src={item.iocn} />
                                        </Box>
                                        <Box fontSize={"18px"} alignItems={"center"}>
                                            {item.title}
                                        </Box>
                                    </Box>
                                    <Box display={"flex"} gap={"30px"}>
                                        <Box>
                                            <Typography mt={1} color={item.color}>
                                                {item.description1}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography mt={1}>
                                                {item.description2}
                                            </Typography>
                                        </Box>
                                    </Box>


                                </Grid>
                            </Grid>


                        </Box>
                    )
                    )
                }

            </Box>
            <Box
                mt="25px"
                backgroundColor="neutral.darkGrey"
                padding="20px"
                borderRadius="25px"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    gap="20px"
                    flexWrap="wrap"
                    borderRadius="20px"
                >
                    <CustomButton
                        title="Conclusion"
                        sx={{
                            borderRadius: "20px",
                            width: { xs: "100%", md: "100%" },
                            backgroundColor: "#FF6421",
                            color: "#ffff",
                            padding: "3px 35px",
                        }}
                    />
                    <Typography variant="h6" fontSize="13px" fontWeight={600}>
                        Sustained inflows into BTC/ETH ETFs — a strong bullish indicator. Institutions are accumulating positions. Supports further growth.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default EtfFlow
