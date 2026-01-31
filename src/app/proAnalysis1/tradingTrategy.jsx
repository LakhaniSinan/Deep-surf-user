import { Box, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'

const TradingTrategy = () => {
    const revisionTradeData = [
        "The spread usually collapses to 0 within 1-6 hours.",
        "If Last > Mark (+spread) → open SHORT.",
        "If Last < Mark (-spread) → open LONG.",
        "Target: the spread narrows to 0.1-0.2%."
    ]
    const riskManagementData = [
        "Use low leverage (5-10×) - the spread may temporarily widen.",
        "Stop-loss: if the spread increases >50% from the initial.",
        "Take-profit: when the spread narrows to 0.2% or reverses."
    ]
    const factorData = [
        "Funding Rate: If funding is high and against you, factor this into your calculations.",
        "Volume: High volume = easier to enter/exit.",
        "24h Change: Strong movement can increase the spread."
    ]
    const warningData = [
        "The spread may widen before collapsing.",
        "Don't forget about fees (0.06% × 2 = 0.12%).",
        "Works better in low volatility."
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} mt={2} p={2} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Trading Strategy"}
                    tittleFontSize={"20px"}
                    titleFontWeight={550}
                    color={"neutral.Snowwhite"}
                    icon={<img src={ArrowBtn} />}
                />
            </Box>
            <Box mt={1}>
                <Typography color={"neutral.Snowwhite"} fontWeight={600} fontSize={"15px"}>
                    1. Mean Reversion Trade:
                </Typography>
                <Box>
                    {revisionTradeData?.map((item) => (
                        <AccordingHeader
                            tittle={item}
                            fontSize={"12px"}
                        />
                    ))}
                </Box>
            </Box>
            <Box mt={2}>
                <Typography color={"neutral.Snowwhite"} fontWeight={400} fontSize={"15px"}>
                    Risk Management:
                </Typography>
                <Box>
                    {riskManagementData?.map((item) => (
                        <AccordingHeader
                            tittle={item}
                            fontSize={"12px"}
                        />
                    ))}
                </Box>
            </Box>
            <Box mt={2}>
                <Typography color={"neutral.Snowwhite"} fontWeight={400} fontSize={"15px"}>
                    Important factors:
                </Typography>
                <Box>
                    {factorData?.map((item) => (
                        <AccordingHeader
                            tittle={item}
                            fontSize={"12px"}
                        />
                    ))}
                </Box>
            </Box>
            <Box mt={2}>
                <Typography color={"neutral.Snowwhite"} fontWeight={400} fontSize={"15px"}>
                    Warnings:
                </Typography>
                <Box>
                    {warningData?.map((item) => (
                        <AccordingHeader
                            tittle={item}
                            fontSize={"12px"}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default TradingTrategy