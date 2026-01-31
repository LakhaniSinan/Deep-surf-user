import { Box, Grid, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderText from '../../components/headerText'
import CustomSelect from '../../components/customSelect'
import CustomInput from '../../components/customInput'
import AddToWatchList from './addToWatchList'

const MyCoinAlert = () => {
    const [showAddForm, setShowAddForm] = useState(false)
    return (
        <Box bgcolor={"background.charcoal"} borderRadius={"30px"} p={2} mt={2}>
            <Box>
                <HeaderText
                    title={"My Coins & Alerts"}
                    titleFontWeight={500}
                    tittleFontSize={"25px"}
                    btnText={"+Add New"}
                    btnFontSize={"15px"}
                    btnWidth={"100px"}
                    onClick={() => setShowAddForm(true)}
                />
            </Box>
            <Box width={"100%"} border={"0.5px solid rgba(255, 255, 255, 1)"} mt={1}>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={1} mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 2 }}>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                            <Box>
                                <Typography color='rgba(127, 127, 127, 1)' fontSize={"15px"}>
                                    Sort:
                                </Typography>
                            </Box>
                            <Box>
                                <CustomSelect placeholder='Change' sx={{ width: "110px", height: "45px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(127, 127, 127, 1)" }}>
                                    <MenuItem value="Name A-Z">Name A-Z</MenuItem>
                                    <MenuItem value="Name Z-A">Name Z-A</MenuItem>
                                    <MenuItem value="Price ↑">Price ↑</MenuItem>
                                    <MenuItem value="Price ↓">Price ↓</MenuItem>
                                    <MenuItem value="Change ↑">Change ↑</MenuItem>
                                    <MenuItem value="Change ↓">Change ↓</MenuItem>
                                    <MenuItem value="Volume↓">Volume↓</MenuItem>
                                    <MenuItem value="Recently Added">Recently Added</MenuItem>
                                </CustomSelect>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2 }}>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                            <Box>
                                <Typography color='rgba(127, 127, 127, 1)'>
                                    Filter:
                                </Typography>
                            </Box>
                            <Box >
                                <CustomSelect placeholder='Change' sx={{ width: "110px", height: "45px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(127, 127, 127, 1)" }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                            <Box>
                                <Typography color='rgba(127, 127, 127, 1)'>
                                    Search:
                                </Typography>
                            </Box>
                            <Box width={"100%"}>
                                <CustomInput sx={{
                                    "& .MuiOutlinedInput-root": {
                                        border: "1px solid rgba(127, 127, 127, 1)",
                                        borderRadius: "5px",
                                        padding: "2px"
                                    }
                                }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 2 }}>
                        <Box display={"flex"} gap={"50px"} justifyContent={"center"} alignItems={"center"} mt={1}>
                            <Box>
                                <Typography color='rgba(127, 127, 127, 1)'>
                                    0 Items
                                </Typography>
                            </Box>
                            <Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Empty state */}
            {!showAddForm && (
                <Box display="flex" justifyContent="center" mt={10}>
                    <Typography color="neutral.Snowwhite">
                        Watchlist is empty. Add coins to track!
                    </Typography>
                </Box>
            )}

            {/* Add form */}
            {showAddForm && (
                <Box>
                    <AddToWatchList />
                </Box>
            )}

            <Box border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"} mt={10}>
                <Box >
                    <Typography color='neutral.Snowwhite' fontSize={"15px"} letterSpacing={"1px"}>
                        Alerts work in real time via WebSocket! Receive instant notifications when conditions are met.
                    </Typography>
                </Box>

            </Box>
        </Box >
    )
}

export default MyCoinAlert