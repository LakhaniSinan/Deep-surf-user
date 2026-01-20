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
import CryptoEventsSkeleton from "../../components/skeleton/home/cryptoEvents.jsx";
import WhalesTrackersSkeleton from "../../components/skeleton/home/whalesTrackers.jsx";
// import EtfFlow from "./ethFlow";

const AddCoins = ({ data, isLoading, ticker, setTicker, onSearch }) => {
    console.log("fhugfuegfuiegfuegfuiegfueigf", data);

    const widgetStyle = {
        background: "#151515",
        borderRadius: "16px",
        padding: "16px",
        height: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };


    const NoDataFound = ({ text = "No data found" }) => (
        <Box
            height="150px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="neutral.vermilionOrange"
            fontSize="20px"
        >
            {text}
        </Box>
    );


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
                    {data.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={index}>
                            <Box sx={widgetStyle}>
                                {item?.widgetId === "whales-tracker" && (
                                    isLoading ? (
                                        <WhalesTrackersSkeleton />
                                    ) : !item?.data ? (
                                        <NoDataFound />
                                    ) : (
                                        <WhalesTrackers data={item?.data} />
                                    )
                                )}


                                {item?.widgetId === "top-coins" && (isLoading || !item?.data ? <TopCoinsComponentSkeleton /> : <TopCoinsComponent data={item?.data} />)}
                                {item?.widgetId === "crypto-events" && (
                                    isLoading ? (
                                        <CryptoEventsSkeleton />
                                    ) : (
                                        <CryptoEvents data={item?.data} />
                                    )
                                )}

                                {item?.widgetId === "etf-flow" && <EtfFlow data={item?.data} />}
                                {item?.widgetId === "market-overview" && <Metricsdata data={item?.data} />}
                                {item?.widgetId === "heat-map" && <HeatMap data={item?.data} />}
                                {item?.widgetId === "future-metrics" && <MacroEconomics data={item?.data} />}
                                {item?.widgetId === "top-by-volume" && <TopVolumeByCoins data={item?.data} />}
                                {item?.widgetId === "ai-proof" && (
                                    <AiProof
                                        data={item?.data}
                                        ticker={ticker}
                                        setTicker={setTicker}
                                        onSearch={onSearch}
                                        isLoading={isLoading}
                                    />
                                )}
                                {item?.widgetId === "future-matric" && <FutureMatric data={item?.data} />}
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>


            {/* <Box width="100%" mt={2}>
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
            </Box> */}

            {/* <Box width={"100%"} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <WhalesTrackers  />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box sx={widgetStyle}>
                            <HeatMap />
                        </Box>
                    </Grid>
                </Grid>
            </Box> */}
            {/* <Box width={"100%"} mt={2}>
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
            </Box> */}
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