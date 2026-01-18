import { Box, TablePagination, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotificationCard = ({
    notifications,
    pagination,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
}) => {
    const { t } = useTranslation();

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1); // 🔥 MUI 0-based hota hai
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    return (
        <Box backgroundColor="neutral.darkGrey" p={2.5} mt="15px" borderRadius="10px">
            <Typography variant="h4" color="neutral.white" fontSize="25px" mb={1}>
                {t("UserNotification.notificationTitle")}
            </Typography>

            {notifications.map((item, index) => (
                <Box
                    key={index}
                    backgroundColor="neutral.richblack"
                    p={2}
                    borderRadius="15px"
                    mt={2}
                >
                    <Typography color="neutral.white" fontSize="16px" fontWeight={600}>
                        {item.title}
                    </Typography>
                    <Typography color="neutral.grey" fontSize="13px" fontWeight={550}>
                        {item.message}
                    </Typography>
                </Box>
            ))}

            <TablePagination
                component="div"
                count={pagination?.total || 0}
                page={page - 1}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 20, 50]}
                sx={{
                    mt: 2,
                    "& .MuiTablePagination-toolbar": {
                        display: "flex",
                        gap: "10px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontFamily: "Inter Tight",
                        color: "white",
                    },
                    "& .MuiTablePagination-selectLabel": {
                        color: "#ccc",
                        fontFamily: "Inter Tight",
                        marginRight: "8px",
                    },
                    "& .MuiTablePagination-select": {
                        color: "white",
                        border: "1px solid rgba(218, 218, 218, 1)",
                        borderRadius: "5px",
                        padding: "2px",
                        backgroundColor: "#000",
                        fontFamily: "Inter Tight",
                    },
                    "& .MuiTablePagination-displayedRows": {
                        color: "#ccc",
                        fontFamily: "Inter Tight",
                        marginLeft: "8px",
                    },
                    "& .MuiTablePagination-actions button": {
                        color: "white",
                        marginLeft: "5px",
                        marginRight: "5px",
                        fontFamily: "Inter Tight",
                    },
                }}
            />
        </Box>
    );
};

export default NotificationCard;
