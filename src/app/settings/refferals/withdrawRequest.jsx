// New AddEditClient component with perfect UI
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Box, MenuItem, Typography } from "@mui/material";

import CustomInput from "../../../components/customInput";
import CustomSelect from "../../../components/customSelect";

import DialogContainer from "../../../components/dialog/dialogContainer";
import DialogHeader from "../../../components/dialog/dialogHeader";
import DialogBody from "../../../components/dialog/dialogBody";
import DialogActionButtons from "../../../components/dialog/dialogAction";
import Label from "../../../components/label";

const WithdrawalRequest = forwardRef(({ props }, ref) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        walletMethod: "",
        accountNumber: "",
        amount: "",
        currency: "USD",
    });

    useImperativeHandle(ref, () => ({
        openDialog(params) {
            setOpen(true);
            if (params?.data) setFormData({ ...params.data });
        },
        closeDialog() {
            handleClose();
        },
    }));

    const handleClose = () => {
        if (isLoading) return;
        setOpen(false);
        setFormData({
            walletMethod: "",
            accountNumber: "",
            amount: "",
            currency: "USD",
        });
        setError({});
    };

    const setField = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };
    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#red",
            borderRadius: "12px",
            color: "#fff",
            // paddingRight: "10px",

            "& fieldset": {
                border: "1px solid rgba(255,255,255,0.12)",
            },

            "&:hover fieldset": {
                border: "1px solid rgba(255,255,255,0.2)",
            },

            "&.Mui-focused fieldset": {
            },
        },

        "& .MuiInputBase-input": {
            padding: "12px 14px",
            fontSize: "13px",
            color: "#fff",
        },
    };

    return (
        <DialogContainer onClose={handleClose} open={open}>
            <DialogHeader title="Request Withdrawal" onClose={handleClose} />

            <DialogBody>
                <Label title="Wallet Method" required error={!!error.walletMethod} />
                <CustomSelect
                    value={formData.walletMethod}
                    onChange={(e) => setField("walletMethod", e.target.value)}
                    placeholder="Select"
                >
                    <MenuItem value="binance">Mobile Wallet</MenuItem>
                    <MenuItem value="paypal">Bank Wallet</MenuItem>
                    <MenuItem value="bank">Card</MenuItem>
                </CustomSelect>

                {/* Account Number */}
                <Label title="Account Number" required error={!!error.accountNumber} />
                <CustomInput
                    value={formData.accountNumber}
                    placeholder="Enter your Account Number"
                    error={!!error.accountNumber}
                    helperText={error.accountNumber}
                    onChange={(e) => setField("accountNumber", e.target.value)}
                    sx={inputStyle}
                />

                {/* Amount */}
                <Label title="Amount to Withdraw" required error={!!error.amount} />
                <CustomInput
                    type="number"
                    value={formData.amount}
                    placeholder="Enter Payment"
                    error={!!error.amount}
                    helperText={error.amount}
                    onChange={(e) => setField("amount", e.target.value)}
                    sx={inputStyle}
                />

                {/* Currency */}
                <Label title="Currency" required error={!!error.currency} />
                <CustomSelect
                    value={formData.currency}
                    onChange={(e) => setField("currency", e.target.value)}
                    placeholder="USD"
                >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                </CustomSelect>

            </DialogBody>

            <DialogActionButtons
                onCancel={handleClose}
                confirmText="Submit Withdraw Request"
                confirmLoading={isLoading}
                cancelBtnProps={{ disabled: isLoading }}
            />
        </DialogContainer>
    );
});

export default WithdrawalRequest;
