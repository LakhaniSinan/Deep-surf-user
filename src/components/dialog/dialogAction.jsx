import { DialogActions } from "@mui/material";
import React from "react";
import GlobalButton from "../../components/button/index";

const DialogActionButtons = ({
    onConfirm,
    onCancel,
    showConfirmBtn = true,
    showCancelBtn = true,
    confirmText = "save",
    cancelText = "Cancel",
    isConfirmBtnDisable = false,
    cancelBtnProps,
    confirmBtnProps,
    confirmLoading = false,
}) => {
    return (
        <DialogActions
            sx={{
                padding: "16px",
                gap: 2,
            }}
        >
            {showCancelBtn && (
                <GlobalButton
                    variant={"outlined"}
                    handleClickBtn={onCancel}
                    title={cancelText}
                    style={{
                        width: "auto",
                        height: "45px",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        backgroundColor: "#000000",
                        color: "#fff",
                        dispay: "flex",
                        justifyContent: "space-between",
                    }}
                    disabled={confirmLoading}
                    loading={confirmLoading}
                />
            )}
            {showConfirmBtn && (
                <GlobalButton
                    // variant={"contained"}
                    handleClickBtn={onConfirm}
                    title={confirmText}
                    disabled={isConfirmBtnDisable}
                    loading={confirmLoading}
                    style={{
                        width: "auto",
                        height: "45px",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        backgroundColor: "accent.main",
                        color: "#ffff",
                    }}
                    {...confirmBtnProps}
                />
            )}
        </DialogActions>
    );
};

export default DialogActionButtons;
