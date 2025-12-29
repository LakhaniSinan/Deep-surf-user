import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function DashboardStats({ coinData }) {
  const { t } = useTranslation();
  return (
    <>
      <Box mt={"10px"}
      >
        <Grid container spacing={6}>
          <Grid item size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="h5"
              fontSize={{ xs: 16, md: 23 }}
              fontWeight={600}
              color="#FFFFFF"
            >
              {t("AiTools.Confluence.confluenceScore")}
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, sm: 6 }}>
            <Typography
              variant="h5"
              fontSize={{ xs: 16, md: 23 }}
              fontWeight={600}
              color="#FFFFFF"
            >
              {t("AiTools.Confluence.Supertrend")}
            </Typography>
          </Grid>
        </Grid>
      </Box >
      <Box
        sx={{
          width: "100%",
          mt: 2,
          color: "#fff",
          // p: 3,
          borderRadius: "16px",
          backgroundColor: "#rgba(28, 28, 28, 1)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",

              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.coolGrey">
              {t("AiTools.Confluence.confluenceScoreHeading1")}
            </Typography>
            <Typography
              sx={{ color: "neutral.brightGreen", fontSize: "18px", fontWeight: 600 }}
            >
              {t("AiTools.Confluence.Bullish")}
            </Typography>
            <Typography
              sx={{
                color: "neutral.brightGreen",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {coinData?.confluenceScore?.bullish}
            </Typography>
          </Box>

          {/* Bearish Card */}
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.coolGrey">
              {t("AiTools.Confluence.ConfluenceScoreHeading2")}
            </Typography>
            <Typography
              sx={{ color: "text.SalmonRed", fontSize: "18px", fontWeight: 600 }}
            >
              {t("AiTools.Confluence.Bearish")}
            </Typography>
            <Typography
              sx={{
                color: "text.SalmonRed",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {coinData?.confluenceScore?.bullish}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="neutral.Snowwhite" fontWeight="500px">
              {t("AiTools.Supertrend.Trend")}
            </Typography>
            <Typography
              sx={{
                mt: 1,
                color: "text.greenColor",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              {coinData?.supertrend?.trend}
            </Typography>
          </Box>

          {/* Signal Level Card */}
          <Box
            sx={{
              flex: "1 1 150px",
              background: "#1C1C1C",
              p: 2,
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <Typography variant="caption" color="neutral.Snowwhite" fontSize={"15px"}>
              {t("AiTools.Supertrend.SignalLevel")}
            </Typography>
            <Typography
              sx={{ mt: 1, color: "accent.contrastText", fontSize: "22px", fontWeight: 600 }}
            >
              {coinData?.supertrend?.signalLevel}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DashboardStats;
