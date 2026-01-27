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

const ProAnalysis1 = () => {
    return (
        <Box>
            <Header />
            <Container maxWidth="lg">
                <Box mt={2}>
                    <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                        Pro Analytics
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
                </Box>
            </Container>
        </Box>
    )
}

export default ProAnalysis1