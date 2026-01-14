import React from "react";
import { Box, Slider, Stack, Typography } from "@mui/material";

const ProgressSlider = ({ value, onChange, min = -50, max = 50 }) => {
  const percentage = value || 0;
  const range = max - min;
  const sliderPosition = ((percentage - min) / range) * 100;

  // Fill from left (0%) to current handle position
  const fillWidth = sliderPosition;
  const fillColor = "#FF6421"; // Orange

  return (
    <Box>
      <Box sx={{ position: "relative", py: 1.5 , mt : "-20px" }}>
        {/* Background Track - Gray */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: 16,
            backgroundColor: "rgba(151, 151, 151, 1)",
            borderRadius: 3,
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        />

        {/* Fill Track - Orange from left to handle */}
        {fillWidth > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: `${fillWidth}%`,
              height: 16,
              backgroundColor: fillColor,
              borderRadius: 3,
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />
        )}

        {/* Slider */}
        <Slider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={0.1}
          sx={{
            height: 6,
            padding: "10px 0",
            position: "relative",
            zIndex: 2,
            "& .MuiSlider-rail": {
              display: "none",
            },
            "& .MuiSlider-track": {
              display: "none",
            },
            "& .MuiSlider-thumb": {
              width: 22,
              height: 22,
              backgroundColor: "black",
              border: "3px solid #fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              "&:hover": {
                boxShadow: "0 3px 8px rgba(0,0,0,0.4)",
              },
            },
          }}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 0.5 }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 500,
            color: "neutral.primaryGreen",
          }}
        >
          {min}%
        </Typography>
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 500,
            color: "neutral.dangerRed",
          }}
        >
          +{max}%
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProgressSlider;
