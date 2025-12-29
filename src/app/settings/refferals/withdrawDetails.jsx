import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import {
    Box,
    Chip,
    Stack,
    Typography,
    Divider,
    IconButton,
} from "@mui/material";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import CloseIcon from "@mui/icons-material/Close";
import DialogContainer from "../../../components/dialog/dialogContainer";
import { withdrawDetails } from "../../../services/modules/refferal";
import TimeLine from "../../../assets/icons/time-line.svg";
import CompleteBtn from "../../../assets/icons/success-icon.png";
import { useTranslation } from "react-i18next";
const defaultDetails = {
    status: "Completed",
    walletMethod: "Bank Account • ****4321",
    accountHolder: "Sarah Johnson",
    bankName: "Chase Bank",
};

const UserWithdraw = forwardRef(({ props }, ref) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(defaultDetails);
    const [isLoading, setIsloading] = useState(false);
    const [withdrawDetail, setWithdrawDetail] = useState(null);
    console.log("withfffffffffffffffff", withdrawDetail?.walletAddress);


    const handleClose = () => setOpen(false);

    const fetchWithdrawRequest = async (id) => {
        if (!id) return;
        try {
            setIsloading(true);
            const response = await withdrawDetails(id);
            setWithdrawDetail(response?.data?.data);
        } catch (error) {
            console.log("Failed to fetch withdraw details API", error);
        } finally {
            setIsloading(false);
        }
    };

    useImperativeHandle(ref, () => ({
        openDialog(params) {
            setOpen(true);
            const id = params?.data?.id || params?.id;
            if (id) fetchWithdrawRequest(id);
            if (params?.data) {
                setDetails({ ...defaultDetails, ...params.data });
            }
        },
        closeDialog() {
            handleClose();
        },
    }));

    const statusColor = useMemo(() => {
        if (details.status?.toLowerCase() === "completed") return "#2ecc71";
        if (details.status?.toLowerCase() === "in process") return "#f6c343";
        return "#f6a623";
    }, [details.status]);

    return (
        <DialogContainer onClose={handleClose} open={open}>
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" p={1}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                    <Typography fontSize="26px" fontWeight={700}>
                        {t("WithdrawalDetails.withdrawalDetails")}
                    </Typography>
                    <Chip
                        label={withdrawDetail?.status || "Completed"}
                        size="small"
                        sx={{
                            height: 22,
                            fontSize: 12,
                            fontWeight: 600,
                            bgcolor: `${statusColor}1a`,
                            color: statusColor,
                            borderRadius: "10px",
                        }}
                    />
                </Stack>

                <IconButton
                    onClick={handleClose}
                    sx={{
                        borderRadius: 2,
                        backgroundColor: "#ff7a1a",
                        boxShadow: "0 0px 0px rgba(255, 100, 33, 1)",
                        "&:hover": { backgroundColor: "rgba(255, 100, 33, 1)" },
                    }}
                >
                    <CloseIcon sx={{ color: "rgba(255, 255, 255, 1)" }} />
                </IconButton>
            </Stack>

            {/* Wallet Method */}
            <Box p={2}>
                <Typography fontSize="20px" fontWeight={400} mb={1.5}>
                    {t("WithdrawalDetails.walletMethod")}
                </Typography>

                <Box sx={{ backgroundColor: "neutral.black", borderRadius: 3, p: 2 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack flex={1}>
                            <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                {t("WithdrawalDetails.walletAddress")}
                            </Typography>
                            <Typography color="rgba(255, 255, 255, 1)">
                                {withdrawDetail?.walletAddress}{" "}
                                {/* {withdrawDetail?.walletMethod?.walletAddress} */}
                            </Typography>
                        </Stack>

                        <Stack flex={1}>
                            <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                {t("WithdrawalDetails.walletHolder")}
                            </Typography>
                            <Typography color="rgba(255, 255, 255, 1)">{withdrawDetail?.walletHolder}</Typography>
                        </Stack>
                    </Stack>



                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack flex={1}>
                            <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                {t("WithdrawalDetails.Network")}
                            </Typography>
                            <Typography color="rgba(255, 255, 255, 1)">
                                {details.network}{" "}
                                {/* {withdrawDetail?.walletMethod?.walletAddress} */}
                            </Typography>
                        </Stack>

                        <Stack flex={1}>
                            <Typography variant="caption" color="rgba(255, 255, 255, 0.6)">
                                {t("setting.currency")}
                            </Typography>
                            <Typography sx={{ fontWeight: 400, color: "rgba(255, 255, 255, 1)" }}>{details.currency}</Typography>
                        </Stack>
                    </Stack>

                    {/* <Divider sx={{ my: 1 }} /> */}

                </Box>
            </Box>

            {/* STATUS TIMELINE */}
            <Box p={2}>
                <Typography fontSize="20px" fontWeight={600} mb={1.5}>
                    {t("WithdrawalDetails.statusTimeline")}
                </Typography>

                <Stack spacing={2}>
                    {withdrawDetail?.statusTimeline?.map((item, idx) => {
                        let StatusIcon = PendingRoundedIcon;

                        if (item.status?.toLowerCase() === "completed") {
                            StatusIcon = CompleteBtn;
                        } else {
                            StatusIcon = TimeLine;
                        }

                        return (
                            <Stack
                                key={`${item.status}-${idx}`}
                                direction="row"
                                spacing={1.5}
                                alignItems="flex-start"
                            >
                                <Box
                                    sx={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: "50%",
                                        backgroundColor: `${"#f6a623"}1a`,
                                        display: "grid",
                                        placeItems: "center",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={StatusIcon}
                                        alt={item.status}
                                        sx={{ width: 25, height: 25 }}
                                    />
                                    {idx !== withdrawDetail.statusTimeline.length - 1 && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "100%",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                height: 28,
                                                borderLeft: "1px dotted",
                                                borderColor: item.color || "#fff",
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* TEXT */}
                                <Stack spacing={0.3}>
                                    <Typography color="rgba(255, 255, 255, 1)">{item.status}</Typography>
                                    <Typography variant="caption" fontWeight={300} color="rgba(255, 255, 255, 0.6)">{item.date}</Typography>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Box>

            {/* Footer */}
            <Stack direction="row" justifyContent="flex-end" px={1} pb={1}>
                <Box
                    component="button"
                    onClick={handleClose}
                    style={{
                        background: "#050505",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 14,
                        padding: "10px 28px",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    {t("WithdrawalDetails.cancel")}
                </Box>
            </Stack>
        </DialogContainer>
    );
});

export default UserWithdraw;
