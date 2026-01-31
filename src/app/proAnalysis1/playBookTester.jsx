import { Box, Grid, MenuItem, Typography } from '@mui/material'
import ArrowBtn from "../../assets/icons/arrow-white-btn.svg"
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader'
import CustomSelect from '../../components/customSelect'
import { useState } from 'react'
import CustomInput from '../../components/customInput'

const PlayBookTester = () => {
    const [userType, setUserType] = useState("");
    const [timeframe, setTimeFrame] = useState("")

    const data = [
        "Select saved Playbook",
        "Specify coin and timeframe for testing",
        "Lookback - how many candles to analyze",
        "Forward - after how many candles to measure result",
        "System finds all condition matches and shows stats: winrate, average return, signal count"

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
                    title={"Playbook Tester"}
                    color={"neutral.Snowwhite"}
                    btnText={"Run Test"}
                />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"20px"} p={3} mt={2}>
                <Box>
                    <HeaderText
                        title={"How Playbook Tester works:"}
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
            </Box>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite' fontSize={"16px"}>
                    How Playbook Tester works:
                </Typography>
                <Box mt={1}>
                    <CustomSelect
                        value={userType}
                        placeholder="Select Playbook..."
                        onChange={(e) => setUserType(e.target.value)}
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
                        }} value="Playbook">Playbook</MenuItem>
                        {/* <MenuItem sx={{
                            "&.Mui-selected": {
                                background:
                                    "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305) !important",
                                color: "neutral.white",
                                borderRadius: "10px",
                            },
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        }} value="Playdbook">Playdbook</MenuItem>
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
                        }} value="Playbook">Playbook</MenuItem> */}
                    </CustomSelect>
                </Box>
            </Box>
            <Box mt={1}>
                <Typography color='rgba(255, 255, 255, 0.5)' fontSize={"13px"}>
                    No playbooks? Create them in "Playbook Builder" section above
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 3 }}>
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
                        <Grid item size={{ xs: 12, md: 3 }}>
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
                                        }} value="3Hr">3Hr</MenuItem>
                                    </CustomSelect>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Lookback (bars)
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="SOL"
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
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box mt={2}>
                                <Typography color='neutral.Snowwhite' fontSize={"15px"}>
                                    Forward (bars)
                                </Typography>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="SOL"
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

export default PlayBookTester