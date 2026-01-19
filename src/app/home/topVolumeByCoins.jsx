import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import VolumeCard from '../../components/volumeCard';

const TopVolumeByCoins = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
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
        <Box bgcolor={"rgba(28, 28, 28, 1)"} p={2} mt={2} borderRadius={"10px"}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
                    Top 10 by volume
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
                            24h
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
                                    selectedTimeframe === "7d" ? "#2a2a2a" : "transparent",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor:
                                        selectedTimeframe === "7d" ? "#2a2a2a" : "neutral.hover",
                                },
                            }}
                        >
                            7d
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    {topVolumeByCoins?.map((item, index) => (
                        <Grid item size={{ xs: 6, sm: 3, md: 2.4 }} key={index}>
                            <VolumeCard
                                name={item.name}
                                volume={item.volumeFormatted}
                                percentChange={item.changeFormatted}
                                isPositive={item?.changeFormatted?.includes("-") ? false : true}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </Box>
    )
}
export default TopVolumeByCoins
