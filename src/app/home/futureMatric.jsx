import { Box, Grid, Typography, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput'
import IconImage from "../../assets/icons/Vector.svg";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { baseUrl } from '../../services';
import { toast } from 'react-toastify';
const FutureMatric = () => {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [metricValue, setMetricValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const onclickEnd = () => {
        if (!metricValue) {
            toast.error("Please enter a coin symbol");
            return;
        }

        setLoading(true);
        setHasSearched(true);
        axios.get(`${baseUrl}home/futures-metrics?symbol=${metricValue}`)
            .then((response) => {
                setLoading(false);
                setData(response.data.data);
            })
            .catch((error) => {
                setLoading(false);
                setHasSearched(false);
                setData(null);
                const errorMessage = error?.response?.data?.message || "Coin not found";
                toast.error(errorMessage);
            });
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onclickEnd();
        }
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
            title:(t("ProAnalytics.FuturesMetrics.cumulativeDelta")),
            value: data?.futuresMetrics.cumulativeDelta || "$1.2M",
            status: "Buying is predominant",
        },
    ];

    // Skeleton Component
    const SkeletonCard = () => (
        <Box
            sx={{
                backgroundColor: "neutral.darkGrey",
                borderRadius: "15px",
                padding: "15px",
                height: "190px",
                marginTop: "20px",
            }}
        >
            <Skeleton
                variant="text"
                width="60%"
                height={25}
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
            />
            <Skeleton
                variant="text"
                width="40%"
                height={30}
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mt: 1 }}
            />
            <Skeleton
                variant="rectangular"
                width="100%"
                height={5}
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mt: 1.5, borderRadius: '10px' }}
            />
            <Skeleton
                variant="text"
                width="80%"
                height={20}
                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mt: 2.5 }}
            />
        </Box>
    );

    return (
        <Box borderRadius={"20px"} padding={"2px"}>
            <Box>
                <Typography color={"neutral.Snowwhite"} fontSize={"25px"} fontWeight={600}>
                    Futures Metrics
                </Typography>
            </Box>
            <Box mt={3}>
                <CustomInput
                    value={metricValue}
                    onChange={(e) => setMetricValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="ETH"
                    InputEndIcon={<img src={IconImage} style={{ width: "25px", height: "25px" }} />}
                    onEndIconClick={onclickEnd}
                />
            </Box>

            {/* Current Price Section */}
            {hasSearched && (
                <Box mt={1.2} textAlign={"center"}>
                    <Box>
                        {loading ? (
                            <>
                                <Skeleton
                                    variant="text"
                                    width="40%"
                                    height={25}
                                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', margin: '0 auto' }}
                                />
                                <Skeleton
                                    variant="text"
                                    width="30%"
                                    height={30}
                                    sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', margin: '8px auto 0' }}
                                />
                            </>
                        ) : (
                            <>
                                <Typography color={"neutral.Snowwhite"} fontSize={"18px"} fontWeight={600}>
                                    Current {data?.name} Price
                                </Typography>
                                <Typography color={"neutral.Snowwhite"} fontSize={"20px"} fontWeight={700}>
                                    ${data?.currentPrice || "0.00"}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>
            )}

            {/* Metrics Grid */}
            {hasSearched && (
                <Box>
                    <Grid container spacing={1} mt={1}>
                        {loading ? (
                            // Show 6 skeleton cards while loading
                            [...Array(6)].map((_, index) => (
                                <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                                    <SkeletonCard />
                                </Grid>
                            ))
                        ) : (
                            // Show actual data when loaded
                            data && fundingData.map((item, index) => (
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
                                                color: item.value.includes("-") ? "neutral.dangerRed" : "neutral.primaryGreen",
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
                            ))
                        )}
                    </Grid>
                </Box>
            )}
        </Box>
    )
}

export default FutureMatric