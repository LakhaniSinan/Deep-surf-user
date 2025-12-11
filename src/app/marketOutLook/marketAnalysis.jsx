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
      mt={2}
    >
      <Box>
        <Typography fontSize={"18px"} fontWeight={600} >
          AI Market Analysis
        </Typography>
        <Typography fontSize={"12px"} color="neutral.mediumGray" fontWeight={600}>
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
