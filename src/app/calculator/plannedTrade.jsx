import { Box, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'

const PlannedTrade = () => {
    const plannedData = [
        {
            symbolName: "BTC",
            title: "From calculator"
        },
        {
            symbolName: "BTC",
            title: "From calculator"
        },
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} borderRadius={"20px"} mt={2}>
            <Box>
                <HeaderText
                    title={"Planned trades"}
                    btnText={"Refresh"}
                    color={"neutral.Snowwhite"}
                />
            </Box>
            <Box>
                {plannedData.map((item, index) => (
                    <Box key={index} bgcolor={"neutral.darkGrey"} borderRadius={"15px"} p={3} mt={2}>
                        <Typography color='neutral.Snowwhite' fontWeight={600}>
                            {item.symbolName}
                        </Typography>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default PlannedTrade