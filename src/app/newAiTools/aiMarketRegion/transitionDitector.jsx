import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../../components/headerText'
import ProgressBar from '../../../components/progressBar'
import StresPoint from './stresPoint'

const TransitionDitector = () => {
    return (
        <>
            <Box border={"2px solid rgba(16, 185, 129, 1)"} p={2} mt={2} borderRadius={"10px"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Box>
                        <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"20px"}>
                            Transition Detector
                        </Typography>
                    </Box>
                    <Box bgcolor={"background.Emerald"} borderRadius={"30px"} textAlign={"center"} p={1.5}>
                        <Typography fontSize={"12px"} color='neutral.Snowwhite' fontWeight={700}>
                            STABLE - Low Transition Risk
                        </Typography>
                    </Box>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box bgcolor={"rgba(37, 37, 37, 1)"} p={2} borderRadius={"10px"} maxHeight={"120px"}>
                                <Box textAlign={"center"}>
                                    <Typography color='neutral.cadetGrey' fontSize={"14px"}>
                                        Transition Probability
                                    </Typography>
                                </Box>
                                <Box textAlign={"center"} >
                                    <Typography color={"background.Emerald"} fontSize={"41px"} fontWeight={600}>
                                        5%
                                    </Typography>
                                </Box>
                                <Box>
                                    <ProgressBar
                                        value={5}
                                        sx={{
                                            backgroundColor: "rgba(18, 20, 29, 0.85)",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: "rgba(16, 185, 129, 1)",
                                            },
                                        }}
                                    />

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box bgcolor={"rgba(37, 37, 37, 1)"} p={2} borderRadius={"10px"} maxHeight={"120px"}>
                                <Box textAlign={"center"}>
                                    <Typography color='neutral.cadetGrey' fontWeight={600}>
                                        Next Phase
                                    </Typography>
                                </Box>
                                <Box textAlign={"center"} mt={4.5}>
                                    <Typography color='background.carmineRed' fontSize={"15px"} fontWeight={600}>
                                        DISTRIBUTION
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box bgcolor={"rgba(37, 37, 37, 1)"} p={2} borderRadius={"10px"} maxHeight={"120px"}>
                                <Box textAlign={"center"}>
                                    <Typography color='neutral.cadetGrey' fontSize={"12px"}>
                                        Estimated Timeframe
                                    </Typography>
                                </Box>
                                <Box textAlign={"center"} mt={0.8}>
                                    <Typography color='text.almostWhite' fontWeight={600} fontSize={"20px"}>
                                        2+ weeks
                                    </Typography>
                                </Box>
                                <Box textAlign={"center"} >
                                    <Typography color='neutral.cadetGrey' fontSize={"15px"}>
                                        until probable transition
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                <StresPoint />
            </Box>
        </>
    )
}

export default TransitionDitector