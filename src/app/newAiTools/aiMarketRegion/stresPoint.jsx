import { Box, Typography } from '@mui/material'
import React from 'react'

const StresPoint = () => {
    return (
        <Box bgcolor={"background.almostBlack"} p={3} mt={2} borderRadius={"10px"} height={{ xs: "auto", md: "307px" }}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                <Box>
                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"20px"}>
                        Stress Points
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                    <Box >
                        <Typography fontSize={"12px"} color='rgba(155, 163, 175, 1)'>
                            Total Stress:
                        </Typography>
                    </Box>
                    <Box bgcolor={"background.Emerald"} borderRadius={"15px"} textAlign={"center"} p={1} width={"70px"}>
                        <Typography fontSize={"12px"} color='neutral.Snowwhite' fontWeight={700}>
                            0/100
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box mt={13} display={"flex"} justifyContent={"center"}>
                <Typography color='neutral.cadetGrey' fontSize={"15px"} fontWeight={400} letterSpacing={"1px"}>
                    No active stress points — the market is stable
                </Typography>
            </Box>
        </Box>
    )
}

export default StresPoint