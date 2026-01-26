import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/customButton'
import EffectIcon from "../../assets/icons/effects.svg"
import ArrowDropDownIcon from "../../assets/icons/arrow-drop-icon.svg"
import ArrowLeftIcon from "../../assets/icons/arrow-left-icon.svg"
import RecycleIcon from "../../assets/icons/recycle-icon.svg"
import ArrowUpIcon from "../../assets/icons/arrow-up-icon.svg"
import Market from './aiMarketRegion/market'

const AiMarketRegion = () => {
    return (
        <>
            <Box bgcolor={"background.charcoal"} p={"20px"} borderRadius={"20px"} mt={3}>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    gap={{ xs: 2, sm: 0 }}
                >
                    {/* Title */}
                    <Box>
                        <Typography
                            color="neutral.Snowwhite"
                            fontSize={{ xs: "16px", sm: "20px" }}
                            fontWeight={650}
                        >
                            AI Market Regime + Transition Detector
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box
                        display="flex"
                        gap="10px"
                        flexWrap="wrap"
                        width={{ xs: "100%", sm: "auto" }}
                        justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                        alignItems={"center"}
                    >
                        <Box bgcolor={"neutral.darkGrey"} justifyContent={"center"} alignItems={"center"} display={"flex"} gap={"40px"} p={1.2} border={"1px solid rgba(127, 127, 127, 1)"} borderRadius={"10px"} width={"130px"}>
                            <Box>
                                <Typography color='neutral.Snowwhite'>
                                    BTC
                                </Typography>
                            </Box>
                            <Box>
                                <img src={ArrowDropDownIcon} style={{ color: 'red' }} />
                            </Box>
                        </Box>
                        <CustomButton
                            icon={<img src={EffectIcon} style={{ width: "20px" }} />}
                            title="Full analysis"
                            width={{ xs: "100%", sm: "auto" }}
                            sx={{
                                backgroundColor: "rgba(255, 100, 33, 1)",
                                fontSize: { xs: "14px", sm: "15px" },
                                borderRadius: "15px",
                            }}
                        />
                    </Box>
                </Box>
                <Container maxWidth="lg">
                    <Box bgcolor={"neutral.darkGrey"} mt={3} p={2} borderRadius={"10px"}>
                        <Typography color='neutral.Snowwhite' fontWeight={600}>
                            Wyckoff Cycle:
                        </Typography>
                        <Box display={"flex"} gap={"20px"} alignItems={"center"} mt={2}>
                            <Box border={"1px solid rgba(158, 158, 158, 1)"} p={1} width={"150px"} borderRadius={"20px"} textAlign={"center"}>
                                <Typography color='neutral.Snowwhite'>
                                    Accumulation
                                </Typography>
                            </Box>
                            <Box>
                                <img src={ArrowLeftIcon} />
                            </Box>
                            <Box border={"1px solid rgba(158, 158, 158, 1)"} p={1} width={"150px"} borderRadius={"20px"} textAlign={"center"}>
                                <Typography color='neutral.Snowwhite'>
                                    Markup
                                </Typography>
                            </Box>
                            <Box>
                                <img src={ArrowLeftIcon} />
                            </Box>
                            <Box border={"1px solid rgba(158, 158, 158, 1)"} p={1} width={"150px"} borderRadius={"20px"} textAlign={"center"}>
                                <Typography color='neutral.Snowwhite'>
                                    Distribution
                                </Typography>
                            </Box>
                            <Box>
                                <img src={ArrowLeftIcon} />
                            </Box>
                            <Box border={"1px solid rgba(158, 158, 158, 1)"} p={1} width={"150px"} borderRadius={"20px"} textAlign={"center"}>
                                <Typography color='neutral.Snowwhite' fontWeight={600}>
                                    Markdown
                                </Typography>
                            </Box>
                            <Box>
                                <img src={RecycleIcon} style={{ width: "25px" }} />
                            </Box>
                            <Typography color='neutral.Snowwhite' fontSize={"18px"} fontWeight={550}>
                                Cycle repeats
                            </Typography>
                        </Box>

                    </Box>
                </Container>
                <Box display={"flex"} justifyContent={"center"} mt={7}>
                    <Box mt={1}>
                        <img src={ArrowUpIcon} style={{ width: "90px", height: "90px" }} />
                    </Box>
                </Box>
                <Box textAlign={"center"}>
                    <Typography color="neutral.Snowwhite" fontSize={"23px"} fontWeight={600} letterSpacing={1}>
                        AI Market Regime + Transition Detector
                    </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={"10px"} mt={3}>
                    <CustomButton
                        title={"Wyckoff Phase Detection"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}
                    />
                    <CustomButton
                        title={"Multi-Timeframe Analysis"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}

                    />
                    <CustomButton
                        title={"Transition Probability"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}
                    />
                    <CustomButton
                        title={"Stress Points Alert"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px",
                            // color : "rgba(127, 127, 127, 1)"
                        }}
                    />
                </Box>
                <Box>
                    <Typography color="rgba(127, 127, 127, 1)" fontSize={"15px"} fontWeight={400} textAlign={"center"} mt={2} lineHeight={"20px"}>
                        Market mode analysis at LOCAL (4h, 8h, 1d) and GLOBAL (7d, 1m, 3m, 6m) levels <br /> with detection of stress points and phase change forecast
                    </Typography>
                </Box>
                <Box>
                    <Market />
                </Box>
            </Box>
        </>
    )
}

export default AiMarketRegion