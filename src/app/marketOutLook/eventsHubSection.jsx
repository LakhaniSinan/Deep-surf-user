import { Box, Grid, Typography } from '@mui/material'
import CustomButton from '../../components/customButton'
import { useState } from 'react'
const EventsHubSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // default first active
    const timeData = [
        {
            name: "Today"
        },
        {
            name: "Tomorrow"
        },
        {
            name: "This Week"
        },
        {
            name: "This Month"
        },
        {
            name: "All"
        }
    ]

    const eventData = [
        {
            name: "All Events"
        },
        {
            name: "Token Unlock"
        },
        {
            name: "Listing"
        },
        {
            name: "Upgrades"
        },
        {
            name: "Regulatory"
        }
    ]
    const comingEventData = [
        {
            title: "XRP ETF Approval",
            highBtn: "High",
            coinName: "XRP",
            date: "1/16/2026 12:11 PM",
            description: "WisdomTree and 21Shares XRP ETFs approved for trading",
            weekTittle: "Expected launch within 2 weeks. Could drive 50-100% XRP price increase.",
            reminderBtn: "Reminder",
            impactBtn: "Impact",
            deleteBtn: "Delete",
            marketTittle: ""
        },
        {
            title: "NEAR Token Unlock — impact (BTC, 24h after)",
            date: "Avg return: 3.11% • Hit-rate: 100% (1 events)",
        },
        {
            title: "Polkadot Parachain Auction",
            highBtn: "Low",
            coinName: "DOT",
            date: "1/19/2026 12:11 PM",
            description: "New parachain connects to Polkadot network",
            weekTittle: "Increases ecosystem utility and could attract new capital.",
            reminderBtn: "Reminder",
            impactBtn: "Impact",
            deleteBtn: "Delete"
        },
    ]

    return (
        <Box bgcolor={"background.charcoal"} p={3} borderRadius={"20px"} mt={2}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Box>
                    <Typography fontSize='25px' fontWeight={600}>
                        Events & News Hub
                    </Typography>
                    <Typography fontSize={"15px"} color='neutral.Snowwhite'>
                        Crypto events, unlocks, listings & market catalysts
                    </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                    <CustomButton title={"+ Add Event"} sx={{ backgroundColor: "neutral.vermilionOrange", color: "neutral.Snowwhite", fontSize: "17px", px: "25px", py: "8px", borderRadius: "10px", border: "1px solid rgba(127, 127, 127, 1)" }} />
                    <CustomButton title={"Refresh"} sx={{ backgroundColor: "rgba(22, 22, 22, 1)", color: "neutral.Snowwhite", fontSize: "17px", px: "25px", py: "8px", borderRadius: "10px", border: "1px solid rgba(127, 127, 127, 1)" }} />
                </Box>
            </Box>
            <Box bgcolor={"neutral.darkGrey"} borderRadius={"10px"} p={1.2} mt={2}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                        <Typography color='text.neutralGray'>
                            Time
                        </Typography>
                    </Box>
                    <Box>
                        <Typography color='neutral.lightgray' fontSize={"15px"}>
                            5 Events
                        </Typography>
                    </Box>

                </Box>
                <Box display="flex" gap="20px" flexWrap="wrap" mt={0.5}>
                    {timeData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <Box
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                borderRadius="7px"
                                px={3}
                                py={1}
                                sx={{
                                    cursor: "pointer",
                                    backgroundColor: isActive
                                        ? "neutral.Snowwhite"
                                        : "rgba(28, 28, 28, 1)",
                                    border: "1px solid rgba(141, 141, 141, 1)",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={600}
                                    sx={{
                                        color: isActive
                                            ? "rgba(0, 0, 0, 1)" // clicked text color
                                            : "rgba(141, 141, 141, 1)",           // others text color
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} mt={1}>
                    <Box>
                        <Typography color='text.neutralGray'>
                            Event type
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" gap="20px" flexWrap="wrap" mt={0.5}>
                    {eventData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <Box
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                borderRadius="7px"
                                px={3}
                                py={1}
                                sx={{
                                    cursor: "pointer",
                                    backgroundColor: isActive
                                        ? "neutral.Snowwhite"
                                        : "rgba(28, 28, 28, 1)",
                                    border: "1px solid rgba(141, 141, 141, 1)",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <Typography
                                    fontSize={14}
                                    fontWeight={600}
                                    sx={{
                                        color: isActive
                                            ? "rgba(0, 0, 0, 1)" // clicked text color
                                            : "rgba(141, 141, 141, 1)",           // others text color
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                    Upcoming Events
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='rgba(207, 207, 207, 0.8)'>
                                    Showing: All
                                </Typography>
                            </Box>
                        </Box>
                        <Box bgcolor={"neutral.darkGrey"} borderRadius={"15px"} p={2} mt={2}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                    <Box>
                                        <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"23px"}>
                                            XRP ETF Approval
                                        </Typography>
                                    </Box>
                                    <Box bgcolor={"neutral.vermilionOrange"} px={"12px"} py={"1px"} borderRadius={"10px"}>
                                        <Typography>
                                            High
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Typography color='neutral.vermilionOrange' fontWeight={600} fontSize={"20px"}>
                                        XRP
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography color='rgba(171, 175, 180, 1)' fontSize={"13px"}>
                                    1/16/2026 12:11 PM
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <Typography color='rgba(171, 175, 180, 1)' fontSize={"15px"}>
                                    WisdomTree and 21Shares XRP ETFs approved for trading
                                </Typography>
                            </Box>
                            <Box bgcolor={"neutral.darkGrey"} border={"1px solid rgba(127, 127, 127, 1)"} mt={1} p={1} borderRadius={"10px"}>
                                <Typography fontSize='13px' color='rgba(171, 175, 180, 1)'>
                                    Expected launch within 2 weeks. Could drive 50-100% XRP price increase.
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                                <Box display={"flex"} gap={"10px"}>
                                    <Box>
                                        <CustomButton
                                            title={"Reminder"}
                                            sx={{
                                                // py: "2px",
                                                px: "25px",
                                                backgroundColor: "neutral.darkGrey",
                                                border: "1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "15px",
                                                fontSize: "15px",
                                                color: "neutral.vermilionOrange"
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomButton
                                            title={"Impact"}
                                            sx={{
                                                // py: "2px",
                                                px: "25px",
                                                backgroundColor: "neutral.darkGrey",
                                                border: "1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "10px",
                                                fontSize: "15px",
                                                color: "neutral.Snowwhite"
                                            }}
                                        />

                                    </Box>
                                </Box>
                                <Box>
                                    <CustomButton
                                        title={"Delete"}
                                        sx={{
                                            // py: "2px",
                                            px: "25px",
                                            backgroundColor: "neutral.darkGrey",
                                            border: "1px solid rgba(127, 127, 127, 1)",
                                            borderRadius: "10px",
                                            fontSize: "15px",
                                            color: "neutral.brightRed"
                                        }}
                                    />
                                </Box>
                            </Box>

                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "200px" }}>
                        <Box display={"flex"} justifyContent={"space-between"} >
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"20px"} fontWeight={600}>
                                    Market Impact
                                </Typography>
                            </Box>
                            <Box border={"1px solid rgba(141, 141, 141, 1)"} borderRadius={"10px"} display={"flex"} px={1} py={1}>
                                <Typography color='neutral.Snowwhite' fontSize={"10px"}>
                                    Analyze
                                </Typography>
                            </Box>
                        </Box>
                        <Box bgcolor={"neutral.darkGrey"} borderRadius={"15px"} p={2} mt={2} height={"230px"}>
                            <Box>
                                <Typography color='neutral.brightGreen' fontSize={"20px"} fontWeight={600}>
                                    NEAR Token Unlock — impact (BTC, 24h after)
                                </Typography>
                            </Box>
                            <Box>
                                <Typography color='neutral.Snowwhite' fontSize={"13px"}>
                                    Avg return: 3.11% • Hit-rate: 100% (1 events)
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box bgcolor={"neutral.darkGrey"} borderRadius={"15px"} p={2} mt={2}>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                                    <Box>
                                        <Typography color='neutral.Snowwhite' fontWeight={600} fontSize={"23px"}>
                                           Polkadot Parachain Auction
                                        </Typography>
                                    </Box>
                                    <Box bgcolor={"neutral.brightRed"} px={"15px"} py={"1px"} borderRadius={"10px"}>
                                        <Typography>
                                            Low
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Typography color='neutral.vermilionOrange' fontWeight={600} fontSize={"20px"}>
                                        DOT
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography color='rgba(171, 175, 180, 1)' fontSize={"13px"}>
                                   1/19/2026 12:11 PM
                                </Typography>
                            </Box>
                            <Box mt={1}>
                                <Typography color='rgba(171, 175, 180, 1)' fontSize={"15px"}>
                                   New parachain connects to Polkadot network
                                </Typography>
                            </Box>
                            <Box bgcolor={"neutral.darkGrey"} border={"1px solid rgba(127, 127, 127, 1)"} mt={1} p={1} borderRadius={"10px"}>
                                <Typography fontSize='13px' color='rgba(171, 175, 180, 1)'>
                                    Increases ecosystem utility and could attract new capital.
                                </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} mt={2}>
                                <Box display={"flex"} gap={"10px"}>
                                    <Box>
                                        <CustomButton
                                            title={"Reminder"}
                                            sx={{
                                                // py: "2px",
                                                px: "25px",
                                                backgroundColor: "neutral.darkGrey",
                                                border: "1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "15px",
                                                fontSize: "15px",
                                                color: "neutral.vermilionOrange"
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <CustomButton
                                            title={"Impact"}
                                            sx={{
                                                // py: "2px",
                                                px: "25px",
                                                backgroundColor: "neutral.darkGrey",
                                                border: "1px solid rgba(127, 127, 127, 1)",
                                                borderRadius: "10px",
                                                fontSize: "15px",
                                                color: "neutral.Snowwhite"
                                            }}
                                        />

                                    </Box>
                                </Box>
                                <Box>
                                    <CustomButton
                                        title={"Delete"}
                                        sx={{
                                            py: "-20px",
                                            px: "25px",
                                            backgroundColor: "neutral.darkGrey",
                                            border: "1px solid rgba(127, 127, 127, 1)",
                                            borderRadius: "10px",
                                            fontSize: "15px",
                                            color: "neutral.brightRed"
                                        }}
                                    />
                                </Box>
                            </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default EventsHubSection