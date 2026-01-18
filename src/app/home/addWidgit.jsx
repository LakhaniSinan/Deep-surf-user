import React, {
    forwardRef,
    useImperativeHandle,
    useState,
} from "react";
import DialogContainer from "../../components/dialog/DialogContainer";
import DialogHeader from "../../components/dialog/DialogHeader";
import DialogBody from "../../components/dialog/DialogBody";
import DialogActionButtons from "../../components/dialog/dialogAction";
import WidgetCatalog from "./widgetCatalog";
import { Box } from "@mui/material";

const AddWidgit = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        openDialog() {
            setOpen(true);
        },
        closeDialog() {
            setOpen(false);
        },
    }));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DialogContainer open={open} onClose={handleClose}>
            <DialogHeader
                title="Add Widget"
                secondaryHeading="Select widgets to add on dashboard"
                onClose={handleClose}
            />

            <DialogBody>
                <Box>
                    <WidgetCatalog />
                </Box>
            </DialogBody>

            <DialogActionButtons
                onCancel={handleClose}
                onConfirm={() => {
                    console.log("Confirmed");
                    handleClose();
                }}
                showConfirmBtn={false}  // Confirm button ko hide karne ke liye

            />
        </DialogContainer>
    );
});

export default AddWidgit;
