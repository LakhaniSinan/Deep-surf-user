import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput'
import IconImage from "../../assets/icons/Vector.svg";
import StarIcon from "../../assets/icons/stairs.svg";
import CustomButton from '../../components/customButton';
import TechnicalIndicator from './techinalIndicator';
import Community from './community';
import IctLiquidityLevel from './ictLiquidityLevel';
import EnhanceMarketIntelligence from './enhanceMarketIntelligence';
import Pattern from './pattern';
import IndicatorAnalysis from './indicatorAnalysis';
import { aiToolsData } from '../../services/modules/home';
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
const AiProof = () => {
    const [ticker, setTicker] = useState("");
    const [coinData, setCoinData] = useState(null);
    const [technicalIndicator, setTechniclIndicator] = useState(null);
    const [communityData, setCommunityData] = useState(null);
    const [liquidityLevel, setLiquidityLevel] = useState(null);
    const [enchnagedMarketIntelligence, setEnchnagedMarketIntelligence] = useState(null);
    const [patternData, setPatternData] = useState(null);
    const [indicatorAnalysis, setIndicatorAnalysis] = useState(null);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const confluenceData1 = [
        {
            title: "Confluence Score",
            symbol: "Bullish",
            value: coinData?.confluenceScore?.bullish || "65"
        },
        {
            title: "Confluence Score",
            symbol: "Bearish",
            value: coinData?.confluenceScore?.bearish || "35"
        }
    ]

    const confluenceData2 = [
        {
            title: "Trend",
            symbol: coinData?.supertrend?.trend || "Bullish",
        },
        {
            title: "Signal Level",
            symbol: coinData?.supertrend?.signalLevel || "Strong",
        }
    ]

    const getAiToolsData = async () => {
        if (!ticker) return toast.error("Please enter coin symbol");

        try {
            setIsLoading(true);
            setCoinData(null);
            const res = await aiToolsData({ ticker });
            if (res?.data?.status === "success") {
                setCoinData(res?.data?.data);
                setTechniclIndicator(res?.data?.data?.technicalIndicators);
                setCommunityData(res?.data?.data?.communitySentiment);
                setLiquidityLevel(res?.data?.data?.ictLiquidityLevels);
                setEnchnagedMarketIntelligence(res?.data?.data?.enhancedMarketIntelligence);
                setPatternData(res?.data?.data?.patternRecognition);
                setIndicatorAnalysis(res?.data?.data?.indicatorAnalysis);
            } else {
                toast.error(res?.data?.message);
            }
        } catch (error) {
            toast.error(error?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Box width={"100%"} >
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 12 }}>
                        <Box color={"white"} borderRadius={"10px"} p={1}>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h6"
                                    color="neutral.Snowwhite"
                                    fontSize="30px"
                                    fontWeight={600}
                                >
                                    {t("AiTools.aiToolsTitle")}
                                </Typography>
                            </Box>
                            <Typography
                                color="neutral.Snowwhite"
                                marginBottom="10px"
                                fontSize="15px"
                            >
                                {t("AiTools.aiProofTitle")}
                            </Typography>

                            <Box mt={2}>
                                <CustomInput
                                    placeholder="ETH"
                                    value={ticker}
                                    onChange={(e) => setTicker(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && getAiToolsData()}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "20px",
                                            background: "rgba(28, 28, 28, 1)",
                                            border: "1px solid rgba(127, 127, 127, 1)",
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "12px 12px",
                                        }
                                    }}
                                    InputEndIcon={
                                        isLoading ? (
                                            <CircularProgress size={30} sx={{ color: "neutral.Snowwhite" }} />
                                        ) : (
                                            <img
                                                src={IconImage}
                                                onClick={getAiToolsData}
                                                style={{ cursor: "pointer" }}
                                            />
                                        )
                                    }
                                />
                            </Box>

                            {/* Yeh section HAMESHA visible rahega - default values ke saath */}
                            <Box mt={"20px"}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                    <Box color={"rgba(174, 176, 179, 1)"}>
                                        <Typography fontSize={"20px"} fontWeight={600} color='rgba(174, 176, 179, 1)'>
                                            {coinData?.coin?.pair || "BTC/USDT"}
                                        </Typography>
                                        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                            <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={600}>
                                                {coinData?.coin?.priceFormatted || "$45,230.50"}
                                            </Typography>
                                            <Typography
                                                color={coinData?.coin?.change24hFormatted?.includes('+') ? 'neutral.brightGreen' : 'neutral.brightRed'}
                                                fontSize={"20px"}
                                                fontWeight={600}
                                            >
                                                {coinData?.coin?.change24hFormatted || "+2.45%"}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="20px"
                                    flexWrap={{ xs: "wrap", md: "nowrap" }}
                                    bgcolor="neutral.darkGrey"
                                    borderRadius={"20px"}
                                    mt={2}
                                    p={2}
                                >
                                    <CustomButton
                                        title="Recommendation"
                                        icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
                                        sx={{
                                            borderRadius: "20px",
                                            padding: "4px 30px",
                                            minWidth: "auto",
                                            width: { xs: "100%", md: "auto" },
                                            backgroundColor: "neutral.vermilionOrange",
                                            color: "#fff",
                                        }}
                                    />
                                    <Typography
                                        variant="body2"
                                        fontSize="14px"
                                        flex={{ xs: "100%", md: "1" }}
                                    >
                                        <span style={{ color: "neutral.brightYellow", fontWeight: 600, fontSize: "15px" }}>
                                            {coinData?.recommendation?.action || "Hold"}
                                        </span>
                                        <br />
                                        <span style={{ color: "neutral.Snowwhite" }}>Confidence:</span>  {coinData?.recommendation?.confidence || "75"}%
                                    </Typography>
                                </Box>
                                <Box mt={2}>
                                    <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                        {t("AiTools.Confluence.confluenceScore")}
                                    </Typography>
                                </Box>
                                <Grid container spacing={"20px"}>
                                    {
                                        confluenceData1.map((item, index) => (
                                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                                <Box
                                                    sx={{
                                                        bgcolor: "neutral.darkGrey",
                                                        p: 2,
                                                        borderRadius: "12px",
                                                        textAlign: "center",
                                                        mt: 2
                                                    }}
                                                >
                                                    <Typography variant="caption" color="neutral.coolGrey">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ color: item.symbol === "Bearish" ? "neutral.brightGreen" : "rgba(255, 129, 129, 1)", fontSize: "18px", fontWeight: 600 }}
                                                    >
                                                        {item.symbol}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            color: "neutral.brightGreen",
                                                            fontSize: "22px",
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {item.value}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Box mt={2}>
                                    <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                        {t("AiTools.Confluence.Supertrend")}
                                    </Typography>
                                </Box>
                                <Grid container spacing={"20px"}>
                                    {
                                        confluenceData2.map((item, index) => (
                                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
                                                <Box
                                                    sx={{
                                                        bgcolor: "neutral.darkGrey",
                                                        p: 2,
                                                        borderRadius: "12px",
                                                        textAlign: "center",
                                                        mt: 2
                                                    }}
                                                >
                                                    <Typography variant="caption" color="neutral.coolGrey">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ color: item.symbol === "Bullish" ? "rgba(62, 221, 135, 1)" : "rgba(255, 255, 255, 1)", fontSize: "20px", fontWeight: 600 }}
                                                    >
                                                        {item.symbol}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))
                                    }
                                </Grid>

                                {/* Detailed data - sirf search ke baad show hoga */}
                                {coinData && showDetails && (
                                    <Box mt={2}>
                                        <TechnicalIndicator data={technicalIndicator} />
                                        <Community data={communityData} />
                                        <IctLiquidityLevel data={liquidityLevel} />
                                        <EnhanceMarketIntelligence data={enchnagedMarketIntelligence} />
                                        <Pattern data={patternData} />
                                        <IndicatorAnalysis data={indicatorAnalysis} />
                                    </Box>
                                )}
                            </Box>

                            {/* Button hamesha available rahega */}
                            <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
                                <CustomButton
                                    title={showDetails ? "Hide Content" : "Show Content"}
                                    variant="gradient"
                                    onClick={() => setShowDetails(!showDetails)}
                                    disabled={!coinData}
                                    sx={{
                                        backgroundColor: showDetails ? "neutral.vermilionOrange" : "white",
                                        color: showDetails ? "#fff" : "#fff" // agar text ka color black chahiye jab hidden ho
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default AiProof