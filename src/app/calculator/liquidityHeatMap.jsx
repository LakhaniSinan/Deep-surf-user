import { Box, Typography } from '@mui/material'
import React from 'react'

const LiquidityHeatMap = () => {
    return (
        <Box bgcolor={"neutral.darkGrey"} p={3} mt={2} borderRadius={"15px"} height={"300px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"16px"}>
                    Liquidity Heatmap (Top 10)
                </Typography>
            </Box>
            <Box
                position="relative"
                height="230px"
            >
                <Box
                    position="absolute"
                    bottom={0} 
                    left={"100px"}
                    width="100%"
                    fontSize={"11px"}  
                    color={"text.coolGrey"} 
                >
                    Топ-10 уровней с максимальной ликвидностью (поддержки/сопротивления)
                </Box>
            </Box>

        </Box>
    )
}

export default LiquidityHeatMap