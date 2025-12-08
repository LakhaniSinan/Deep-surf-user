import { Box, Grid } from "@mui/material";
import React from "react";
import AiDruvenImage from "../../../assets/images/AI Driven.png";
import AdvancedTools from "../../../assets/images/Advanced Tools.png";

const AiDrivenCard = () => {
  return (
    <Box mt={10} padding={1}>
      <Grid container spacing={2} alignItems="center">
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={AiDruvenImage}
            sx={{
              width: "100%",
              maxWidth: "600px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={AdvancedTools}
            sx={{
              width: "100%",
              maxWidth: "600px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AiDrivenCard;
