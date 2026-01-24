import { Box, Typography } from '@mui/material'
import React from 'react'

const VolumeProfitCard = ({ name, value, backgroundColor, border }) => {
    return (
        <Box>
            <Box textAlign={"center"}>
                <Box border={border} bgcolor={backgroundColor} p={0.5} borderRadius={"2px"}>
                    <Typography color='neutral.cadetGrey' fontSize={"14px"}>
                        {name}
                    </Typography>
                    <Typography color='neutral.Snowwhite' fontSize={"13px"} fontWeight={600}>
                        {value}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default VolumeProfitCard