import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomInput from '../../components/customInput'
import IconImage from "../../assets/icons/Vector.svg";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { baseUrl } from '../../services';

const FutureMatric = () => {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [metricValue, setMetricValue] = useState("");
    const [loading, setLoading] = useState(false);
    // useEffect(() => {    
    //     axios.get(`https://api.example.com/future-metrics`)
    //     // Any side effects or data fetching can be done here
    // }, []);
    console.log(metricValue, "metricValuemetricValue");

    const onclickEnd = () => {
        setLoading(true)
        console.log("End icon clicked with value:", metricValue);
        axios.get(`${baseUrl}home/futures-metrics?symbol=${metricValue}`)
            .then((response) => {
                setLoading(false)
                setData(response.data.data);
                console.log("Fetched future metrics data:", response.data);
            })
            .catch((error) => {
                alert(error.response.data.message)
                setData(null)
                setLoading(false)
                console.error("Error fetching future metrics data:", error.response);
            });
    }

    const fundingData = [
        {
            title: (t("ProAnalytics.FuturesMetrics.fundingRate")),
            value: data?.futuresMetrics.fundingRate || "0.012%",
            status: "Neutral",
        },
        {
            title: (t("ProAnalytics.FuturesMetrics.openInterest")),
            value: data?.futuresMetrics.openInterest || "0.012%",
            status: "+3.70% (24h)",
        },

        {
            title: (t("ProAnalytics.FuturesMetrics.lsPositions")),
            value: data?.futuresMetrics.longShortPositions || "65% Longs",
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
            value: data?.futuresMetrics.longShortAccounts || "55% Longs",
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
            value: data?.futuresMetrics.cumulativeDelta || "$1.2M",
            status: "Buying is predominant",
        },
    ];

    if (loading) {
        return <Box color="neutral.Snowwhite" fontSize="20px" textAlign="center" mt={5}>Loading...</Box>
    }

    return (
        <Box backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"} >
            <Box>
                <Typography color={"neutral.Snowwhite"} fontSize={"25px"} fontWeight={600}>
                    Futures Metrics
                </Typography>
            </Box>
            <Box mt={1}>
                <CustomInput
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    placeholder="ETH"
                    InputEndIcon={<img src={IconImage} style={{ width: "25px", height: "25px" }} />}
                    onEndIconClick={onclickEnd}
                />
            </Box>
            <Box mt={1.2} textAlign={"center"}>
                <Box>
                    <Typography color={"neutral.Snowwhite"} fontSize={"18px"} fontWeight={600}>
                        Current {data?.name} Price
                    </Typography>
                    <Typography color={"neutral.Snowwhite"} fontSize={"20px"} fontWeight={700}>
                        ${data?.currentPrice || "0.00"}
                    </Typography>
                </Box>

            </Box>
            <Box>
                <Grid container spacing={1} mt={1}>
                    {data != null && fundingData.map((item, index) => (
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
                                        color: "text.greenColor",
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