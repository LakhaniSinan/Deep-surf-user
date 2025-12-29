import { Box, TablePagination, Typography } from "@mui/material"
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NotificationCard = () => {
    const { t } = useTranslation();
    const data = [
        {
            title: t("UserNotification.notificationHours"),
            email: t("UserNotification.userEmail"),
            userName: t("UserNotification.userName"),
        },
        {
            title: t("UserNotification.notificationHours"),
            email: t("UserNotification.userEmail"),
            userName: t("UserNotification.userName"),
        },
        {
            title: t("UserNotification.notificationHours"),
            email: t("UserNotification.userEmail"),
            userName: t("UserNotification.userName"),
        },
        {
            title: t("UserNotification.notificationHours"),
            email: t("UserNotification.userEmail"),
            userName: "Diana Smith"
        }
    ]

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
            <Box backgroundColor="neutral.darkGrey" p={2.5} mt="15px" borderRadius="10px">
                <Typography variant="h4" color="neutral.white" fontSize="25px" mb={1}>
                    {t("UserNotification.notificationTitle")}
                </Typography>
                {
                    data.map((item, index) => (
                        <Box key={index}>
                            <Box backgroundColor="neutral.richblack" p={2} borderRadius="15px" mt={2}>
                                <Typography color="neutral.white" fontSize="16px" fontWeight={600}>
                                    {item.title}
                                </Typography>
                                <Typography color="neutral.grey" fontSize="13px" fontWeight={550}>
                                    {item.email}
                                </Typography>
                                <Typography>
                                    {item.userName}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
                < TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </>

    )
}
export default NotificationCard