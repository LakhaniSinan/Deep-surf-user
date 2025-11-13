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

const Setting = () => {
  return (
    <Box sx={styles.pageRoot}>
      <Header />
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h1" color={theme.palette.text.primary}>
            Welcome back, James
          </Typography>
        </Box>

        <SettingTabs>
          <Routes>
            <Route index element={<Navigate to="profile-information" replace />} />
            <Route path="profile-information" element={<PersonalInformation />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="website-settings" element={<WebSettings />} />
            <Route path="*" element={<Navigate to="profile-information" replace />} />
          </Routes>
        </SettingTabs>
      </Container>
    </Box>
  );
};

export default Setting;
