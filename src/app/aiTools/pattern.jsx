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
        flexDirection={{ xs: "column", md: "row" }} // ← responsive fix
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
        gap={{ xs: 2, md: 0 }} // Mobile me thora gap aayega
      >
        {/* LEFT SIDE — 5 TEXTS */}
        <Box gap="12px">
          <Typography variant="h4" color="text.lightRedColor">
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
                  <span style={{ color: "red", transition: "all 0.3s ease" }}>
                    $3623.12
                  </span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
                width: { xs: "100%", md: "auto" },
              }}
            />
          </Box>
        </Box>

        {/* RIGHT SIDE — BUTTON */}
        <Box width={{ xs: "100%", md: "auto" }} mt={{ xs: 2, md: 0 }}>
          <Typography color="#FFFFFF" variant="h6">
            Confidence: 80%
          </Typography>
          <Box
            backgroundColor="accent.main"
            borderRadius="8px"
            mt="5px"
            p="5px 10px"
            width={{ xs: "100%", md: "70%" }}
          ></Box>
        </Box>
      </Box>

      {/* SECOND CARD */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }} // responsive fix
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        backgroundColor="#1C1C1C"
        padding="15px"
        borderRadius="8px"
        marginTop="20px"
        gap={{ xs: 2, md: 0 }}
      >
        <Box gap="12px">
          <Typography variant="h4" color="text.lightRedColor">
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

          <Box
            mt="10px"
            display={"flex"}
            gap={2}
            flexWrap={{ xs: "wrap", md: "nowrap" }}
          >
            <CustomButton
              variant="h6"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                  Target : <span style={{ color: "red" }}>$3623.12</span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
                width: { xs: "100%", md: "auto" },
              }}
            />

            <CustomButton
              variant="h1"
              backgroundColor="#1A1A1A"
              title={
                <span style={{ color: "#FFFFFF", fontSize: "20px" }}>
                  Breakout : <span style={{ color: "red" }}>$3951.72</span>
                </span>
              }
              sx={{
                border: "1px solid #FFFFFF",
                width: { xs: "100%", md: "auto" },
              }}
            />
          </Box>
        </Box>

        <Box width={{ xs: "100%", md: "auto" }} mt={{ xs: 2, md: 0 }}>
          <Typography color="#FFFFFF" variant="h6">
            Confidence: 75%
          </Typography>
          <Box
            backgroundColor="accent.main"
            borderRadius="8px"
            mt="5px"
            p="5px 10px"
            width={{ xs: "100%", md: "70%" }}
          ></Box>
        </Box>
      </Box>

      <Grid container spacing={2} marginTop={5}>
        <Grid item size={{ xs: 12, sm: 2 }}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <CustomButton
              sx={{
                borderRadius: "10px",
              }}
              variant={"gradient"}
              title="How to use"
            />
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, sm: 10 }}>
          <Typography variant="body1" fontSize={15}>
            Patterns are historically proven formations that often lead to
            predictable price movements. High Confidence (75%) = strong pattern.
            Always wait for a breakout for confirmation!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Pattern;
