import React, { useState, useRef } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";
import { useTranslation } from "react-i18next";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";
const RiskCheck = ({ calculateData }) => {
  console.log("furfrgyfgrfgyrfgfeteifgeyiyegfiurfgirufr", calculateData?.currentPrice);
  console.log("furfrgyfgrfgyrfgfeteifgeyiyegfiurfgirufr", calculateData?.pair);
  const { t } = useTranslation();
  const [copyMessage, setCopyMessage] = useState("");
  const navigate = useNavigate();
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
        result[key] = JSON.stringify(value);  // <-- agar object hai to string kar diya
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
  // Trigger JSON download
  const handleExportJSON = () => {
    if (!calculateData) return;

    const fileName = `${calculateData.pair || "trade"}_${Date.now()}.json`;
    const jsonStr = JSON.stringify(calculateData, null, 2); // Pretty print JSON

    // Create a temporary link to trigger download
    const blob = new Blob([jsonStr], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleAddToJournal = () => {
    if (!calculateData) return;

    console.log(
      "currentPrice:",
      calculateData?.currentPrice
    );
    console.log(
      "pair:",
      calculateData?.pair
    );

    navigate("/save-alert", {
      state: {
        currentPrice: calculateData?.currentPrice,
        pair: calculateData?.pair,
        fullData: calculateData,
      },
    });
  };


  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        p: 1,
        position: "relative",
      }}
    >
      <Stack spacing={2}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography color="rgba(103, 106, 123, 1)" fontWeight={500} fontSize={"12px"}>
              Risk Check
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(21, 136, 103, 1)",
                // mb: 0.5,
              }}
            >
              {calculateData?.riskCheck}
            </Typography>
          </Box>
        </Box>
        {/* Risk Info */}
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography color="rgba(103, 106, 123, 1)" fontWeight={600} fontSize={"14px"}>
              Fees Breakdown
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(109, 113, 129, 1)",
                mb: 0.5,
              }}
            >
              Trading: $0.04
            </Typography>
          </Box>
        </Box>


        {/* Action Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <CustomButton
            variant="softOutlined"
            title={t("Chart.copyResults")}
            handleClickBtn={copyResults}
            sx={{ py: 1, px: 2, fontSize: "14px", minHeight: "36px", flex: 1, minWidth: "120px" }}
          />
          {/* <CustomButton
            variant="gradient"
            title={t("Chart.openOrder")}
            handleClickBtn={() => console.log("Open Order")}
            sx={{ py: 0.75, px: 2, fontSize: "14px", minHeight: "36px", flex: 1, minWidth: "120px" }}
          /> */}
        </Stack>

        {/* Add to Journal + Export Buttons */}
        <Grid item xs={12} md={4}>
          <CustomButton
            variant="calculatorSmall"
            title="Add to Journal"
            handleClickBtn={handleAddToJournal}
            width="100%"
          />
        </Grid>
        <Grid container spacing={0.8}>

          <Grid item size={{ xs: 12, md: 6 }}>
            <CSVLink
              data={csvData}
              filename={`${calculateData?.pair || "trade"}_${Date.now()}.csv`}
              className="hidden"
              ref={csvLinkRef}
              target="_blank"
              separator=","
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
              handleClickBtn={handleExportJSON}  // <-- updated
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
