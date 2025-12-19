import React, { forwardRef, useImperativeHandle, useState } from "react";
import { MenuItem } from "@mui/material";

import CustomInput from "../../../components/customInput";
import CustomSelect from "../../../components/customSelect";

import DialogContainer from "../../../components/dialog/dialogContainer";
import DialogHeader from "../../../components/dialog/dialogHeader";
import DialogBody from "../../../components/dialog/dialogBody";
import DialogActionButtons from "../../../components/dialog/dialogAction";
import Label from "../../../components/label";
import { toast } from "react-toastify";
import { requestWithdrawal } from "../../../services/modules/refferal";

const WithdrawalRequest = forwardRef(({ props }, ref) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        walletMethod: "",
        accountNumber: "",
        amount: "",
        currency: "",
    });
    console.log("formdatatataaaaaaaaaa", formData);


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
        setFormData({
            walletMethod: "",
            accountNumber: "",
            amount: "",
            currency: "",
        });
        setError({});
    };

    const setField = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        setError((prev) => ({ ...prev, [key]: "" }))
    };

    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            backgroundColor: "neutral.black",
            borderRadius: "12px",
            color: "#fff",
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
                amount: (formData.amount),
                currency: formData.currency,
            };

            console.log("PayloadsenuuutoddddddddAPI:", payload);

            const response = await requestWithdrawal(payload);
            console.log("dddddddddddddddd" , response);
            console.log("hihhhhhhhhhhhhhh");
            
            
            toast.success(response?.data?.data || "Withdrawal Request Submitted");
            handleClose();
        } catch (err) {
            console.error(err,"bggggggggggggggggg");
            toast.error("Failed to submit withdrawal request");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DialogContainer onClose={handleClose} open={open}>
            <DialogHeader title="Request Withdrawal" onClose={handleClose} />

            <DialogBody>
                <Label title="Wallet Method" required error={!!error.walletMethod} />
                <CustomSelect
                    value={formData.walletMethod}
                    onChange={(e) => setField("walletMethod", e.target.value)}
                    placeholder="Select Wallet Method"
                    backgroundColor={"neutral.black"}
                >
                    <MenuItem value="Mobile Wallet">Mobile Wallet</MenuItem>
                    <MenuItem value="Bank Transfer">Bank Wallet</MenuItem> 
                    <MenuItem value="Card">Card</MenuItem>
                </CustomSelect>

                <Label title="Account Number" required error={!!error.accountNumber} />
                <CustomInput
                    value={formData.accountNumber}
                    placeholder="Enter your Account Number"
                    error={!!error.accountNumber}
                    helperText={error.accountNumber}
                    onChange={(e) => setField("accountNumber", e.target.value)}
                    sx={inputStyle}
                />

                <Label title="Amount to Withdraw" required error={!!error.amount} />
                <CustomInput
                    type="number"
                    value={formData.amount}
                    placeholder="Enter Amount"
                    error={!!error.amount}
                    helperText={error.amount}
                    onChange={(e) => setField("amount", e.target.value)}
                    sx={inputStyle}
                />

                <Label title="Currency" required error={!!error.currency} />
                <CustomSelect
                    value={formData.currency}
                    onChange={(e) => setField("currency", e.target.value)}
                    placeholder="Select Currency"
                    backgroundColor={"neutral.black"}
                >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                </CustomSelect>
            </DialogBody>

            <DialogActionButtons
                onCancel={handleClose}
                onConfirm={handleWithdrawRequest}
                confirmText="Submit Withdraw Request"
                confirmLoading={isLoading}
                // cancelBtnProps={{ disabled: isLoading }}
            />
        </DialogContainer>
    );
});

export default WithdrawalRequest;
