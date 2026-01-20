import { Box, Grid, Typography } from '@mui/material'
import Check from "../../assets/icons/checkBtn.svg";
import CancelIcon from "../../assets/icons/cancelBtn.svg";
import Warning from "../../assets/icons/warningIcon.svg";
import fire from "../../assets/icons/fireIcon.svg";

const IndicatorAnalysis = ({ data }) => {
    console.log("feufgugfugfugfoufrwgr", data[0].description

    );

    const indicatorData = [
        {
            icon: Check,
            title: data[0].description
        },
        {
            icon: Check,
            title: data[1].description
        },
        {
            icon: Warning,
            title: data[5].description
        },
        {
            icon: CancelIcon,
            title: data[3].description
        },
        {
            icon: Check,
            title: data[2].description
        },
        {
            icon: Warning,
            title: data[6].description
        },
        // {
        //     icon: Check,
        //     title: "MACD Bullish"
        // },
        // {
        //     icon: CancelIcon,
        //     title: data[4].description
        // },
        // {
        //     icon: CancelIcon,
        //     title: "Price at upper BB"
        // },
        {
            icon: fire,
            title:  data[4].description
        }
    ]
    return (
        <Box mt={1} >
            <Typography color='neutral.Snowwhite' fontSize={"25px"} fontWeight={600}>
                Indicator Analysis
            </Typography>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={2} mt={2}>
                {
                    indicatorData.map((item, index) => (
                        <Grid container spacing={1}>
                            <Grid item size={{ xs: 12, md: 12 }}>
                                <Box key={index} display={"flex"} gap={"15px"} mt={2} >
                                    <Box>
                                        <img src={item.icon} style={{ width: "30px", height: "30px" }} />
                                    </Box>
                                    <Box>
                                        <Typography color='neutral.snowWhite' fontSize={"15px"} fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Box>

        </Box>

    )
}

export default IndicatorAnalysis
