
import { Box, Grid, Typography } from '@mui/material'
import HeaderText from '../../../components/headerText'
import DrowpDownIcon from "../../../assets/icons/drowpIcon.svg"


const TechnicalIndicator = () => {
    const data = [
        {
            title: "RSI:"
        },
        {
            title: "MACD:"
        },
        {
            title: "StochRSI:"
        },
        {
            title: "BB:"
        },
        {
            title: "Trend:"
        },
        {
            title: "ADX:"
        },

    ]
    const teahinalData = [
        {
            name: "Support",
            value: "$137,75"

        },
        {
            name: "Resistance",
            value: "$143,60"

        },
    ]
    const longdataValue = 74;
    const strDataValue = 26;
    return (
        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"} mt={2}>
            <Box>
                <HeaderText
                    title="Technical Indicators"
                    icon={<img src={DrowpDownIcon} />}
                />
            </Box>
            <Box display="flex" gap="10px" flexWrap="wrap" mt={3}>
                {
                    data.map((item) => (
                        <Box bgcolor={"background.almostBlack"} p={1} width={"120px"} borderRadius={"8px"}>
                            <Typography color='text.almostWhite' textAlign={"left"}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    {
                        teahinalData.map((item, index) => (
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box bgcolor={"background.almostBlack"} p={1} borderRadius={"10px"}>
                                    <Typography color='neutral.cadetGrey' fontSize={"13px"} fontWeight={400}>
                                        {item.name}
                                    </Typography>
                                    <Typography color={item.value === "$137,75" ? "text.Emerald" : "text.carmineRed"} fontWeight={600} fontSize={"18px"}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Box mt={2}>
                <Typography color='neutral.cadetGrey' fontSize={"15px"}>
                    Long/Short Ratio
                </Typography>
            </Box><Box
                position="relative"
                width="100%"
                height="30px"
                borderRadius="30px"
                display="flex"
                overflow="hidden"
                mt={2}
            >
 
                <Box
                    width={`${longdataValue}%`}
                    height="100%"
                    bgcolor="background.Emerald"
                    borderRadius="100px 0px 0px 100px" 
                    transition="width 0.3s ease"
                />
                <Box
                    width={`${strDataValue}%`}
                    height="100%"
                    bgcolor="background.carmineRed"
                    borderRadius="0px 30px 30px 0px" 
                    transition="width 0.3s ease"
                />
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `${longdataValue / 2}%`,
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "neutral.Snowwhite",
                    }}
                >
                    {longdataValue}%
                </Typography>
                <Typography
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: `${longdataValue + strDataValue / 2}%`,
                        transform: "translate(-50%, -50%)",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "neutral.Snowwhite",
                    }}
                >
                    {strDataValue}%
                </Typography>
            </Box>

        </Box>
    )
}

export default TechnicalIndicator