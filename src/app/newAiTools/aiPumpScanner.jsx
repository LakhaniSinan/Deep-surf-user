import { Box, Chip, Container, Grid, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../../components/customButton'
import ScanIcon from "../../assets/icons/scan-icon.svg"
import MlIcon from "../../assets/icons/ml-icon.svg"
import CustomSelect from '../../components/customSelect'

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
            value: "0",
            decription: "Analyzed"
        },
        {
            value: "0",
            decription: "Found"
        },
        {
            value: "0",
            decription: "Avg Score"
        },
        {
            value: "0%",
            decription: "Max Potential"
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

                    <CustomButton
                        icon={<img src={MlIcon} />}
                        title="ML"
                        width={{ xs: "100%", sm: "auto" }}
                        sx={{
                            backgroundColor: "neutral.darkGrey",
                            border: "1px solid rgba(127, 127, 127, 1)",
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
            <Box display={"flex"} gap={"10px"} mt={0.5}>
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
                                bgcolor: "neutral.vermilionOrange",
                                letterSpacing: "1px"
                            }}
                        />
                    ))}
                </Box>

            </Box>
            <Box mt={4}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        {data.map((item, index) => {
                            const valueColors = [
                                "rgba(255, 129, 129, 1)",
                                "rgba(255, 229, 0, 1)",
                                "rgba(255, 128, 0, 1)",
                                "rgba(255, 129, 129, 1)",
                            ];

                            return (
                                <Grid item size={{ xs: 12, sm: 3, md: 3 }} key={index}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        py={2}
                                        bgcolor="rgba(22,22,22,0.85)"
                                    >
                                        <Typography
                                            fontWeight={600}
                                            fontSize="18px"
                                            color={valueColors[index]}
                                        >
                                            {item.value}
                                        </Typography>

                                        <Typography
                                            fontSize="18px"
                                            fontWeight={500}
                                            color="rgba(127, 127, 127, 1)"
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
            <Box bgcolor={"neutral.obsidianAsh"} padding={"15px"} borderRadius={"15px"}>
                <Box display={"flex"} gap={"2px"} alignItems={"center"}>
                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                        Sources :
                    </Typography>
                    <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"15px"}>
                        Binance Futures + Binance Spot + Bybit + OKX + MEXC + KuCoin + BingX = <span style={{ color: "rgba(255, 100, 33, 1)" }}>3000+ coins</span>
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"2px"} alignItems={"center"}>
                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                        Patterns :
                    </Typography>
                    <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"15px"}>
                        Order Book • CVD • Liquidation Zones • OI • Funding • Price Compression • Higher Lows • Volume • BTC Correlation
                    </Typography>
                </Box>
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
            </Box>
        </Box>
    )
}
export default AiPumpScanner
