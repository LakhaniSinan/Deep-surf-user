import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import MftScan from './mftScan'
import HeatMap from './heatMap'
import PlayBookTester from './playBookTester'
import AiDecisionEngine from './aiDecision'
import TradeRaderSmartScanner from './tradeRader'
import LiquidationMap from './liquidationMap'
import SmartScenoria from './smartScenorios'
import FutureMetric from './futureMetric'
import Correlation from './correlation'
import WarningTips from './warningTips'
import HeatMapVolumeData from './heatMapVolumeData'
import OpenInterest from './openInterest'
import LargeTradeScanner from './largeTradeScanner'
import VolalityAnalysis from './volalityAnalysis'
import FairLastPriceScanner from './fairLastPriceScanner'
import TradingTrategy from './tradingTrategy'
import TopTraders from './topTraders'
import TakerRatio from './takerRatio'
import { useTranslation } from "react-i18next";
const ProAnalysis1 = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Header />
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                        {t("proAnalytices.proAnalyticsTittle")}
                    </Typography>
                </Box>
                <Box>
                    <MftScan />
                    <HeatMap />
                    <PlayBookTester />
                    <AiDecisionEngine />
                    <TradeRaderSmartScanner />
                    <LiquidationMap />
                    <SmartScenoria />
                    <FutureMetric />
                    <Correlation />
                    <HeatMapVolumeData />
                    <OpenInterest />
                    <LargeTradeScanner />
                    <VolalityAnalysis />
                    <FairLastPriceScanner />
                    <TopTraders />
                    <TakerRatio />
                </Box>
            </Container>
        </Box>
    )
}

export default ProAnalysis1