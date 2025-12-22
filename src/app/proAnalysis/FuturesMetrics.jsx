import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/vector.svg";
import { color } from "d3";

const FuturesMetrics = ({ coinData }) => {
  console.log("3333333333333333333333333", coinData);

  const fundingData = [
    {
      title: "Funding Rate",
      value: coinData?.futuresMetrics?.fundingRate,
      status: coinData?.futuresMetrics?.fundingRateLabel,
    },

    {
      title: "Open Interest",
      value: coinData?.futuresMetrics?.openInterest,
      status: coinData?.futuresMetrics?.openInterestChange,
    },

    {
      title: "L/S Positions",
      value: coinData?.futuresMetrics?.longShortPositions,
      status: coinData?.futuresMetrics?.longShortPositions?.warning,
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
      value: coinData?.futuresMetrics?.longShortAccounts,
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
      value: coinData?.futuresMetrics?.cumulativeDelta,
      status: coinData?.futuresMetrics?.cumulativeDeltaLabel,
    },
  ];

  // const [search, setSearch] = useState("");

  // const handleInputChange = (field) => (event) => {
  //   setSearch({
  //     [field]: event.target.value,
  //   });
  // };
  return (
    <>
      <Box
        backgroundColor={"#161616"}
        mt={"15px"}
        padding={"25px"}
        borderRadius={"40px"}
      >
        <Typography variant="h5" fontSize={"20px"}>
          Futures Metrics
        </Typography>
        <Box mt={"20px"}>
          {/* <CustomInput
            placeholder="ETH"
            value={search.search || ""}
            onChange={handleInputChange("search")}
            InputEndIcon={<img src={IconImage} />}
          /> */}
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"20px"}
          flexDirection={"column"}
        >
          <Typography variant="h4" fontSize={"18px"} fontWeight={500}>
            Current ETH Price
          </Typography>
          <Typography variant="h5" fontSize={"20px"}>
            $4,321.7
          </Typography>
        </Box>
        <Grid container spacing={1} mt={5}>
          {fundingData.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  borderRadius: "15px",
                  padding: "15px",
                  textAlign: "left",
                  border: "1px solid #2A2A2A",
                  height: "220px",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  fontSize={"20px"}
                  fontWeight={400}
                  color="#fff"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontSize={"22px"}
                  mt={2}
                  sx={{
                    color: coinData?.futuresMetrics?.fundingRate?.includes('-') ? "text.errorColor" : "text.greenColor",
                  }}
                >
                  {item.value}
                </Typography>
                {item.stye && <Box sx={item.stye}></Box>}

                <Typography
                  variant="h6"
                  sx={{
                    color: coinData?.futuresMetrics?.fundingRateLabel?.includes("-") ? "text.errorColor" : "text.greenColor",
                    fontSize: "15px",
                    marginTop: "40px",
                    fontFamily : "inter Tight",
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
          <Typography
            sx={{
              color: "#8D8D8D",
              fontSize: "12px",
            }}
          >
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
