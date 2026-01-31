import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../../components/headerText'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"
import ProgressBar from '../../../components/progressBar'


const AiScore = () => {
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} mt={2} borderRadius={"10px"}>
            <HeaderText
                title={"AI Score & Probability"}
                subtile={"F · 40%"}
                icon={<img src={DrowpDownIcon} />}
            />
            <Box display={"flex"} gap={"25px"} mt={2} alignItems={"center"}>
                <Box>
                    <Typography color='text.carmineRed' fontSize={"40px"} fontWeight={600}>
                        40
                    </Typography>
                </Box>
                <Box flex={1} alignItems={"center"} mt={3}>
                    <Typography color='neutral.cadetGrey' fontSize={"15px"}>
                        Win Probability
                    </Typography>
                    <Box mt={1}>
                        <ProgressBar
                            value={43}
                        />
                    </Box>
                </Box>



            </Box>
            <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography color='neutral.cadetGrey' fontSize={"16px"}>
                        Trend Misalignment
                    </Typography>
                </Box>
                <Box>
                    <Typography color='text.carmineRed' fontWeight={600}>
                        -10
                    </Typography>
                </Box>

            </Box>
            <Box mt={2} bgcolor={"background.almostBlack"} p={1.5} borderRadius={"8px"}>
                <Typography color='text.almostWhite'>
                    There's no clear signal. Wait for a better entry point.
                </Typography>
            </Box>
        </Box>
    )
}

export default AiScore