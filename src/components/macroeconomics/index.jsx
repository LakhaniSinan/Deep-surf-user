import React from "react";
import { Box, Typography } from "@mui/material";
import starIcon from "../../assets/icons/stars.svg";
import warningIcon from "../../assets/icons/warning.svg";

const Macroeconomics = ({ data }) => {
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

      <Box display="flex" flexDirection="column" gap={3}>
        {data.map((report, index) => (
          <Box key={report.id || index}>
            {/* Report Title */}
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "12px",
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              {report.title}
              {report.isCritical && (
                <Typography
                  component="span"
                  sx={{
                    color: "#fbbf24",
                    fontSize: "12px",
                    fontWeight: 600,
                    ml: 0.5,
                  }}
                >
                  Critical!
                </Typography>
              )}
            </Typography>

            {/* Forecast & Impact - Same Column */}
            <Box display="flex" flexDirection="column" gap={0.5} mb={2}>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "10px",
                  fontWeight: 400,
                }}
              >
                Forecast: {report.forecast}
              </Typography>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "10px",
                  fontWeight: 400,
                }}
              >
                Impact: {report.impact}
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
              {report.iconType === "star" ? (
                <img src={starIcon} alt="star" />
              ) : (
                <img src={warningIcon} alt="warning" />
              )}

              {/* Summary Text */}
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {report.summary}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Macroeconomics;
