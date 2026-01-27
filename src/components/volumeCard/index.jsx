import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const VolumeCard = ({ name, volume, percentChange, isPositive, showIcon = true, // 👈 control yahin se
}) => {
  return (
    <Box
      sx={{
        backgroundColor: isPositive ? "rgba(30, 179, 99, 1)" : "rgba(212, 51, 51, 1)",
        borderRadius: "8px",
        padding: "8px",
        // width: "110px",
        // height: "81px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: `0.48px solid ${isPositive ? "rgba(62, 221, 135, 1)" : "rgba(255, 76, 76, 1)"
          }`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        // "&:hover": {
        //   transform: "translateY(-2px)",
        //   backgroundColor: isPositive
        //     ? "rgba(34, 197, 94, 0.15)"
        //     : "rgba(239, 68, 68, 0.15)",
        //   boxShadow: `0 4px 12px ${
        //     isPositive ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"
        //   }`,
        // },
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
            fontSize: "9px",
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          {volume}
        </Typography>
        <Typography
          color="#fff"
          fontSize={"10px"}
          sx={{
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
          {showIcon && (
            isPositive ? (
              <KeyboardArrowUpIcon fontSize="small" htmlColor="white" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" htmlColor="white" />
            )
          )}
          {percentChange}
        </Typography>

      </Box>
    </Box>
  );
};

export default VolumeCard;
