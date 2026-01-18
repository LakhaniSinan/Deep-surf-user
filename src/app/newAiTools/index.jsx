import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import AiProof from './aiProof'
import AiPumpScanner from './aiPumpScanner'

const NewAiTools = () => {
    return (
        <>
            <Box>
                <Header />
            </Box>
            <Container maxWidth="lg">
                <Box mt={6}>
                    <Typography color='neutral.Snowwhite' fontSize={"45px"} fontWeight={600}>
                        AI Tools- Advanced Analysis
                    </Typography>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        AI-powered tools for market analysis and trading opportunities
                    </Typography>
                </Box>
                <AiProof />
                <AiPumpScanner />
            </Container>
        </>
    )
}

export default NewAiTools
