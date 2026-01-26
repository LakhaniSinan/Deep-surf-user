import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import MftScan from './mftScan'
import HeatMap from './heatMap'
import PlayBookTester from './playBookTester'
import AiDecisionEngine from './aiDecision'

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
                </Box>
            </Container>
        </Box>
    )
}

export default ProAnalysis1