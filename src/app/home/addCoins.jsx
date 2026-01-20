import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
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
import MacroEconomics from "./macroEconomics.jsx";
import TopCoinsComponentSkeleton from "../../components/skeleton/home/topCoinsSkeleton.jsx";
import FutureMatric from "./futureMatric.jsx";
// import EtfFlow from "./ethFlow";


const AddCoins = ({ data , isLoading }) => {
    const isTopCoins = data.find((item) => item.widgetId === "top-coins");
    const TopCoinsData = isTopCoins?.data;
    const widgetStyle = {
        background: "#151515",
        borderRadius: "16px",
        padding: "16px",
        height: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };




    return (
        <>
            {/* <Box width="100%">
                <Grid container spacing={2}>
                    {data.map((item) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={item.widgetId}>
                            <Box color="neutral.Snowwhite" sx={widgetStyle}>
                                {item?.widgetId === "top-coins" && (
                                    <TopCoinsComponent data={data} />
                                )}
                            </Box>
                        </Grid>
                    ))}

                    <Grid item size={{ xs: 12, md: 6 }} >
                        <Box color="neutral.Snowwhite" sx={widgetStyle}>
                            <MacroEconomics />
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
            <Box width="100%" mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            {isLoading ? (
                                <TopCoinsComponentSkeleton />
                            ) : (
                                <TopCoinsComponent data={TopCoinsData} />
                            )}
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <MacroEconomics />
                        </Box>
                    </Grid>
                </Grid>
            </Box>


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

            <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <WhalesTrackers />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <HeatMap />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <FutureMatric />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <Metricsdata />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <HeatMap />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
        </>
    );
};

export default AddCoins;