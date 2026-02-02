import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import { useTranslation } from "react-i18next";
import CustomButton from '../../components/customButton'

const Pattern = ({ data }) => {
    const { t } = useTranslation();
    const patternData = [
        {
            name: data[1]?.name,
            type: data[1]?.type,
            decription: data[1]?.description,
            btnText1: data[1]?.target,
            btnText2: null
        },
        {
            name: data[0]?.name,
            type: data[0]?.type,
            decription: data[0]?.description,
            btnText1: data[1]?.target,
            btnText2: data[1]?.breakout,
        }
    ]
    const confidenceStr = data[0]?.confidence || "0%";
    const confidenceValue = Number(confidenceStr.replace("%", ""));
    return (
        <Box mt={1}>
            <Box display={"flex"} gap={"25px"} alignItems={"center"}>
                <Typography fontSize={"25px"} fontWeight={600}>
                    {t("AiTools.PatternRecognition.patternRecognition")}
                </Typography>
                <CustomButton
                    title={`${data[0]?.totalPatternsFound} found`}
                    sx={{
                        backgroundColor: "rgba(22, 21, 20, 1)",
                        color: "neutral.Snowwhite",
                        border: "1px solid rgba(255, 255, 255, 1)",
                        borderRadius: "15px",
                    }}
                />
            </Box>

            {/* Pattern Cards */}
            <Box sx={{ p: 0.4, borderRadius: "20px", mt: 2 }}>
                <Grid container spacing={2}>
                    {patternData.map((item, index) => (
                        <Grid item size={{ xs: 12 }} key={index}>
                            <Box
                                backgroundColor="neutral.darkGrey"
                                padding="15px"
                                borderRadius="10px"
                                marginTop="20px"
                            >
                                {/* Pattern Info */}
                                <Typography variant="h4" color="text.lightRedColor" fontSize={"20px"}>
                                    {item.name}
                                </Typography>
                                <Typography color='rgba(92, 97, 111, 1)' fontSize={"20px"} fontWeight={600}>
                                    {item.type}
                                </Typography>
                                <Typography
                                    color="neutral.Snowwhite"
                                    mt="10px"
                                    fontSize={"15px"}
                                    fontWeight={400}
                                >
                                    {item.decription}
                                </Typography>
                                <Box mt="10px" display="flex" gap={2} flexWrap={{ xs: "wrap", md: "nowrap" }}>
                                    <CustomButton
                                        variant="h1"
                                        backgroundColor="neutral.charcoalGrey"
                                        title={
                                            <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                                                {t("AiTools.PatternRecognition.target")} :{" "}
                                                <span style={{ color: "neutral.redOrange" }}>
                                                    {" "}
                                                    {item.btnText1}
                                                </span>
                                            </span>
                                        }
                                        sx={{
                                            border: "1px solid #FFFFFF",
                                            width: { xs: "100%", md: "auto" },
                                        }}
                                    />

                                    {/* btnText2 show only if exists */}
                                    {item.btnText2 && (
                                        <CustomButton
                                            variant="h1"
                                            backgroundColor="neutral.charcoalGrey"
                                            title={
                                                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                                                    {t("AiTools.PatternRecognition.breakout")}  :{" "}
                                                    <span style={{ color: "neutral.redOrange" }}>
                                                        {" "}
                                                        {item.btnText2}
                                                    </span>
                                                </span>
                                            }
                                            sx={{
                                                border: "1px solid #FFFFFF",
                                                width: { xs: "100%", md: "auto" },
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Confidence */}
                                <Box mt={3}>
                                    <Typography>{t("AiTools.PatternRecognition.confidence")}: {data[1]?.confidence}</Typography>
                                    <Box mt={1}>
                                        <LinearProgress
                                            variant="determinate"
                                            value={confidenceValue}
                                            sx={{
                                                height: 10,
                                                borderRadius: "30px",
                                                bgcolor: "text.Gainsboro",
                                                "& .MuiLinearProgress-bar": {
                                                    bgcolor: "accent.main",
                                                    borderRadius: "30px",
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* How to Use Section */}
            {/* <Box mt={2}>
                <Grid container spacing={2} backgroundColor="background.lightGray" p={2} borderRadius={"15px"}>
                    <Grid item xs={12}>
                        <CustomButton
                            title={t("AiTools.PatternRecognition.howToUse")}
                            width="100%"
                            sx={{ borderRadius: "20px", backgroundColor: "accent.main" }}
                        />
                    </Grid>
                    <Grid item xs={12} mt={1}>
                        <Typography fontSize={15} fontWeight={600}>
                            Patterns are historically proven formations that often lead to predictable price movements. High Confidence (75%) = strong pattern. Always wait for a breakout for confirmation!
                        </Typography>
                    </Grid>
                </Grid>
            </Box> */}
        </Box>
    )
}

export default Pattern
