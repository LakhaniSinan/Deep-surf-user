import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";

import { styles } from "./style";
import CustomInput from "../../components/customInput";
import CustomButton from '../../components/customButton/index'

const Journal = () => {
  return (
    <Box sx={styles.pageRoot}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h1" color={theme.palette.text.primary} fontSize={"35px"}>
            Journal
          </Typography>
        </Box>

        <Box sx={styles.sectionContainer}>

          <Box>
            <Typography variant="h5" color={"neutral.Snowwhite"}>
              My Coins & Alerts
            </Typography>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Alerts work in real-time via WebSocket! Get instant notifications when conditions are met.
            </Typography>
          </Box>


          <Box sx={styles.formCard}>
            <Box sx={styles.formInner}>
              <Box sx={styles.formHeader}>
                <Typography variant="h5" color={"neutral.Snowwhite"}>
                  Add to Journal
                </Typography>
              </Box>

              <Stack direction="row" spacing={2} mt={5}>
                <CustomInput border={theme.palette.background.default} placeholder={'Ticker (e.g., BTC)'} />
                <CustomInput placeholder={'Price'} />

              </Stack>

              <Stack direction="row" spacing={2} mt={2}>
                <CustomInput placeholder={'Crossed'} />
                <CustomInput placeholder={'Value'} />

              </Stack>

              <Button sx={styles.saveButton}>
                Save Alert
              </Button>



            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Journal;
