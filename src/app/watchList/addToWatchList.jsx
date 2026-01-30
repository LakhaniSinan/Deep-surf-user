import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'
import CustomButton from '../../components/customButton'

const AddToWatchList = () => {
    return (
        <Box bgcolor={"neutral.darkGrey"} borderRadius={"30px"} mt={3} p={1.5}>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"22px"} fontWeight={600}>
                    Add to Watchlist:
                </Typography>
            </Box>
            <Box width={"100%"} border={"0.5px solid rgba(255, 255, 255, 1)"} mt={1.5}>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography color='neutral.Snowwhite'>
                                Symbol
                            </Typography>
                        </Box>
                        <Box mt={0.5}>
                            <CustomInput placeholder="BTC,ETH,SOL..."
                                inputBgColor={"rgba(22, 22, 22, 1)"}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "5px",
                                        border: "0.3px solid rgba(127, 127, 127, 1)"
                                    },
                                    "& .MuiInputBase-input": {
                                        borderRadius: "10px",
                                        backgroundColor: "background.charcoal"
                                    },
                                    "&  .MuiInputBase-input": {
                                        py: "8px"
                                    }
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography>
                                Alert Type
                            </Typography>
                        </Box>
                        <Box mt={0.5}>
                            <CustomSelect sx={{ backgroundColor: "background.charcoal", borderRadius: "10px", "& .MuiTypography-root": { color: "neutral.Snowwhite" } }} placeholder='Price'></CustomSelect>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography>
                                Alert Type
                            </Typography>
                        </Box>
                        <Box mt={0.5}>
                            <CustomSelect sx={{ backgroundColor: "background.charcoal", borderRadius: "10px", "& .MuiTypography-root": { color: "neutral.Snowwhite" } }} placeholder='Cross'></CustomSelect>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography>
                                Symbol
                            </Typography>
                        </Box>
                        <Box mt={0.5}>
                            <CustomInput
                                placeholder="-0.01"
                                inputBgColor={"red"}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "5px",
                                        border: "0.3px solid rgba(127, 127, 127, 1)"
                                    },
                                    "& .MuiInputBase-input": {
                                        borderRadius: "10px",
                                        backgroundColor: "background.charcoal"
                                    },
                                    "&  .MuiInputBase-input": {
                                        py: "8px"
                                    }
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={2}>
                <CustomButton title={"Cancel"} sx={{ backgroundColor: "neutral.darkGrey", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 1)", minHeight: "10px", py: "10px", px: "30px" }} />
            </Box>
        </Box>
    )
}

export default AddToWatchList