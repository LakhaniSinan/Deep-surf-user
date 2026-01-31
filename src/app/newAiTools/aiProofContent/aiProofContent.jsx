import { Box, Typography } from '@mui/material';
import React from 'react'

const AiProofContent = () => {
    const button = [
        {
            btnText: "BTC BULLISH"
        },
        {
            btnText: "Correl: 82%"
        },
        {
            btnText: "london ny_overlap"
        },
        {
            btnText: "OI -1%"
        },
        {
            btnText: "F: -0.0017%"
        },
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} borderRadius={"15px"} mt={3} p={2}>
            <Typography color='neutral.cadetGrey' fontSize={"15px"}>
                1h Analysis
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"} mt={1.5}>
                <Box>
                    <Typography color='text.almostWhite' fontWeight={600} fontSize={"20px"}>
                        SOL
                    </Typography>
                    <Typography color='text.almostWhite' fontSize={"30px"} fontWeight={700} >
                        $140,74
                    </Typography>
                </Box>
                <Box>
                    <Typography color='neutral.brightYellow' fontWeight={600} fontSize={"30px"}>
                        HOLD
                    </Typography>
                    <Box bgcolor={"background.almostBlack"} p={0.5} borderRadius={"8px"}>
                        <Typography color='text.almostWhite' fontSize={"13px"} textAlign={"center"} fontWeight={550}>
                            40%
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor={"background.almostBlack"} p={1.5} borderRadius={"10px"} mt={6}>
                <Typography textAlign={"center"} color='neutral.cadetGrey' fontSize={"15px"}>
                    There's no clear signal. Wait for a better entry point.
                </Typography>
            </Box>
            <Box display="flex" gap="10px" flexWrap="wrap" mt={2}>
                {button.map((item, index) => (
                    <Box key={index} display="flex" alignItems="center">
                        <Typography
                            fontWeight={500}
                            width={"130px"}
                            p={0.8}
                            borderRadius="20px"
                            fontSize="12px"
                            textAlign={"center"}
                            sx={{
                                color: item.btnText === "BTC BULLISH" || item.btnText === "london ny_overlap"
                                    ? "text.Emerald"
                                    : "neutral.cadetGrey",
                                bgcolor: item.btnText === "BTC BULLISH" || item.btnText === "london ny_overlap"
                                    ? "background.Emerald"
                                    : "background.almostBlack"
                            }}
                        >
                            {item.btnText}
                        </Typography>
                    </Box>
                ))}
            </Box>



        </Box>
    )
}

export default AiProofContent;