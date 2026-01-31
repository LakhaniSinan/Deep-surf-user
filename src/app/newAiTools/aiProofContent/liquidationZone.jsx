import { Box, Grid, Typography } from '@mui/material'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"
import HeaderText from '../../../components/headerText'
import DynamicCard from '../../../components/dynamicCard'

const LiquidationZone = () => {
    const data = [
        {
            name: "Long Liquidations ↓",
            percentage: "1.8%",
            value: "$138.21",
            bordrerColor: "1px solid rgba(239, 68, 68, 1)",
            backgroudColor: "background.tarsparentColor",
            titleColor: "text.carmineRed",
            percentageColor: "text.carmineRed",
            valueColor: "neutral.cadetGrey"

        },
        {
            name: "Short Liquidations ↑",
            percentage: "1.8%",
            value: "$143.27",
            bordrerColor: "1px solid green",
            backgroudColor: "rgba(16, 185, 129, 0.1)",
            titleColor: "rgba(16, 185, 129, 1)",
            percentageColor: "rgba(16, 185, 129, 1)",
            valueColor: "rgba(155, 163, 175, 1)"
        }
    ]
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"} mt={2}>
            <Box>
                <HeaderText
                    title={"Liquidation Zones"}
                    icon={<img src={DrowpDownIcon} />}
                />
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    {data.map((item, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <DynamicCard
                                title={item.name}
                                percentage={item.percentage}
                                value={item.value}
                                bodrerColor={item.bordrerColor}
                                backgroundColor={item.backgroudColor}
                                titleColor={item.titleColor}
                                percentageColor={item.percentageColor}
                                valueColor={item.valueColor}
                            />
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box mt={2} bgcolor={"background.almostBlack"} p={1.5} borderRadius={"8px"} alignItems={"center"}>
                <Typography color='text.brightOrange' fontSize={"14px"} alignItems={"center"}>
                    ⚠️ Close liquidation zone for LONG (-1.8%) - a magnet for the price
                </Typography>
            </Box>

        </Box>
    )
}

export default LiquidationZone