import { Box, Chip, Container, Grid, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../../components/customButton'
import ScanIcon from "../../assets/icons/scan-icon.svg"
import MlIcon from "../../assets/icons/mt-icon.svg"
import CustomSelect from '../../components/customSelect'
import CustomCheckbox from '../../components/cutomChecked'
// import CustomCheckbox from '../../components/cutomChecked'
import PredictorImage from "../../assets/icons/predictor-icon.svg"
import AiPumpScannerIcon from "../../assets/icons/ai-pump-scanner.svg"
import PromContent from './aiPumpContent/prom'


const AiPumpScanner = () => {
    const [scanType, setScanType] = useState("");
    const buttonData = [
        {
            title: "VERY HIGH"
        },
        {
            title: "HIGH"
        },
        {
            title: "MEDIUM"
        },
        {
            title: "LOW"
        },


    ]
    const data = [
        {
            value: "774",
            decription: "Analyzed"
        },
        {
            value: "16",
            decription: "Found"
        },
        {
            value: "45",
            decription: "Avg Score"
        },
        {
            value: "305%",
            decription: "Max Potential"
        },
    ]
    const checkBoxData = [
        {
            title: "Score 35+"
        },
        {
            title: "Whale"
        },
        {
            title: "OI+"
        },
        {
            title: "Funding"
        },
        {
            title: "BTC OK"
        },
        {
            title: "Squeeze"
        },
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={"20px"} borderRadius={"20px"} mt={3}>
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                gap={{ xs: 2, sm: 0 }}
            >
                {/* Title */}
                <Box>
                    <Typography
                        color="neutral.Snowwhite"
                        fontSize={{ xs: "16px", sm: "20px" }}
                        fontWeight={650}
                    >
                        AI Pump Scanner
                    </Typography>
                </Box>

                {/* Buttons */}
                <Box
                    display="flex"
                    gap="10px"
                    flexWrap="wrap"
                    width={{ xs: "100%", sm: "auto" }}
                    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                >
                    <CustomButton
                        icon={<img src={ScanIcon} />}
                        title="Scan"
                        width={{ xs: "100%", sm: "auto" }}
                        sx={{
                            backgroundColor: "rgba(255, 100, 33, 1)",
                            fontSize: { xs: "14px", sm: "20px" },
                            borderRadius: "15px",
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Typography color='neutral.Snowwhite' fontSize={"15px"} letterSpacing={1.2} fontWeight={400}>
                    1000+ coins • Memes • Lowcaps • New Listings • 20+ patterns
                </Typography>
            </Box>
            <Box display={"flex"} gap={"10px"} mt={2}>
                <Box>
                    <Typography color='neutral.neutralGrey' fontSize={"15px"} fontWeight={600}>
                        Categories:
                    </Typography>
                </Box>
                <Box
                    display={"flex"} gap={"8px"} flexWrap={"wrap"}
                >
                    {buttonData.map((item) => (
                        <Chip
                            key={item.title}
                            label={item.title}
                            sx={{
                                color: "neutral.Snowwhite",
                                borderRadius: "50px",
                                bgcolor: item.title === "VERY HIGH" ? "text.brightRed" : item.title === "HIGH" ? "text.orangeRed" : item.title === "MEDIUM" ? "text.yellowGreen" : item.title === "LOW" ? "text.emeraldGreen" : "red",
                                letterSpacing: "1px"
                            }}
                        />
                    ))}
                </Box>

            </Box>
            <Box mt={4}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {data.map((item, index) => {
                            const valueColors = [
                                "neutral.Snowwhite",
                                "neutral.Snowwhite",
                                "text.yellowGreen",
                                "neutral.Snowwhite",
                            ];

                            return (
                                <Grid item size={{ xs: 12, sm: 3, md: 3 }} key={index}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        p={4}
                                        bgcolor="neutral.darkGrey"
                                        borderRadius={"26px"}
                                    >
                                        <Typography
                                            fontWeight={600}
                                            fontSize="30px"
                                            color={valueColors[index]}
                                        >
                                            {item.value}
                                        </Typography>

                                        <Typography
                                            fontSize="18px"
                                            fontWeight={600}
                                            color="text.White"
                                        >
                                            {item.decription}
                                        </Typography>
                                    </Box>
                                </Grid>
                            );
                        })}

                    </Grid>
                </Container>
            </Box>
            <Box mt={3}>
                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box>
                            <CustomSelect
                                placeholder="FULL SCAN (1000+ COIN)"
                                onChange={(e) => setScanType(e.target.value)}

                            >
                                <MenuItem sx={{
                                    background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                                    borderRadius: "10px",
                                    padding: "5px 10px"

                                }}
                                    value="FULL SCAN (3000+ coins)">
                                    FULL SCAN (3000+ coins)
                                </MenuItem>
                                <MenuItem value="Priority (2000 coins)">
                                    Priority (2000 coins)
                                </MenuItem>

                                <MenuItem value="High Risk (50+ coins)">
                                    High Risk (50+ coins)
                                </MenuItem>
                                <MenuItem value="Memecoins (50+ coins)">
                                    Memecoins (50+ coins)
                                </MenuItem>
                                <MenuItem value="Lowcaps (100+ coins)">
                                    Lowcaps (100+ coins)
                                </MenuItem>
                            </CustomSelect>
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box>
                            <CustomSelect
                                placeholder="+10% min"
                            >
                                <MenuItem value=" +10% min">
                                    +10% min
                                </MenuItem>

                                <MenuItem value="+20% min">
                                    +20% min
                                </MenuItem>

                                <MenuItem value="+30% min">
                                    +30% min
                                </MenuItem>
                                <MenuItem value="+50% min">
                                    +50% min
                                </MenuItem>
                                <MenuItem value="+100% min">
                                    +100% min
                                </MenuItem>
                                <MenuItem value="+200% min">
                                    +200% min
                                </MenuItem>
                            </CustomSelect>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    {
                        checkBoxData.map((item) => (
                            <CustomCheckbox
                                label={item.title}
                            />
                        ))
                    }

                </Box>
                <Box display={"flex"} justifyContent={"center"} mt={7}>
                    <Box mt={1}>
                        <img src={AiPumpScannerIcon} style={{ width: "90px", height: "90px" }} />
                    </Box>
                </Box>
                <Box textAlign={"center"}>
                    <Typography color="neutral.Snowwhite" fontSize={"23px"} fontWeight={600} letterSpacing={1}>
                        AI Pump Predictor
                    </Typography>
                </Box>
                <Box textAlign={"center"} >
                    <Typography color="rgba(255, 255, 255, 0.5)" fontWeight={400} >
                        Analysis of  <span style={{ color: "rgba(255, 100, 33, 1)" }}>1000% coins </span> (Futures + Spot)
                    </Typography>
                </Box>
                <Box textAlign={"center"} >
                    <Typography color="rgba(255, 255, 255, 0.5)" fontWeight={400} >
                        Order Book • CVD • Liquidation Zones • OI • Funding • 20+ patterns
                    </Typography>
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={"10px"} mt={3}>
                    <CustomButton
                        title={"50+ memecoins"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}
                    />
                    <CustomButton
                        title={"100+ lowcaps"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}

                    />
                    <CustomButton
                        title={"New listings"}
                        variant='predictorBtn'
                        sx={{
                            borderRadius: "20px"
                        }}
                    />
                </Box>
                <Box>
                    <Typography color="neutral.Snowwhite" fontSize={"15px"} fontWeight={400} textAlign={"center"} mt={2}>
                        Low-cap potential: 100-500%+ even when BTC is sideways
                    </Typography>
                </Box>
            </Box>
            <Box>
                <PromContent />
            </Box>
        </Box >
    )
}
export default AiPumpScanner
