import { Box, CircularProgress } from "@mui/material";

const FullPageLoader = () => (
    <Box
        sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
        }}
    >
        <CircularProgress
            size={60}
            thickness={4}
            sx={{ color: "neutral.vermilionOrange" }} // 🔥 Oneutralrange color
        />
    </Box>
);

export default FullPageLoader;
