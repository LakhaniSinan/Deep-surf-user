import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/customButton'
import { Description } from '@mui/icons-material'

const Pattern = () => {
    const paternData = [
        {
            title: "Double Top",
            symbol: "Bearish pattern",
            Description: "Double Top at 3762.80, Support 3692.96, Target 3623.12",
            btnText: "$3623.12"
        }
    ]
    return (
        <Box mt={1}>
            <Box display={"flex"} gap={"25px"} alignItems={"center"}>
                <Box>
                    <Typography fontSize={"25px"}>
                        Pattern Recognition
                    </Typography>
                </Box>
                <Box>
                    <CustomButton
                        title="2 found"
                        sx={{
                            backgroundColor: "rgba(22, 21, 20, 1)",
                            color: "neutral.Snowwhite",
                            border: "1px solid rgba(255, 255, 255, 1)",
                            borderRadius: "15px",
                        }}
                    />

                </Box>

            </Box>
        </Box>
    )
}
export default Pattern
