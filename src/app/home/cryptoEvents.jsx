import { Box, Grid, Typography } from '@mui/material';
const CryptoEvents = () => {
    const cryptoEventsData = [
        {
            title: "Bearish (60%)",
            description: "Drop of 15-25% over 2-3 days. Shorting opportunities.",
            color: "rgba(255, 76, 76, 1)",

        },
        {
            title: "Neutral (25%)",
            description: "The team does not sell immediately, drop of 5-10%.",
            color: "rgba(255, 230, 0, 1)",
        },
        {
            title: "Bearish (60%)",
            description: "Drop of 15-25% over 2-3 days. Shorting opportunities.",
            color: "rgba(62, 221, 135, 1)"
        }
    ]
    return (
        <Box mt={2} color={"neutral.Snowwhite"} backgroundColor={"rgba(22, 22, 22, 1)"} borderRadius={"20px"} padding={"2px"}>
            <Typography color='neutral.Snowwhite' fontSize={"25px"} fontWeight={600}>
                Cryptocurrency Events
            </Typography>
            <Box mt={1.2}>
                <Typography color='neutral.Snowwhite' fontSize={"15px"} fontWeight={600}>
                    APEX Token Unlock (Friday, 00:00 UTC)
                </Typography>
                <Typography mt={1} fontSize={"13px"}>
                    Supply: 50M APEX ($10.5M)|% of supply: 3.2%
                </Typography>
                <Typography mt={0.5} fontSize={"12px"}>
                    Recipients: Team (60%), Early Investors (40%)
                </Typography>
            </Box>
            <Box mt={1.5}>
                <Grid container spacing={2}>
                    {
                        cryptoEventsData.map((item) => (
                            <Grid itme size={{ xs: 12, md: 6 }}>
                                <Box backgroundColor={"rgba(28, 28, 28, 1)"} p={1.5} borderRadius={"15px"} mt={1}>
                                    <Typography color={item.color} fontWeight={550}>
                                        {item.title}
                                    </Typography>
                                    <Typography fontSize={"14px"}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Box mt={1}>
                <Typography color='neutral.Snowwhite' fontSize={"14px"}>
                    Best entry: 1-2 days after unlock, when selling subsides. Monitor on-chain wallet movements of the team.
                </Typography>
            </Box>
        </Box>
    )
}
export default CryptoEvents;