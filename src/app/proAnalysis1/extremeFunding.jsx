import { Box, Grid, Typography } from '@mui/material'
import TradingCard from '../../components/tradeCard'

const ExtremeFunding = () => {
    const fundingdata = [
        {
            tittle: "Entry Zone",
            description: "$96111.13 - $97077.07"
        }
        ,
        {
            tittle: "Stop Loss",
            description: "$93696.28"
        },
        {
            tittle: "Targets",
            description: "$101423.81, $106253.51"
        }
    ]
    const coinName = [
        {
            name: "ML Analysis",
            bgcolor: "rgba(255, 100, 33, 1)",
        },
        {
            name: "To Decision Engine",
            bgcolor: "rgba(28, 28, 28, 1)"
        },
        {
            name: "To Calculator",
            bgcolor: "rgba(28, 28, 28, 1)"

        },

    ]
    return (
        <>
            <Box bgcolor={"neutral.darkGrey"} p={3} mt={2} borderRadius={"15px"}>
                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={550}>
                    Extreme Funding Reversal Long
                </Typography>
                <Box mt={2}>
                    <Grid container spacing={1}>
                        {fundingdata.map((item, index) => (
                            <Grid item size={{ xs: 12, md: 4 }}>
                                <Box key={index} bgcolor={"background.charcoal"} border={"1px solid rgba(255, 255, 255, 1)"} borderRadius={"8px"}>
                                    <TradingCard
                                        title={item.tittle}
                                        value={item.description}
                                        textAlign={"left"}
                                        padding={0}
                                        mt={"0px"}
                                        titleColor={"neutral.Snowwhite"}
                                        valueColor={"neutral.Snowwhite"}
                                        titleFontWeight={550}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box bgcolor={"rgba(28, 28, 28, 1)"} border={"1px solid rgba(127, 127, 127, 1)"} p={1.8} mt={1.8} borderRadius={"20px"}>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        Tip: Look for confirmation on a lower timeframe before entry.
                    </Typography>
                </Box>

            </Box>
            <Box display={"flex"} gap={"10px"} mt={2} alignItems={"center"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        Quick select:
                    </Typography>
                </Box>
                {coinName.map((item, index) => (
                    <Box key={index} textAlign={"center"} width={"120px"} p={0.8} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={item.bgcolor}>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                            {item.name}
                        </Typography>

                    </Box>

                ))}

            </Box>
        </>
    )
}

export default ExtremeFunding