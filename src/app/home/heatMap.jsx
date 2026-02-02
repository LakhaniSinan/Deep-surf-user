import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../../components/customButton';
import VolumeCard from '../../components/volumeCard';
import { useTranslation } from "react-i18next";
const HeatMap = ({ data }) => {
    const { t } = useTranslation();
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    const buttonData = [
        { id: 1, title: t("widgets.heatMap.volume24h"), value: "24h" },
        { id: 2, title: t("widgets.heatMap.volume7d"), value: "7d" },
        { id: 3, title: t("widgets.heatMap.volatility"), value: "volatility" },
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
                    {t("widgets.heatMap.heatMapTittle")}
                </Typography>
                <Typography fontSize="14px" mt={1}>
                    {t("widgets.heatMap.topCoinsDescription")}
                </Typography>
            </Box>

            {/* Buttons */}
            <Box
                display="flex"
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap="5px"
                mt="40px"
                width="100%"
            >
                {buttonData.map((btn) => (
                    <Box key={btn.id} flex={1}>
                        <CustomButton
                            title={btn.title}
                            onClick={() => setSelectedTimeframe(btn.value)}
                            sx={{
                                width: "100%", // 🔴 important
                                backgroundColor:
                                    selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
                                color:
                                    selectedTimeframe === btn.value ? "#000" : "#9C9EA3",
                                borderRadius: "12px",
                                border: "1px solid #9C9EA3",
                            }}
                        />
                    </Box>
                ))}
            </Box>


            {/* Title */}
            <Box mt="10px">
                <Typography variant="h6" color="#FFFFFF" width={"100%"}>
                    {selectedTimeframe === "24h"
                        ? t("widgets.heatMap.volume24h")
                        : selectedTimeframe === "7d"
                            ? t("widgets.heatMap.volume7d")
                            : t("widgets.heatMap.volatility")}
                </Typography>
            </Box>

            {/* Grid */}
            <Grid container spacing={2} mt="10px">
                {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <VolumeCard
                                name={item?.symbol}
                                volume={item?.priceFormatted}
                                percentChange={
                                    selectedTimeframe === "7d"
                                        ? item?.change7dFormatted
                                        : item?.change24hFormatted
                                }
                                isPositive={
                                    selectedTimeframe === "7d"
                                        ? item?.change7d >= 0
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
