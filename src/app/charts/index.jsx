import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/header";
import AskAI from "./askAi";
import ChartsTrending from "./chartsTrending";


export const Charts = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography
            variant="h1"
            fontSize="24px"
            fontWeight={700}
            color="text.primary"
          >
            Charts
          </Typography>
        </Box>

        <Grid container spacing={2} mt={2} mb={2}>
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box>
              <AskAI />
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 8 }}>
            <Box>
              <ChartsTrending />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Charts;
