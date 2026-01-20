import { Box, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomButton from '../../components/customButton';
import CloseIcon from "@mui/icons-material/Close";

const WhalesTrackers = ({ data }) => {
    console.log("fuefgeufgyefewwwwwwwwwwwwwwwwwwfyef", data?.whales?.[0]?.address);
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography
                    variant="h6"
                    color="neutral.Snowwhite"
                    fontSize="25px"
                    fontWeight={600}
                >
                    Whales tracker
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
            <Grid container spacing={2} mt="22px">
                {data?.whales?.[0]?.transactions?.slice(0, 4).map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                opacity: isLoading ? 0.5 : 1,
                                pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[0]?.address}
                                        </Typography>

                                        <CustomButton
                                            variant="h6"
                                            title={item.actionType}
                                            sx={{
                                                // backgroundColor:
                                                //     item.actionType === "Long" || item.actionType === "Buy"
                                                //         ? "neutral.brightGreen"
                                                //         : "neutral.brightRed",
                                                backgroundColor: "neutral.brightGreen",
                                                borderRadius: "10px",
                                                fontWeight: 600,
                                                fontSize: "10px",
                                                px: "30px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.time}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)" }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={2}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>
                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}

                {/* {whale?.whales?.[1]?.transactions?.slice(0, 2).map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "25px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                opacity: isLoading ? 0.5 : 1,
                                pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {whale?.whales?.[1].address}
                                        </Typography>

                                        <CustomButton
                                            variant="h6"
                                            title={item.actionType}
                                            sx={{
                                                backgroundColor:
                                                    item.actionType === "Long" || item.actionType === "Buy"
                                                        ? "neutral.brightGreen"
                                                        : "neutral.brightRed",
                                                borderRadius: "10px",
                                                fontWeight: 600,
                                                fontSize: "10px",
                                                px: "30px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 550 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)" }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display="flex" justifyContent="space-between" mt={2}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.asset}
                                </Typography>
                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="#B4B4B4">
                                            {item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))} */}
            </Grid>
        </>

    )
}
export default WhalesTrackers;
