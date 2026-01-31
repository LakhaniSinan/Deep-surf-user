import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../../components/headerText'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"
import DynamicBox from '../../../components/dynamicBox'


const OrderFlowFunding = () => {
    const data = [
        {
            title: "Open Interest 24h",
            value: "-1.1%",
            name: "stable",
            titleColor: "rgba(155, 163, 175, 1)",
            priceColor: "rgba(250, 251, 252, 1)",
            valueColor: "rgba(155, 163, 175, 1)"

        },
        {
            title: "CVD (Volume Delta)",
            leftValue: "45%",
            rightValue: "55%",
            name: "Selling Pressure",
            titleColor: "rgba(155, 163, 175, 1)",
            priceColor: "rgba(16, 185, 129, 1)",
            valueColor: "rgba(155, 163, 175, 1)",
            leftColor: "rgba(16, 185, 129, 1)",
            rightColor: "rgba(239, 68, 68, 1)"

        },
        {
            title: "Funding Rate",
            value: "-0.000%",
            name: "Z: -0.9 · normal",
            titleColor: "rgba(155, 163, 175, 1)",
            priceColor: "rgba(250, 251, 252, 1)",
            valueColor: "rgba(155, 163, 175, 1)"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2} mt={2}>
            <Box>
                <HeaderText
                    title="Order Flow & Funding"
                    icon={<img src={DrowpDownIcon} />}
                />
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {data.map((item, index) => (
                        <Grid size={{ xs: 12, md: 4 }}>
                            <DynamicBox
                                title={item.title}
                                leftValue={item.leftValue}
                                rightValue={item.rightValue}
                                price={item.value}
                                value={item.name}
                                leftColor={item.leftColor}
                                rightColor={item.rightColor}
                                titleColor={item.titleColor}
                                priceColor={item.priceColor}
                                valueColor={item.valueColor}
                            />
                        </Grid>
                    ))}

                </Grid>

            </Box>
            <Box mt={2} bgcolor={"background.almostBlack"} p={1.5} borderRadius={"8px"}>
                <Typography color='text.carmineRed' fontSize={"15px"}>
                    CVD confirms the decline: Sellers are in control.
                </Typography>
            </Box>
        </Box>
    )
}

export default OrderFlowFunding