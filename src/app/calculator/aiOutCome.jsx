import { Box, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import MagicIcon from "../../assets/icons/magic-icon.svg"

const AiOutCome = () => {
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"}>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={2} mt={2}>
                <Box>
                    <HeaderText title={"AI Outcome"} btnText={"Load"} color={"neutral.Snowwhite"} tittleFontSize={"25px"} />
                </Box>
                <Box border={"1px solid rgba(195, 195, 195, 1)"} p={2.5} mt={2} borderRadius={"30px"}>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Box display={"flex"} gap="10px" >
                            <Box>
                                <Box display={"flex"} gap={"10px"}>
                                    <img src={MagicIcon} />
                                    <Typography color='neutral.vermilionOrange' fontSize={"18px"}>
                                        AI Recommendation
                                    </Typography>
                                </Box>
                                <Typography color='neutral.brightYellow' fontSize={"30px"} fontWeight={600}>
                                    HOLD
                                </Typography>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    AI Score
                                </Typography>
                            </Box>


                        </Box>
                        <Box textAlign={"right"}>
                            <Typography color='neutral.Snowwhite' fontSize={"15px"} fontWeight={550} letterSpacing={"0.5px"}>
                                Probability of Growth: 0.00
                            </Typography>
                            <Typography color='neutral.Snowwhite'  letterSpacing={"0.5px"} fontSize={"18px"}>
                                Confidence: 0%
                            </Typography>
                            <Typography color='neutral.vermilionOrange'>
                                6293.15%
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default AiOutCome