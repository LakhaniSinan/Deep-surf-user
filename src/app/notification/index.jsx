import { Box, Container, Typography } from "@mui/material";
import Header from "../../components/header";
import ReLoadIcon from "../../assets/icons/relaod-Icon.svg";
import NotificationCard from "./notification";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import getUserNotification from "../../services/modules/NOTIFICATION.JS";
import NotificationSkeleton from "../../components/skeleton/notification/notification";
import FullPageLoader from "../../app/notification/notificationLoader";

const Notification = () => {
    const { t, i18n } = useTranslation();
    const language = i18n.language
    console.log("hruifgrifoirfburf", language);

    const [isLoading, setIsLoading] = useState(false);
    const [isFullPageLoading, setIsFullPageLoading] = useState(false);
    const [notification, setNotification] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const fetchNotifications = async (isReload = false) => {
        try {
            if (isReload) {
                setIsFullPageLoading(true);
            } else {
                setIsLoading(true);
            }
            const response = await getUserNotification({
                page,
                limit: rowsPerPage,
                language
            });
            const data = response?.data?.data;

            setNotification(data?.notifications || []);
            setPagination(data?.pagination);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            setIsFullPageLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, [page, rowsPerPage, language]);

    return (
        <Box>
            {/* 🔹 Full page loader */}
            {isFullPageLoading && <FullPageLoader />}

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
                        onClick={() => fetchNotifications(true)} // 🔹 reload click → full page loader
                    />
                </Box>

                {isLoading ? (
                    <NotificationSkeleton rows={rowsPerPage} /> // 🔹 pagination / initial load
                ) : (
                    <NotificationCard
                        notifications={notification}
                        pagination={pagination}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        setPage={setPage}
                        setRowsPerPage={setRowsPerPage}
                        isSkeleton={isLoading}
                    />
                )}
            </Container>
        </Box>
    );
};

export default Notification;
