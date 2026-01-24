import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../../components/headerText'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"
import DynamicBox from '../../../components/dynamicBox'


const BitcoinMarket = () => {
    const priceData = [
        {
            name: "BTC Price",
            price: "$94,468",
            value: "-2.33%",
        },
        {
            name: "Correlation",
            price: "82%",
            value: "β: 1.16"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} mt={2} p={2} borderRadius={"10px"}>
            <HeaderText
                title={"Bitcoin & Market"}
                subtile={"BULLISH"}
                icon={<img src={DrowpDownIcon} />}
                backgroundColor={"text.Emerald"}
                width={"100px"}
                fontSize={"17px"}
                fontWeight={450}
            />
            <Box>
                <Grid container spacing={1.5}>
                    {priceData.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={index}>
                            <DynamicBox
                                title={item.name}
                                price={item.price}
                                value={item.value}
                                titleColor={item.name === "Correlation" ? "neutral.cadetGrey" : "neutral.cadetGrey"}
                                priceColor={item.price === "82%" ? "text.almostWhite" : "text.orange"}
                                valueColor={item.value === "β: 1.16" ? "neutral.cadetGrey" : "text.carmineRed"}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mt={2} bgcolor={"background.almostBlack"} p={1} borderRadius={"5px"}>
                <Box>
                    <Typography color='neutral.cadetGrey' fontSize={"13px"}>
                        BTC Dominance
                    </Typography>
                </Box>
                <Box>
                    <Typography color='text.almostWhite' fontWeight={600}>
                        57.4%
                    </Typography>

                </Box>
            </Box>

        </Box>
    )
}

export default BitcoinMarket