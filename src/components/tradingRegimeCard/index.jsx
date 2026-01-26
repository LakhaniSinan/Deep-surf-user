import { Box, Grid, Typography } from '@mui/material'
import AiPumpScannerIcon from "../../assets/icons/ai-pump-scanner.svg"

import React from 'react'

const TradingRegimeCard = () => {
    return (
        <Box bgcolor={"background.almostBlack"} p={2} mt={2} borderRadius={"10px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"18px"}>
                    LOCAL REGIME (short-term)
                </Typography>
            </Box>
            <Box textAlign={"center"} mt={3}>
                <Box>
                    <img src={AiPumpScannerIcon} style={{ width: "60px" }} />
                </Box>
                <Box>
                    <Typography color='neutral.Snowwhite' fontWeight={700} fontSize={"25px"}>
                        MARKUP
                    </Typography>
                    <Typography fontSize={"13px"} color='neutral.cadetGrey'>
                        Alignment: 67%
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box bgcolor={"rgba(239, 68, 68, 0.13)"} border={"1px solid rgba(239, 68, 68, 1)"} textAlign={"center"} borderRadius={"15px"} p={1}>
                            <Box>
                                <Typography>
                                    4H
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    DISTRIBUTION
                                </Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    70%
                                </Typography>
                            </Box>


                        </Box>

                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default TradingRegimeCard