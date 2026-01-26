import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'

const MftScan = () => {
    return (
        <Box bgcolor={"background.charcoal"} fontSize={"20px"} p={3} borderRadius={"10px"} mt={2}>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                    MTF Scan — Multi-Timeframe Analysis
                </Typography>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} mt={2} borderRadius={"10px"} p={3}>

                <HeaderText
                title={"vnjivbijbvijdl"}
                />
            </Box>
        </Box>
    )
}

export default MftScan