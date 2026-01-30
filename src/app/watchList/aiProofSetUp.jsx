import { Box, MenuItem, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'
import CustomButton from '../../components/customButton'
import CustomSelect from '../../components/customSelect'

const AiProofSetUp = () => {
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"30px"} mt={2} height={"274px"}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"28px"} fontWeight={600}>
                        AI Proof Setups
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                    <Box>
                        <CustomButton title="Stats" sx={{ minHeight: "10px", px: "20px", backgroundColor: "neutral.vermilionOrange", borderRadius: "10px" }} />
                    </Box>
                    <Box>
                        <CustomButton title="Clear Expired" sx={{ minHeight: "20px", px: "10px", backgroundColor: "background.charcoal", border: "1px solid rgba(142, 142, 142, 1)", color: "rgba(142, 142, 142, 1)", borderRadius: "10px", fontSize: "15px" }} />
                    </Box>
                </Box>
            </Box>
            <Box width={"100%"} border={"0.5px solid rgba(255, 255, 255, 1)"} mt={1.5}>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={2} alignItems={"center"}>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                    <Box>
                        <Typography color='neutral.Snowwhite'>
                            Filter:
                        </Typography>
                    </Box>
                    <Box>
                        <CustomSelect sx={{ width: "90px", height: "40px", borderRadius: "5px" }} placeholder='All'>
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Active ">Active </MenuItem>
                            <MenuItem value="Closed by TP">Closed by TP</MenuItem>
                            <MenuItem value="Closed by SL">Closed by SL</MenuItem>
                            <MenuItem value="Expired">Expired</MenuItem>
                        </CustomSelect>
                    </Box>
                    <Box>
                        <Typography color='neutral.Snowwhite'>
                            Sort:
                        </Typography>
                    </Box>
                    <Box>
                        <CustomSelect sx={{ width: "120px", height: "40px", borderRadius: "5px" }} placeholder='All'>
                            <MenuItem value="Newest">Newest</MenuItem>
                            <MenuItem value="Oldest ">Oldest </MenuItem>
                            <MenuItem value="Symbol">Symbol</MenuItem>
                            <MenuItem value="Setup Class">Setup Class</MenuItem>
                        </CustomSelect>
                    </Box>

                </Box>
                <Box>
                    <Typography color='neutral.steelGrey' fontSize={"18px"}>
                        0 setups
                    </Typography>

                </Box>

            </Box>
            <Box mt={10} textAlign={"center"}>
                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                    No saved setups. Save the setup from the AI ​​Proof analysis.
                </Typography>
            </Box>
        </Box>
    )
}

export default AiProofSetUp