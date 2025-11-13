import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomButton from "../../components/customButton";

const RiskCheck = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C1C1C",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        p: 2.5,
      }}
    >
      <Stack spacing={2}>
        {/* Risk Check Info */}
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#4CAF50",
              mb: 0.5,
            }}
          >
            ≤1% is OK
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#C7C7C7",
            }}
          >
            Trading: $0.04
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <CustomButton
            variant="softOutlined"
            title="Copy Results"
            handleClickBtn={() => console.log("Copy Results")}
            sx={{
              py: 0.75,
              px: 2,
              fontSize: "14px",
              minHeight: "36px",
              flex: 1,
              minWidth: "120px",
            }}
          />
          <CustomButton
            variant="gradient"
            title="Open Order"
            handleClickBtn={() => console.log("Open Order")}
            sx={{
              py: 0.75,
              px: 2,
              fontSize: "14px",
              minHeight: "36px",
              flex: 1,
              minWidth: "120px",
            }}
          />
        </Stack>

        {/* Export Options */}
        <Stack direction="row" spacing={2}>
          {/* <CustomButton
            variant="calculatorSmall"
            title="Add to Journal"
            handleClickBtn={() => console.log("Add to Journal")}
            width="100%"
          /> */}
          <CustomButton
            variant="calculatorSmall"
            title="Export CSV"
            handleClickBtn={() => console.log("Export CSV")}
            width="100%"
          />
          <CustomButton
            variant="calculatorSmall"
            title="Export JSON"
            handleClickBtn={() => console.log("Export JSON")}
            width="100%"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default RiskCheck;
