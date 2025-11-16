import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import IconImage from "../../assets/icons/Vector.svg";
import ButtonIcon from "../../assets/icons/Vector (3).svg";
import { useState } from "react";
import DashboardStats from "./confluenceButton";
import TechnicalIndicator from "./technicalIndicator";

const AiProof = () => {
  const [search, setSearch] = useState({ search: "" });

  const handleInputChange = (field) => (event) => {
    setSearch({
      ...search,
      [field]: event.target.value,
    });
  };

  return (
    <>
      {/* Input Box */}
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
        <Typography variant="h3" sx={{ color: "#fff", marginBottom: "15px" }}>
          AI Proof — Quick coin verification
        </Typography>
        <Typography
          sx={{ color: "#fff", marginBottom: "15px", fontSize: "14px" }}
        >
          In-depth AI analysis of any coin in seconds. Enter the ticker, receive
          a complete breakdown and recommendation.
        </Typography>
        <CustomInput
          placeholder="ETH"
          value={search.search}
          onChange={handleInputChange("search")}
          InputEndIcon={<img src={IconImage} alt="icon" />}
        />
      </Box>

      {/* Coin Info Box */}
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
        <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px" }}>
          ETH/USDT
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: "10px" }}>
          $3300,51
          <span style={{ color: "#3EDD87", fontSize: "24px" }}> + 2.87%</span>
        </Typography>

        {/* Button + Extra Text */}
        <Box
          display="flex"
          alignItems="center"
          gap="15px"
          marginTop="20px"
          backgroundColor="#1C1C1C"
          padding="10px"
          borderRadius="25px"
        >
          <CustomButton
            variant="calculatorToggle"
            icon={<img src={ButtonIcon} alt="icon" />}
            title="AI Recommendation"
          />
          <Typography sx={{ color: "#FFD700", fontSize: "18px" }}>
            Hold back <br />
            <span style={{ color: "#fff", fontSize: "12px" }}>
              confidence: 84%
            </span>
          </Typography>
        </Box>
        {/* confluence button page */}
        {/* <DashboardStats /> */}
        {/* technicalIndicator  */}
        {/* <TechnicalIndicator /> */}
      </Box>
    </>
  );
};

export default AiProof;
