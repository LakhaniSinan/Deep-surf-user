import { Box, Container, Typography } from "@mui/material"
import Header from "../../components/header"
import ReLoadIcon from "../../assets/icons/relaod-Icon.svg";
import NotificationCard from "./notification";
import { useTranslation } from "react-i18next";

const Notification = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Header />
            <Container
                maxWidth="lg"
                sx={{
                    borderRadius: "20px",
                    padding: "25px",
                    mt: "20px",
                    paddingTop: "30px",
                    color: "white",
                }}
            >
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4" fontSize="30px" fontWeight={600}>
                        {t("UserNotification.notificationTitle")}
                    </Typography>

                    <img
                        src={ReLoadIcon}
                        width="30"
                        height="20"
                        alt="Reload"
                        style={{ cursor: "pointer" }}
                    />
                </Box>
                <NotificationCard />
            </Container>
        </Box>

    )
}
export default Notification