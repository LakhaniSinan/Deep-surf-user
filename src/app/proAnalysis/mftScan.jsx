import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/customInput/index";
import { useEffect, useState } from "react";
import IconImage from "../../assets/icons/vector.svg";
import CustomButton from "../../components/customButton";
// import ButtonIcon from "../../assets/icons/Vector (3).svg";
import PaginatedTable from "../../components/dynamicTable";
import StarIcon from "../../assets/icons/stairs.svg";
import { yellow } from "@mui/material/colors";
import { proAnylysisData } from "../../services/modules/home";
import { toast } from "react-toastify";
const MTFSection = ({ getProAnanlsisData, coinData }) => {
  console.log("coinData", coinData?.mtfScan);

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
      Status: coinData?.mtfScan?.timeframes?.[0]?.status,
    },
    {
      TF: coinData?.mtfScan?.timeframes?.[1]?.tf,
      trend: coinData?.mtfScan?.timeframes?.[1]?.trend,
      RSI: coinData?.mtfScan?.timeframes?.[1]?.rsi,
      MACD: coinData?.mtfScan?.timeframes?.[1]?.macd,
      Status: coinData?.mtfScan?.timeframes?.[1]?.status,
    },
    {
      TF: coinData?.mtfScan?.timeframes?.[2]?.tf,
      trend: coinData?.mtfScan?.timeframes?.[2]?.trend,
      RSI: coinData?.mtfScan?.timeframes?.[2]?.rsi,
      MACD: coinData?.mtfScan?.timeframes?.[2]?.macd,
      Status: coinData?.mtfScan?.timeframes?.[2]?.status,
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#161616",
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
            fontSize : "22px"
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
          <span style={{ color: coinData?.basicInfo?.change24hFormatted.includes("-") ? "red" : "green", fontSize: "18px", marginLeft: "10px", fontWeight: "400px" }}>
            {coinData?.basicInfo?.change24hFormatted}
          </span>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <CustomButton
            title="Al Recommendation"
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
            <span style={{ color: "#FFE600" }}>
              {coinData?.mtfScan?.aiRecommendation}
            </span>
            <br />
            confidence:{coinData?.mtfScan?.confidence}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <PaginatedTable
            tableHeader={billingHistoryHeaders}
            tableData={billingHistoryRows}
            displayRows={["TF", "trend_pro", "RSI", "MACD", "status_pro"]}
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
        >
          <CustomButton
            // variant="gradient"
            title="Interpretation"
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
            fontSize="13px"
            flex={{ xs: "100%", md: "1" }}
            color="#fff"
            fontWeight={600}
          >
            All timeframes agree on growth - a strong bullish signal!{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MTFSection;
