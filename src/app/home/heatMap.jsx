import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../../components/customButton';
import VolumeCard from '../../components/volumeCard';

const HeatMap = ({ data }) => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");

    const buttonData = [
        { id: 1, title: "24h Volume", value: "24h" },
        { id: 2, title: "7d Volume", value: "7d" },
        { id: 3, title: "Volatility", value: "volatility" },
    ];

    // 🔥 YAHI MAIN LOGIC HAI
    const getFilteredData = () => {
        if (selectedTimeframe === "24h") {
            return data?.by24hVolume || [];
        }
        if (selectedTimeframe === "7d") {
            return data?.by7dVolume || [];
        }
        if (selectedTimeframe === "volatility") {
            return data?.byVolatility || [];
        }
        return [];
    };

    const filteredData = getFilteredData();

    return (
        <Box color="neutral.Snowwhite" borderRadius="20px" padding="2px">
            {/* Heading */}
            <Box>
                <Typography fontSize="25px" fontWeight={700}>
                    Heatmap—Volume & Volatility
                </Typography>
                <Typography fontSize="14px" mt={1}>
                    Top coins by trading volume and volatility (AtR/Price).
                </Typography>
            </Box>

            {/* Buttons */}
            <Box
                display="flex"
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap="15px"
                mt="40px"
            >
                {buttonData.map((btn) => (
                    <CustomButton
                        key={btn.id}
                        title={btn.title}
                        fullWidth
                        onClick={() => setSelectedTimeframe(btn.value)}
                        sx={{
                            backgroundColor:
                                selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
                            color:
                                selectedTimeframe === btn.value ? "#000" : "#9C9EA3",
                            borderRadius: "12px",
                            border: "1px solid #9C9EA3",
                        }}
                    />
                ))}
            </Box>

            {/* Title */}
            <Box mt="10px">
                <Typography variant="h6" color="#FFFFFF" width={"100%"}>
                    {selectedTimeframe === "24h"
                        ? "24h Volume"
                        : selectedTimeframe === "7d"
                            ? "7d Volume"
                            : "Volatility"}
                </Typography>
            </Box>

            {/* Grid */}
            <Grid container spacing={2} mt="10px">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 2 }} key={index}>
                            <VolumeCard
                                name={item?.symbol}
                                volume={item?.priceFormatted}
                                percentChange={
                                    selectedTimeframe === "7d"
                                        ? item?.change24hFormatted
                                        : item?.change24hFormatted
                                }
                                isPositive={
                                    selectedTimeframe === "7d"
                                        ? item?.change24h >= 0
                                        : item?.change24h >= 0
                                }
                            />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography
                            textAlign="center"
                            color="rgba(255,255,255,0.5)"
                            fontSize="14px"
                        >
                            No data found
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default HeatMap;
