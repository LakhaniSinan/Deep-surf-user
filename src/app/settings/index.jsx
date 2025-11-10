import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import Header from "../../components/header";
import { styles } from "./style";
import SettingTabs from "../../components/settingTabs";
import ReferralCard from "../../components/referrals/index";
import PersonalInformation from "../../components/profileInformation";
import { useLocation } from "react-router-dom";
import Notifications from "../../components/notification";
import Referrals from "../../components/referrals/index";

const Setting = () => {
    const location = useLocation()
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

                <PersonalInformation/>
                {/* <Notifications/> */}
                {/* <Referrals /> */}


                {/* {location.pathname === "personal-information" && <PersonalInformation/>} */}

            </SettingTabs>
       
      </Container>
    </Box>
  );
};

export default Setting;
