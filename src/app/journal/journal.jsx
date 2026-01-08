import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    Container,
    Skeleton
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

const CoinAlert = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [createAlert, setCreateAlert] = useState([]);
    // console.log("feufefefdddddddddddddddddddddddddddddddddddddddddefefef", createAlert[0].id);



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
    const handleDelete = async (id) => {
        try {
            const response = await deleteJournalAlertById(id);
            toast.success(response?.data?.message);
            // setCreateAlert((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            toast.error(error?.response?.message || "Delete failed");
        }
    };


    return (
        <>
            <Header />
            <Container>
                <Box sx={{ color: "#fff", p: 3 }}>
                    {/* Title */}
                    <Typography variant="h2" fontWeight={600} mb={3}>
                        Journal
                    </Typography>

                    {/* Main Card */}
                    <Paper elevation={0} sx={{ bgcolor: "#141414", borderRadius: "14px", p: 3 }}>
                        {/* Header */}
                        <Box mb={3}>
                            <Typography fontWeight={600} color="neutral.Snowwhite">
                                My Coins & Alerts
                            </Typography>

                            <Box display="flex" alignItems="center" justifyContent="space-between" gap={1}>
                                <Typography fontSize="13px" color="rgba(103, 107, 119, 1)">
                                    Alerts operate in real-time via WebSocket. Receive instant notifications when conditions are met.
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

                        {/* Alert Cards */}
                        <Grid container spacing={2}>
                            {isLoading
                                ? <CoinAlertSkeleton />
                                : createAlert.map((item, index) => (
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
                                                        onClick={() => handleDelete(item.id)}
                                                    />
                                                </Box>
                                            </Box>
                                            <Typography fontSize="13px" fontWeight={600} color="neutral.Snowwhite">
                                                Price {item.priceRelation} {item.targetPrice}
                                            </Typography>
                                            <Typography fontSize="13px" color="rgba(94, 98, 103, 1)" mt={4} fontWeight={700}>
                                                {item.createdAt}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </>
    );
};

export default CoinAlert;
