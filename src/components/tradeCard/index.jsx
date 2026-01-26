import { Box, Typography } from '@mui/material'
import { time } from 'framer-motion'
import React from 'react'

const TradingCard = ({ title, value, time, titleColor, valueColor, timeColor, padding }) => {
    return (
        <Box bgcolor={"background.almostBlack"} p={padding || 1} textAlign={"center"} borderRadius={"5px"} mt={1.2}>
            <Box>
                <Typography color={titleColor || 'neutral.brightGreen'} fontWeight={700} fontSize={"16px"}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography color={valueColor || 'text.almostWhite'} fontSize={"13px"}>
                    {value}
                </Typography>
            </Box>
            <Box>
                <Typography color={timeColor || 'text.almostWhite'} fontSize={"12px"}>
                    {time}
                </Typography>
            </Box>
        </Box>
    )
}

export default TradingCard