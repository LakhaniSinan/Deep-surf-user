import { Box, LinearProgress } from "@mui/material";

const ProgressBar = ({
    value,
    height = 8,
}) => {
    return (
        <Box mb={2}>
            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    height: height,
                    borderRadius: 3,
                    width: "100%",
                    backgroundColor: "background.almostBlack", 
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#FFFFFF",  
                        borderRadius: 2,
                    },
                }}
            />
        </Box>
    );
};

export default ProgressBar;
