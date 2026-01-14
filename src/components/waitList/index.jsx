import React, { forwardRef, useImperativeHandle, useState } from "react";
import CustomInput from "../../components/customInput";
import DialogContainer from "../../components/dialog/dialogContainer";
import DialogHeader from "../../components/dialog/dialogHeader";
import DialogActionButtons from "../../components/dialog/dialogAction";
import DialogBody from "../../components/dialog/dialogBody";
import { toast } from "react-toastify";
import Label from "../label";
import addToWaitList from "../../services/modules/addWaitList";

const AddToWaitList = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dialogData, setDialogData] = useState(null);
    const [errors, setErrors] = useState({});

    console.log("error", errors);

    const [formData, setFormData] = useState({
        email: "",
    });
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("formData", formData);
    useImperativeHandle(ref, () => ({
        openDialog(params) {
            setDialogData(params);
            setOpen(true);
            if (params.type === "edit") {
                const { data } = params;
                setFormData({ ...data });
            }
        },
        closeDialog() {
            handleClose();
        },
    }));

    const handleClose = () => {
        setOpen(false);
        setFormData({
            email: "",

        });
        setDialogData(null);
    };

    const setField = (key, value) => {
        setFormData({ ...formData, [key]: value });
        setErrors({ ...errors, [key]: "" });
    };
    const validate = () => {
        const newErrors = {};
        console.log("newErrro", newErrors);
        if (!formData.email.trim()) newErrors.email = "Email is Required";
        if (formData.email?.trim() && !EMAIL_REGEX.test(formData.email.trim()))
            errors.email = "Email is not valid";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleAddToWaitList = async () => {
        if (!validate()) return;
        try {
            setIsLoading(true);
            const payload = {
                email: formData.email,
            };
            const response = await addToWaitList(payload);
            console.log("API Response:", response);
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
            } else {
                toast.error(response?.data?.message || "Request failed");
            }
        } catch (error) {
            toast.error(error?.message || "Request Failed");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <DialogContainer onClose={handleClose} open={open}>
            <DialogHeader
                title={dialogData?.type === "add" ? "Join To WaitList" : ""}
                onClose={handleClose}
            />
            <DialogBody>
                <Label title="Email" />
                <CustomInput
                    type="email"
                    value={formData.email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setField("email", e.target.value)}
                    inputBgColor={"#000"}
                    error={Boolean(!errors.email)}
                    helperText={!errors.email}
                />
            </DialogBody>

            <DialogActionButtons
                onCancel={handleClose}
                onConfirm={handleAddToWaitList}
                cancelBtnProps={{}}
                confirmBtnProps={{
                    children: dialogData?.type === "add" ? "Save" : "Update",
                    loading: isLoading,
                }}
            />
        </DialogContainer>
    );
});

export default AddToWaitList;
