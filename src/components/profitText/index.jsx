import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../customButton'

const ProfitText = () => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} mt={2} alignItems={"center"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"14px"}>
                    Short Entry / Stop / Take Profit:
                </Typography>
            </Box>
            <Box>
                <CustomButton
                    title="Save idea"
                    width='140px'
                    sx={{ backgroundColor: "neutral.vermilionOrange" }}
                />
            </Box>

        </Box>
    )
}

export default ProfitText