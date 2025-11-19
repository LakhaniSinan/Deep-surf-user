import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/customInput/index";
import { useState } from "react";
import IconImage from "../../assets/icons/vector.svg";
import CustomButton from "../../components/customButton";
// import ButtonIcon from "../../assets/icons/Vector (3).svg";
import PaginatedTable from "../../components/dynamicTable";
import StarIcon from "../../assets/icons/Vector (3).svg";

const MTFSection = () => {
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
      TF: "1h",
      trend: "Neutral",
      RSI: 30.0,
      MACD: -30.0,
      Status: "HOLD",
    },
    {
      TF: "4h",
      trend: "Neutral",
      RSI: 30.0,
      MACD: -30.0,
      Status: "HOLD",
    },
    {
      TF: "1d",
      trend: "Neutral",
      RSI: 30.0,
      MACD: -30.0,
      Status: "HOLD",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#161616",
          borderRadius: "20px",
          padding: "25px",
          marginTop: "40px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            marginBottom: "15px",
            fontSize: "15px",
          }}
        >
          MTF Scan — Multi-Timeframe Analysis
        </Typography>
        <CustomInput
          InputEndIcon={<img src={IconImage} />}
          placeholder="ETH"
          value={search.search || ""}
          onChange={handleInputChange("search")}
        />
      </Box>
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
            color: "text.secondary",
            marginBottom: "15px",
          }}
        >
          ETH/USDT
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: "10px",
            fontSize: "22px",
          }}
        >
          $3300,51
          <span style={{ color: "#3EDD87", fontSize: "15px" }}> + 2.87%</span>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <CustomButton
            variant="gradient"
            title="Al Recommendation"
            icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
            sx={{
              borderRadius: "20px",
              padding: "4px 10px",
              minWidth: "auto",
              width: { xs: "100%", md: "auto" },
              backgroundColor: "#FFE600",
              color: "#fff",
            }}
          />
          <Typography
            variant="body2"
            fontSize="14px"
            flex={{ xs: "100%", md: "1" }}
          >
            <span>Hold back</span>
            <br />
            confidence: 84%
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
          display={"flex"}
          alignItems={"center"}
          gap={"15px"}
          marginTop={"10px"}
          // width={"100%"}
          height={"87px"}
          borderRadius={"24px"}
          background={"#1C1C1C"}
          flexWrap={"wrap"}
        >
          <CustomButton  variant={"calculatorToggle"} title="Interpretation" sx={{
            fontSize:"14px" ,
          }} />
          <Typography variant="h6" fontSize="14px">
            All timeframes agree on growth - a strong bullish signal!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MTFSection;
