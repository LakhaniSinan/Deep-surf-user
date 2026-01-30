import { Box, Typography } from '@mui/material'
import React, { useRef } from 'react'
import CustomButton from '../../components/customButton'
import CreatePresent from './createPresent';

const CuttomPatern = () => {
    const createPresent = useRef();

    return (
        <>
            <Box bgcolor={"background.charcoal"} p={3} borderRadius={"30px"} mt={2} >
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"28px"} fontWeight={600}>
                            Custom Pattern Alerts
                        </Typography>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"} fontWeight={400}>
                            Create your own pattern presets for monitoring
                        </Typography>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                        <Box>
                            <CustomButton title="Create Preset" onClick={() => createPresent.current?.openDialog({ type: "add" })}
                                sx={{ minHeight: "20px", px: "10px", backgroundColor: "neutral.vermilionOrange", color: "neutral.Snowwhite", borderRadius: "15px", fontSize: "15px" }} />
                        </Box>
                        <Box>
                            <CustomButton title="Scan" sx={{ minHeight: "10px", px: "20px", backgroundColor: "background.charcoal", borderRadius: "15px", border: "1px solid rgba(142, 142, 142, 1)" }} />
                        </Box>
                    </Box>
                </Box>
                <Box width={"100%"} border={"0.5px solid rgba(255, 255, 255, 1)"} mt={2}>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                    <Box>
                        <Typography color='neutral.Snowwhite'>
                            Active presets
                        </Typography>
                    </Box>
                    <Box bgcolor={"neutral.vermilionOrange"} borderRadius={"10px"} px={2} py={0.2}>
                        <Typography>
                            0
                        </Typography>
                    </Box>

                </Box>
                <Box textAlign={"center"} mt={5}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                            There are no active presets
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                            Click "Create Preset" to get started
                        </Typography>
                    </Box>
                </Box>
                <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2} mt={6} height={{ xs: "auto", md: "145px" }}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                            Recent triggers
                        </Typography>
                    </Box>
                    <Box textAlign={"center"} mt={0}>
                        <Typography color='neutral.Snowwhite' fontSize={"13px"} mt={4}>
                            Alerts will appear here when presets are triggered.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <CreatePresent ref={createPresent} />
        </>
    )
}

export default CuttomPatern