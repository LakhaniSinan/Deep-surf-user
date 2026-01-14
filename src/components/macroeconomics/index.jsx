import React from "react";
import { Box, Typography } from "@mui/material";
import starIcon from "../../assets/icons/stars.svg";
import warningTriangleIcon from "../../assets/icons/warning-triangle-icon.svg";
import warningIcon from "../../assets/icons/warningIcon.svg";
import MacroEconomicCardSkeleton from "../../components/skeleton/macroeconomicCardSkeleton";
import { useTranslation } from "react-i18next";


const Macroeconomics = ({ data, description, isLoading }) => {
  const { t } = useTranslation();
  const reports = data ? Object.values(data || {}) : [];
  const getIcon = (report) => {
    const title = (report?.title || "").toLowerCase();
    const impact = (report?.impact || "").toLowerCase();
    if (title.includes("unemployment ")) {
      return starIcon;
    } else if (impact.includes("cpi")) {
      return warningIcon;
    } else {
      return warningTriangleIcon;
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.paper, // ✅ Fix
        borderRadius: "12px",
        padding: "20px",
        maxHeight: "390px",
      }}
    >
      <Typography
        variant="h2"
        fontSize="1.5rem"
        fontWeight={600}
        color="text.primary"
        mb={1}
      >
        {t("dashboard.macroEconomic.title")}
      </Typography>

      {isLoading ? (
        <MacroEconomicCardSkeleton />
      ) : reports.length === 0 ? ( // 👈 Optional: Show no data
        <Typography textAlign="center" color="#fff" fontWeight={600}>
            {t("dashboard.macroEconomic.notFound")}
        </Typography>
      ) : (
        <Box display="flex" flexDirection="column" gap={3}>
          {reports.slice(1, 3).map((report, index) => (
            <Box key={index}>
              {/* Report Title */}
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  fontWeight: 600,
                  mb: 1.5,
                }}
              >
                {report?.title || "N/A"} {report?.date || "N/A"}
              </Typography>

              <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "11px",
                    fontWeight: 400,
                  }}
                >
                  Forecast: {`${report?.forecast} (previous ${report?.previous})`}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  Impact: {report?.impact || "N/A"}
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: (theme) => theme.palette.background.gray,
                  borderRadius: "16px",
                  padding: "9px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 0.5,
                }}
              >
                <img src={getIcon(report)} alt="icon" />
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "10px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  {report?.description || "N/A"}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Macroeconomics;
