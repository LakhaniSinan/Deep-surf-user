import { Box, Typography } from "@mui/material";
import { Grid, Stack } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
import Check from "../../assets/icons/Vector (6).svg";
import CancelIcon from "../../assets/icons/Vector (7).svg";
import Warning from "../../assets/icons/warning.svg";
import fire from "../../assets/icons/Vector (8).svg";


const IndicatorAnalysis = () => {
  return (
    <>
      <Box mt={5}>
        <Typography variant="h3">Indicator Analysis </Typography>
      </Box>
      <Box mt={2} sx={{ backgroundColor: "#1C1C1C", borderRadius: 4, p: 2 }}>
        <Grid container spacing={2} mt={1}>
          <Grid item size={{ xs: 12, sm: 3 , lg : 2 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Check}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>MACD Bullish</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 3 , lg : 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>Strong upward structure (HH+HL)</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 , lg : 6}}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Warning}></img>
              <Typography  variant="body1" sx={{fontSize : "15px" , color : "#fff"}}>
                Close liquidation zone LONG (-2.0%) - price magnet
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12, sm: 3 , lg : 2 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>RSI Overbought</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 3 , lg : 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={Check}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>Supertrend: Bullish trend</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 , lg : 6}}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Warning}></img>
              <Typography  variant="body1" sx={{fontSize : "15px" , color : "#fff"}}>
                Close liquidation zone SHORT (+2.0%) - price magnet{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12,sm: 6 , lg : 2}}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={Check}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>MACD Bullish</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 , lg : 4}}>
            <Box display={"flex"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography  variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>Strong resistance nearby</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={3}>
          <Grid item size={{ xs: 12, sm: 6 , lg : 2 }}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <img src={CancelIcon}></img>
              <Typography variant="h6" sx={{fontSize : "15px" , color : "#fff"}}>Price at upper BB</Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 , lg : 4 }}>
            <Box display={"flex"} gap={1}>
              <img src={fire}></img>
              <Typography variant="h6">Strong resistance nearby</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default IndicatorAnalysis;
