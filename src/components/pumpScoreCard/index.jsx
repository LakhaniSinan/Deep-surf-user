import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../customButton'
import ArrowIcon from "../../assets/icons/Arrow.svg"

const PumpScoreCard = ({ title, value, btnText, number, PumpScore, potential, icon, btnBackground, numberTextColor, bgColor, potentialTextColor }) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} >
            <Box display={"flex"} gap={"10px"}>
                <Box mt={2}>
                    <Typography color='text.almostWhite' fontSize={"32px"} fontWeight={600}>
                        {title || "PROM"}
                    </Typography>
                    <Typography color='neutral.cadetGrey' fontSize={"35px"} fontWeight={700}>
                        {value || "$3.99"}
                    </Typography>
                </Box>
                <Box mt={2}>
                    <CustomButton
                        title={btnText || "MEDIUM"}
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: btnBackground || "background.yellowGreen",
                            width: "150px",
                            fontSize: "13px"
                        }}
                    />
                </Box>
            </Box>

            <Box bgcolor={"background.almostBlack"} width={"192px"} borderRadius={"13px"} textAlign={"center"} p={1.5} height={"170px"}>
                <Typography fontSize={"35px"} fontWeight={700} color={numberTextColor || 'text.yellowGreen'}>
                    {number || 42}
                </Typography>
                <Typography color='neutral.Snowwhite' fontSize={"15px"} mt={2}>
                    {PumpScore || "Pump Score"}
                </Typography>
                <Box display={"flex"} gap={"5px"} justifyContent={"center"} mt={1.2} bgcolor={bgColor || "rgba(62, 221, 135, 0.15)"} borderRadius={"5px"} p={0.8}>
                    <Box>
                        <img src={icon || ArrowIcon} style={{ width: "13px" }} />
                    </Box>
                    <Box color={potentialTextColor || "neutral.brightGreen"}>
                        <Typography fontSize='15px'>
                            {potential || "290% potential"}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PumpScoreCard