import { Box, Grid, MenuItem, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import CustomInput from '../../components/customInput'
import CustomSelect from '../../components/customSelect'

const TopTraders = () => {
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
    ]
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={5} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Top Traders Positions"}
                    tittleFontSize={"20px"}
                    color={"neutral.Snowwhite"}
                    btnText={"Load"}
                    titleFontWeight={600}
                />
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <CustomSelect placeholder='Binance'>
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
                                }} value="Binance">Binance</MenuItem>
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
                                }} value="Bybit">Bybit</MenuItem>
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
                                }} value="OKX">OKX</MenuItem>
                            </CustomSelect>

                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <CustomInput placeholder="SOL" sx={{
                                "& .MuiOutlinedInput-root": {
                                    border: "0.1px solid rgba(127, 127, 127, 1)",
                                    borderRadius: "20px",
                                }
                            }} />
                        </Box>

                    </Grid>
                </Grid>
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

export default TopTraders