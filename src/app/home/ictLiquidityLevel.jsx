import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ArroWBtn from "../../assets/icons/arrow-down-icon.svg"

const IctLiquidityLevel = () => {
    const liquidityLevelData = [
        {
            icon: ArroWBtn,
            title: "Sell-Side Liquidity: $3 818,81"
        },
        {
            icon: ArroWBtn,
            title: "Sell-Side Liquidity: $3 818,81"
        },
        {
            icon: ArroWBtn,
            title: "Sell-Side Liquidity: $3 818,81"
        },
        {
            icon: ArroWBtn,
            title: "Sell-Side Liquidity: $3 818,81"
        }
    ]
    return (
        <Box mt={1}>
            <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={500}>
                ICT Liquidity Levels
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: "10px", bgcolor: "rgba(28, 28, 28, 1)" }}>
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
                            transition: 'all 0.3s ease',

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
                                fontSize: { xs: '14px', md: '15px' },
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
