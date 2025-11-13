import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";

const VolumeCard = ({ name, volume, percentChange, isPositive }) => {
  return (
    <Box
      sx={{
        backgroundColor: isPositive
          ? "#1EB363"
          : "#D43333",
        borderRadius: "8px",
        padding: "6px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: `1px solid ${
          isPositive ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)"
        }`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-2px)",
          backgroundColor: isPositive
            ? "rgba(34, 197, 94, 0.15)"
            : "rgba(239, 68, 68, 0.15)",
          boxShadow: `0 4px 12px ${
            isPositive ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"
          }`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: "10px",
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          {volume}
        </Typography>
        <Typography
          sx={{
            color: isPositive ? "#22c55e" : "#ef4444",
            fontSize: "10px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginTop: "4px",
            "& span": {
              fontSize: "10px",
              fontWeight: 700,
            },
          }}
        >
          <span>{isPositive ? "↑" : "↓"}</span> {percentChange}%
        </Typography>
      </Box>
    </Box>
  );
};

export default VolumeCard;
