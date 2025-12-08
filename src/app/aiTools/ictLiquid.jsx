import { Box, Grid, Typography } from "@mui/material";
import IconImage from "../../assets/icons/arrow-down-icon.svg";

const IctLiquid = ({ coinData }) => {
  return (
    <>
      <Box mt={2}>
        <Typography variant="h4" fontSize={"20px"}>
          ICT Liquidity Levels
        </Typography>
        <Box backgroundColor="#1C1C1C" padding={{xs : 2 , md : 2}} borderRadius={8} mt={2}>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box display={"flex"} gap={1}>
                {<img src={IconImage} alt="icon" />}
                <Typography
                  fontSize={"13px"}
                  color="text.greenColor"
                  variant="body1"
                >
                  {coinData?.ictLiquidityLevels?.[0]?.priceFormatted}
                  {/* {isPositive} */}
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box display={"flex"} gap={1}>
                <img src={IconImage} alt="icon" />
                <Typography
                  fontSize={"13px"}
                  color="text.greenColor"
                  variant="body1"
                >
                  {coinData?.ictLiquidityLevels?.[1]?.priceFormatted}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box display={"flex"} gap={1} mt={2}>
            <img src={IconImage} alt="icon" />
            <Typography
              fontSize={"13px"}
              color="text.greenColor"
              variant="body1"
            >
              {coinData?.ictLiquidityLevels?.[2]?.priceFormatted}
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} mt={2}>
            <img src={IconImage} alt="icon" />
            <Typography
              fontSize={"13px"}
              color="text.greenColor"
              variant="body1"
            >
              {coinData?.ictLiquidityLevels?.[3]?.priceFormatted}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default IctLiquid;
