import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
const AiMarketAnalysis = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      mt={2}
    >
      <Box>
        <Typography fontSize={"18px"} fontWeight={600} >
          {t("MarketOutlook.aiMarketAnalysisTitle")}
        </Typography>
        <Typography fontSize={"12px"} color="neutral.mediumGray" fontWeight={600}>
          {t("MarketOutlook.dailyAIAnalysisDescription")}
        </Typography>
      </Box>
      <Box>
        <CustomButton
          title={t("MarketOutlook.generateAnalysisTitle")}
          variant="h6"
          fullWidth={{ xs: "100%" }}
          sx={{
            backgroundColor: "#FF6421",
            fontSize: "15px",
            borderRadius: "20px",
            marginTop: "30px",
            width: { xs: "100%", md: "auto" },
            fontFamily: "Inter Tight",
          }}
        />
      </Box>
    </Box>
  );
};
export default AiMarketAnalysis;
// AiMarketAnalysis.jsx
// import { Box, Typography, CircularProgress } from "@mui/material";
// import React, { useState } from "react";
// import CustomButton from "../../components/customButton";
// import { useTranslation } from "react-i18next";
// import StarIcon from "../../assets/icons/stairs.svg";
// import Macroeconomics from "./Macroeconomics"; // Macroeconomics component

// const AiMarketAnalysis = () => {
//   const { t } = useTranslation();

//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState(null);

//   const handleGenerateAnalysis = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const dummyData = {
//         // AI Analysis
//         aiAnalysis: [
//           { title: "Market Trend", content: "The market is bullish today with high activity in tech stocks." },
//         ],
//         // Macroeconomics data
//         summary: "Today, the economy shows strong signs of growth with low unemployment.",
//         cpiReport: {
//           title: "CPI Report",
//           date: "Jan 12, 2026",
//           forecast: "2.1%",
//           previous: "1.9%",
//           impact: "High",
//         },
//         unemploymentRate: {
//           title: "Unemployment Rate",
//           date: "Jan 12, 2026",
//           forecast: "3.5%",
//           previous: "3.6%",
//           impact: "Medium",
//         },
//         scenarios: {
//           bullish: { label: "Bullish", color: "green", description: "Markets trending up." },
//           neutral: { label: "Neutral", color: "gray", description: "Markets stable." },
//           bearish: { label: "Bearish", color: "red", description: "Markets trending down." },
//         },
//         actionPlan: [
//           "Monitor tech sector stocks.",
//           "Review commodity indexes.",
//           "Check Federal announcements.",
//           "Analyze trade volumes.",
//           "Adjust portfolio accordingly.",
//         ],
//         historicalContext: "Historically, January shows growth in tech and finance sectors.",
//         fedSpeeches: { powell: "Powell speech: Stable economy expected.", otherMembers: "Other members remain cautious." },
//       };
//       setData(dummyData);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <Box mt={2} px={{ xs: 2, md: 4 }}>
//       {/* Header + Button */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap={{ xs: "wrap", md: "nowrap" }}>
//         <Box>
//           <Typography fontSize="18px" fontWeight={600}>
//             {t("MarketOutlook.aiMarketAnalysisTitle")}
//           </Typography>
//           <Typography fontSize="12px" color="neutral.mediumGray" fontWeight={600}>
//             {t("MarketOutlook.dailyAIAnalysisDescription")}
//           </Typography>
//         </Box>
//         <Box>
//           {!data && (
//             <CustomButton
//               title={t("MarketOutlook.generateAnalysisTitle")}
//               icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
//               onClick={handleGenerateAnalysis}
//               sx={{
//                 backgroundColor: "#FF6421",
//                 fontSize: "15px",
//                 borderRadius: "20px",
//                 marginTop: "10px",
//                 width: { xs: "100%", md: "auto" },
//                 fontFamily: "Inter Tight",
//               }}
//             />
//           )}
//         </Box>
//       </Box>

//       {/* Loading */}
//       {loading && (
//         <Box mt={3} display="flex" justifyContent="center">
//           <CircularProgress color="inherit" />
//         </Box>
//       )}

//       {/* AI Analysis Section */}
//       {data && data.aiAnalysis && (
//         <Box mt={3}>
//           {data.aiAnalysis.map((section, index) => (
//             <Box key={index} p={2} mb={2} borderRadius="10px" bgcolor="#1C1C1C">
//               <Typography fontWeight={600} color="#fff">{section.title}</Typography>
//               <Typography fontSize="14px" color="#fff" mt={1}>{section.content}</Typography>
//             </Box>
//           ))}
//         </Box>
//       )}



//       {/* Macroeconomics Section */}
//       {data && <Macroeconomics data={data} />}
//     </Box>
//   );
// };

// export default AiMarketAnalysis;


