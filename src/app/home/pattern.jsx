import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/customButton'
import { Description } from '@mui/icons-material'

const Pattern = () => {

    const patternData = [
        {
            name: "Double Top",
            type: "Bearish pattern",
            decription: "Double Top at 3762.80, Support 3692.96, Target 3623.12",
            btnText1: "$3623.12"

        },
        {
            name: "Rising Wedge",
            type: "Bearish pattern",
            decription: "Rising Wedge: Bearish pattern, waiting for breakdown → Target 3817.67",
            btnText1: "$3623.12",
            btnText2: "$3951.72"


        }
    ]
    return (
        <Box mt={1}>
            <Box display={"flex"} gap={"25px"} alignItems={"center"}>
                <Box>
                    <Typography fontSize={"25px"}>
                        Pattern Recognition
                    </Typography>
                </Box>
                <Box>
                    <CustomButton
                        title="2 found"
                        sx={{
                            backgroundColor: "rgba(22, 21, 20, 1)",
                            color: "neutral.Snowwhite",
                            border: "1px solid rgba(255, 255, 255, 1)",
                            borderRadius: "15px",
                        }}
                    />

                </Box>

            </Box>
            <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
                sx={{
                    bgcolor: "neutral.charcoalGrey",
                    p: 1.5,
                    borderRadius: 2,
                    mt: 2,
                    gap: { xs: 2, md: 0 },
                }}
            >
                {/* Left side: pattern cards */}
                <Grid container spacing={2} >
                    {patternData.map((item, index) => (
                        <Grid item size={{ xs: 12, md: 12 }} >
                            <Box
                                // display="flex"
                                // flexDirection={{ xs: "column", md: "row" }}
                                // justifyContent="space-between"
                                // alignItems={{ xs: "flex-start", md: "center" }}
                                backgroundColor="neutral.darkGrey"
                                padding="15px"
                                borderRadius="10px"
                                marginTop="20px"
                                gap={{ xs: 2, md: 0 }}
                            >
                                <Box gap="12px">
                                    <Typography variant="h4" color="text.lightRedColor" fontSize={"20px"}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body1" >
                                        {item.type}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        color="neutral.Snowwhite"
                                        mt="10px"
                                        fontSize={"15px"}
                                        fontWeight={400}
                                    >
                                        {item.decription}
                                    </Typography>

                                    <Box
                                        mt="10px"
                                        display={"flex"}
                                        gap={2}
                                        flexWrap={{ xs: "wrap", md: "nowrap" }}
                                    >
                                        <CustomButton
                                            variant="h6"
                                            backgroundColor="rgba(0, 0, 0, 0)"
                                            title={
                                                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                                                    Target:{" "}
                                                    <span style={{ color: "rgba(255, 68, 80, 1)" }}>
                                                        {" "}
                                                        {item.btnText1}
                                                    </span>
                                                </span>
                                            }
                                            sx={{
                                                border: "1px solid rgba(255, 255, 255, 1)",
                                                width: { xs: "100%", md: "auto" },
                                            }}
                                        />

                                        <CustomButton
                                            variant="h1"
                                            backgroundColor="#1A1A1A"
                                            title={
                                                <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 500 }}>
                                                    Target :{" "}
                                                    <span style={{ color: "rgba(255, 68, 80, 1)" }}>
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
                                    </Box>
                                </Box>

                                <Box width={{ xs: "100%", md: "auto" }} mt={{ xs: 2, md: 2 }}>
                                    <Box>
                                        <Box>
                                            Confidence
                                        </Box>

                                        <Box sx={{ width: "100%", mt: 2 }}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={20}
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
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2} marginTop={3} backgroundColor="background.lightGray" p={2} borderRadius={"10px"}>
                    <Grid item size={{ xs: 12, sm: 12 }}>
                        <Box display={"flex"} alignItems={"center"} gap={1} >
                            <CustomButton
                                title="How to Use"
                                width="100%"
                                sx={{
                                    borderRadius: "20px",
                                    backgroundColor: "accent.main",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item mt={1} size={{ xs: 12, sm: 12 }}>
                        <Typography variant="body1" fontSize={15} fontWeight={600}>
                            Patterns are historically proven formations that often lead to predictable price movements. High Confidence (75%) = strong pattern. Always wait for a breakout for confirmation!
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Pattern
