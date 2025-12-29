import { Box, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Check from "../../assets/icons/checkBtn.svg";
import CancelIcon from "../../assets/icons/cancelBtn.svg";
import Warning from "../../assets/icons/warningIcon.svg";
import fire from "../../assets/icons/fireIcon.svg";
import { useTranslation } from "react-i18next";
const IndicatorAnalysis = ({ coinData }) => {
  const { t } = useTranslation();
  return (
    <>
      <Box mt={5}>
        <Typography variant="h3" fontSize={"25px"}>
           {t("AiTools.Indicator.indicatorTitle")}{" "}
        </Typography>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "background.jetBlack", borderRadius: 4, p: 2 }}>
        <Grid container spacing={2} mt={1}>
          <Grid item size={{ xs: 12, sm: 3, lg: 3 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              {coinData?.indicatorAnalysis[0].icon ? (
                <img src={Check}></img>
              ) : (
                <img src={CancelIcon}></img>
              )}

              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                {/* MACD Bullish */}
                {` MACD ${coinData?.indicatorAnalysis[0].signal}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 3, lg: 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={Check}></img>
              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                {`${coinData?.indicatorAnalysis[1].description}`}
                {`${coinData?.indicatorAnalysis[0].icon}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 5 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Warning}></img>
              <Typography
                variant="body1"
                sx={{ fontSize: "15px", color: "#fff" }}
              >
                Close liquidation zone LONG (-2.0%) - price magnet
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12, sm: 3, lg: 3 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                RSI Overbought
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 3, lg: 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={Check}></img>
              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                Supertrend: Bullish trend
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 5 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Warning}></img>
              <Typography
                variant="body1"
                sx={{ fontSize: "13px", color: "#fff" }}
              >
                Close liquidation zone SHORT (+2.0%) - price magnet{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Check}></img>
              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                MACD Bullish
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography variant="h6" sx={{ fontSize: "15px", color: "#fff" }}>
                Strong resistance nearby
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography variant="h6" sx={{ fontSize: "13px", color: "#fff" }}>
                Price at upper BB
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={fire}></img>
              <Typography variant="h6" fontSize={"13px"}>
                Strong resistance nearby
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default IndicatorAnalysis;
