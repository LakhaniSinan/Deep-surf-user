import { Box, Container, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { styles } from "./style";
import SettingTabs from "../../components/settingTabs";
import PersonalInformation from "./profileInformation";
import Notifications from "./notification";
import Subscription from "./subscription";
import Referrals from "./refferals";
import WebSettings from "./webSetting";
import { Navigate, Route, Routes } from "react-router-dom";
import Fqa from "./faq";
import { useAuthStore } from "../../store";
import { useTranslation } from "react-i18next";
const Setting = () => {
  const { user } = useAuthStore();
  const username = user?.username || user?.name
  const { t } = useTranslation();
  return (
    <Box sx={styles.pageRoot}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h1" fontSize={"30px"} color={theme.palette.text.primary} fontFamily={"Inter Tight"}>
           {t("Setting.settingTitle")}, {""} <span fontFamily="Inter Tight"
              color={theme.palette.text.primary}>
              {username}
            </span>
          </Typography>
        </Box>

        <SettingTabs>
          <Routes>
            <Route
              index
              element={<Navigate to="profile-information" replace />}
            />
            <Route
              path="profile-information"
              element={<PersonalInformation />}
            />
            <Route path="notifications" element={<Notifications />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="faq" element={<Fqa />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="website-settings" element={<WebSettings />} />
            <Route
              path="*"
              element={<Navigate to="profile-information" replace />}
            />
            {/* <Route path="faq" element={<Fqa />} /> */}
          </Routes>
        </SettingTabs>
      </Container>
    </Box>
  );
};

export default Setting;
