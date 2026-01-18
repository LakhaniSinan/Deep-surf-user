import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import IconImage from "../../assets/icons/vector.svg";
import ArrowBtn from "../../assets/icons/arrow-icon.svg"
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.svg"
import { useTranslation } from "react-i18next";
const LiquidationMapData = ({ coinData }) => {
  const { t } = useTranslation();
  const longLiquidations = [
    {
      id: coinData?.liquidationMap?.longLiquidations[0].rank,
      price: coinData?.liquidationMap?.longLiquidations[0].priceFormatted,
      percent: coinData?.liquidationMap?.longLiquidations[0].percentFromPrice,
      value: coinData?.liquidationMap?.longLiquidations[0].leverage,
    },
    {
      id: coinData?.liquidationMap?.longLiquidations[1].rank,
      price: coinData?.liquidationMap?.longLiquidations[1].priceFormatted,
      percent: coinData?.liquidationMap?.longLiquidations[1].percentFromPrice,
      value: coinData?.liquidationMap?.longLiquidations[1].leverage,
    },
    {
      id: coinData?.liquidationMap?.longLiquidations[2].rank,
      price: coinData?.liquidationMap?.longLiquidations[2].priceFormatted,
      percent: coinData?.liquidationMap?.longLiquidations[2].percentFromPrice,
      value: coinData?.liquidationMap?.longLiquidations[2].leverage2,
    },
    {
      id: coinData?.liquidationMap?.longLiquidations[3].rank,
      price: coinData?.liquidationMap?.longLiquidations[3].priceFormatted,
      percent: coinData?.liquidationMap?.longLiquidations[3].percentFromPrice,
      value: coinData?.liquidationMap?.longLiquidations[3].leverage,
    },
    {
      id: coinData?.liquidationMap?.longLiquidations[4].rank,
      price: coinData?.liquidationMap?.longLiquidations[4].priceFormatted,
      percent: coinData?.liquidationMap?.longLiquidations[4].percentFromPrice,
      value: coinData?.liquidationMap?.longLiquidations[4].leverage,
    },
  ];
  const shortLiquidations = [
    {
      id: coinData?.liquidationMap?.shortLiquidations[0].rank,
      price: coinData?.liquidationMap?.shortLiquidations[0].priceFormatted,
      percent: coinData?.liquidationMap?.shortLiquidations[0].percentFromPrice,
      value: coinData?.liquidationMap?.shortLiquidations[0].leverage,
    },
    {
      id: coinData?.liquidationMap?.shortLiquidations[1].rank,
      price: coinData?.liquidationMap?.shortLiquidations[1].priceFormatted,
      percent: coinData?.liquidationMap?.shortLiquidations[1].percentFromPrice,
      value: coinData?.liquidationMap?.shortLiquidations[1].leverage,
    },
    {
      id: coinData?.liquidationMap?.shortLiquidations[2].rank,
      price: coinData?.liquidationMap?.shortLiquidations[2].priceFormatted,
      percent: coinData?.liquidationMap?.shortLiquidations[2].percentFromPrice,
      value: coinData?.liquidationMap?.shortLiquidations?.[2].leverage,
    },
    {
      id: coinData?.liquidationMap?.shortLiquidations[3].rank,
      price: coinData?.liquidationMap?.shortLiquidations[3].priceFormatted,
      percent: coinData?.liquidationMap?.shortLiquidations[3].percentFromPrice,
      value: coinData?.liquidationMap?.shortLiquidations[3].leverage,
    },
    {
      id: coinData?.liquidationMap?.shortLiquidations[4].rank,
      price: coinData?.liquidationMap?.shortLiquidations[4].priceFormatted,
      percent: coinData?.liquidationMap?.shortLiquidations[4].percentFromPrice,
      value: coinData?.liquidationMap?.shortLiquidations[4].leverage,
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
        <Typography variant="h5" fontSize={"22px"}>
          {t("ProAnalytics.LiquidationMap.liquidationMapTitle")}
        </Typography>
        {/* <Box mt={"20px"}>
          <CustomInput
            placeholder="ETH"
            value={search.search || ""}
            onChange={handleInputChange("search")}
            InputEndIcon={<img src={IconImage} />}
          />
        </Box> */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"20px"}
          flexDirection={"column"} // ✅ correct
        >
          <Typography variant="h4" fontSize={"25px"} fontWeight={600}>
            {/* {t("ProAnalytics.LiquidationMap.currentBTCPrice")} */}
            {t("ProAnalytics.LiquidationMap.Current")} {coinData?.basicInfo?.symbol} {t("ProAnalytics.LiquidationMap.price")}
          </Typography>
          <Typography variant="h5" fontSize={"23px"} >
            {coinData?.liquidationMap?.priceFormatted}
          </Typography>
        </Box>
        <Box mt={3}>
          <Grid container spacing={7}>
            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
              <Typography color="text.greenColor" mb={2} fontSize={"20px"} fontWeight={600}>
                {t("ProAnalytics.LiquidationMap.longLiquidations")}
              </Typography>
              {longLiquidations.map((item, index) => (
                <Box
                  key={index}
                  mb={2}
                  backgroundColor={"#1C1C1C"}
                  padding={"15px"}
                  borderRadius={"20px"}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    width={"100%"}
                    height={"36px"}
                  >
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                      <Typography>{item.id} </Typography>
                      <Box display={"flex"}>
                        <Typography
                          fontSize={"18px"}
                          fontWeight={600}
                          color="#fff"
                        >
                          {item.price}{" "}
                          <span
                            style={{
                              fontSize: "11px",
                              color: "#8D8D8D",
                            }}
                          >
                            {item.value}
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={0.4}>
                      <Box>
                        <img
                          src={ArrowDownIcon}
                          width="10px"
                          height="10px"
                          style={{
                            color: "invert(21%) sepia(89%) saturate(6233%) hue-rotate(-1deg) brightness(100%) contrast(100%)"
                          }}
                          alt="arrow"
                        />
                      </Box>
                      <Box>
                        <Typography fontWeight={600} color="text.greenColor">{item.percent}</Typography>
                      </Box>
                    </Box>
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
                        backgroundColor: "text.greenColor",
                        borderRadius: "20px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
              <Typography color="#FF4E4E" mb={2} fontSize={"20px"} fontWeight={600}>
                {t("ProAnalytics.LiquidationMap.shortLiquidations")}
              </Typography>
              {shortLiquidations.map((item, index) => (
                <Box
                  key={index}
                  mb={2}
                  backgroundColor={"#1C1C1C"}
                  padding={"15px"}
                  borderRadius={"20px"}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={1}
                    width={"100%"}
                    height={"36px"}
                  >
                    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                      <Typography fontSize={"14px"} color="#fff">
                        {item.id}
                      </Typography>
                      <Typography
                        fontSize={"18px"}
                        color="#fff"
                        fontWeight={600}
                      >
                        {item.price}{" "}
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#8D8D8D",
                          }}
                        >
                          {item.value}
                        </span>
                      </Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={0.4}>
                      <Box>
                        <img
                          src={ArrowBtn}
                          width="10px"
                          height="10px"
                          style={{
                            color: "invert(21%) sepia(89%) saturate(6233%) hue-rotate(-1deg) brightness(100%) contrast(100%)"
                          }}
                          alt="arrow"
                        />
                      </Box>
                      <Box>
                        <Typography fontWeight={600} color="neutral.brightRed">{item.percent}</Typography>
                      </Box>
                    </Box>
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

export default LiquidationMapData;
