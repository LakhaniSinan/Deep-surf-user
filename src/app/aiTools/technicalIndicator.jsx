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
      <Box display="flex" mt="30px" >
        <Box
          position="relative"
          width="100%"
          // border="2px solid #0B2015"
          borderRadius="30px"
          bodrer="none"
        >
          <LinearProgress
            variant="determinate"
            value={longdataValue}
            sx={{
              height: 50,
              borderRadius: "30px",
              backgroundColor: "transparent",
              "& .MuiLinearProgress-bar": {
                bgcolor: "#0B2015",
                borderRadius: "30px",
              },

              "& .MuiLinearProgress-root": {
                display: "block",
              },
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: `${longdataValue}%`,
              transform: "translate(-50%, -50%)",
              fontSize: "11px",
              fontWeight: "bold",
              color: "text.greenColor",
              transition: "left 0.3s ease",
            }}
          >
            {longdataValue}%
          </Typography>
        </Box>
        <Box
          position="relative"
          width="100%"
        // border="2px solid #391417"
        // borderRadius="30px"
        >
          <LinearProgress
            variant="determinate"
            value={strDataValue}
            sx={{
              height: 50,
              borderRadius: "30px",
              backgroundColor: "transparent",
              "& .MuiLinearProgress-bar": {
                bgcolor: "text.DarkMaroon",
                borderRadius: "30px",
              },
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: `${strDataValue}%`, // 👉 Text follows progress
              transform: "translate(-50%, -50%)",
              fontSize: "11px",
              fontWeight: "bold",
              color: "#FF6666",
              transition: "left 0.3s ease",
            }}
          >
            {strDataValue}%
          </Typography>
        </Box>
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
