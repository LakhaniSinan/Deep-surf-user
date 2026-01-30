import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'
import CustomButton from '../../components/customButton'

const PlayBookBuilder = () => {
    const playBook = [
        "Condition Examples:",
        "Uptrend + RSI < 40 = pullback in a bullish trend",
        "High volatility + volume > 150% = potential breakout",
        "Funding > 0.1% + Long/Short ratio > 60% = overheating for shorts"
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography fontSize={"22px"} color='neutral.Snowwhite' fontWeight={550}>
                            Playbook Builder
                        </Typography>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                        <Box>
                            <CustomButton
                                title="New Playbook"
                                sx={{
                                    py: "6px",
                                    px: "12px",
                                    minHeight: "32px",
                                    backgroundColor: "neutral.vermilionOrange",
                                    borderRadius: "10px",
                                    color: "neutral.Snowwhite"
                                }}
                            />
                        </Box>
                        <Box>
                            <CustomButton
                                title={"Refresh"}
                                sx={{
                                    py: "6px",
                                    px: "18px",
                                    minHeight: "32px",
                                    backgroundColor: "neutral.vermilionOrange",
                                    color: "neutral.Snowwhite"
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box mt={1}>
                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"12px"}>
                        What is a Playbook?
                    </Typography>
                    <Typography color='neutral.coolGray' fontSize={"12px"}>
                        A playbook is a set of rules and conditions for entering a trade. The system automatically finds matches with your criteria.
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default PlayBookBuilder