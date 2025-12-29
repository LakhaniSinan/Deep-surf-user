import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import IconImage from "../../assets/icons/Vector.svg";
import ButtonIcon from "../../assets/icons/stairs.svg";
import { useState } from "react";
import DashboardStats from "./confluenceButton";
import TechnicalIndicator from "./technicalIndicator";
import StarIcon from "../../assets/icons/stairs.svg";
import { useTranslation } from "react-i18next";

const AiProof = ({ coinData }) => {
  console.log("wwwwwwwwwwwddddddddddddwwwwwwwwwwww", coinData?.coin?.pair);

  // const [search, setSearch] = useState({ search: "" })
  const handleInputChange = (field) => (event) => {
    setSearch({
      ...search,
      [field]: event.target.value,
    });
  };
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#161616",
          borderRadius: "20px",
          padding: {
            xs: "5px",
            md: "10px"
          },
          width: "100%",
          maxWidth: "1449px",
          // marginTop: "30px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "text.grayish", marginBottom: "15px", fontSize: "25px" }}
        >
          {coinData?.coin?.pair}
        </Typography>
        <Typography
          variant="h1"
          sx={{ marginBottom: "10px", fontSize: "30px" }}
        >
          {/* {coinData?.coin?.priceFormatted}% */}
          {` $${coinData?.coin?.priceFormatted}`}
          <span
            style={{
              color: coinData?.coin?.change24hFormatted?.includes("-")
                ? "rgba(255, 76, 76, 1)"
                : "rgba(62, 221, 135, 1)",
              fontSize: "18px",
              marginLeft: "10px"
            }}
          >
            {coinData?.coin?.change24hFormatted}
          </span>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="20px"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          backgroundColor="#1C1C1C"
          padding={2}
          borderRadius={"20px"}
          mt={2}
          p={2}
        >
          <CustomButton
            title={t("AiTools.Recommendation")}
            icon={<img src={StarIcon} style={{ width: 20, height: 20 }} />}
            sx={{
              borderRadius: "20px",
              padding: "4px 30px",
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
            <span style={{ color: "rgba(255, 230, 0, 1)", fontWeight: 600, fontSize: "15px" }}>
              {coinData?.recommendation?.action}
            </span >
            <br />
            {t("AiTools.Confidence")}: {coinData?.recommendation?.confidence}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AiProof;
