import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import EtfFlowIcon from "../../assets/icons/bitcoin-logo.svg"
import EthIcon from "../../assets/icons/eth-icon.svg"
import CustomButton from '../../components/customButton'
const EtfFlow = ({ data }) => {
    console.log("efuefgegfuegfegfegufe", data);


    const etfFlow = [
        {
            iocn: EtfFlowIcon,
            title: "BTC ETF",
            description1: data?.btcETF?.priceChange24h,
            description2: data?.btcETF?.flowDescription,
            color: "rgba(62, 221, 135, 1)"
        },
        {
            iocn: EthIcon,
            title: "BTC ETF",
            description1: data?.btcETF?.priceChange24h,
            description2: data?.btcETF?.flowDescription,
            color: "rgba(62, 221, 135, 1)"

        },
        {
            iocn: null,
            title: "Trend",
            description1: data?.trendAnalysis,
            description2: null,
            color: "rgba(62, 221, 135, 1)"
        }
    ]
    return (
        <Box  color={"neutral.Snowwhite"}  borderRadius={"20px"} padding={"2px"}>
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
                                            <Typography mt={1} color={item?.description1?.includes("-") ? "neutral.dangerRed" : "neutral.primaryGreen"} fontWeight={600}>
                                                {item?.description1}
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
                        title={data?.conclusion?.label}
                        sx={{
                            borderRadius: "20px",
                            width: { xs: "100%", md: "100%" },
                            backgroundColor: "#FF6421",
                            color: "#ffff",
                            padding: "3px 35px",
                        }}
                    />
                    <Typography variant="h6" fontSize="13px" fontWeight={600}>
                        {data?.conclusion?.message}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default EtfFlow
