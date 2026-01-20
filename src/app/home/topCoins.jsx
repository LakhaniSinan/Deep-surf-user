import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
import TopCoins from "../../assets/icons/top-coin1.svg";
import TopCoinsGraphy from "../../assets/icons/top-coin-graph.svg";
import UsdtIcon from "../../assets/icons/top-coin2.svg";
import Sparkline from "../../components/topCoinsTable/Sparkline";



const widgetStyle = {
    background: "#151515",
    borderRadius: "16px",
    height: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column"
};


const TopCoinsComponent = ({ data }) => {
    console.log("fuhgfugyffgurfrf", data);
    return (
        <Grid item size={{ xs: 12, md: 12 }}>
            <Box sx={widgetStyle}>
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
                        Top coins
                    </Typography>

                    {/* <IconButton
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
                    </IconButton> */}
                </Box>
                <Grid container spacing={2}>
                    {/* LEFT COLUMN - 5 coins */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {data?.slice(0, 5)?.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                // p={1}
                                sx={{
                                    // background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center" p={1}>
                                    <img src={item?.logo} alt={item.logo} style={{ width: "20px", height: "20px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="13px" fontWeight={600}>
                                            {item?.name}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item?.symbol}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Center: Graph */}
                                <Box>
                                    <Box
                                        sx={{
                                            width: "20px",
                                            height: "30px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Sparkline
                                            data={item.sparkline || []}
                                            isPositive={!item.change24hFormatted?.includes("-") ? true : false}
                                        />

                                        {/* {item.change24hFormatted?.includes("-") ? (
                                            <img src={NegativeIcon} />
                                        ) : (
                                            <img src={PositiveIcon} />
                                        )} */}
                                    </Box>
                                </Box>

                                {/* Right: Price + Percentage */}
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="12px" fontWeight={600}>
                                        {item.marketCapFormatted}
                                    </Typography>
                                    <Typography
                                        color={item?.change24hFormatted?.includes('-') ? 'neutral.dangerRed' : 'neutral.primaryGreen'}
                                        fontSize="12px"
                                    >
                                        {item.change24hFormatted}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {data?.slice(5, 10)?.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                p={1}
                                sx={{
                                    // background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center">
                                    <img src={item.logo} alt={item.title} style={{ width: "22px", height: "22px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="14px" fontWeight={600}>
                                            {item.name}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item.symbol}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box
                                        sx={{
                                            width: "20px",
                                            height: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Sparkline
                                            data={item.sparkline || []}
                                            isPositive={!item.change24hFormatted?.includes("-")}
                                        />

                                        {/* {item.change24hFormatted?.includes("-") ? (
                                            <img src={NegativeIcon} />
                                        ) : (
                                            <img src={PositiveIcon} />
                                        )} */}
                                    </Box>
                                </Box>
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="12px" fontWeight={600}>
                                        {item.marketCapFormatted}
                                    </Typography>
                                    <Typography
                                        color={item?.change24hFormatted?.includes('-') ? 'neutral.dangerRed' : 'neutral.primaryGreen'}
                                        fontSize="12px"
                                    >
                                        {item.change24hFormatted}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default TopCoinsComponent