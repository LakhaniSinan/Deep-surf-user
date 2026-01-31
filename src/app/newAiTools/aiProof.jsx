import React, { useState } from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import CustomInput from "../../components/customInput";
import EffectIcon from "../../assets/icons/effects.svg";
import AnalysisIcon from "../../assets/icons/search-analysis-iocn.svg";
import CoinAnalysis from "../../assets/icons/coin-analysis.svg";

import AiProofContent from "./aiProofContent/aiProofContent";
import AiScore from "./aiProofContent/aiScore";
import BitcoinMarket from "./aiProofContent/bitcoinMarket";
import OrderFlowFunding from "./aiProofContent/orderFlowFunding";
import LiquidationZone from "./aiProofContent/liquidationZone";
import TechnicalIndicator from "./aiProofContent/technicalIndicator";
import AllAnalysisSignal from "./aiProofContent/allAnanlysisSignal";

const AiProof = () => {
    const [showContent, setShowContent] = useState(false);

    const buttonData = ["15m", "1h", "4h", "8h", "1D", "7D"];

    const handleAnalyze = () => {
        setShowContent(true);
    };

    return (
        <Box bgcolor="background.charcoal" p={3} borderRadius="20px" mt={3}>
            <Typography color="neutral.Snowwhite" fontWeight={600} fontSize="22px">
                AI Proof — Quick coin verification
            </Typography>

            <Box borderBottom="0.5px solid rgba(127,127,127,1)" mt={2} />

            <Box
                border="1px solid rgba(127,127,127,1)"
                borderRadius="12px"
                mt={2}
                p={2}
            >
                <Typography color="neutral.Snowwhite" fontWeight={600} fontSize="20px">
                    AI Proof — Quick coin verification
                </Typography>

                <Typography color="rgba(127,127,127,1)" fontSize="13px" mt={0.5}>
                    Deep AI analysis of any coin in seconds. Enter ticker, get full
                    breakdown and recommendation.
                </Typography>

                <Grid container spacing={2} mt={1}>
                    <Grid item size={{ xs: 12, md: 10 }} >
                        <CustomInput placeholder="BTC, ETH, SOL..." />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 2 }}>
                        <CustomButton
                            variant="analyzeButton"
                            icon={<img src={EffectIcon} width={20} height={20} />}
                            title="Analyze"
                            onClick={handleAnalyze}
                            radius={18}
                            sx={{ fontSize: "18px" }}
                        />
                    </Grid>
                </Grid>

                <Box display="flex" gap={1} mt={2} flexWrap="wrap" alignItems="center">
                    <Typography color="rgba(127,127,127,1)" fontWeight={600}>
                        Timeframe:
                    </Typography>

                    {buttonData.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            sx={{
                                color: "rgba(148,150,154,1)",
                                border: "1px solid rgba(127,127,127,1)",
                                borderRadius: "50px",
                            }}
                        />
                    ))}
                </Box>

                {!showContent && (
                    <>
                        <Box display="flex" justifyContent="center" mt={6}>
                            <img src={CoinAnalysis} width={82} height={79} />
                        </Box>
                        <Typography
                            textAlign="center"
                            color="rgba(127,127,127,1)"
                            fontWeight={600}
                            mt={1}
                        >
                            Enter a coin ticker for analysis
                        </Typography>
                    </>
                )}

                {showContent && (
                    <>
                        <AiProofContent />
                        <AiScore />
                        <BitcoinMarket />
                        <OrderFlowFunding />
                        <LiquidationZone />
                        <TechnicalIndicator />
                        <AllAnalysisSignal />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default AiProof;
