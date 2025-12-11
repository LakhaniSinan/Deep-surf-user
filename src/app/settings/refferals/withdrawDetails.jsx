import React, { forwardRef, useImperativeHandle, useMemo, useState } from "react";
import {
    Box,
    Chip,
    Stack,
    Typography,
    Divider,
    IconButton,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import CloseIcon from "@mui/icons-material/Close";

import DialogContainer from "../../../components/dialog/dialogContainer";

const defaultDetails = {
    status: "Completed",
    walletMethod: "Bank Account • ****4321",
    accountHolder: "Sarah Johnson",
    bankName: "Chase Bank",
    timeline: [
        {
            label: "Submitted",
            date: "Dec 5, 2024 at 7:32 PM",
            color: "#f6a623",
            icon: CheckCircleRoundedIcon,
        },
        {
            label: "In Process",
            date: "Dec 6, 2024 at 8:00 P",
            color: "#f6c343",
            icon: ScheduleRoundedIcon,
        },
        {
            label: "Completed",
            date: "Dec 6, 2024 at 8:00 P",
            color: "#2ecc71",
            icon: CheckCircleRoundedIcon,
        },
    ],
};

const UserWithdraw = forwardRef(({ props }, ref) => {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(defaultDetails);

    useImperativeHandle(ref, () => ({
        openDialog(params) {
            setOpen(true);
            if (params?.data) {
                setDetails({ ...defaultDetails, ...params.data });
            }
        },
        closeDialog() {
            handleClose();
        },
    }));

    const handleClose = () => setOpen(false);

    const statusColor = useMemo(() => {
        const completedColor = "#2ecc71";
        const inProcessColor = "#f6c343";
        const submittedColor = "#f6a623";

        if (details.status?.toLowerCase() === "completed") return completedColor;
        if (details.status?.toLowerCase() === "in process") return inProcessColor;
        return submittedColor;
    }, [details.status]);

    return (
        <DialogContainer
            onClose={handleClose}
            open={open}
          
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
                sx={{ px: 1, p : 1 }}
            >
                <Stack direction="row" spacing={1.25} alignItems="center">
                    <Typography variant="h6" fontSize="26px" fontWeight={700}>
                        Withdrawal Details
                    </Typography>
                    <Chip
                        label={details.status || "Completed"}
                        size="small"
                        sx={{
                            height: 22,
                            fontSize: "12px",
                            fontWeight: 600,
                            bgcolor: `${statusColor}1a`,
                            color: statusColor,
                            borderRadius: "10px",
                            px: 1,
                        }}
                    />
                </Stack>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        borderRadius: 2,
                        backgroundColor: "#ff7a1a",
                        boxShadow: "0 10px 24px rgba(255,122,26,0.35)",
                        "&:hover": { backgroundColor: "#ff7a1a" },
                    }}
                >
                    <CloseIcon sx={{ color: "#0f0f10" }} />
                </IconButton>
            </Stack>

            <Box
               sx={{
                p : 2
               }}
            >
                <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    sx={{ mb: 1.5, color: "#e9eaec" }}
                    fontSize={"20px"}
                >
                    Wallet Method
                </Typography>

                <Box
                    sx={{
                        backgroundColor: "#0c0c0d",
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        p: 2,
                    }}
                >
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="space-between"
                    >
                        <Stack spacing={0.5} flex={1}>
                            <Typography variant="caption" sx={{ color: "#8c8d93" }}>
                                Account Type
                            </Typography>
                            <Typography variant="body1" fontWeight={400}>
                                {details.walletMethod}
                            </Typography>
                        </Stack>

                        <Stack spacing={0.5} flex={1}>
                            <Typography variant="caption" fontWeight={400} sx={{ color: "#8c8d93" }}>
                                Account Holder
                            </Typography>
                            <Typography variant="body1" fontWeight={400}>
                                {details.accountHolder}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Divider
                        sx={{
                            my: 1,
                        }}
                    />

                    <Stack spacing={0.5}>
                        <Typography variant="caption" sx={{ color: "#8c8d93" }}>
                            Bank Name
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                            {details.bankName}
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            <Box
                sx={{
                    mt: 1,
                    borderRadius: "18px",
                    p: 4,
                }}
            >
                <Typography
                    variant="subtitle2"
                    fontWeight={500}
                    sx={{ mb: 1.5, color: "#e9eaec" , fontSize: "20px" }}
                >
                    Status Timeline
                </Typography>

                <Stack spacing={1.5}>
                    {details.timeline?.map((item, idx) => {
                        const Icon = item.icon || PendingRoundedIcon;
                        return (
                            <Stack
                                key={`${item.label}-${idx}`}
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                            >
                                <Box
                                    sx={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: "50%",
                                        backgroundColor: `${item.color || "#f6a623"}1a`,
                                        border: `1px solid ${item.color || "#f6a623"}`,
                                        display: "grid",
                                        placeItems: "center",
                                        boxShadow: `0 0 0 4px rgba(255,255,255,0.02)`,
                                    }}
                                >
                                    <Icon
                                        sx={{
                                            color: item.color || "#f6a623",
                                            fontSize: 20,
                                        }}
                                    />
                                </Box>

                                <Stack spacing={0.25}>
                                    <Typography
                                        variant="body1"
                                        fontWeight={700}
                                        sx={{ color: "#e9eaec" }}
                                    >
                                        {item.label}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{ color: "#9b9da3", letterSpacing: 0.1 }}
                                    >
                                        {item.date}
                                    </Typography>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Box>

            <Stack
                direction="row"
                justifyContent="flex-end"
                sx={{ mt: 2.5, mb: 0.5, px: 0.5 }}
            >
                <Box
                    component="button"
                    onClick={handleClose}
                    style={{
                        background: "#050505",
                        color: "#f5f6f7",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 14,
                        padding: "10px 28px",
                        cursor: "pointer",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
                        fontWeight: 600,
                        fontSize: "13px",
                    }}
                >
                    Cancel
                </Box>
            </Stack>
        </DialogContainer>
    );
});

export default UserWithdraw;

