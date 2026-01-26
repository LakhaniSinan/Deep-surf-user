import { Box, Typography } from '@mui/material'
import React from 'react'

const AccordingHeader = ({ tittle }) => {
    return (
        <Box mt={2}>

            <Box display="flex" alignItems="flex-start" gap="10px" mt={0.2} >

                <Box
                    sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        mt: "6px",
                        flexShrink: 0,
                    }}
                />

                {/* Text */}
                <Typography fontSize="12px" color="neutral.Snowwhite">
                    {tittle}
                </Typography>
            </Box>
        </Box>
    )
}

export default AccordingHeader