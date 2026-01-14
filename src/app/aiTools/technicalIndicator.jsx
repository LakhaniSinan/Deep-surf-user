import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Stack,
  LinearProgress,
} from "@mui/material";
import { useTranslation } from "react-i18next";
const TechnicalIndicator = ({ coinData }) => {
  const { t } = useTranslation();
  const levels = [
    {
      label: (t("AiTools.CommunitySentiment.support")),
      value: coinData?.communitySentiment?.support,
      color: "#3EDD87",
    },
    {
      label: (t("AiTools.CommunitySentiment.resistance")),
      value: coinData?.communitySentiment?.resistance,
      color: "#FF6C82",
    },
  ];
  const technicalIndicators = [
    { label: "RSI", value: coinData?.technicalIndicators?.rsi },
    { label: "MACD", value: coinData?.technicalIndicators?.macd },
    { label: "StochRSI", value: coinData?.technicalIndicators?.stochRsi },
    { label: "BB Position", value: coinData?.technicalIndicators?.bbPosition },
    { label: "Trend", value: coinData?.technicalIndicators?.trend },
    { label: "Volume", value: coinData?.technicalIndicators?.volume },
  ];
  const longDataStr = coinData?.communitySentiment?.longPercent || "0%";
  const longdataValue = Number(longDataStr.replace("%", ""));
  const shortDataStr = coinData?.communitySentiment?.shortPercent || "0%";
  const strDataValue = Number(shortDataStr.replace("%", ""));
  return (
    <>
      <Typography variant="h5" marginTop={"10px"} fontSize={"18px"}>
        {t("AiTools.IndicatorAnalysis.technicalIndicators")}
      </Typography>
      <Box sx={{ borderRadius: 1, }}>
        <Grid container spacing={1}>
          {technicalIndicators.map((item, index) => (
            <Grid key={index} item xs="auto" size={{ xs: 6, sm: 12, md: 1.4 }}>
              <Paper
                elevation={0}
                sx={{
                  py: 2,
                  px: 1,
                  // minWidth: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#00000000",
                  color: "#94969A",
                  borderRadius: 2,
                  border: "0.5px solid #94969A",
                  marginTop: "10px",
                  fontSize: "15px"
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
                  {item.label}:
                </Typography>
                <Typography variant="body2">
                  {item.value || "No Data Found"}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box marginTop={"25px"}>
        <Typography variant="h4" fontSize={"18px"} >
          {t("AiTools.CommunitySentiment.communitySentimentHeading")}
        </Typography >
      </Box>
      <Box
        position="relative"
        width="100%"
        height="50px"
        borderRadius="30px"
        // bgcolor="#f0f0f0"
        display="flex"
        overflow="hidden"
        mt={2}
      >
        {/* First box: longdataValue */}
        <Box
          width={`${longdataValue}%`}
          height="100%"
          bgcolor="#0B2015"
          borderRadius="30px 0px 0px 30px" // Left corners rounded
          transition="width 0.3s ease"
        />

        {/* Second box: strDataValue */}
        <Box
          width={`${strDataValue}%`}
          height="100%"
          bgcolor="#8B0000"
          borderRadius={`5px 50px 50px 5px`} 
          transition="width 0.3s ease"
        />

        {/* First progress text */}
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: `${longdataValue / 2}%`,
            transform: "translate(-50%, -50%)",
            fontSize: "11px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          {longdataValue}%
        </Typography>

        {/* Second progress text */}
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: `${longdataValue + strDataValue / 2}%`,
            transform: "translate(-50%, -50%)",
            fontSize: "11px",
            fontWeight: "bold",
            color: "#FF6666",
          }}
        >
          {strDataValue}%
        </Typography>
      </Box>


      <Box sx={{ p: { xs: 0, md: 2 }, borderRadius: 2, marginTop: 2 }}>
        <Grid container spacing={2}>
          {levels.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1C1C1C",
                  borderRadius: 4,
                  p: 2,
                }}
              >
                <Typography variant="h6" fontSize={"15px"}>
                  {item.label}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: item.color,
                    fontSize: "15px",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*  */}
    </>
  );
};
export default TechnicalIndicator;
