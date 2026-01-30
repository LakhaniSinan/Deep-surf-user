import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const LiveTape = () => {
    const data = [
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        },
        {
            side: "S",
            price: "$95453.",
            value: "200.005",
            time: "5:46:01 PM"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} mt={2} borderRadius={"10px"} height={"300px"}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"13px"} fontWeight={550}>
                        Live Tape
                    </Typography>
                </Box>
                <Box>
                    <Typography color='rgba(100, 104, 114, 1)' fontSize={"13px"}>
                        Recent Large Trades
                    </Typography>
                </Box>
            </Box>
            <Box mt={1.2}>
                {data.map((item, index) => (
                    <Grid container spacing={2} key={index} mt={1.1}>
                        <Grid item size={{ xs: 2 }}>
                            <Box color={"text.limeGreen"} fontSize={"13px"}>
                                {item.side}
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 4 }}>
                            <Box color={"neutral.Snowwhite"} fontWeight={500} fontSize={"13px"} textAlign={"center"}>
                                {item.price}
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 3 }}>
                            <Box color={"neutral.Snowwhite"} fontWeight={500} fontSize={"13px"} textAlign={"center"}>
                                {item.value}
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 3 }}>
                            <Box color={"neutral.Snowwhite"} fontWeight={500} fontSize={"13px"} textAlign={"right"}>
                                {item.time}
                            </Box>
                        </Grid>
                    </Grid>
                ))}

            </Box>
        </Box>
    )
}

export default LiveTape