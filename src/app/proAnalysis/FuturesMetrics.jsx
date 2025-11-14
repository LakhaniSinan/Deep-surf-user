import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/vector.svg";
import styled from "@emotion/styled";

const FuturesMetrics = () => {
  const fundingData = [
    {
      title: "Funding Rate",
      value: "0.000%",
      status: "Neutral",
    },

    {
      title: "Open Interest",
      value: "1.5M",
      status: "+3.70% (24h)",
    },

    {
      title: "L/S Positions",
      value: "2.34",
      status: "Everyone is longing ETH. Becareful!",
      stye: {
        width: "100%",
        height: "5px",
        backgroundColor: "#3EDD87",
        margin: "12px 0",
        borderRadius: "10px",
      },
    },

    {
      title: "L/S Accounts",
      value: "2.75",
      status: "Neutral",
      stye: {
        width: "100%",
        height: "5px",
        backgroundColor: "#3EDD87",
        margin: "12px 0",
        borderRadius: "20px",
      },
    },

    {
      title: "Cumulative Delta",
      value: "+0.20M",
      status: "Buying is predominant",
    },
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
        <Typography variant="h5">Futures Metrics</Typography>
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
          flexDirection={"column"}
        >
          <Typography variant="h4">Current ETH Price</Typography>
          <Typography variant="h5">$4,321.7</Typography>
        </Box>
        <Grid container spacing={1} mt={5}>
          {fundingData.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  borderRadius: "14px",
                  padding: "20px",
                  textAlign: "left",
                  border: "1px solid #2A2A2A",
                  height: "187px",
                }}
              >
                <Typography variant="h6" color="#fff">
                  {item.title}
                </Typography>

                <Typography variant="h4" mt={1} color="#3EDD87">
                  {item.value}
                </Typography>
                {item.stye && <Box sx={item.stye}></Box>}

                <Typography
                  variant="h6"
                  mt={1}
                  sx={{
                    color: item.status === "Neutral" ? "#3EDD87" : "#FFE600",
                    fontSize: "12px",
                  }}
                >
                  {item.status}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left", 
            padding: "20px",
          }}
        >
          <Typography sx={{
            color : "#8D8D8D" ,
            fontSize : "12px",

          }}>
            How to read: <br />
            • Funding 0.01% = Longs pay shorts (market overheating) <br />
            • L/S 1.5 = Dangerous skew towards LONG (correction possible) <br />
            • OI rising + price rising = strong upward trend <br />• OI falling
            = position closures, reversal possible
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FuturesMetrics;
