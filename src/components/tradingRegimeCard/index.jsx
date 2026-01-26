import { Box, Typography } from '@mui/material'
import AiPumpScannerIcon from "../../assets/icons/ai-pump-scanner.svg"

import React from 'react'

const TradingRegimeCard = () => {
    return (
        <Box bgcolor={"background.almostBlack"} p={2} mt={2} borderRadius={"10px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"18px"}>
                    LOCAL REGIME (short-term)
                </Typography>
            </Box>
            <Box textAlign={"center"} mt={3}>
                <Box>
                    <img src={AiPumpScannerIcon} style={{width : "60px"}} />
                </Box>
                <Box>
                    <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"20px"}>
                        MARKUP
                    </Typography>
                       <Typography fontSize={"20px"}>
                        Alignment: 67%
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TradingRegimeCard