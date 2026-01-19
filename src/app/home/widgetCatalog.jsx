import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import { useState } from "react";

const categories = [
    "AI Tools",
    "Market Outlook",
    "Pro Analysis",
    "Macroeconomic",
    "Top Coins",
];

const WidgetCatalog = ({ handleRemove, data, handleAddWidget, addedWidgetIds }) => {
    // console.log("fifhufurfrfhrfijrfrf", data);
    // const [search, setSearch] = useState("");
    // const [finalSearch, setFinalSearch] = useState("");
    // const filteredData = finalSearch
    //     ? data?.filter((item) =>
    //         item.category?.toLowerCase().includes(finalSearch.toLowerCase())
    //     )
    //     : data;
    //     console.log("frhfurhfuhrufhrufhrfhrufhr" , filteredData);
    return (
        <Box>
            {/* Search Input + Button */}
            <Box display="flex" gap={2} flexWrap="wrap" alignItems="center" mb={3}>
                <Box flex={1}>
                    <CustomInput
                        placeholder="Search by category..."
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                </Box>
                <CustomButton
                    title="Add"
                    variant="gradient"
                // onClick={() => setFinalSearch(search)}
                />
            </Box>

            {/* Categories Chips */}
            <Box display="flex" gap={1} flexWrap="wrap" mb={3} alignItems={"center"}>
                <Typography color="neutral.Snowwhite" fontSize={"20px"} fontWeight={600}>
                    Category :
                </Typography>
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
                        <Typography fontSize="13px" color="white" fontWeight={500}>
                            {cat}
                        </Typography>
                    </Box>
                ))}
            </Box>
            {/* Widgets Grid */}
            <Grid container spacing={1}>
                {data?.map((item) => {
                    const isAdded = addedWidgetIds.includes(item.id);
                    return (
                        <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={item.id}>
                            <Box
                                p={2.5}
                                borderRadius="16px"
                                bgcolor="neutral.darkGrey"
                                display="flex"
                                flexDirection="column"
                                gap={1.2}
                            >
                                <Typography color="white" fontWeight={600} fontSize="16px">
                                    {item.title}
                                </Typography>
                                <Typography fontSize="11px" color="rgba(127,127,127,1)">
                                    {item.category}
                                </Typography>
                                <Typography fontSize="13px" color="rgba(127,127,127,1)">
                                    {item.description}
                                </Typography>
                                <CustomButton
                                    onClick={() =>
                                        isAdded ? handleRemove(item.id) : handleAddWidget(item.id)
                                    }
                                    title={isAdded ? "Remove" : "Add"}
                                    variant="calculatorSmall"
                                    sx={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        backgroundColor: "neutral.obsidianAsh",
                                    }}
                                />
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default WidgetCatalog;
