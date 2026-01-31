import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/customButton'
import RelaodIcon from "../../assets/icons/relaod-Icon.svg"
import ExportIcon from "../../assets/icons/export-icon.svg"
import FearAndGreedIndex from './fearAndGreedIndex'

const MarketMetricData = () => {
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Typography fontSize='25px' fontWeight={600}>
                        Market Data & Metrics
                    </Typography>
                    <Typography fontSize={"15px"} color='neutral.Snowwhite'>
                        Real-time market intelligence & institutional flows
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                    <CustomButton title={"Refresh"} icon={<img src={RelaodIcon} style={{ width: "25px", height: "25px" }} />} sx={{ backgroundColor: "neutral.vermilionOrange", color: "neutral.Snowwhite", fontSize: "17px", px: "15px", py: "5px", borderRadius: "10px", border: "1px solid rgba(127, 127, 127, 1)" }} />
                    <CustomButton title={"Export"} icon={<img src={ExportIcon} />} sx={{ backgroundColor: "rgba(72, 72, 72, 0.5)", color: "neutral.Snowwhite", fontSize: "17px", px: "15px", py: "5px", borderRadius: "10px", border: "1px solid rgba(127, 127, 127, 1)" }} />
                </Box>
            </Box>
            <FearAndGreedIndex />
        </Box>
    )
}

export default MarketMetricData