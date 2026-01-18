// import { Box, Typography } from "@mui/material";
// import React from "react";
// import CustomButton from "../../components/customButton";
// import { useTranslation } from "react-i18next";
// const AiMarketAnalysis = () => {
//   const { t } = useTranslation();
//   return (
//     <Box
//       display={"flex"}
//       justifyContent={"space-between"}
//       alignItems={"center"}
//       flexWrap={{ xs: "wrap", md: "nowrap" }}
//       mt={2}
//     >
//       <Box>
//         <Typography fontSize={"18px"} fontWeight={600} >
//           {t("MarketOutlook.aiMarketAnalysisTitle")}
//         </Typography>
//         <Typography fontSize={"12px"} color="neutral.mediumGray" fontWeight={600}>
//           {t("MarketOutlook.dailyAIAnalysisDescription")}
//         </Typography>
//       </Box>
//       <Box>
//         <CustomButton
//           title={t("MarketOutlook.generateAnalysisTitle")}
//           variant="h6"
//           fullWidth={{ xs: "100%" }}
//           sx={{
//             backgroundColor: "#FF6421",
//             fontSize: "15px",
//             borderRadius: "20px",
//             marginTop: "30px",
//             width: { xs: "100%", md: "auto" },
//             fontFamily: "Inter Tight",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };
// export default AiMarketAnalysis;
// AiMarketAnalysis.jsx
import { Box, Typography, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import StarIcon from "../../assets/icons/stairs.svg";

const AiMarketAnalysis = ({ aiAnalysis }) => {
  console.log("grgrrrrrrrrrrrrrrrrr", aiAnalysis?.aiAnalysis)
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleGenerateAnalysis = () => {
    setLoading(true);

    setTimeout(() => {
      const dummyData = {
        aiAnalysis: [
          {
            title: "Market Trend",
            content:  aiAnalysis?.aiAnalysis ,
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
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap={{ xs: "wrap", md: "nowrap" }}>
        <Box>
          <Typography fontSize="18px" fontWeight={600}>
            {t("MarketOutlook.aiMarketAnalysisTitle")}
          </Typography>
          <Typography fontSize="12px" color="neutral.mediumGray" fontWeight={600}>
            {t("MarketOutlook.dailyAIAnalysisDescription")}
          </Typography>
        </Box>
        <Box>
          {!data && (
            <CustomButton
              title={t("MarketOutlook.generateAnalysisTitle")}
              // icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
              onClick={handleGenerateAnalysis}
              sx={{
                backgroundColor: "neutral.vermilionOrange",
                fontSize: "15px",
                borderRadius: "20px",
                marginTop: "10px",
                width: { xs: "100%", md: "auto" },
                fontFamily: "Inter Tight",
              }}
            />
          )}
        </Box>
      </Box>

      {/* Loading */}
      {loading && (
        <Box mt={3} display="flex" justifyContent="center">
          <CircularProgress color="inherit" />
        </Box>
      )}

      {/* AI Analysis Section */}
      {data && data.aiAnalysis && (
        <Box mt={3}>
          {data.aiAnalysis.map((section, index) => (
            <Box key={index} p={2} mb={2} borderRadius="10px" bgcolor="#1C1C1C">
              {/* <Typography fontWeight={600} color="#fff">{section.title}</Typography> */}
              <Typography fontSize="14px" color="#fff" mt={1}>{section.content}</Typography>
            </Box>
          ))}
        </Box>
      )}



      {/* Macroeconomics Section */}
      {/* {data && <Macroeconomics data={data} />} */}
    </Box>
  );
};

export default AiMarketAnalysis;


