import React, { forwardRef, useImperativeHandle, useState } from "react";
import CustomInput from "../../components/customInput";
import DialogContainer from "../../components/dialog/dialogContainer";
import DialogHeader from "../../components/dialog/dialogHeader";
import DialogActionButtons from "../../components/dialog/dialogAction";
// import Label from "../../components/label";
// import { MenuItem } from "@mui/material";
import DialogBody from "../../components/dialog/dialogBody";
import { toast } from "react-toastify";
import Label from "../label";
import addToWaitList from "../../services/modules/addWaitList";

const AddToWaitList = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dialogData, setDialogData] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
    });
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
    };
    const handleAddToWaitList = async () => {
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
