import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
import TopCoins from "../../assets/icons/top-coin1.svg";
import TopCoinsGraphy from "../../assets/icons/top-coin-graph.svg";
import UsdtIcon from "../../assets/icons/top-coin2.svg";
import CustomInput from "../../components/customInput";
import AiProof from "./aiProof";
import TechnicalIndicator from "./techinalIndicator";
import TopVolumeByCoins from "./topVolumeByCoins";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CryptoEvents from "./cryptoEvents";
import EtfFlow from "./etfFlow";
import Metricsdata from "./metricData";
import WhalesTrackers from "./whalesTrackers";
import HeatMap from "./heatMap";
import TopCoinsComponent from "./topCoins.jsx";
// import EtfFlow from "./ethFlow";


const AddCoins = ({ data }) => {
    console.log(data, "asdasdasdadasd");

    const widgetStyle = {
        background: "#151515",
        borderRadius: "16px",
        padding: "16px",
        height: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };

    const macroData = [
        {
            title: "US Unemployment Rate Thursday, February 5 at 07:00 PM",
            value: "Forecast: 4.4% (previous 4.5%)",
            description: "Impact: Positive for risk assets",
            icon: StarIcon,
            heading: "Unemployment decreased from 4.5% to 4.4%, indicating labor market strength.",
        },
        {
            title: "US CPI Data Friday, February 13 at 06:30 PM",
            value: "Forecast: 2.8% (previous 2.9%)",
            description: "Impact: Moderately positive for risk assets",
            icon: StarIcon,
            heading: "Inflation cooling down, supporting potential Fed rate cuts.",
        },
    ];

    const leftCoins = [
        {
            title: "BTC",
            symbol: "Bitcoin",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$59,333",
            value2: "+2.45%",
        },
        {
            title: "ETH",
            symbol: "Ethereum",
            icon: UsdtIcon,
            graphyIcon: TopCoinsGraphy,
            value1: "$3,245",
            value2: "+1.89%",
        },
        {
            title: "BNB",
            symbol: "Binance Coin",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$425",
            value2: "-0.67%",
        },
        {
            title: "SOL",
            symbol: "Solana",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$145",
            value2: "+3.21%",
        },
        {
            title: "XRP",
            symbol: "Ripple",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$0.89",
            value2: "-0.45%",
        },

    ];

    // 🪙 Right Column Coins (5 entries)
    const rightCoins = [
        {
            title: "USDT",
            symbol: "Tether",
            icon: UsdtIcon,
            graphyIcon: TopCoinsGraphy,
            value1: "$1.00",
            value2: "0.01%",
        },
        {
            title: "ADA",
            symbol: "Cardano",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$0.52",
            value2: "+1.25%",
        },
        {
            title: "DOGE",
            symbol: "Dogecoin",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$0.08",
            value2: "+2.15%",
        },
        {
            title: "AVAX",
            symbol: "Avalanche",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$38.50",
            value2: "-0.95%",
        },
        {
            title: "DOT",
            symbol: "Polkadot",
            icon: TopCoins,
            graphyIcon: TopCoinsGraphy,
            value1: "$5.28",
            value2: "-0.89%",
        },
    ];

    return (
        <>
            {/* <Box>
                <Grid container spacing={2}>
                    {
                        data.map((item) => {
                            console.log(item.widgetId, "itemitemitemitem");
                            return (
                                <Grid item size={{ xs: 12, md: 6 }} >
                                    <Box color={"white"}>
                                        {item.widgetId === "top-coins" &&
                                            // <div style={{color:"pink"}}>Sasd</div>
                                            <TopCoinsComponent />

                                        }
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box > */}
            <Box width="100%" mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Box sx={widgetStyle}>
                            <AiProof />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <TopVolumeByCoins />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <CryptoEvents />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                        <EtfFlow />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box width={"100%"}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <CryptoEvents />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <EtfFlow />
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <Metricsdata />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <WhalesTrackers />
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <HeatMap />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <WhalesTrackers />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddCoins;