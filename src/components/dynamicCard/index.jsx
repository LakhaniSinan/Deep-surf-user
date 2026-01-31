import { Box, Typography } from '@mui/material'
import React from 'react'

const DynamicCard = ({ title, percentage, value, titleColor, percentageColor, valueColor, backgroundColor, bodrerColor }) => {
    return (
        <Box bgcolor={backgroundColor || "rgba(239, 68, 68, 0.1)"} borderRadius={"10px"} border={bodrerColor || "1px solid rgba(239, 68, 68, 1)"} p={1} >
            <Box>
                <Typography color={titleColor || 'rgba(239, 68, 68, 1)'} >
                    {title}
                </Typography>
                <Typography color={percentageColor || 'rgba(239, 68, 68, 1)'} fontWeight={600}>
                    {percentage}
                </Typography>
                <Typography color={valueColor || 'rgba(155, 163, 175, 1)'} fontSize={"13px"}>
                    {value}
                </Typography>
            </Box>
        </Box>
    )
}

export default DynamicCard