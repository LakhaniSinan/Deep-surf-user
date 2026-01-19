import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import StarIcon from "../../assets/icons/macroeconomic-icon.svg";
import TopCoins from "../../assets/icons/top-coin1.svg";
import TopCoinsGraphy from "../../assets/icons/top-coin-graph.svg";
import UsdtIcon from "../../assets/icons/top-coin2.svg";

const leftCoins = [
    {
        title: "BTC",
        symbol: "Bitcoin",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$59,333",
        value2: "+2.45%",
    },
    {
        title: "ETH",
        symbol: "Ethereum",
        icon: UsdtIcon,
        graphyIcon: TopCoinsGraphy,
        value1: "$3,245",
        value2: "+1.89%",
    },
    {
        title: "BNB",
        symbol: "Binance Coin",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$425",
        value2: "-0.67%",
    },
    {
        title: "SOL",
        symbol: "Solana",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$145",
        value2: "+3.21%",
    },
    {
        title: "XRP",
        symbol: "Ripple",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$0.89",
        value2: "-0.45%",
    },

];

// 🪙 Right Column Coins (5 entries)
const rightCoins = [
    {
        title: "USDT",
        symbol: "Tether",
        icon: UsdtIcon,
        graphyIcon: TopCoinsGraphy,
        value1: "$1.00",
        value2: "0.01%",
    },
    {
        title: "ADA",
        symbol: "Cardano",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$0.52",
        value2: "+1.25%",
    },
    {
        title: "DOGE",
        symbol: "Dogecoin",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$0.08",
        value2: "+2.15%",
    },
    {
        title: "AVAX",
        symbol: "Avalanche",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$38.50",
        value2: "-0.95%",
    },
    {
        title: "DOT",
        symbol: "Polkadot",
        icon: TopCoins,
        graphyIcon: TopCoinsGraphy,
        value1: "$5.28",
        value2: "-0.89%",
    },
];

    const widgetStyle = {
        background: "#151515",
        borderRadius: "16px",
        padding: "16px",
        height: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };
    

const TopCoinsComponent = () => {
    return (
        <Grid item size={{ xs: 12, md: 6 }}>
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
                <Grid container spacing={2}>
                    {/* LEFT COLUMN - 5 coins */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {leftCoins.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                p={1}
                                sx={{
                                    background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center">
                                    <img src={item.icon} alt={item.title} style={{ width: "40px", height: "40px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="14px" fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item.symbol}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Center: Graph */}
                                <Box>
                                    <img src={item.graphyIcon} style={{ width: "80px", height: "30px" }} alt="graph" />
                                </Box>

                                {/* Right: Price + Percentage */}
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="14px" fontWeight={600}>
                                        {item.value1}
                                    </Typography>
                                    <Typography
                                        color={item.value2.startsWith('+') ? '#00D9A3' : '#FF4444'}
                                        fontSize="12px"
                                    >
                                        {item.value2}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        {rightCoins.map((item, index) => (
                            <Box
                                key={index}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                gap="10px"
                                mb={1.5}
                                p={1.2}
                                sx={{
                                    background: "#1E1E1E",
                                    borderRadius: "8px",
                                }}
                            >
                                {/* Left: Icon + Title */}
                                <Box display="flex" gap="10px" alignItems="center">
                                    <img src={item.icon} alt={item.title} style={{ width: "40px", height: "40px" }} />
                                    <Box>
                                        <Typography color="white" fontSize="14px" fontWeight={600}>
                                            {item.title}
                                        </Typography>
                                        <Typography color="#999" fontSize="12px">
                                            {item.symbol}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <img src={item.graphyIcon} style={{ width: "80px", height: "30px" }} alt="graph" />
                                </Box>
                                <Box textAlign="right">
                                    <Typography color="white" fontSize="14px" fontWeight={600}>
                                        {item.value1}
                                    </Typography>
                                    <Typography
                                        color={item.value2.startsWith('+') ? '#00D9A3' : '#FF4444'}
                                        fontSize="12px"
                                    >
                                        {item.value2}
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