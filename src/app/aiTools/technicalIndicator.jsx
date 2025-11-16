import { Box, Typography, Paper, Grid } from "@mui/material";

import React from "react";
import CustomButton from "../../components/customButton";

const TechnicalIndicator = () => {
  const levels = [
    { label: "Support", value: "3829.17", color: "#3EDD87" },
    { label: "Resistance", value: "4349.70", color: "#FF6C82" },
  ];
  const technicalIndicators = [
    { label: "RSI", value: "74.3" },
    { label: "MACD", value: "35.93" },
    { label: "StochRSI", value: "100.0" },
    { label: "BB Position", value: "116%" },
    { label: "Trend", value: "SIDEWAYS" },
    { label: "Volume", value: "1.39x" },
  ];

  return (
    <>
      {/* {  Technical Indicators  } */}
      <Typography variant="h5" marginTop={"20px"}>
        Technical Indicators
      </Typography>
      <Box sx={{ p: 1, borderRadius: 1 }}>
        <Grid container spacing={1}>
          {technicalIndicators.map((item, index) => (
            <Grid key={index} item xs="auto" size={{ xs: 12, sm: 1.7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  minWidth: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#1a1a1a",
                  color: "#94969A",
                  borderRadius: 4,
                  border: "1px solid #333",
                  marginTop: "10px",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                  {item.label}:
                </Typography>
                <Typography variant="body2">{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Community sentiment */}
      <Typography variant="h4" marginTop={"10px"}>
        Community sentiment
      </Typography>
      <Box>
        <Grid container spacing={0} marginTop={2}>
          {/* LEFT SIDE */}
          <Grid item size={{ xs: 12, sm: 8 }}>
            <Box
              sx={{
                backgroundColor: "#0B2015",
                borderRadius: 34,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <CustomButton
                title="70.5% LONG"
                variant="h4"
                fullWidth
                sx={{
                  color: "#3EDD87",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                backgroundColor: "#391417",
                borderRadius: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                mt: {
                  xs: 2,
                  sm: 0,
                },
              }}
            >
              <CustomButton
                title="29.5% SHORT"
                variant="h4"
                fullWidth
                sx={{
                  color: "#FF6666",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 2, borderRadius: 2 }}>
        <Grid container spacing={2}>
          {levels.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  borderRadius: 4,
                  p: 2,
                }}
              >
                <Typography variant="h6">{item.label}</Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: item.color,
                    fontSize: "25px",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*  */}
    </>
  );
};
export default TechnicalIndicator;
