import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import AiProof from './aiProof'
import AiPumpScanner from './aiPumpScanner'
import AiDumpScanner from './aiDumpScanner'
import AiMarketRegion from './aiMarketRegion'

const NewAiTools = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Container maxWidth="lg">
                <Box mt={6}>
                    <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                        AI Tools- Advanced Analysis
                    </Typography>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        AI-powered tools for market analysis and trading opportunities
                    </Typography>
                </Box>
                <AiProof />
                <AiPumpScanner />
                <AiDumpScanner />
                <AiMarketRegion />
            </Container>
        </>
    )
}

export default NewAiTools
