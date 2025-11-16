import { Box, Grid, Typography } from "@mui/material";
import IconImage from "../../assets/icons/Vector (5).svg";

const IctLiquid = () => {
  return (
    <>
      <Typography variant="h4">ICT Liquidity Levels</Typography>
      <Box backgroundColor="#1C1C1C" padding={2} borderRadius={8} mt={2}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box display={"flex"} gap={1}>
              <img src={IconImage} alt="icon" />
              <Typography color="text.greenColor" variant="body1">
                Sell-Side Liquidity: $3 818,81
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box display={"flex"} gap={1}>
              <img src={IconImage} alt="icon" />
              <Typography color="text.greenColor" variant="body1">
                Sell-Side Liquidity: $3 818,81
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box display={"flex"} gap={1} mt={2}>
          <img src={IconImage} alt="icon" />
          <Typography color="text.greenColor" variant="body1">
            Sell-Side Liquidity: $3 818,81
          </Typography>
        </Box>
        <Box display={"flex"} gap={1} mt={2}>
          <img src={IconImage} alt="icon" />
          <Typography color="text.greenColor" variant="body1">
            Sell-Side Liquidity: $3 818,81
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default IctLiquid;
