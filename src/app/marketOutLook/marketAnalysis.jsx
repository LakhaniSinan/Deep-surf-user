import { Box, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/customButton";

const AiMarketAnalysis = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={{ xs: "wrap", md: "nowrap" }}
      mt={3}
    >
      <Box>
        <Typography fontSize={"15px"} color="#fff">
          AI Market Analysis
        </Typography>
        <Typography fontSize={"11px"}>
          Daily AI analysis of macroeconomics, the crypto market, key events,
          and trading recommendations
        </Typography>
      </Box>
      <Box>
        <CustomButton
          title="Generate Analysls"
          variant="h6"
          fullWidth={{ xs: "100%" }}
          sx={{
            backgroundColor: "#FF6421",
            fontSize: "12px",
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
