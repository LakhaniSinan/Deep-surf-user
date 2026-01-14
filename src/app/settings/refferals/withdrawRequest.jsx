import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { MenuItem, Box, Typography, Button } from "@mui/material";
import CustomInput from "../../../components/customInput";
import CustomSelect from "../../../components/customSelect";
import DialogContainer from "../../../components/dialog/dialogContainer";
import DialogHeader from "../../../components/dialog/dialogHeader";
import DialogBody from "../../../components/dialog/dialogBody";
import DialogActionButtons from "../../../components/dialog/dialogAction";
import Label from "../../../components/label";
import Success from "../../../assets/icons/success.svg"
import { requestWithdrawal, withdrawOption } from "../../../services/modules/refferal";
import CustomButton from "../../../components/customButton";
import { useTranslation } from "react-i18next";
const WithdrawalRequest = forwardRef(({ props }, ref) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [withdrawalOptionData, setWithdrawalOptionData] = useState(null)
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        walletMethod: "",
        accountNumber: "",
        amount: "",
        currency: "",
    });
    useImperativeHandle(ref, () => ({
        openDialog() {
            setOpen(true);
            setFormData({
                walletMethod: "",
                accountNumber: "",
                amount: "",
                currency: "",
            });
        },
        closeDialog() {
            handleClose();
        },
    }));
    const handleClose = () => {
        if (isLoading) return;
        setOpen(false);
        setError({});
        setFormData({
            walletMethod: "",
            accountNumber: "",
            amount: "",
            currency: "",
        });
    };
    const setField = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        setError((prev) => ({ ...prev, [key]: "" }));
    };
    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            backgroundColor: "neutral.black",
            borderRadius: "12px",
            color: "#fff",
            border: "none",
        },
        "& .MuiInputBase-input": {
            padding: "12px 14px",
            fontSize: "13px",
            color: "neutral.Snowwhite",
        },
    };
    const handleWithdrawRequest = async () => {
        const newError = {};
        if (!formData.walletMethod) newError.walletMethod = "Required";
        if (!formData.accountNumber) newError.accountNumber = "Required";
        if (!formData.amount) newError.amount = "Required";
        if (!formData.currency) newError.currency = "Required";
        if (Object.keys(newError).length > 0) {
            setError(newError);
            return;
        }
        try {
            setIsLoading(true);
            const payload = {
                walletMethod: formData.walletMethod,
                accountNumber: formData.accountNumber.trim(),
                amount: formData.amount,
                currency: formData.currency,
            };
            const response = await requestWithdrawal(payload);
            if (response?.data?.message?.includes("Insufficient balance")) {
                setError({ ...newError, amount: response.data.message });
                return;
            }
            setSuccessOpen(true);
            handleClose();
        } catch (err) {
            setError({ ...newError, amount: "Something went wrong. Try again." });
        } finally {
            setIsLoading(false);
        }
    };
    const withdrawalOption = async () => {
        try {
            setIsLoading(true);
            const response = await withdrawOption();
            const data = response?.data?.data
            setWithdrawalOptionData(data)
        } catch (error) {
            console.log("failed to withdraw option APi");
        } finally {
            setIsLoading(false)

        }
    }
    useEffect(() => {
        withdrawalOption();
    }, [])

    return (
        <>
            {/* WITHDRAW REQUEST DIALOG */}
            <DialogContainer onClose={handleClose} open={open}>
                <DialogHeader title={t("RequestWithdrawal.requestWithdrawalBtn")} onClose={handleClose} />
                <DialogBody>
                    <Label title={t("RequestWithdrawal.choseNetwork")} required error={!!error.walletMethod} />
                    <CustomSelect
                        value={formData.walletMethod}
                        onChange={(e) => setField("walletMethod", e.target.value)}
                        placeholder={t("RequestWithdrawal.selectWalletMethod")}
                        backgroundColor={"neutral.black"}
                    >
                        <MenuItem
                            sx={{
                                background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                                borderRadius: "10px",
                                padding: "5px 10px"
                            }}
                            value={withdrawalOptionData?.networks[1].value}>{withdrawalOptionData?.networks[1].label}</MenuItem>
                        <MenuItem color="background.gray" value={withdrawalOptionData?.networks[2].value}>{withdrawalOptionData?.networks[2].label}</MenuItem>
                        <MenuItem value={withdrawalOptionData?.networks[0].value}>{withdrawalOptionData?.networks[0].label}</MenuItem>
                    </CustomSelect>

                    <Label title={t("WithdrawalDetails.walletAddress")} required error={!!error.accountNumber} />
                    <CustomInput
                        value={formData.accountNumber}
                        placeholder={t("RequestWithdrawal.enteryourAccountNumber")}
                        error={!!error.accountNumber}
                        helperText={error.accountNumber}
                        onChange={(e) => setField("accountNumber", e.target.value)}
                        sx={inputStyle}
                    />
                    <Label title={t("RequestWithdrawal.amountToWithdraw")} required error={!!error.amount} />
                    <CustomInput
                        type="number"
                        value={formData.amount}
                        placeholder={t("RequestWithdrawal.enterAmount")}
                        error={!!error.amount}
                        helperText={error.amount}
                        onChange={(e) => setField("amount", e.target.value)}
                        sx={inputStyle}
                    />
                    <Label title={t("setting.currency")} required error={!!error.currency} />
                    <CustomSelect
                        value={formData.currency}
                        onChange={(e) => setField("currency", e.target.value)}
                        placeholder={t("RequestWithdrawal.selectCurrency")}
                        backgroundColor={"neutral.black"}
                    >
                        <MenuItem
                            sx={{
                                background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                                borderRadius: "10px",
                                padding: "5px 10px"

                            }}
                            value={withdrawalOptionData?.currencies[0].value}>{withdrawalOptionData?.currencies[0].label}</MenuItem>
                        <MenuItem sx={{ color: "rgba(255, 255, 255, 0.46)" }} value={withdrawalOptionData?.currencies[1].value}>{withdrawalOptionData?.currencies[1].label}</MenuItem>
                        <MenuItem sx={{ color: "rgba(255, 255, 255, 0.46)" }} value={withdrawalOptionData?.currencies[2].value}>{withdrawalOptionData?.currencies[2].label}</MenuItem>
                    </CustomSelect>
                </DialogBody>
                <DialogActionButtons
                    onCancel={handleClose}
                    onConfirm={handleWithdrawRequest}
                    confirmText={t("RequestWithdrawal.SubmitWithdrawRequest")}
                    confirmLoading={isLoading}
                />
            </DialogContainer>
            <DialogContainer
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                sx={{
                    "& .MuiBox-root ": {
                        backgroundColor: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                        borderRadius: "12px",
                    }
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    px={3}
                    py={2}
                    gap={2}
                >
                    <img src={Success} width={"100px"} height={"100px"} />
                    <Typography
                        fontSize="20px"
                        fontWeight={600}
                        color="neutral.Snowwhite"
                    >
                        Successfully Created.
                    </Typography>

                    <CustomButton
                        title="OK"
                        variant="gradient"
                        onClick={() => setSuccessOpen(false)}
                        sx={{ borderRadius: "8px", px: 4 }}
                    />

                </Box>
            </DialogContainer>
        </>
    );
});

export default WithdrawalRequest;
