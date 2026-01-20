import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomInput from '../../components/customInput'
import IconImage from "../../assets/icons/Vector.svg";
import { useTranslation } from 'react-i18next';

const FutureMatric = () => {
    const { t } = useTranslation();
    const fundingData = [
        {
            title: (t("ProAnalytics.FuturesMetrics.fundingRate")),
            value: "0.000%",
            status: "Neutral",
        },
        {
            title: (t("ProAnalytics.FuturesMetrics.openInterest")),
            value: "1.5M",
            status: "+3.70% (24h)",
        },

        {
            title: (t("ProAnalytics.FuturesMetrics.lsPositions")),
            value: "2.34",
            status: "Everyone is longing ETH. Be careful!",
            stye: {
                width: "100%",
                height: "5px",
                backgroundColor: "#3EDD87",
                margin: "12px 0",
                borderRadius: "10px",
            },
        },

        {
            title: (t("ProAnalytics.FuturesMetrics.LsAccounts")),
            value: 2.75,
            status: null,
            stye: {
                width: "100%",
                height: "5px",
                backgroundColor: "#3EDD87",
                margin: "12px 0",
                borderRadius: "20px",
            },
        },

        {
            title: "Cumulative Delta",
            value: "+0.20M",
            status: "Buying is predominant",
        },
    ];
    return (
        <Box backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"} >
            <Box>
                <Typography color={"neutral.Snowwhite"} fontSize={"25px"} fontWeight={600}>
                    Futures Metrics
                </Typography>
            </Box>
            <Box mt={1}>
                <CustomInput
                    placeholder="ETH"
                    InputEndIcon={<img src={IconImage} style={{ width: "25px", height: "25px" }} />}

                />
            </Box>
            <Box mt={1.2} textAlign={"center"}>
                <Box>
                    <Typography color={"neutral.Snowwhite"} fontSize={"18px"} fontWeight={600}>
                        Current ETH Price
                    </Typography>
                    <Typography color={"neutral.Snowwhite"} fontSize={"20px"} fontWeight={700}>
                        $4,321.7
                    </Typography>
                </Box>

            </Box>
            <Box>
                <Grid container spacing={1} mt={1}>
                    {fundingData.map((item, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: "neutral.darkGrey",
                                    borderRadius: "15px",
                                    padding: "15px",
                                    height: "190px",
                                    marginTop: "20px",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontSize={"18px"}
                                    fontWeight={550}
                                    color="neutral.Snowwhite"
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="h4"
                                    fontSize={"20px"}
                                    mt={1}
                                    sx={{
                                        // color: item.value?.includes('-') ? "text.errorColor" : "text.greenColor",
                                        color : "text.greenColor",
                                    }}
                                >
                                    {item.value}
                                </Typography>
                                {item.stye && <Box sx={item.stye}></Box>}

                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: item.status?.includes("-") ? "text.errorColor" : "text.greenColor",
                                        fontSize: "15px",
                                        marginTop: "20px",
                                        fontFamily: "inter Tight",
                                    }}
                                >
                                    {item.status}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
export default FutureMatric