import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CustomButton from "../../components/customButton";
// import ButtonIcon from "../../assets/icons/Vector (3).svg";
import PaginatedTable from "../../components/dynamicTable";
import StarIcon from "../../assets/icons/stairs.svg";
import { useTranslation } from "react-i18next";
const MTFSection = ({ getProAnanlsisData, coinData }) => {
  console.log("fffffffffffffffffffffffffffffcccccccccccccccccccccccff", coinData?.mtfScan?.timeframes?.[0]?.trend);

  console.log("coindata", coinData);

  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const handleInputChange = (field) => (event) => {
    setSearch({
      [field]: event.target.value,
    });
  };
  const billingHistoryHeaders = [
    { id: "TF", label: "TF", align: "left" },
    { id: "trend", label: "trend", align: "left" },
    { id: "RSI", label: "RSI", align: "right" },
    { id: "MACD", label: "MACD", align: "right" },
    { id: "Status", label: "Status", align: "left" },
  ];
  const billingHistoryRows = [
    {
      TF: coinData?.mtfScan?.timeframes?.[0]?.tf,
      trend: coinData?.mtfScan?.timeframes?.[0]?.trend,
      RSI: coinData?.mtfScan?.timeframes?.[0]?.rsi,
      MACD: coinData?.mtfScan?.timeframes?.[0]?.macd,
      status: coinData?.mtfScan?.timeframes?.[0]?.status,
    },
    {
      TF: coinData?.mtfScan?.timeframes?.[1]?.tf,
      trend: coinData?.mtfScan?.timeframes?.[1]?.trend,
      RSI: coinData?.mtfScan?.timeframes?.[1]?.rsi,
      MACD: coinData?.mtfScan?.timeframes?.[1]?.macd,
      status: coinData?.mtfScan?.timeframes?.[1]?.status,
    },
    {
      TF: coinData?.mtfScan?.timeframes?.[2]?.tf,
      trend: coinData?.mtfScan?.timeframes?.[2]?.trend,
      RSI: coinData?.mtfScan?.timeframes?.[2]?.rsi,
      MACD: coinData?.mtfScan?.timeframes?.[2]?.macd,
      status: coinData?.mtfScan?.timeframes?.[2]?.status,
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.charcoal",
          borderRadius: "20px",
          padding: "25px",
          width: "100%",
          maxWidth: "1449px",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "text.grayish",
            marginBottom: "15px",
            fontSize: "22px"
          }}
        >
          {coinData?.basicInfo?.pair}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "10px",
            fontSize: "25px",
          }}
        >
          {coinData?.basicInfo?.priceFormatted}
          <span style={{ color: coinData?.basicInfo?.change24hFormatted.includes("-") ? "rgba(225, 26, 56, 1)" : "rgba(62, 221, 135, 1)", fontSize: "18px", marginLeft: "10px", fontWeight: "400px" }}>
            {coinData?.basicInfo?.change24hFormatted}
          </span>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          bgcolor={"neutral.darkGrey"}
          padding={"25px"}
          borderRadius={"20px"}
        >
          <CustomButton
            title={t("ProAnalytics.aiRecommendation")}
            icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
            sx={{
              borderRadius: "20px",
              padding: "4px 35px",
              minWidth: "auto",
              width: { xs: "100%", md: "auto" },
              backgroundColor: "#FF6421",
              color: "#fff",
            }}
          />
          <Typography
            variant="body2"
            fontSize="14px"
            flex={{ xs: "100%", md: "1" }}
          >
            <span style={{ color: "rgba(255, 230, 0, 1)", fontWeight: "550", fontSize: "20px" }}>
              {coinData?.mtfScan?.aiRecommendation}
            </span>
            <br />
            {t("AiTools.PatternRecognition.confidence")}:{coinData?.mtfScan?.confidence}%
          </Typography>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <PaginatedTable
            tableHeader={billingHistoryHeaders}
            tableData={billingHistoryRows}
            displayRows={["TF", "trend", "RSI", "MACD", "status"]}
            isLoading={false}
            showPagination={false}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          marginTop={"20px"}
          bgcolor={"neutral.darkGrey"}
          padding={"25px"}
          borderRadius={"20px"}
        >
          <CustomButton
            // variant="gradient"
            title={t("ProAnalytics.interpretation")}
            sx={{
              borderRadius: "20px",
              padding: "4px 30px",
              minWidth: "auto",
              width: { xs: "100%", md: "auto" },
              backgroundColor: "#FF6421",
              color: "#fff",
              fontWeight: "400px",
            }}
          />
          <Typography
            variant="body2"
            fontSize="15px"
            flex={{ xs: "100%", md: "1" }}
            color="neutral.Snowwhite"
            fontWeight={600}
          >
            {/* {t("ProAnalytics.allTimeframesAgree")}{" "} */}
            {coinData?.mtfScan?.interpretation}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MTFSection;
