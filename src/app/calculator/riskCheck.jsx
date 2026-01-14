import React, { useState, useRef } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import { CSVLink } from "react-csv";

const RiskCheck = ({ calculateData }) => {
  const { t } = useTranslation();
  const [copyMessage, setCopyMessage] = useState("");

  // Ref for CSVLink
  const csvLinkRef = useRef();

  // Keys to copy
  const keysToCopy = [
    "pair",
    "positionSizeUnits",
    "takePrice",
    "stopPrice",
    "nominalPositionRaw",
    "margin",
    "expectedProfit",
    "riskDollar",
    "rrRatio",
  ];

  // Copy Results function
  const copyResults = () => {
    if (!calculateData) return;
    const textToCopy = keysToCopy
      .map((key) => `${key}: ${calculateData[key] ?? "-"}`)
      .join("\n");

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopyMessage("Results copied!");
        setTimeout(() => setCopyMessage(""), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  // Flatten object for CSV
  const flattenForCSV = (obj) => {
    const result = {};
    for (let key in obj) {
      let value = obj[key];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        result[key] = JSON.stringify(value);
      } else if (value === null || value === undefined || (typeof value === "number" && isNaN(value))) {
        result[key] = "-";
      } else {
        result[key] = value;
      }
    }
    return result;
  };

  const csvData = calculateData ? [flattenForCSV(calculateData)] : [];

  // Trigger CSV download
  const handleExportCSV = () => {
    csvLinkRef.current.link.click();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        p: 2.5,
        position: "relative",
      }}
    >
      <Stack spacing={2}>
        {/* Risk Info */}
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: calculateData?.riskCheckColor,
              mb: 0.5,
            }}
          >
            {calculateData?.riskCheck}
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "text.bluishGray" }}
          >
            {t("Chart.trading")}: ${calculateData?.targetMultiplier}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <CustomButton
            variant="softOutlined"
            title={t("Chart.copyResults")}
            handleClickBtn={copyResults}
            sx={{ py: 0.75, px: 2, fontSize: "14px", minHeight: "36px", flex: 1, minWidth: "120px" }}
          />
          <CustomButton
            variant="gradient"
            title={t("Chart.openOrder")}
            handleClickBtn={() => console.log("Open Order")}
            sx={{ py: 0.75, px: 2, fontSize: "14px", minHeight: "36px", flex: 1, minWidth: "120px" }}
          />
        </Stack>

        {/* Add to Journal + Export Buttons */}
        <Grid item xs={12} md={4}>
          <CustomButton
            variant="calculatorSmall"
            title="Add to Journal"
            handleClickBtn={() => console.log("Add to Journal")}
            width="100%"
          />
        </Grid>
        <Grid container spacing={2}>

          <Grid item size={{ xs: 12, md: 6 }}>
            <CSVLink
              data={csvData}
              filename={`${calculateData?.pair || "trade"}_${Date.now()}.csv`}
              className="hidden"
              ref={csvLinkRef}
              target="_blank"
            />
            <CustomButton
              variant="calculatorSmall"
              title="Export CSV"
              handleClickBtn={handleExportCSV}
              width="100%"
              sx={{
                // backgroundColor: "rgba(28, 28, 28, 1)",

                "&:hover": {
                  backgroundColor: "rgba(28, 28, 28, 1)",
                },
              }}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} xs={12} md={4}>
            <CustomButton
              variant="calculatorSmall"
              title={t("Chart.exportJSON")}
              handleClickBtn={() => console.log("Export JSON")}
              width="100%"
              sx={{
                // backgroundColor: "rgba(28, 28, 28, 1)",

                "&:hover": {
                  backgroundColor: "rgba(28, 28, 28, 1)",
                },
              }}

            />
          </Grid>
        </Grid>
      </Stack>

      {/* Copy Feedback Message */}
      {copyMessage && (
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "#fff",
            px: 2,
            py: 1,
            borderRadius: "8px",
            fontSize: "12px",
          }}
        >
          {copyMessage}
        </Box>
      )}
    </Box>
  );
};

export default RiskCheck;
