import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/customInput/index";
import { useState } from "react";
import IconImage from "../../assets/icons/vector.svg";
import CustomButton from "../../components/customButton";
import ButtonIcon from "../../assets/icons/Vector (3).svg";
import PaginatedTable from "../../components/dynamicTable";

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
      {/* MTF Scan Box */}
      <Box
        sx={{
          backgroundColor: "#161616",
          borderRadius: "20px",
          padding: "25px",
          width: "100%",
          maxWidth: "1449px",
          marginTop: "40px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          MTF Scan — Multi-Timeframe Analysis
        </Typography>
        <CustomInput
          placeholder="ETH"
          value={search.search || ""}
          onChange={handleInputChange("search")}
          InputEndIcon={<img src={IconImage} />}
        />
      </Box>

      {/* ETH/USDT Box */}
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
          }}
        >
          $3300,51
          <span style={{ color: "#3EDD87", fontSize: "24px" }}> + 2.87%</span>
        </Typography>

        {/* Button + Extra Text */}
        <Box
            display= {"flex"}
            alignItems= {"center"}
            gap= {"15px"}
            marginTop= {"20px"}
        >
          <CustomButton
            variant={"calculatorToggle"}
            icon={<img src={ButtonIcon} />}
            title="Al Recommendation"
          />
          <Typography sx={{ color: "#FFD700", fontSize: "18px" }}>
            Hold back <br />
            <span style={{ color: "#fff", fontSize: "12px" }}>
              confidence: 84%
            </span>
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
            alignItems= {"center"}
            gap= {"15px"}
            marginTop= {"20px"}
            width= {"100%"}
            height= {"87px"}
            borderRadius= {"24px"}
            background= {"#1C1C1C"}
            padding= {"15px"}
        >
          <CustomButton variant={"calculatorToggle"} title="Interpretation" />
          <Typography variant="h6">
            All timeframes agree on growth - a strong bullish signal!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MTFSection;
