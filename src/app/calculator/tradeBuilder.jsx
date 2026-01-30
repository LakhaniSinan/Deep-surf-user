import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import HeaderText from '../../components/headerText'
import AccordingHeader from '../../components/accordingHeader.jsx'
import CustomInput from '../../components/customInput'

const TradeBuilder = () => {
    const tradeData = [
        "Enter planned trade data (symbol, entry levels, stops, targets)",
        "Add notes with trade rationale",
        "Click Save Idea to add to planned trades list",
        "Review saved ideas below in Planned trades section"
    ]
    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box>
                <HeaderText title="Trade Builder" btnText={"Save Idea"} color="neutral.Snowwhite" tittleFontSize={"20px"} />
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"30px"} p={1.8} mt={2}>
                <Box>
                    <Typography color='neutral.Snowwhite' fontSize={"17px"}>
                        How to use Trade Builder:
                    </Typography>
                    <Typography color='neutral.coolGray' fontSize={"13px"}>
                        Планируйте сделки заранее и сохраняйте торговые идеи
                    </Typography>
                    <Box mt={2}>
                        {tradeData.map((item, index) => (
                            <AccordingHeader tittle={item} key={index} />
                        ))}
                    </Box>
                </Box>

            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box mt={2}>
                            <Box>
                                <Typography color='rgba(155, 163, 175, 1)' fontSize={"13px"}>
                                    Symbol
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <CustomInput
                                    placeholder="BTC, ETH, SOL..."
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            backgroundColor: "rgba(28, 28, 28, 1)",
                                            padding: "3px"
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "10px 12px",
                                            fontSize: "15px",
                                            fontFamily: "'Inter Tight'",
                                            "&::placeholder": {
                                                color: "text.ghostGrey",
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box mt={2}>
                            <Box>
                                <Typography color='rgba(155, 163, 175, 1)' fontSize={"13px"}>
                                    Side
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <CustomInput
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            backgroundColor: "rgba(28, 28, 28, 1)",
                                            padding: "3px"
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "10px 12px",
                                            fontSize: "15px",
                                            fontFamily: "'Inter Tight'",
                                            "&::placeholder": {
                                                color: "text.ghostGrey",
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box mt={2}>
                            <Box>
                                <Typography color='rgba(155, 163, 175, 1)' fontSize={"13px"}>
                                    Timeframe
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <CustomInput
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            backgroundColor: "rgba(28, 28, 28, 1)",
                                            padding: "3px"
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "10px 12px",
                                            fontSize: "15px",
                                            fontFamily: "'Inter Tight'",
                                            "&::placeholder": {
                                                color: "text.ghostGrey",
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box mt={2}>
                            <Box>
                                <Typography color='rgba(155, 163, 175, 1)' fontSize={"13px"}>
                                    Risk % (Риск)
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <CustomInput
                                    placeholder="1.0"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "10px",
                                            backgroundColor: "rgba(28, 28, 28, 1)",
                                            padding: "3px"
                                        },
                                        "& .MuiInputBase-input": {
                                            padding: "10px 12px",
                                            fontSize: "15px",
                                            fontFamily: "'Inter Tight'",
                                            "&::placeholder": {
                                                color: "text.ghostGrey",
                                                opacity: 1,
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box mt={2}>
                <Typography color='neutral.Snowwhite' fontSize={"18px"} fontWeight={600}>
                    Input and Output Levels
                </Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        Entry Low
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Lower Entry"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        Entry High
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Upper Entry"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        Stop Loss
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Stop-Loss"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        TP1
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Take Profit 1"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        TP2
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Take Profit 2"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 2 }}>
                            <Box mt={2}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                        TP3
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <CustomInput
                                        placeholder="Take Profit 3"
                                        type='number'
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "10px",
                                                backgroundColor: "rgba(28, 28, 28, 1)",
                                                padding: "3px"
                                            },
                                            "& .MuiInputBase-input": {
                                                padding: "10px 12px",
                                                fontSize: "15px",
                                                fontFamily: "'Inter Tight'",
                                                "&::placeholder": {
                                                    color: "text.slateGrey",
                                                    opacity: 1,
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box mt={3}>
                <Typography color='text.slateGrey' fontSize={"13px"}>
                    Notes (justification of the deal)
                </Typography>
                <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={2} height={"98px"} mt={2}>

                </Box>
            </Box>
        </Box>
    )
}

export default TradeBuilder