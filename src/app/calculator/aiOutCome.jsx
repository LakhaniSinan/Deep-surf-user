import { Box, Grid, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import MagicIcon from "../../assets/icons/magic-icon.svg"
import ProgressBar from '../../components/progressBar'

const AiOutCome = () => {
    const planData = [
        {
            name: "Entry:",
            title: "—",
            nameColor: "text.green"
        },
        {
            name: "Stop:",
            title: "—",
            nameColor: "text.red"
        },
        {
            name: "TPs:",
            title: "—",
            nameColor: "text.orange"

        }
    ]
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
                            <Typography color='neutral.Snowwhite' letterSpacing={"0.5px"} fontSize={"18px"}>
                                Confidence: 0%
                            </Typography>
                            <Typography color='neutral.vermilionOrange'>
                                6293.15%
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={1}>
                        <ProgressBar
                            value={72}
                            sx={{
                                backgroundColor: "rgba(217, 217, 217, 1)",
                                "& .MuiLinearProgress-bar": {
                                    backgroundColor: "neutral.vermilionOrange",
                                    borderRadius: 2,
                                },
                            }}
                        />
                    </Box>

                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={'neutral.darkGrey'} p={2} borderRadius={"20px"} height={"200px"}>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Risk Weight
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                                    0.00
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                                    Volatility: σ N/A
                                </Typography>
                            </Box>
                            <Box border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"neutral.darkGrey"} mt={2} borderRadius={"10px"} p={1}>
                                <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                    Position weight considering risk and volatility
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={'neutral.darkGrey'} p={2} borderRadius={"20px"} height={"200px"}>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Plan
                                </Typography>
                            </Box>
                            <Box>
                                {planData.map((item, index) => (
                                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} bgcolor={'neutral.darkGrey'} p={1} borderRadius={"10px"} border={"1px solid rgba(127, 127, 127, 1)"} mt={0.6}>
                                        <Box>
                                            <Typography color={item?.nameColor} fontSize={"13px"}>
                                                {item?.name}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography color='neutral.Snowwhite'>
                                                {item?.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"18px"} mt={3}>
                <Box>
                    <Typography fontSize={"12px"} color='text.coolGrey' fontWeight={400}>
                        How to use: AI analyzes the market and provides a LONG/SHORT/HOLD recommendation. The higher the "Confidence," the stronger the signal. Use a trading plan to enter a position.
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}

export default AiOutCome