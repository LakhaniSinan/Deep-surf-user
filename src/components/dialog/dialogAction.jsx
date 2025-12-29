import { DialogActions } from "@mui/material";
import React from "react";
import GlobalButton from "../../components/button/index";
import { useTranslation } from "react-i18next";


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
    const { t } = useTranslation();
    return (

        <DialogActions
            sx={{
                padding: "16px",
                gap: 2,
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            {showCancelBtn && (
                <GlobalButton
                    variant={"outlined"}
                    handleClickBtn={onCancel}
                    title={(t("setting.cancel"))}
                    style={{
                        width: "auto",
                        height: "45px",
                        padding: "20px 30px",
                        borderRadius: "15px",
                        backgroundColor: "neutral.black",
                        color: "neutral.Snowwhite",
                        dispay: "flex",
                        justifyContent: "space-between",
                        border: "none"
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
                        padding: "20px 10px",
                        borderRadius: "15px",
                        background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                        color: "#ffff",
                    }}
                    {...confirmBtnProps}
                />
            )}
        </DialogActions>
    );
};

export default DialogActionButtons;
