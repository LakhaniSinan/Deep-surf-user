import { Box, Grid, MenuItem, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomSelect from '../../components/customSelect'
import { useState } from 'react'
import CustomInput from '../../components/customInput'

const AiDecisionEngine = () => {
    const [userType, setUserType] = useState("");
    const [timeframe, setTimeFrame] = useState("")
    const [balance, setBalance] = useState("")

    const data = [
        "Liquidity and market regime analysis",
        "Flow and pressure assessment",
        "Optimal entry/exit level selection",
        "Position size calculation with risk consideration",

    ]
    const coinName = [
        {
            name: "BTC",
        },
        {
            name: "ETH",
        },
        {
            name: "SOL",
        },
        {
            name: "BNB",
        },
        {
            name: "ARB",
        },
        {
            name: "DOGE",
        }

    ]
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={4} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"AI Decision Engine"}
                    color={"neutral.Snowwhite"}
                    btnText={"Build Plan"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={3} mt={2}>
                <Box>
                    <HeaderText
                        title={"What AI Decision Engine does:"}
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
                        Unlike calculator: AI Decision analyzes market itself and decides - enter or wait
                    </Typography>
                </Box>
            </Box>

            <Box mt={1}>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Coin
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="SOL"
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
                                    Timeframe
                                </Typography>
                                <Box mt={1}>
                                    <CustomSelect
                                        value={timeframe}
                                        placeholder="1h"
                                        onChange={(e) => setTimeFrame(e.target.value)}
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
                                        }} value="15min">15min</MenuItem>
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
                                        }} value="1Hr">1Hr</MenuItem>
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
                                        }} value="2Hr">2Hr</MenuItem>
                                    </CustomSelect>
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
                                        value={balance}
                                        placeholder="Balanced"
                                        onChange={(e) => setBalance(e.target.value)}
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
                                        }} value="Balanced">Balanced</MenuItem>
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
                                        }} value="Aggressive">Aggressive</MenuItem>
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
                                        }} value="Conservative">Conservative</MenuItem>
                                    </CustomSelect>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Box display={"flex"} gap={"10px"} mt={2} alignItems={"center"}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                        Quick select:
                    </Typography>
                </Box>
                {coinName.map((item, index) => (
                    <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"rgba(28, 28, 28, 1)"}>
                        <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                            {item.name}
                        </Typography>

                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default AiDecisionEngine