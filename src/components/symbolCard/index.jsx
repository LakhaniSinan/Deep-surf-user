import { Box, Typography } from '@mui/material'
import React from 'react'
import ProgressBar from '../progressBar'

const SymbolCard = ({ title, value, change, progressBar, color, titleFontSize, valueFontSize, changeTextColor }) => {
    return (
        <Box bgcolor={"background.charcoal"} p={2} height={"150px"} borderRadius={"15px"} mt={2}>
            <Box>
                <Typography color={color || "neutral.Snowwhite"} fontSize={titleFontSize || "18px"}>
                    {title}
                </Typography>
                <Typography color={color || "neutral.Snowwhite"} fontSize={valueFontSize || "26px"} fontWeight={600}>
                    {value}
                </Typography>
                {
                    progressBar
                    &&
                    <Box mt={1.5}>
                        {progressBar}
                    </Box>
                }

                <Typography color={changeTextColor || 'neutral.brightGreen'} fontSize={"13px"} mt={2.1}>
                    {change}
                </Typography>
            </Box>
        </Box>
    )
}

export default SymbolCard