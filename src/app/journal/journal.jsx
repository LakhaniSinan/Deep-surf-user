import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button
} from "@mui/material";
import CustomButton from "../../components/customButton";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import EditIcon from "../../assets/icons/edit.svg";
import DeleteIcon from "../../assets/icons/delete-icon.svg";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { deleteJournalAlertById, journalAlert } from "../../services/modules/journal";
import { toast } from "react-toastify";
import CoinAlertSkeleton from "../../components/skeleton/journal/coinAlertSkeleton";
import { useTranslation } from "react-i18next";

const CoinAlert = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [isLoading, setIsLoading] = useState(false);
    const [createAlert, setCreateAlert] = useState([]);

    // delete dialog states
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    /* =============================
       GET ALERTS
    ============================== */
    const getCreateAlert = async () => {
        try {
            setIsLoading(true);
            const response = await journalAlert();
            const data = response?.data?.data || [];
            setCreateAlert(data);
        } catch (error) {
            toast.error(error?.response?.data?.error || "Failed to load alerts");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCreateAlert();
    }, []);
    
    const confirmDelete = async () => {
        try {
            setDeleteLoading(true);
            const response = await deleteJournalAlertById(selectedId);
            toast.success(response?.data?.message || "Deleted successfully");
            await getCreateAlert();
        } catch (error) {
            toast.error(error?.response?.data?.message || "Delete failed");
        } finally {
            setDeleteLoading(false);
            setOpenDelete(false);
            setSelectedId(null);
        }
    };
    return (
        <>
            <Header />

            <Container>
                <Box sx={{ color: "#fff", p: 3 }}>
                    <Typography variant="h2" fontWeight={600} mb={3}>
                        {t("journal.heading")}

                    </Typography>

                    <Paper elevation={0} sx={{ bgcolor: "#141414", borderRadius: "14px", p: 3 }}>
                        <Box mb={3}>
                            <Typography fontWeight={600} color="neutral.Snowwhite">
                                {t("journal.myCoinsAlerts")}
                            </Typography>

                            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
                                <Typography fontSize="13px" color="rgba(103, 107, 119, 1)">
                                    {t("journal.alertsRealtime")}
                                </Typography>

                                <CustomButton
                                    icon={<img src={PlusIcon} />}
                                    title="Add New"
                                    onClick={() => navigate("/save-alert")}
                                    sx={{
                                        bgcolor: "rgba(22, 22, 22, 1)",
                                        color: "rgba(123, 123, 123, 1)"
                                    }}
                                />
                            </Box>
                        </Box>

                        <Grid container spacing={2}>
                            {isLoading ? (
                                <CoinAlertSkeleton />
                            ) : (
                                createAlert.map((item, index) => (
                                    <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                        <Paper
                                            elevation={0}
                                            sx={{ bgcolor: "#1C1C1C", borderRadius: "12px", p: 2 }}
                                        >
                                            <Box display="flex" justifyContent="space-between" mb={1}>
                                                <Typography fontWeight={600} color="neutral.Snowwhite">
                                                    {item.ticker}
                                                </Typography>

                                                <Box display="flex" alignItems="center" gap="10px">
                                                    <img
                                                        src={EditIcon}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => navigate(`/edit/${item.id}`)}
                                                    />

                                                    <img
                                                        src={DeleteIcon}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => {
                                                            setSelectedId(item.id);
                                                            setOpenDelete(true);
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                            <Typography fontSize="13px" fontWeight={600} color="neutral.Snowwhite">
                                                {t("journal.price")} {item.priceRelation} {item.targetPrice}
                                            </Typography>

                                            <Typography
                                                fontSize="13px"
                                                color="rgba(94, 98, 103, 1)"
                                                mt={4}
                                                fontWeight={700}
                                            >
                                                {item.createdAt}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Paper>
                </Box>
            </Container>
            <Dialog
                sx={{
                    "& .MuiDialog-paper": {
                        borderRadius: "15px",
                        padding: "10px"
                    }
                }}
                open={openDelete}
                onClose={() => !deleteLoading && setOpenDelete(false)}
            >
                <DialogTitle>Delete Alert</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this alert?
                    </DialogContentText>
                </DialogContent>

                <DialogActions sx={{ gap: 1, px: 2, pb: 2 }}>
                    <CustomButton
                        title="Cancel"
                        onClick={() => setOpenDelete(false)}
                        // disabled={deleteLoading}
                        sx={{
                            backgroundColor: "neutral.charcoalGrey",
                            minWidth: "100px"
                        }}
                    />

                    <CustomButton
                        title={deleteLoading ? "Deleting..." : "Delete"}
                        onClick={confirmDelete}
                        // disabled={deleteLoading}
                        loader={isLoading}
                        sx={{
                            backgroundColor: "accent.main",
                            minWidth: "100px",
                            opacity: deleteLoading ? 0.7 : 1
                        }}
                    />
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CoinAlert;