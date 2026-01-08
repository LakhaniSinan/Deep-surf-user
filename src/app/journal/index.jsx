import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { useTranslation } from "react-i18next";
import { styles } from "./style";
import CustomInput from "../../components/customInput";
import CustomButton from '../../components/customButton/index'
import EditJournal from "./editjournal";
import ArrowBtn from "../../assets/icons/arrow-back-btn.svg"
import CoinAlert from "./journal";

const Journal = () => {
  const { t } = useTranslation();
  return (
    <>
     {/* <Box sx={styles.pageRoot}>
        <Header />
        <Container maxWidth="lg">
          <Box my={5}>
          <Typography variant="h1" color={theme.palette.text.primary} fontSize={"35px"}>
            {t("journal.heading")}
          </Typography>
        </Box>

          <Box sx={styles.sectionContainer}>
          <Box display={"flex"} alignItems={"center"} gap={"10px"} >
            <Typography variant="h5" color={"neutral.Snowwhite"}>
              {t("journal.myCoinsAlerts")}
            </Typography></Box>

          <Box mt={1}>

            <Typography variant="body2" color={theme.palette.text.secondary}>
              {t("journal.myCoinsAlertHeading")}
            </Typography>
          </Box>


          <Box sx={styles.formCard}>
            <Box sx={styles.formInner}>
              <Box sx={styles.formHeader}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"} mt={2} >
                  <Box bgcolor={"neutral.mutedGrey"} borderRadius={"50%"} p={0.5}><img src={ArrowBtn} width={"20px"} height={"20px"} /></Box>
                  <Box>
                    <Typography variant="h5" color={"neutral.Snowwhite"}>
                      {t("journal.addToJournal")}
                    </Typography>
                  </Box>

                </Box>
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
                {t("journal.saveAlert")}
              </Button>
            </Box>
          </Box>
          <EditJournal />
          </Box>/
        </Container>
     </Box> */}
        <CoinAlert />
    </>
  );
};

export default Journal;
