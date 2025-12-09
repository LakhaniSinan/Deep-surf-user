import { Box, Typography } from "@mui/material";
import MacBookImage from "../../../assets/images/macbookelement.png"
// import MacBookImages from "../../../assets/images/macbook element 1 (1).png"
const ProprietaryTechSection = () => {
  return (
    <Box
      width="100%"
      bgcolor="neutral.surface"
      display="flex"
      justifyContent="center"
      mt="25px"
      borderRadius="30px"
      sx={{
        paddingLeft: { xs: "20px", md: "90px" },
      }}
    >

      <Box
        width={"100%"}
        // maxWidth={"1400px"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "left", md: "center" }}
        gap={{ xs: 5, md: 0 }}
        textAlign={{ xs: "left" }}
        mt={{ xs: 2, md: 0 }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            color="accent.contrastText"
            fontSize={{ xs: "20px", md: "40px" }}
            fontWeight={700}
            textAlign={{ xs: "left" }}
          >
            100% Proprietary Tech.
          </Typography>
          <Typography
            color={"accent.contrastText"}
            fontSize={{ xs: "13px", md: "20px" }}
            fontWeight={"600"}
            mb={3}
            opacity={"0.85"}
          >
            No Outsourcing. No Noise.
          </Typography>
          <Typography
            color={"accent.contrastText"}
            fontSize={{ xs: "12px", md: "14px" }}
            lineHeight={"1.3"}
            maxWidth={"300px"}
            mt={{ xs: 2, md: 6 }}
          >
            DeepSurf’s multi-layered AI engine transforms raw data into actionable insights, forecasts, and bias signals - so you can trade with clarity, precision, and confidence.
          </Typography>
        </Box>
        <Box
          flex={"1"}
          display={"flex"}
          justifyContent={"flex-end"}
          flexDirection={"flex-end"}
        // marginLeft={"150px"}
        >
          <Box
            component="img"
            src={MacBookImage}
            mt={{ xs: "5px", md: "96px" }}
            alt="dashboard"
            width={"100%"}
            sx={{
              borderBottomRightRadius: "30px",
            }}

          // maxWidth={"100%"}
          // borderRadius: "22px",
          // boxShadow: "0px 0px 40px rgba(0,0,0,0.5)",
          // border: "1px solid #222",
          />
        </Box>
      </Box>
    </Box >
  );
};

export default ProprietaryTechSection;
