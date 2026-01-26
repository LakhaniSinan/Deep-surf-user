import { Box, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomButton from '../../components/customButton';
import moment from "moment";

const WhalesTrackers = ({ data }) => {
    console.log("fuefgeufgyefewwwwwwwwwwwwdddwwwwwwfyef", data?.transactions);
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
                {data?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.transactions[0]?.whaleWinRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.transactions[0]?.whaleAddress}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                            <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                
                {/* {data?.whales[1]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[1]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[1]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                             <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[2]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[2]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[2]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                          <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[3]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[3]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[3]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                            <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[4]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[4]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[4]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                          <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[5]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[5]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[5]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                           <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[6]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[6]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[6]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                           <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
                {data?.whales[7]?.transactions?.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 12 }} key={index}>
                        <Box
                            sx={{
                                bgcolor: "neutral.darkGrey",
                                padding: "18px",
                                borderRadius: "20px",
                                color: "neutral.Snowwhite",
                                // opacity: isLoading ? 0.5 : 1,
                                // pointerEvents: isLoading ? "none" : "auto",
                            }}
                        >
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid >
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        WinRate
                                    </Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                        {data?.whales?.[7]?.winRate}
                                    </Typography>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                                            {data?.whales?.[7]?.address}
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
                                                px: "20px",
                                                py: "0px",
                                                minHeight: "30px",
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid mt={2} alignItems={"center"}>
                                    <Typography sx={{ fontSize: "14px", color: "neutral.gray", fontWeight: 600 }}>
                                        {item.timeAgo}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Box display="flex" gap={2} alignItems="center" mt={2}>
                                <Box>
                                    <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                                        {item.actionText}
                                    </Typography>
                                </Box>
                                <Box >
                                    <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "rgba(180, 180, 180, 1)", alignItems: "center" }}>
                                        {item.value}
                                    </Typography>

                                </Box>
                            </Box>
                            <Box display={"flex"} gap={"20px"} mt={3}>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        PositionSize
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.positionSize}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Price
                                    </Typography>
                                    <Typography fontSize={"13px"}>
                                        {item.price}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Pnl
                                    </Typography>
                                    <Typography fontSize={"13px"} color={item.pnl.includes("+") ? "neutral.brightGreen" : "neutral.brightRed"}>
                                        {item.pnl}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"15px"}>
                                        Leverage
                                    </Typography>
                                    <Typography fontSize={"13px"} color="neutral.Snowwhite">
                                        {item.leverage}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography sx={{ fontSize: "15px", marginTop: "30px", color: "#FFF" }}>
                                    {item.symbol}
                                </Typography>

                                <Box display="flex" gap="20px" mt="10px">
                                    <Box>
                                        <Typography fontSize="12px" color="rgba(180, 180, 180, 1)" fontWeight={400}>
                                            Liquidation
                                        </Typography>
                                        <Typography fontSize="14px" color="rgba(255, 255, 255, 1)" fontWeight={600}>
                                            {Number.isNaN(Number(item.liquidation?.replace("$", "")))
                                                ? "-"
                                                : item.liquidation}
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
