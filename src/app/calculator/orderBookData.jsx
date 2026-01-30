import { Box, Typography } from '@mui/material'
import React from 'react'
import Speedometer from '../../components/speedMeter'

const OrderBookData = () => {
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} mt={2} borderRadius={"10px"} height={"209px"}>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"12px"} fontWeight={500}>
                    Orderbook Imbalance (OBI)
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt={2}>
                <Speedometer size={50} score={50} />
            </Box>
            <Box textAlign={"center"}>
                <Typography color='rgba(157, 157, 157, 1)' fontSize={"12px"}>
                    {"> 0.3 = Buyers | < -0.3 = Sellers"}
                </Typography>
            </Box>
        </Box>
    )
}

export default OrderBookData