import { Box, Typography } from '@mui/material'
import React from 'react'
import ProgressBar from '../../components/progressBar'

const VolumeProfileData = () => {
    const volumeData = [
        { value: "95499.00", percentage: "499.00", progress: 56 },
        { value: "95499.00", percentage: "499.00", progress: 90 },
        { value: "95499.00", percentage: "499.00", progress: 24 },
        { value: "95499.00", percentage: "499.00", progress: 75 }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} height={"233px"} borderRadius={"20px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                    Volume Profile (recent)
                </Typography>
            </Box>
            <Box mt={1}>
                {volumeData.map((item, index) => (
                    <Box key={index}>
                        <Box display="flex" justifyContent="space-between">
                            <Box color={"rgba(157, 157, 157, 1)"} fontSize={"13px"} fontWeight={500}>{item.value}</Box>
                            <Box color={"rgba(157, 157, 157, 1)"} fontSize={"13px"} fontWeight={500}>{item.percentage}</Box>
                        </Box>
                        <Box mt={1}>
                            <ProgressBar
                                value={item.progress}
                                height="5"
                                sx={{
                                    backgroundColor: "rgba(151, 151, 151, 1)",
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: "neutral.vermilionOrange",
                                        borderRadius: 2,
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default VolumeProfileData