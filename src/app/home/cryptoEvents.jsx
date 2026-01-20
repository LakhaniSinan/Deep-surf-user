import { Box, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
const CryptoEvents = ({ data }) => {
    console.log("efeufgygfyfgygfurgfurgfuirfurfg", data?.event_0?.recipients);
    const scenarios = data?.event_0.scenarios;
    console.log("hffrufuirfhirhfrif", scenarios);


    const cryptoEventsData = [
        {
            title: data?.event_0?.scenarios?.bearish?.label,
            description: data?.event_0?.scenarios?.bearish?.description,
            color: "rgba(255, 76, 76, 1)",

        },
        {
            title: data?.event_0?.scenarios?.neutral?.label,
            description: data?.event_0?.scenarios?.neutral?.description,
            color: "rgba(255, 230, 0, 1)",
        },
        {
            title: data?.event_0?.scenarios?.bullish?.label,
            description: data?.event_0?.scenarios?.bullish?.description,
            color: "rgba(62, 221, 135, 1)"
        }
    ]
    return (
        <Box color={"neutral.Snowwhite"}  borderRadius={"20px"} padding={"2px"}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Typography
                    variant="h6"
                    color="neutral.Snowwhite"
                    fontSize="25px"
                    fontWeight={600}
                >
                    Cryptocurrency Events
                </Typography>

                <IconButton
                    size="small"
                    sx={{
                        color: "neutral.Snowwhite",
                        bgcolor: "neutral.vermilionOrange",
                        "&:hover": {
                            bgcolor: "neutral.vermilionOrange",
                        },
                    }}
                    onClick={() => {
                        console.log("Macroeconomics closed");
                        // yahan hide / close logic add kar sakte ho
                    }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box mt={1.2}>
                <Typography color='neutral.Snowwhite' fontSize={"15px"} fontWeight={600}>
                    {data?.event_0?.title}
                </Typography>
                <Typography mt={1} fontSize={"13px"}>
                    {data?.event_0?.description}
                </Typography>
                <Typography mt={0.5} fontSize={"12px"}>
                     {data?.event_0?.recipients}
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
                    {data?.event_0?.bestEntry}
                </Typography>
            </Box>
        </Box>
    )
}
export default CryptoEvents;