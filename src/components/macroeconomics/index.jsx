import React from "react";
import { Box, Typography } from "@mui/material";
import starIcon from "../../assets/icons/stars.svg";
import warningIcon from "../../assets/icons/warning.svg";
import MacroEconomicCardSkeleton from "../../components/skeleton/macroeconomicCardSkeleton";

const Macroeconomics = ({ data, description, isLoading }) => {
  // Convert object into array for mapping
  const reports = data ? Object.values(data) : [];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.paper",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Typography
        variant="h2"
        fontSize="1rem"
        fontWeight={600}
        color="text.primary"
        mb={3}
      >
        Macroeconomics
      </Typography>

      {isLoading ? (
        <MacroEconomicCardSkeleton />
      ) : (
        <Box display="flex" flexDirection="column" gap={3}>
          {reports.map((report, index) => (
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
                {report?.title}
              </Typography>

              {/* Forecast & Impact */}
              <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  Forecast: {report?.forecast}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  Impact: {report?.impact}
                </Typography>
              </Box>

              {/* Summary Box */}
              <Box
                sx={{
                  backgroundColor: "background.gray",
                  borderRadius: "16px",
                  padding: "9px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 0.5,
                }}
              >
                {report?.impact?.toLowerCase().includes("high") ||
                report?.title?.toLowerCase().includes("critical") ? (
                  <img src={warningIcon} alt="warning" />
                ) : (
                  <img src={starIcon} alt="star" />
                )}
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "10px",
                    fontWeight: 400,
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  {report?.description}
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
