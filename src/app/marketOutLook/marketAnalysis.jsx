import { Box, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import StarIcon from "../../assets/icons/stairs.svg";

const AiMarketAnalysis = ({ aiAnalysis }) => {
  console.log("rdfhiruouiorfr", aiAnalysis);

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleGenerateAnalysis = () => {
    if (loading) return; // prevent multiple clicks
    setLoading(true);

    setTimeout(() => {
      const dummyData = {
        aiAnalysis: [
          {
            title: "Market Trend",
            content: aiAnalysis?.aiAnalysis || "No data available",
          },
        ],
      };

      setData(dummyData);
      setLoading(false);
    }, 1000);
  };

  return (
    <Box mt={2} px={{ xs: 2, md: 0 }}>
      {/* Header + Button */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
      >
        <Box>
          <Typography fontSize="18px" fontWeight={600}>
            {t("MarketOutlook.aiMarketAnalysisTitle")}
          </Typography>
          <Typography fontSize="12px" color="neutral.mediumGray" fontWeight={600}>
            {t("MarketOutlook.dailyAIAnalysisDescription")}
          </Typography>
        </Box>

        {/* Button always visible */}
        <Box mt={{ xs: 1, md: 0 }}>
          <CustomButton
            title={t("MarketOutlook.generateAnalysisTitle")}
            onClick={handleGenerateAnalysis}
            disabled={loading} // disable during loading
            sx={{
              backgroundColor: "neutral.vermilionOrange",
              fontSize: "15px",
              borderRadius: "20px",
              width: { xs: "100%", md: "auto" },
              fontFamily: "Inter Tight",
            }}
          />
        </Box>
      </Box>

      {/* Loading Spinner */}
      {loading && (
        <Box mt={3} display="flex" justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}

      {/* AI Analysis Section */}
      {data?.aiAnalysis && (
        <Box mt={3}>
          {data.aiAnalysis.map((section, index) => (
            <Box
              key={index}
              p={2}
              mb={2}
              borderRadius="10px"
              bgcolor="#1C1C1C"
            >
           
              <Typography fontSize="14px" color="#fff" mt={1}>
                {section.content}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AiMarketAnalysis;
