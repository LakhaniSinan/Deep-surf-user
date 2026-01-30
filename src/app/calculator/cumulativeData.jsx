import { Box, Typography } from '@mui/material'
import React from 'react'

const CumulativeData = () => {
    return (
        <Box bgcolor={"neutral.darkGrey"} p={3} mt={2} borderRadius={"15px"} height={"462px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"16px"} letterSpacing={"1px"}>
                    Cumulative Delta
                </Typography>
            </Box>
        </Box>
    )
}

export default CumulativeData