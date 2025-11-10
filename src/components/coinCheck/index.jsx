import React, { useState } from "react";
import { Box, TextField, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { coinCheckStyles } from "./style";
import CustomInput from "../customInput";
import theme from "../../theme";

// Separate styles object

const CoinCheck = () => {
  const [ticker, setTicker] = useState("");

  const handleSearch = () => {
    if (ticker.trim()) {
      console.log("Searching for:", ticker);
      // Search logic yahan implement karein
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box sx={coinCheckStyles.container}>
      <Box sx={coinCheckStyles.card}>
        <Box sx={coinCheckStyles.header}>
          <Typography variant="h4" color={theme.palette.text.primary}>
            AI Proof — Quick coin check
          </Typography>
          <Typography variant="body3" color={theme.palette.text.primary}>
            Deep AI analysis of any coin in seconds. Enter the ticker, get a full breakdown and
            recommendation.
          </Typography>
        </Box>

        <Box sx={coinCheckStyles.searchContainer}>
          <CustomInput
            placeholder="Enter the coin ticker for analysis"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            onKeyPress={handleKeyPress}
            style={coinCheckStyles.inputStyle}
          />
          <IconButton onClick={handleSearch} sx={coinCheckStyles.searchButton}>
            <SearchIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Box>
          
      </Box>
    </Box>
  );
};

export default CoinCheck;
