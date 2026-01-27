import { Box, Grid, MenuItem, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'
import { useState } from 'react'
import TradingCard from '../../components/tradeCard'

const FairLastPriceScanner = () => {
    const [loading, setIsLoading] = useState(false)
    const [region, setRegion] = useState("")
    const lastPriceData = [
        "Last < Mark (negative spread) → Futures CHEAPER →  LONG opportunity",
        "Last > Mark (positive spread) → Futures MORE EXPENSIVE →  SHORT opportunity"
    ]
    const sytrategyData = [
        "Spread usually collapses to zero within hours. If spread >1%, it may be mean reversion trade opportunity."
    ]
    const RiskData = [
        "Spread may widen before collapsing",
        "Account for fees (0.06% entry + 0.06% exit)",
        "Funding rate may work against you"
    ]
    const data = [
        {
            name: "Найдено возможностей",
            value: "29",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.Snowwhite",
        },
        {
            name: "Прибыльных (после fees)",
            value: "$21.81B",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.Snowwhite",
        },
        {
            name: "Средний спред",
            value: "15",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.Snowwhite",
        },
        {
            name: "Лучший спред",
            value: "14",
            nameColor: "neutral.Snowwhite",
            valueColor: "neutral.Snowwhite",
        }
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} mt={2} borderRadius={"10px"}>
            <Box>
                <HeaderText
                    title={" Fair/Last Price Spread Scanner"}
                    color={"neutral.Snowwhite"}
                    btnText={"Load"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={2.5} mt={2}>
                <Box>
                    <HeaderText
                        title={"What is Fair/Last Price Spread?"}
                        color={"neutral.Snowwhite"}
                        icon={<img src={ArrowBtn} />}
                        tittleFontSize={"15px"}
                    />
                </Box>
                <Box mt={0.8}>
                    <Typography color={"neutral.Snowwhite"} fontSize={"13px"}>
                        Mark Price (Fair Price) - fair price calculated by exchange based on spot exchange index
                    </Typography>
                </Box>
                <Box mt={1}>
                    <Typography color={"neutral.Snowwhite"} fontWeight={500}>
                        How to use spreads:
                    </Typography>
                    <Box>
                        {lastPriceData?.map((item) => (
                            <AccordingHeader
                                tittle={item}
                                fontSize={"12px"}
                                highlights={[
                                    { word: "Last < Mark (negative spread)", color: "rgba(255, 100, 33, 1)" },
                                    { word: "Last > Mark (positive spread) ", color: "rgba(255, 100, 33, 1)" },
                                ]} />
                        ))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography color={"neutral.Snowwhite"} fontWeight={500}>
                        Strategy:
                    </Typography>
                    <Box>
                        {sytrategyData?.map((item) => (
                            <AccordingHeader
                                tittle={item}
                                fontSize={"12px"}
                            />
                        ))}
                    </Box>
                </Box>
                <Box mt={3}>
                    <Typography color={"neutral.Snowwhite"} fontWeight={500}>
                        Risks:
                    </Typography>
                    <Box>
                        {RiskData?.map((item) => (
                            <AccordingHeader
                                tittle={item}
                                fontSize={"12px"}
                            />
                        ))}
                    </Box>
                </Box>

            </Box>
            <Box mt={1}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Min spread to display
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
                                    Coin filter (optional)
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="BTC"
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
                                    Spread type
                                </Typography>
                                <Box mt={1}>
                                    <CustomSelect
                                        value={region}
                                        placeholder="All Spreads"
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
                                        }} value="All Spreads">All Spreads</MenuItem>
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
                                        }} value="Positive only ( Short ) ">Positive only ( Short ) </MenuItem>
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
                                        }} value="Negative only ( Long ) ">Negative only ( Long ) </MenuItem>

                                    </CustomSelect>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Box mt={1}>
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
            <Box mt={1}>
                <Grid container spacing={1}>
                    {data.map((item, index) => (
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box bgcolor={"rgba(28, 28, 28, 1)"} key={index} mt={2} borderRadius={"10px"} p={"2px"}>
                                <TradingCard
                                    title={item.name}
                                    value={item.value}
                                    textAlign={"left"}
                                    titleFontSize={"19px"}
                                    valueFontSize={"28px"}
                                    titleColor={item.nameColor}
                                    valueColor={item.valueColor}
                                    titleFontWeight={400}
                                    valueFontWeight={550}

                                />
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box bgcolor={"background.darkBrown"} p={3} mt={2.5} borderRadius={"20px"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontSize={"16px"}>
                            BEST OPPORTUNITY
                        </Typography>
                        <Typography color='neutral.Snowwhite' fontSize={"30px"} fontWeight={550}>
                            STRAX
                        </Typography>
                        <Typography color='neutral.vermilionOrange' fontSize={"15px"}>
                            Last: $1.4174 • Mark: $0.0222
                        </Typography>
                    </Box>
                    <Box textAlign={"right"}>
                        <Typography color='neutral.Snowwhite'>
                            +6293.267%
                        </Typography>
                        <Typography color='neutral.Snowwhite'>
                            Short Entry
                        </Typography>
                        <Typography color='neutral.vermilionOrange'>
                            Net Profit: 6293.15%
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default FairLastPriceScanner