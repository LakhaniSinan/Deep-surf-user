import { Box, Grid, Typography } from '@mui/material'
import Check from "../../assets/icons/checkBtn.svg";
import CancelIcon from "../../assets/icons/cancelBtn.svg";
import Warning from "../../assets/icons/warningIcon.svg";
import fire from "../../assets/icons/fireIcon.svg";

const IndicatorAnalysis = () => {
    const indicatorData = [
        {
            icon: Check,
            title: "MACD Bullish"
        },
        {
            icon: Check,
            title: "Strong upward structure (HH+HL)"
        },
        {
            icon: Warning,
            title: "Close liquidation zone LONG (-2.0%) - price magnet"
        },
        {
            icon: CancelIcon,
            title: "RSI Overbought"
        },
        {
            icon: Check,
            title: "Supertrend: Bullish trend"
        },
        {
            icon: Warning,
            title: "Close liquidation zone SHORT (+2.0%) - price magnet"
        },
        {
            icon: Check,
            title: "MACD Bullish"
        },
        {
            icon: CancelIcon,
            title: "Strong resistance nearby"
        },
        {
            icon: CancelIcon,
            title: "Price at upper BB"
        },
        {
            icon: fire,
            title: "Strong resistance nearby"
        }
    ]
    return (
        <Box mt={1} bgcolor={"neutral.darkGrey"}>
            {
                indicatorData.map((item, index) => (
                    <Box>
                        <Grid container spacing={1}>
                            <Grid item size={{ xs: 12, md: 12 }}>
                                <Box key={index} display={"flex"} gap={"10px"} alignItems={"center"} mt={2}>
                                    <Box>
                                        <img src={item.icon} style={{ width: "22px" }} />
                                    </Box>
                                    <Box>
                                        <Typography >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ))
            }

        </Box>

    )
}

export default IndicatorAnalysis
