import React, { use, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import { coinCheckStyles } from "./style";
import CustomInput from "../customInput";
import theme from "../../theme";
import { getCoinQuickCheck } from "../../services/modules/home";
import { toast } from "react-toastify";



const CoinCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ticker, setTicker] = useState("");
  const [coinData, setCoinData] = useState(null);
  const { t, i18n } = useTranslation();

  console.log("Language", i18n.language);
  console.log("AIpppppppppppProof", t("dashboard.aiProof"));
  console.log(i18n.exists("dashboard.aiProof"));



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
  console.log(t("auth.dashbaord.aiProof"));

  return (
    <Box sx={coinCheckStyles.container}>
      <Box sx={coinCheckStyles.card}>
        <Box sx={coinCheckStyles.header}>
          <Typography
            variant="h4"
            fontSize="16px"
            fontWeight={700}
            color="neutral.Snowwhite"
            fontFamily="Inter Tight"          >
            {t("dashboard.aiProof")
            }
          </Typography>
          <Typography
            variant="body3"
            fontSize="12px"
            fontWeight={500}
            color="neutral.Snowwhite"
            fontFamily="Inter Tight"
          >
            {t("dashboard.aiProofHeading")}
          </Typography>
        </Box>
        <Box sx={coinCheckStyles.searchContainer}>
          <CustomInput
            placeholder={t("dashboard.placeHolderTittle")}
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
