import { Box, Chip, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../../components/customButton'
import EffectIcon from "../../assets/icons/effects.svg"
import AnalysisIcon from "../../assets/icons/search-analysis-iocn.svg"
import CoinAnanlysis from "../../assets/icons/coin-analysis.svg"
import CustomInput from '../../components/customInput'
import AiProofContent from './aiProofContent/aiProofContent'
import AiScore from './aiProofContent/aiScore'
import BitcoinMarket from './aiProofContent/bitcoinMarket'
import OrderFlowFunding from './aiProofContent/orderFlowFunding'
import LiquidationZone from './aiProofContent/liquidationZone'
import TechnicalIndicator from './aiProofContent/technicalIndicator'
import AllAnalysisSignal from './aiProofContent/allAnanlysisSignal'

const AiProof = () => {
    const [showContent, setShowContent] = useState(false);
    const buttonData = [
        {
            title: "15m"
        },
        {
            title: "1h"
        },
        {
            title: "4h"
        },
        {
            title: "8h"
        },
        {
            title: "1D"
        },
        {
            title: "7D"
        },

    ]
    const handleAnalyze = () => {
        setShowContent(true) // button click pe content show kare
    }

    return (
        <Box bgcolor={"background.charcoal"} p={"20px"} borderRadius={"20px"} mt={3}>
            <Box>
                <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"20px"}>
                    AI Proof — Quick coin verification
                </Typography>
                {/* <Box borderBottom={"0.5px solid rgba(127, 127, 127, 1)"} mt={2}>
                </Box> */}
                <Box borderRadius={"12px"}>
                    <Typography color='rgba(127, 127, 127, 1)' fontWeight={400} fontSize={"13px"}>
                        Deep AI analysis of any coin in seconds. Enter ticker, get full breakdown and recommendation.
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={1}>
                        <Grid item size={{ xs: 12, md: 10 }}>
                            {/* <Box border={"1px solid rgba(127, 127, 127, 1)"} borderRadius={"12px"} mt={2} p={1.5}> */}
                            {/* <Typography color='rgba(127, 127, 127, 1)' fontWeight={400}>
                                    BTC,ETH,SOL...
                                </Typography> */}
                            <Box mt={1.2} p={1}>
                                <CustomInput placeholder="BTC,ETH,SOL..." />
                            </Box>
                            {/* </Box> */}
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <CustomButton
                                    variant='analyzeButton'
                                    icon={<img src={EffectIcon} style={{ width: "30px", height: "30px" }} />}
                                    title="Analyze"
                                    onClick={handleAnalyze}
                                    radius={18}
                                    sx={{
                                        fontSize: "18px"
                                    }}

                                />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>

                <Box display={"flex"} gap={"10px"} mt={2}>
                    <Box>
                        <Typography color='rgba(127, 127, 127, 1)' fontSize={"20px"} fontWeight={600}>
                            Timeframe:
                        </Typography>
                    </Box>
                    <Box
                        display={"flex"} gap={"8px"} flexWrap={"wrap"}
                    >
                        {buttonData.map((item) => (
                            <Chip
                                key={item.title}
                                label={item.title}
                                sx={{
                                    color: "rgba(148, 150, 154, 1)",
                                    border: "1px solid rgba(127, 127, 127, 1)",
                                    borderRadius: "50px"
                                }}
                            />
                        ))}
                    </Box>

                </Box>
                {/* Image + Text — hide when button clicked */}
                {!showContent && (
                    <>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={10}>
                            <img src={CoinAnanlysis} style={{ width: "82px", height: "79px" }} />
                        </Box>
                        <Box mt={0.5}>
                            <Typography textAlign={"center"} color='rgba(127, 127, 127, 1)' fontWeight={600} letterSpacing={1}>
                                Enter a coin ticker for analysis
                            </Typography>
                        </Box>
                    </>
                )}
                <Box>
                    {showContent && <AiProofContent />}
                    {showContent && <AiScore />}
                    {showContent && <BitcoinMarket />}
                    {showContent && <OrderFlowFunding />}
                    {showContent && <LiquidationZone />}
                    {showContent && <TechnicalIndicator /> }
                    {showContent && <AllAnalysisSignal />}


                </Box>
            </Box>

        </Box>
    )
}
export default AiProof
