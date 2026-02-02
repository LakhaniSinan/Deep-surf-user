import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import CustomInput from '../../components/customInput'
import SearchIcon from "../../assets/icons/Vector.svg"
import HeatMap from './heatMap'
import { useTranslation } from "react-i18next";

const MftScan = () => {
    const { t } = useTranslation();
    const mftscanData = [
        "15m - short-term trend and entry points",
        "1h - main working timeframe",
        "4h - medium trend and support/resistance zones",
        "1d - long-term trend and global direction"
    ]
    const coinName = [
        {
            name: "BTC",
        },
        {
            name: "ETH",
        },
        {
            name: "SOL",
        },
        {
            name: "BNB",
        },
        {
            name: "ARB",
        },
        {
            name: "DOGE",
        }

    ]
    return (
        <>
            <Box bgcolor={"background.charcoal"} fontSize={"20px"} p={3} borderRadius={"10px"} mt={2}>
                <Box mt={2}>
                    <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                        {t("proAnalytices.mtfScan")}
                    </Typography>
                </Box>
                <Box bgcolor={"neutral.darkGrey"} mt={2} borderRadius={"35px"} p={3}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box>
                            <Typography color='neutral.Snowwhite' fontSize={"15px"} fontWeight={600}>
                                {t("proAnalytices.whatIsMtfAnalysis")}
                            </Typography>
                            <Typography color='neutral.coolGray' fontSize={"12px"}>
                                24 hours BEFORE: Close 50% of positions with high leverage (10x). Set alerts at $59k and $63k.
                            </Typography>
                        </Box>
                        <Box>
                            <img style={{ fill: "#fff" }} src={ArrowBtn} />
                        </Box>
                    </Box>
                    <Box mt={2}>
                        {mftscanData.map((item) => (
                            <Box display="flex" alignItems="flex-start" gap="10px" mt={1} >

                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        backgroundColor: "#fff",
                                        mt: "6px",
                                        flexShrink: 0,
                                    }}
                                />

                                {/* Text */}
                                <Typography fontSize="13px" color="neutral.Snowwhite">
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box mt={3}>
                        <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                            How to use: If all 4 timeframes show same direction (Confluence 75%+) = strong signal!
                        </Typography>
                    </Box>
                </Box>
                <Box bgcolor={"neutral.darkGrey"} p={3} borderRadius={"35px"} mt={2}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"25px"}>
                            {t("proAnalytices.enterCoinTicker")}
                        </Typography>
                    </Box>
                    <Box mt={3}>
                        <CustomInput
                            placeholder="ETH"
                            InputEndIcon={<img src={SearchIcon} />}
                            type="text"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    border: "0.1px solid rgba(127, 127, 127, 1)",
                                    borderRadius: "20px",
                                }
                            }}
                        />
                    </Box>
                    <Box display={"flex"} gap={"10px"} mt={2} alignItems={"center"}>
                        <Box>
                            <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                {t("proAnalytices.quickSelect")}
                            </Typography>
                        </Box>
                        {coinName.map((item, index) => (
                            <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"rgba(28, 28, 28, 1)"}>
                                <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                                    {item.name}
                                </Typography>

                            </Box>

                        ))}

                    </Box>

                </Box>
            </Box>

        </>
    )
}

export default MftScan