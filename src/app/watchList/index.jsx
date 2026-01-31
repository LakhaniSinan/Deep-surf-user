import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Header from '../../components/header'
import MyCoinAlert from './myCoinAlert'
import AiProofSetUp from './aiProofSetUp'
import CuttomPatern from './cuttomPatern'

const WatchList = () => {
    return (
        <Box>
            <Header />
            <Container maxWidth="lg" sx={{ paddingTop: "30px", color: "white" }}>
                <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600} letterSpacing={"1px"}>
                    Watchlist — Asset Tracking
                </Typography>
                <Typography color='neutral.Snowwhite' fontSize={"12px"} fontWeight={400}>
                    A personalized list of coins with alerts, metrics, and mini-charts
                </Typography>
                <Box>
                    <MyCoinAlert />
                    <AiProofSetUp />
                    <CuttomPatern />
                </Box>
            </Container>
        </Box>
    )
}

export default WatchList