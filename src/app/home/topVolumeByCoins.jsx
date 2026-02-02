
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import VolumeCard from '../../components/volumeCard';
import { useTranslation } from "react-i18next";

const TopVolumeByCoins = ({ data }) => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    const { t } = useTranslation();
    return (
        <Box borderRadius={"10px"}>
            {/* Header with timeframe buttons */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems="center">
                <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
                    {t("widgets.top10ByVolume.top10ByVolumeTittle")}
                </Typography>

                <Box display="flex" gap={1}>
                    <Box
                        sx={{
                            background: "linear-gradient(190deg, rgba(0, 0, 0, 1), rgba(102, 102, 102, 1))",
                            borderRadius: "20px",
                            px: "3px",
                            py: "4px"
                        }}
                    >
                        <Button
                            onClick={() => setSelectedTimeframe("24h")}
                            sx={{
                                minWidth: "50px",
                                padding: "6px 16px",
                                borderRadius: "20px",
                                textTransform: "none",
                                fontSize: "0.875rem",
                                fontFamily: "Inter Tight",
                                fontWeight: 500,
                                backgroundColor:
                                    selectedTimeframe === "24h" ? "rgba(255, 255, 255, 0.08)" : "transparent",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor:
                                        selectedTimeframe === "24h" ? "#2a2a2a" : "neutral.hover",
                                },
                            }}
                        >
                            {t("widgets.top10ByVolume.24h")}
                        </Button>

                        <Button
                            onClick={() => setSelectedTimeframe("7d")}
                            sx={{
                                minWidth: "50px",
                                padding: "6px 16px",
                                borderRadius: "20px",
                                textTransform: "none",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                backgroundColor:
                                    selectedTimeframe === "7d" ? "rgba(255, 255, 255, 0.08)" : "transparent",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor:
                                        selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
                                },
                            }}
                        >
                            {t("widgets.top10ByVolume.7d")}
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Grid with VolumeCards */}
            <Box mt={2}>
                <Grid container spacing={2}>
                    {(selectedTimeframe === "24h" ? data.by24hVolume : data.by7dVolume)?.map((item, index) => {
                        const volume = selectedTimeframe === "24h" ? item.volumeFormatted : item.volume7dFormatted;
                        const percentChange = selectedTimeframe === "24h" ? item.change24hFormatted : item.change7dFormatted;
                        const isPositive = !percentChange.includes("-");
                        return (
                            <Grid item size={{ xs: 12, sm: 3, md: 4 }} key={index}>
                                <VolumeCard
                                    name={item.symbol}
                                    volume={volume}
                                    percentChange={percentChange}
                                    isPositive={isPositive}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

export default TopVolumeByCoins;
