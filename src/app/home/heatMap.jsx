import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomButton from '../../components/customButton';
import VolumeCard from '../../components/volumeCard';

const HeatMap = ({ data }) => {
    console.log("efheufeufguefgegfefyefyuge", data);

    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    const buttonData = [
        { id: 1, title: "24h Volume", value: "24h" },
        { id: 2, title: "7d Volume", value: "7d" },
        { id: 3, title: "Volatility", value: "volatility" },
    ];
    const getFilteredData = () => {
        if (selectedTimeframe === "24h") {
            // return data?.heatMap?.by24hVolume;
        } else if (selectedTimeframe === "7d") {
            // return data?.heatMap?.by7dVolume;
        } else if (selectedTimeframe === "volatility") {
            // return data?.heatMap?.byVolatility;
        }
    };
    const topVolumeByCoins = [
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        },
        {
            name: "ALPACA",
            volumeFormatted: "$2.9B",
            changeFormatted: "391.2%"

        }
    ]
    return (
        <Box mt={2} color={"neutral.Snowwhite"} backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"}  >
            <Box>
                <Typography color="neutral.Snowwhite" fontSize={"25px"} fontWeight={700}>
                    Heatmap—Volume & Volatility
                </Typography>
                <Typography color="neutral.Snowwhite" fontSize={"14px"} mt={1}>
                    Top coins by trading volume and volatility (AtR/Price). Helps to find active trading instruments.
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap={"15px"}
                marginTop={"40px"}
            >
                {buttonData.map((btn) => (
                    <CustomButton
                        key={btn.id}
                        title={btn.title}
                        fullWidth
                        width={"100%"}
                        onClick={() => setSelectedTimeframe(btn.value)}
                        sx={{
                            backgroundColor:
                                selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
                            color: selectedTimeframe === btn.value ? "#000" : "#9C9EA3",
                            borderRadius: "12px",
                            border: "1px solid #9C9EA3",
                        }}
                    />
                ))}
            </Box>
            <Box mt={"20px"}>
                <Typography variant="h6" color="#FFFFFF">
                    {selectedTimeframe === "24h"
                        ? "24h Volume"
                        : selectedTimeframe === "7d"
                            ? "7d Volume"
                            : "Volatility"
                    }
                </Typography>
            </Box>
            <Grid container spacing={2} marginTop={"20px"}>
                {data?.map((item, index) => (
                    <Grid
                        item
                        size={{ xs: 6, sm: 4, md: 6 }}
                        key={index}
                    // sx={{ flexBasis: "20%" }}
                    >
                        <VolumeCard
                            name={item?.symbol}
                            volume={"$" + item?.price}
                            // percentChange={
                            //     selectedTimeframe === "24h"
                            //         ? item?.change24hFormatted
                            //         : item?.change24hFormatted                          
                            // }
                            percentChange={item.volume24h.toFixed(2) + "%"}
                            isPositive={
                                selectedTimeframe === "24h"
                                    ? item?.change24h >= 0
                                    : selectedTimeframe === "7d"
                                        ? item?.change24h >= 0
                                        : item?.change24h >= 0
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default HeatMap;
