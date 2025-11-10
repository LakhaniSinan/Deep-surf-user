import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { styles } from "./style";
import CustomInput from "../../components/customInput";

const EditJournal = () => {
  return (
    <Box sx={styles.pageRoot}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h1" color={theme.palette.text.primary}>
            Journal
          </Typography>
        </Box>

        <Box sx={styles.sectionContainer}>

          <Box>
            <Typography variant="h5" color={theme.palette.text.primary}>
              My Coins & Alerts
            </Typography>
            <Typography variant="body2" color={theme.palette.text.secondary}>
              Alerts work in real-time via WebSocket! Get instant notifications when conditions are met.
            </Typography>
          </Box>


          <Box sx={styles.formCard}>
            <Box sx={styles.formInner}>
              <Box sx={styles.formHeader}>
                <Typography variant="h5" color={theme.palette.text.primary}>
                Edit alert
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
          {/* Alerts List (example card) */}
          <Box sx={styles.alertListWrapper}>
            <Box sx={styles.alertCard}>
              <Box>
                <Typography variant="h6" sx={styles.alertTitle}>
                  BTC/USDT
                </Typography>
                <Typography variant="body2" sx={styles.alertSubtitle}>
                  Price crossed{' '}
                  <Box component="span" sx={styles.alertBoldValue}>
                    120000
                  </Box>
                </Typography>
                <Typography variant="body3" sx={styles.alertTimestamp}>
                  Added: 10/15, 12:42 PM
                </Typography>
              </Box>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={styles.editButton}
                >
                  Edit
                </Button>
                <Button
                  sx={styles.deleteButton}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EditJournal;
