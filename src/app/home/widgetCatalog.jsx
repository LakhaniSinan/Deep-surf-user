import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";

const WidgetCatalog = ({ handleRemove, data, handleAddWidget, addedWidgetIds, search, onSearchChange }) => {
    // Filter data by title (case-insensitive)
    const filteredData = search
        ? data?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        : data;

    return (
        <Box>
            {/* Search Input */}
            <Box display="flex" gap={2} flexWrap="wrap" alignItems="center" mb={3}>
                <Box flex={1}>
                    <CustomInput
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </Box>
            </Box>

            {/* Widgets Grid */}
            <Grid container spacing={1}>
                {filteredData?.map((item) => {
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
                {filteredData?.length === 0 && (
                    <Typography color="white" mt={2}>
                        No widgets found.
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};

export default WidgetCatalog;
