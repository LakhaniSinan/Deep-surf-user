import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import HeaderText from '../../components/headerText'
import RealodIcon from "../../assets/icons/relaod-Icon.svg"
import AccordingHeader from '../../components/accordingHeader'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import CustomButton from '../../components/customButton'
import CustomCheckbox from '../../components/cutomChecked'


const HeatMap = () => {
    const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
    const heatMapData = [
        " 24h Volume - top coins by 24h trading volume (liquidity)",
        " 7d Volume - sustained interest over the week",
        "Volatility (ATR) - volatility = trading opportunities"
    ]
    const buttonData = [
        { id: 1, title: "24h Volume", value: "24h" },
        { id: 2, title: "7d Volume", value: "7d" },
        { id: 3, title: "Volatility", value: "volatility" },
    ];
    const handleCheckBox = (e) => {
        console.log("kfnvkfnkfnvkjfnvjgbnvkgjlvgb", e.target.value);

    }
    return (
        <Box bgcolor={"background.charcoal"} p={4} borderRadius={"10px"} mt={2}>
            <Box mt={2}>
                <HeaderText
                    title={"Heatmap — Volume & Volatility"}
                    icon={<img src={RealodIcon} />}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={2} mt={4}>
                <Box>
                    <HeaderText
                        title={"How to use Heatmap:"}
                        icon={<img src={ArrowBtn} />}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"15px"}
                        titleFontWeight={400}
                    />
                </Box>
                <Box>
                    {heatMapData.map((item, index) => (
                        <AccordingHeader tittle={item} key={index} />
                    ))}
                </Box>
                <Box mt={3}>
                    <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                        Tip: High volume + high volatility = perfect for scalping and day trading
                    </Typography>
                </Box>
            </Box>
            <Box
                display={"flex"}
                flexWrap={{ xs: "wrap", md: "nowrap" }}
                gap={"15px"}
                marginTop={"40px"}
            >
                {buttonData.map((btn) => (
                    <CustomButton
                        key={btn.id}
                        title={btn.title}
                        fullWidth
                        width={"100%"}
                        onClick={() => setSelectedTimeframe(btn.value)}
                        sx={{
                            backgroundColor:
                                selectedTimeframe === btn.value ? "#FFFFFF" : "#161514",
                            color: selectedTimeframe === btn.value ? "#000" : "rgba(156, 158, 163, 1)",
                            borderRadius: "12px",
                            border: "1px solid rgba(117, 117, 117, 1)",
                        }}
                    />
                ))}
            </Box>
            <Box display={"flex"} gap={"20px"} mt={3} alignItems={'center'}>
                <Box>
                    <Typography color='neutral.Snowwhite'>
                        Filters:
                    </Typography>
                </Box>
                <Box>
                    <CustomCheckbox
                        label="Top-50 only"
                        onChange={handleCheckBox}
                        color={"rgba(255, 255, 255, 0.5)"}
                    />
                    <CustomCheckbox
                        label="High volume (>$100M)"
                        onChange={handleCheckBox}
                        color={"rgba(255, 255, 255, 0.5)"}
                    />
                </Box>
            </Box>

        </Box>
    )
}

export default HeatMap