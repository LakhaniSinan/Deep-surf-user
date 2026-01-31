import { Box, Typography } from '@mui/material'
import RocketIocn from "../../../assets/images/rocket-icon.png"
const StrategyRecomendation = () => {
    return (
        <>
            <Box bgcolor={"background.almostBlack"} p={3} mt={2} borderRadius={"10px"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                        Strategy Recommendation
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"15px"} p={2} alignItems={"flex-start"}>
                    <Box>
                        <img src={RocketIocn} />
                    </Box>
                    <Box>
                        <Typography color='text.almostWhite' fontSize={"15px"}>
                            Trade with the trend
                        </Typography>
                        <Typography color='neutral.cadetGrey'>
                            Longs on dips. Avoid shorts against the trend. Use trailing stop.
                        </Typography>

                    </Box>
                </Box>
            </Box>
            <Box bgcolor={"background.almostBlack"} mt={2} p={1} borderRadius={"10px"}>
                <Box display={"flex"} justifyContent={"center"}>
                    <Typography color='neutral.cadetGrey' fontSize={"13px"}>
                        <span style={{ color: "rgba(155, 163, 175, 1)" }}>⚠️</span> Not financial advice. Practice risk management.
                    </Typography>
                </Box>

            </Box>
        </>
    )
}

export default StrategyRecomendation