import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { coinCheckStyles } from "./style";
import CustomInput from "../customInput";
import theme from "../../theme";
import { getCoinQuickCheck } from "../../services/modules/home";
import { toast } from "react-toastify";

// Separate styles object

const CoinCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ticker, setTicker] = useState("");
  const [coinData, setCoinData] = useState(null);

  const handleKeyPress = (e) => { 
    if (e.key === "Enter") {
      handleCoinQuickCheck();
    }
  };

  const handleCoinQuickCheck = async () => {
    if (!ticker) return toast.error("Please enter coin symbol");

    try {
      setCoinData(null);
      setIsLoading(true);
      const response = await getCoinQuickCheck(ticker);
      if (response?.data?.status === "success") {
        const data = response.data.data;
        setCoinData(data);
        console.log(data, "sdkjsajdksajkdasjkdkjasdjksa");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={coinCheckStyles.container}>
      <Box sx={coinCheckStyles.card}>
        <Box sx={coinCheckStyles.header}>
          <Typography
            variant="h4"
            fontSize="16px"
            fontWeight={700}
            color="text.primary"
          >
            AI Proof — Quick coin check
          </Typography>
          <Typography
            variant="body3"
            fontSize="12px"
            fontWeight={300}
            color="text.primary"
            fontFamily="inter"
          >
            Deep AI analysis of any coin in seconds. Enter the ticker, get a
            full breakdown and recommendation.
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

          {isLoading ? (
            <CircularProgress color="#fff" size={30} />
          ) : (
            <IconButton
              disabled={!ticker || isLoading}
              onClick={handleCoinQuickCheck}
              sx={coinCheckStyles.searchButton}
              // loading={isLoading}
            >
              <SearchIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          )}
        </Box>

        {coinData && (
          <Box mt={2}>
            <Typography color="#fff">
              Analysis: {coinData?.aiAnalysis}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CoinCheck;
