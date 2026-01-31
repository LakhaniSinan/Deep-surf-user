import { Box, Grid, MenuItem, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import AccordingHeader from '../../components/accordingHeader'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'
import { useState } from 'react'
import PaginatedTable from '../../components/dynamicTable'
const TradeRaderSmartScanner = () => {
    const [loading, setIsLoading] = useState(false)
    const [region, setRegion] = useState("")
    const data = [
        " High Volume - easy entry/exit without slippage",
        " High ATR - more movement = more opportunities",
        " Trending Up - only rising coins (for Long)",
        "Trending Down - only falling (for Short)",

    ]
    const billingHistoryHeaders = [
        { id: "Symbol", label: "Symbol", align: "left" },
        { id: "Change 24h", label: "Change 24h", align: "left" },
        { id: "ATR% (24h)", label: "ATR% (24h)", align: "right" },
        { id: "Vol 24h ($)", label: "Vol 24h ($)", align: "right" },
        { id: "Liq", label: "Liq", align: "right" },
        { id: "Score", label: "Score", align: "right" },

    ];
    const billingHistoryTable = [
        {
            Symbol: "ALPACA",
            Change24h: "391.23%",
            ATRValue: "118.53%",
            Vol24h: "$2 911 352 254",
            Liq: "69",
            Score: "166.9"

        },
        {
            Symbol: "PORT3",
            Change24h: "-68.31%",
            ATRValue: "267.68%",
            Vol24h: "$200 374 788",
            Liq: "46",
            Score: "128.9"

        },
        {
            Symbol: "BSW",
            Change24h: "36.41%",
            ATRValue: "152.87%",
            Vol24h: "$83 925 619",
            Liq: "36",
            Score: "71.4"

        }
    ]
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={4} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Trade Radar — Smart Scanner"}
                    color={"neutral.Snowwhite"}
                    btnText={"Build Plan"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={3} mt={2}>
                <Box>
                    <HeaderText
                        title={"How to use Trade Radar:"}
                        tittleFontSize={"15px"}
                        color={"neutral.Snowwhite"}
                        icon={<img src={ArrowBtn} />}
                    />
                </Box>
                <Box>
                    {data.map((item, index) => (
                        <AccordingHeader tittle={item} key={index} fontSize={"13px"} />
                    ))}
                </Box>
                <Box mt={3}>
                    <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                        Ideal for: Finding volatile coins for scalping and day trading
                    </Typography>
                </Box>
            </Box>
            <Box mt={1}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Min Volume (24h)
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="12334"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "0.1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "10px",
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Min ATR %
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="1.0"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                border: "0.1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "10px",
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    frame
                                </Typography>
                                <Box mt={1}>
                                    <CustomSelect
                                        value={region}
                                        placeholder="All Regimes"
                                        onChange={(e) => setRegion(e.target.value)}
                                        backgroundColor="rgba(28, 28, 28, 1)"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                borderRadius: "10px",
                                            }
                                        }}

                                    >
                                        <MenuItem sx={{

                                            "&.Mui-selected": {
                                                background:
                                                    "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                                color: "neutral.white",
                                                borderRadius: "10px",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }} value="All Regimes">All Regimes</MenuItem>
                                        <MenuItem sx={{
                                            "&.Mui-selected": {
                                                background:
                                                    "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                                color: "neutral.white",
                                                borderRadius: "10px",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }} value="Trading Up">Trading Up</MenuItem>
                                        <MenuItem sx={{
                                            "&.Mui-selected": {
                                                background:
                                                    "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                                color: "neutral.white",
                                                borderRadius: "10px",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }} value="Trading Down">Trading Down</MenuItem>
                                        <MenuItem sx={{
                                            "&.Mui-selected": {
                                                background:
                                                    "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                                color: "neutral.white",
                                                borderRadius: "10px",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }} value="Side waves">Side waves</MenuItem>
                                    </CustomSelect>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                                $25M = sufficient liquidity
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                                1-3% = active trading
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
            <Box mt={2}>
                <PaginatedTable
                    displayRows={["Symbol", "Change24h", "ATRValue", "Vol24h", "Liq", "Score"]}
                    tableHeader={billingHistoryHeaders}
                    tableData={billingHistoryTable}
                    isLoading={loading}
                    showPagination={false}
                
                />
            </Box>

        </Box>
    )
}

export default TradeRaderSmartScanner