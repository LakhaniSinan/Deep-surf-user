import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomSwitch from '../../../components/switch'
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'

const Interigation = () => {

    return (
        <Box p={1}>
            <Box>
                <Typography fontSize={"25px"} color='neutral.Snowwhite' fontWeight={600} letterSpacing={"1px"}>
                    Integrations
                </Typography>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"}>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"18px"} fontWeight={550}>
                                        Telegram
                                    </Typography>
                                    <Typography color='neutral.brightGreen' fontSize={"12px"}>
                                        Connected
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomSwitch checked={false} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"}>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"18px"} fontWeight={550}>
                                        Discord
                                    </Typography>
                                    <Typography color='neutral.brightGreen' fontSize={"12px"}>
                                        Connected
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomSwitch checked={false} />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2} mt={2}>
                <Box>
                    <Typography fontSize={"18px"} fontWeight={600} color='neutral.Snowwhite'>
                        Email integration
                    </Typography>
                </Box>
                <Box>
                    <Typography fontSize={"12px"} fontWeight={500}>
                        Set up email notifications
                    </Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 10 }}>
                            <Box>
                                <CustomInput placeholder="myemailishere@email.com" />
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box>
                                <CustomButton
                                    title="Change"
                                    sx={{
                                        backgroundColor: "neutral.vermilionOrange",
                                        py: "2px",
                                        px: "36px",
                                        minHeight: "40px",
                                        fontSize: "15px",
                                        bodrerRadius: "15px"
                                    }}
                                />
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Interigation