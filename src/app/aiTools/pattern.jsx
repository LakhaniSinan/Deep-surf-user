import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../components/customButton";
const Pattern = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2} mt="15px">
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap="20px"
            >
              <Typography variant="h4">Pattern Recognition</Typography>
              <CustomButton
                variant="h6"
                title="2 found"
                sx={{
                  fontSize: "15px",
                  backgroundColor: "transparent",
                  border: "1px solid #FFFFFF",
                  borderRadius: "15px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
      >
        {/* LEFT SIDE — 5 TEXTS */}
        <Box gap="12px">
          <Typography variant="h3" color="text.lightRedColor">
            Double Top
          </Typography>
          <Typography variant="body1" color="text.grey">
            Bearish pattern
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            mt="10px"
            fontSize={"15px"}
            fontWeight={400}
          >
            Double Top at 3762.80, Support 3692.96, Target 3623.12
          </Typography>
          <Box mt="10px">
            <CustomButton
              variant="h6"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                  Target :{" "}
                  <span
                    variant="h6"
                    style={{ color: "red", transition: "all 0.3s ease" }}
                  >
                    $3623.12
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
              }}
            />
          </Box>
        </Box>

        {/* RIGHT SIDE — BUTTON */}
        <Box>
          <Typography color="#FFFFFF" variant="h6">
            Confidence: 80%
          </Typography>
          <Box
            backgroundColor="accent.main"
            borderRadius="8px"
            mt="5px"
            p="5px 10px"
            width={"70%"}
          ></Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
      >
        <Box gap="12px">
          <Typography variant="h3" color="text.lightRedColor">
            Rising Wedge
          </Typography>
          <Typography variant="body1" color="text.grey">
            Bearish pattern
          </Typography>
          <Typography
            variant="h5"
            color="#fff"
            mt="10px"
            fontSize={"15px"}
            fontWeight={400}
          >
            Rising Wedge: Bearish pattern, waiting for breakdown → Target
            3817.67
          </Typography>
          <Box mt="10px" display={"flex"} gap={2}>
            <CustomButton
              variant="h6"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                  Target :{" "}
                  <span
                    variant="h6"
                    style={{ color: "red", transition: "all 0.3s ease" }}
                  >
                    $3623.12
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
              }}
            />
            <CustomButton
              variant="h1"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                  Breakout :{" "}
                  <span
                    variant="h6"
                    style={{ color: "red", transition: "all 0.3s ease" }}
                  >
                    $3951.72
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
              }}
            />
          </Box>{" "}
        </Box>
        <Box>
          <Typography color="#FFFFFF" variant="h6">
            Confidence: 75%
          </Typography>
          <Box
            backgroundColor="accent.main"
            borderRadius="8px"
            mt="5px"
            p="5px 10px"
            width={"70%"}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Pattern;
