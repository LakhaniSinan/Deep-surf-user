import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Speedometer from '../../components/speedMeter'
import DropDownIcon from "../../assets/icons/Arrow.svg";
import EthIcon from "../../assets/icons/eth-icon.svg";
import BtcIcon from "../../assets/icons/bitcoin-logo.svg";
import SolanaIcon from "../../assets/icons/solana-sol-icon.svg";
const Metricsdata = ({ data }) => {
    console.log("fuuegfuefefgfuhfeugfegfeuf", data);

    const cardStyle = {
        backgroundColor: "#1a1a1a",
        padding: "20px",
        borderRadius: "14px",
        color: "#fff",
        height: "170px",
    };
    return (
        <Box mt={0.5} color={"neutral.Snowwhite"} backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"}>
            <Typography color='neutral.Snowwhite' fontSize={"25px"} fontWeight={600}>
                Market Data & Metrics
            </Typography>
            <Box mt="10px">
                <Grid container spacing={1}>
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }}>
                        <Card sx={cardStyle}>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: "neutral.Snowwhite",
                                    textAlign: "center",
                                    display: "block",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    fontFamily: "inter Tight"
                                }}
                            >
                                Fear and Greed Index
                            </Typography>
                            <Typography variant="h6" textAlign="center" color="neutral.brightYellow" fontFamily="inter Tight" fontSize={"25px"}>
                                Neutral
                            </Typography>
                            <Box textAlign={"center"} mt={"-15px"}>
                                <Speedometer
                                    size={50}
                                    score={data?.fearGreedIndex?.value}
                                />
                            </Box>
                        </Card>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Card sx={cardStyle}>
                            <Typography
                                variant="h6"
                                fontWeight={600}
                                fontFamily={"inter Tight"}
                                color="neutral.Snowwhite"
                            >
                                BTC Dominance
                            </Typography>
                            <Box display="flex" gap="15px" alignItems={"center"}>
                                <Typography fontSize="30px" fontWeight={600} variant="h6" mt={2}>
                                    {data?.btcDominance?.value}
                                </Typography>
                                <Typography fontSize="30px " mt={2}>
                                    <img src={DropDownIcon} alt="" />
                                </Typography>
                            </Box>
                            <Typography color="neutral.Snowwhite" fontWeight={500}>
                                Stable
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Card sx={cardStyle}>
                            <Box display="flex" gap="10px" alignItems={"center"}>
                                <Box alignItems={"center"}>
                                    <img src={BtcIcon} alt="" />
                                </Box>
                                <Typography
                                    variant="caption"
                                    fontWeight={600}
                                    color="neutral.Snowwhite"
                                    fontSize={"15px"}
                                >
                                    BTC 24h
                                </Typography>
                            </Box>
                            <Typography
                                fontSize="25px"
                                fontWeight={520}
                                variant="h6"
                                mt={4}
                                fontFamily={"inter Tight"}

                            >
                                {data?.prices24h?.btc?.price}
                            </Typography>
                            <Typography sx={{ color: data?.prices24h?.btc?.change?.includes("-") ? "red" : "green", fontSize: "14px" }}>
                                {data?.prices24h?.btc?.change}
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Card sx={cardStyle}>
                            <Box display="flex" gap="10px" alignItems={"center"}>
                                <Box>
                                    <img src={EthIcon} alt="" />
                                </Box>
                                <Typography
                                    variant="caption"
                                    fontWeight={600}
                                    color="neutral.Snowwhite"
                                    fontSize={"15px"}
                                >
                                    ETH 24h
                                </Typography>
                            </Box>
                            <Typography
                                fontSize="25px"
                                fontWeight={520}
                                variant="h6"
                                mt={4}
                                fontFamily={"inter Tight"}
                            >
                                {data?.prices24h?.eth?.price}
                            </Typography>
                            <Typography sx={{ color: data?.prices24h?.btc?.change?.includes("-") ? "red" : "green", fontSize: "14px" }}>
                                {data?.prices24h?.eth?.change}
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                        <Card sx={cardStyle}>
                            <Box display="flex" gap="10px">
                                <Box>
                                    <img src={SolanaIcon} alt="" />
                                </Box>
                                <Typography
                                    variant="caption"
                                    fontWeight={600}
                                    color="neutral.Snowwhite"
                                    fontSize={"15px"}
                                >
                                    SOL 24h
                                </Typography>
                            </Box>
                            <Typography
                                fontSize="25px"
                                fontWeight={520}
                                variant="h6"
                                mt={5}
                                fontFamily={"inter Tight"}
                            >
                                {data?.prices24h?.sol?.price}
                            </Typography>
                            <Typography sx={{ color: data?.prices24h?.btc?.change?.includes("-") ? "red" : "green", fontSize: "14px" }}>
                                {data?.prices24h?.sol?.change}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box padding="1px" borderRadius="25px" mt="20px">
                <Grid container spacing={3}>
                    <Grid
                        item
                        backgroundColor="neutral.darkGrey"
                        padding="20px"
                        borderRadius="10px"
                        size={{ xs: 12, sm: 12 }}
                    >
                        <Box
                            display="flex"
                            gap="8px"
                            marginTop="10px"
                            marginLeft={"45px"}
                            alignItems={"center"}
                        >
                            <img src={BtcIcon} alt="" />

                            <Typography variant="h2" fontFamily={"inter Tight"}
                                fontSize="23px" fontWeight={550} color="neutral.Snowwhite"
                            >
                                BTC ETF Flows
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-around" mt={2}>
                            <Box>
                                <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                                    {data?.etfFlowsSummary?.btc?.today?.label}
                                </Typography>
                                <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                                    {data?.etfFlowsSummary?.btc?.today?.amount}
                                </Typography>
                                <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                                    {data?.etfFlowsSummary?.btc?.today?.usdValue}
                                </Typography>
                            </Box>
                            <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                            <Box>
                                <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                                    {data?.etfFlowsSummary?.btc?.in2Days?.label}
                                </Typography>
                                <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                                    {data?.etfFlowsSummary?.btc?.in2Days?.amount}
                                </Typography>
                                <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                                    {data?.etfFlowsSummary?.btc?.in2Days?.usdValue}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        backgroundColor="#1C1C1C"
                        padding="20px"
                        borderRadius="10px"
                        size={{ xs: 12, sm: 12 }}
                    >
                        <Box
                            display="flex"
                            gap="8px"
                            marginTop="10px"
                            marginLeft={"45px"}
                        >
                            <img src={EthIcon} alt="" />

                            <Typography variant="h2" fontFamily={"inter Tight"}
                                fontSize="23px" fontWeight={550} color="neutral.Snowwhite"
                            >
                                ETH ETF Flows
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-around" mt={2}>
                            <Box>
                                <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                                    {data?.etfFlowsSummary?.eth?.today?.label}
                                </Typography>
                                <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                                    {data?.etfFlowsSummary?.eth?.today?.amount}
                                </Typography>
                                <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                                    {data?.etfFlowsSummary?.eth?.today?.usdValue}
                                </Typography>
                            </Box>
                            <Box height="100px" width="1px" backgroundColor="#8D8D8D"></Box>
                            <Box>
                                <Typography variant="h4" fontWeight={500} fontSize="15px" marginTop="10px">
                                    {data?.etfFlowsSummary?.eth?.in2Days?.label}
                                </Typography>
                                <Typography variant="h4" marginTop="10px" fontWeight={600} fontSize="20px">
                                    {data?.etfFlowsSummary?.eth?.in2Days?.amount}
                                </Typography>
                                <Typography variant="h4" fontSize="15px" fontWeight={550} marginTop="10px">
                                    {data?.etfFlowsSummary?.eth?.in2Days?.usdValue}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Metricsdata
