import { Box, Grid, Typography } from '@mui/material'
import NotificationIcon from "../../../assets/icons/notification-icon.svg"
import CustomSwitch from '../../../components/switch'
import CustomButton from '../../../components/customButton'

const Security = () => {
    const securityData = [
        {
            icon: NotificationIcon,
            profileName: "Public profile",
            profileTittle: "Other users can see your profile"
        },
        {
            icon: NotificationIcon,
            profileName: "Public statistics",
            profileTittle: "Show usage statistics"
        },
        {
            icon: NotificationIcon,
            profileName: "Activity history",
            profileTittle: "Show activity history"
        }, {
            icon: NotificationIcon,
            profileName: "Referral information",
            profileTittle: "Show referral statistics"
        }
    ]
    return (
        <Box p={1}>
            <Typography fontSize={"25px"} fontWeight={600} letterSpacing={"1px"}>
                Security Settings
            </Typography>
            <Box bgcolor={"rgba(28, 28, 28, 1)"} borderRadius={"10px"} p={1.5} alignItems={"center"} mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography color='neutral.Snowwhite' fontWeight={550}>
                            Two-factor authentication (2FA)
                        </Typography>
                        <Typography fontSize={"12px"}>
                            Additional protection for your account
                        </Typography>
                    </Box>
                    <Box>
                        <CustomSwitch checked={false} />
                    </Box>
                </Box>

            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={550} fontSize={"20px"} letterSpacing={"1px"}>
                                        Privacy settings
                                    </Typography>
                                    <Typography fontSize={"12px"} letterSpacing={"0.5px"}>
                                        Receive notifications in your Discord channel
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomSwitch checked={false} />
                                </Box>
                            </Box>
                            <Box mt={1}>
                                {securityData.map((item) => (
                                    <Box bgcolor={"background.charcoal"} borderRadius={"10px"} mt={0.8} p={1.2}>
                                        <Box display={"flex"} gap={"15px"} alignItems={'center'}>
                                            <Box>
                                                <img src={item.icon} />
                                            </Box>
                                            <Box>
                                                <Typography fontSize={"12px"} color='neutral.Snowwhite' fontWeight={600}>
                                                    {item.profileName}
                                                </Typography>
                                                <Typography color='neutral.neutralGrey' fontSize={"12px"}>
                                                    {item.profileTittle}
                                                </Typography>
                                            </Box>
                                        </Box>

                                    </Box>
                                ))}
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={550} fontSize={"20px"} letterSpacing={"1px"}>
                                        Login history
                                    </Typography>
                                </Box>
                                <Box>
                                    <CustomButton
                                        title={"Update"}
                                        sx={{
                                            backgroundColor: "neutral.vermilionOrange",
                                            py: "2px",
                                            px: "20px",
                                            minHeight: "25px",
                                            fontSize: "15px",
                                            bodrerRadius: "25px"
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box bgcolor={"background.charcoal"} p={2} borderRadius={"14px"} mt={2} height={"260px"}>
                                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={12}>
                                    <Typography color='rgba(102, 98, 98, 1)' fontSize={"13px"}>
                                        Login history is empty
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default Security