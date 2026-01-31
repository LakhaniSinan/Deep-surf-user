import { Box, Grid, Typography } from '@mui/material'
import RelaodBtn from "../../assets/icons/relaod-Icon.svg"
import HeaderText from '../../components/headerText'
import WarningIcon from "../../assets/icons/attendence-icon.svg"
import CustomInput from '../../components/customInput'

const LiquidationMap = () => {
    return (
        <Box bgcolor={"background.charcoal"} mt={2} p={4} borderRadius={"15px"}>
            <Box>
                <HeaderText
                    title={"Liquidation Map"}
                    tittleFontSize={"25px"}
                    color={"neutral.Snowwhite"}
                    icon={<img src={RelaodBtn} />}
                />
            </Box>
            <Box border={"1px solid rgba(127, 127, 127, 1)"} mt={1.5} p={1.5} borderRadius={"25px"}>
                <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                    Long/Short liquidation concentration levels. Price often "hunts" for liquidity, reaching these levels.
                </Typography>
            </Box>
            <Box mt={3}>
                <Grid container spacing={1} alignItems="center">
                    <Grid item size={{ xs: 12, md: 10 }} >
                        <Box
                            sx={{
                                border: "1px solid rgba(255, 0, 0, 1)",
                                backgroundColor: "neutral.darkGrey",
                                borderRadius: "28px",
                                height: "48px",
                                px: 2,
                                display: "flex",
                                alignItems: "center",
                                width: "100%"
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "neutral.Snowwhite",
                                    fontSize: "14px",
                                }}
                            >
                                ETH
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 2 }} display="flex" justifyContent="center">
                        <Box
                            sx={{
                                width: "42px",
                                height: "42px",
                                borderRadius: "50%",
                                border: "1px solid rgba(255, 0, 0, 1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src={WarningIcon} alt="warning" width={18} />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )
}

export default LiquidationMap