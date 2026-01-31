import { Box, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'

const WarningTips = () => {
    const warningData = [
        "BTC ↔ ETH: 0.81 - Bad hedge! Both assets move together.",
        " BTC ↔ LINK: 0.85 - Bad hedge! Both assets move together.",
        " BTC ↔ MATIC: 0.92 - Bad hedge! Both assets move together.",
        " BNB ↔ BTC: 0.87 - Bad hedge! Both assets move together.",
        "AVAX ↔ BTC: 0.82 - Bad hedge! Both assets move together."

    ]

    const data = [
        "Correlation > 0.8 = assets move together (bad for diversification)",
        "Correlation < 0.4 = assets are independent (good hedge)",
        "Negative correlation = when one falls, the other rises (perfect hedge)",
        "Example: If you have LONG BTC and correlation with ETH is 0.9, then SHORT ETH won't protect you!",
    ]

    return (
        <>
            <Box bgcolor={"neutral.darkGrey"} p={3} mt={3} borderRadius={"30px"}>
                <Box mt={1}>
                    <HeaderText
                        title={"Warnings and tips"}
                        icon={<img src={ArrowBtn} />}
                        color={"neutral.Snowwhite"}
                    />
                </Box>
                <Box mt={1}>
                    <Typography color={"neutral.Snowwhite"} fontSize={"13px"}>
                        High correlation (0.8):
                    </Typography>
                </Box>
                <Box mt={1.5}>
                    {warningData?.map((item, index) => (
                        <AccordingHeader
                            key={index}
                            tittle={item}
                            fontSize="13px"
                        />
                    ))}
                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={3} mt={3} borderRadius={"30px"}>
                <Box mt={1}>
                    <HeaderText
                        title={"How to use"}
                        icon={<img src={ArrowBtn} />}
                        color={"neutral.Snowwhite"}
                    />
                </Box>
                <Box mt={1.5}>
                    {data.map((item, index) => (
                        <AccordingHeader
                            key={index}
                            tittle={item}
                            fontSize="13px"
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default WarningTips