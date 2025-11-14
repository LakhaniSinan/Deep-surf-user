import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/vector.svg";

const LiquidationMap = () => {
  const longLiquidations = [
    { price: "$132,302", percent: 20 },
    { price: "$145,000", percent: 22 },
    { price: "$158,500", percent: 25 },
    { price: "$170,000", percent: 30 },
    { price: "$185,000", percent: 35 },
  ];

  const shortLiquidations = [
    { price: "$145,678", percent: -25 },
    { price: "$158,920", percent: -15 },
    { price: "$167,432", percent: -30 },
    { price: "$175,000", percent: -18 },
    { price: "$189,456", percent: -22 },
  ];

  const [search, setSearch] = useState("");

  const handleInputChange = (field) => (event) => {
    setSearch({
      [field]: event.target.value,
    });
  };
  return (
    <>
      <Box
        backgroundColor={"#161616"}
        mt={"10px"}
        padding={"25px"}
        borderRadius={"40px"}
      >
        <Typography variant="h5">Liquidation Map</Typography>
        <Box mt={"20px"}>
          <CustomInput
            placeholder="ETH"
            value={search.search || ""}
            onChange={handleInputChange("search")}
            InputEndIcon={<img src={IconImage} />}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"20px"}
          flexDirection={"column"} // ✅ correct
        >
          <Typography variant="h4">Current BTC Price</Typography>
          <Typography variant="h5">$111,540.7</Typography>
        </Box>

        <Box mt={3}>
          <Grid container spacing={4}>
            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
              <Typography color="#3EDD87" mb={2}>
                LONG Liquidations
              </Typography>

              {longLiquidations.map((item, index) => (
                
                <Box key={index} mb={2}>
                  <Box display="flex" justifyContent="space-between" mb={0.5}>
                    <Typography color="#fff">{item.price}</Typography>
                    <Typography color="#3EDD87">+{item.percent}%</Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "8px",
                      backgroundColor: "#2A2A2A",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${item.percent}%`,
                        height: "100%",
                        backgroundColor: "#3EDD87",
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
              <Typography color="#FF4E4E" mb={2}>
                SHORT Liquidations
              </Typography>
              {shortLiquidations.map((item, index) => (
                <Box key={index} mb={2}>
                  <Box display="flex" justifyContent="space-between" mb={0.5}>
                    <Typography color="#fff">{item.price}</Typography>
                    <Typography color="#FF4E4E">{item.percent}%</Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "%",
                      height: "8px",
                      backgroundColor: "#2A2A2A",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${Math.abs(item.percent)}%`,
                        height: "100%",
                        backgroundColor: "#FF4E4E",
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default LiquidationMap;
