import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";

const widgets = [
    {
        title: "AI Proof",
        description: "Deep AI-based trade idea analysis",
    },
    {
        title: "Macroeconomic",
        description: "Market impact from global events",
    },
    {
        title: "Top 10 by Volume",
        description: "Highest traded coins overview",
    },
    {
        title: "AI Pump Scanner",
        description: "Coins with pump potential",
    },
];
const categories = [
    "AI Tools",
    "Market Outlook",
    "Pro Analysis",
    "Macroeconomic",
    "Top Coins",
];

const WidgetCatalog = () => {
    return (
        <Box>
            <Box
                display="flex"
                gap={2}
                flexWrap="wrap"
                alignItems="center"
                mb={3}
            >
                <Box flex={1}>
                    <CustomInput placeholder="Search widgets..." />
                </Box>
                <CustomButton
                    title="Add"
                    variant="gradient"
                />
            </Box>
            {/* Categories */}
            <Box
                display="flex"
                gap={1}
                flexWrap="wrap"
                mb={3}
            >
                {categories.map((cat, index) => (
                    <Box
                        key={index}
                        px={2}
                        py={0.8}
                        borderRadius="20px"
                        bgcolor="neutral.darkGrey"
                        sx={{
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                bgcolor: "neutral.obsidianAsh",
                            },
                        }}
                    >
                        <Typography
                            fontSize="13px"
                            color="white"
                            fontWeight={500}
                        >
                            {cat}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Grid container spacing={1}>
                {widgets.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Box
                            p={2.5}
                            borderRadius="16px"
                            bgcolor="neutral.darkGrey"
                            height="100%"
                            display="flex"
                            flexDirection="column"
                            gap={1.2}
                        >
                            <Box display="flex" alignItems="center" gap={1}>

                                <Typography
                                    color="white"
                                    fontWeight={600}
                                    fontSize="16px"
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Typography
                                fontSize="13px"
                                color="rgba(127,127,127,1)"
                            >
                                {item.description}
                            </Typography>
                            <Box>
                                <CustomButton
                                    title="Add"
                                    variant="calculatorSmall"
                                    sx={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        backgroundColor: "neutral.obsidianAsh"
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WidgetCatalog;
