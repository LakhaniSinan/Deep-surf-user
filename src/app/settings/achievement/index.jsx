import { Box, Grid, Typography } from '@mui/material'
import TrophyIcon from "../../../assets/icons/trophy.svg"
import ParaShootIcon from "../../../assets/icons/parashoot-icon.svg"
import UnLockIcon from "../../../assets/icons/unLockIcon.svg"
import ProgressIcon from "../../../assets/icons/progress-icon.svg"
import PointIcon from "../../../assets/icons/point-icon.svg"
const Achievement = () => {
    const achievementData = [
        {
            icon: UnLockIcon,
            point: "1/124",
            feature: "Unlocked"
        },
        {
            icon: ProgressIcon,
            point: "1%",
            feature: "Progress"
        },
        {
            icon: PointIcon,
            point: "10",
            feature: "Points"
        },
        {
            icon: ParaShootIcon,
            point: "-",
            feature: "Airdrop"
        }
    ]
    return (
        <Box p={2}>
            <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                <Box>
                    <img src={TrophyIcon} />
                </Box>
                <Box>
                    <Typography fontSize={"28px"} letterSpacing={"1px"} fontWeight={600}>
                        Achievements
                    </Typography>
                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"10px"} mt={2}>
                <Box display={"flex"} gap={"20px"} alignItems={"flex-end"}>
                    <Box>
                        <img src={ParaShootIcon} style={{ width: "30px", height: "30px" }} />
                    </Box>
                    <Box>
                        <Typography color='neutral.vermilionOrange' fontWeight={600} fontSize={"20px"} letterSpacing={"0.2px"}>
                            Airdrop for Participants!
                        </Typography>
                        <Typography fontSize={"13px"} color='neutral.Snowwhite'>
                            Achievement points will be converted to tokens at launch. More points = more tokens!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={1}>
                    {achievementData.map((item) => (
                        <Grid item size={{ xs: 12, md: 3 }}>
                            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"13px"}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                    <Box>
                                        <Typography color='neutral.Snowwhite' fontWeight={400} fontSize={"18px"}>
                                            {item.point}
                                        </Typography>
                                    </Box>
                                    <Box border={"2px solid rgba(127, 127, 127, 1)"} p={0.7} borderRadius={"10px"}>
                                        <img src={item.icon} style={{ width: "20px", height: "20px" }} />
                                    </Box>
                                </Box>
                                <Box mt={2}>
                                    <Typography color='rgba(171, 175, 180, 1)' fontSize={"20px"} fontWeight={600}>
                                        {item.feature}
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"15px"} mt={2}>
                <Box>
                    <Typography fontWeight={600} fontSize={"20px"}>
                        Achievement Rarity
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"} >
                        <Box>
                            <Box width={"8px"} height={"8px"} bgcolor={"neutral.Snowwhite"} borderRadius={"50%"}>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Common (10 pts)
                            </Typography>
                        </Box>

                    </Box>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                        <Box>
                            <Box width={"8px"} height={"8px"} bgcolor={"background.yellow"} borderRadius={"50%"}>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Uncommon (25 pts)
                            </Typography>
                        </Box>

                    </Box>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                        <Box>
                            <Box width={"8px"} height={"8px"} bgcolor={"background.brightRed"} borderRadius={"50%"}>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Rare (50 pts)
                            </Typography>
                        </Box>

                    </Box>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                        <Box>
                            <Box width={"8px"} height={"8px"} bgcolor={"background.purpleColor"} borderRadius={"50%"}>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>
                                Epic (100 pts)
                            </Typography>
                        </Box>

                    </Box>
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                        <Box>
                            <Box
                                width="8px"
                                height="8px"
                                borderRadius="50%"
                                sx={{
                                    background: "linear-gradient(to bottom left, rgba(200, 197, 248, 1), rgba(243, 141, 109, 1))",
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography>
                                Legendary (250 pts)
                            </Typography>
                        </Box>

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Achievement