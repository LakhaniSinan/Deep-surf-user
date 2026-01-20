import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ArroWBtn from "../../assets/icons/arrow-down-icon.svg"

const IctLiquidityLevel = ({ data }) => {
    console.log("feohfuegfuegfugfufuoefhif", data?.[0]?.priceFormatted);

    const liquidityLevelData = [
        {
            icon: ArroWBtn,
            title: data?.[0]?.priceFormatted
        },
        {
            icon: ArroWBtn,
            title: data?.[1]?.priceFormatted
        },
        {
            icon: ArroWBtn,
            title :data?.[2]?.priceFormatted
        },
        {
            icon: ArroWBtn,
            title: data?.[3]?.priceFormatted
        }
    ]
    return (
        <Box mt={3}>
            <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
                ICT Liquidity Levels
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: "10px", bgcolor: "neutral.darkGrey", borderRadius: "20px", p: 2 }}>
                {liquidityLevelData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            borderRadius: 1,
                            padding: 0.5,
                            cursor: 'pointer',

                        }}
                    >
                        {/* Icon */}
                        <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                            <img src={item.icon} />
                        </Box>

                        {/* Text */}
                        <Typography
                            sx={{
                                color: 'neutral.brightGreen',
                                fontSize: { xs: '14px', md: '16px' },
                                fontWeight: 500
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
export default IctLiquidityLevel
