import React, {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect
} from "react";
import DialogContainer from "../../components/dialog/dialogContainer";
import DialogHeader from "../../components/dialog/dialogHeader";
import DialogBody from "../../components/dialog/dialogBody";
import DialogActionButtons from "../../components/dialog/dialogAction";
import WidgetCatalog from "./widgetCatalog";
import { Box } from "@mui/material";
import { addWidget, fetchuserWidgets, fetchWidgets, removeWidget } from "../../services/modules/widget";

const AddWidgit = forwardRef((props, ref) => {
    const [data, setData] = useState([])
    const [addedWidgetIds, setAddedWidgetIds] = useState([]);
    useEffect(() => {
        fetchAllWidgets()
    }, [])
    const [popup, setPopup] = useState({
        open: false,
        message: "",
        type: "success", // success, error
    });


    const fetchAllWidgets = async () => {
        const [allRes, userRes] = await Promise.all([
            fetchWidgets(),
            fetchuserWidgets(),
        ]);
        console.log(allRes, userRes, "allResallResallRes");
        setData(allRes.data.data)
        let dd = userRes.data.data.map(item => {
            return item.widget_id
        })
        console.log(dd, "dddddddddd");
        setAddedWidgetIds(dd)
    }
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

    console.log(data, "datadatadatadatadata");

    const handleAddWidget = async (id) => {
        await addWidget(id);
        showPopup("Widget added successfully", "success");
        setAddedWidgetIds(prev => [...prev, id]);
    };
    const handleRemove = async (id) => {
        await removeWidget(id);
        showPopup("Widget removed successfully", "error");
        setAddedWidgetIds(prev => prev.filter(wid => wid !== id));
    };

    console.log(addedWidgetIds, "addedWidgetIdsaddedWidgetIdsaddedWidgetIds");
    const showPopup = (message, type = "success") => {
        setPopup({ open: true, message, type });

        setTimeout(() => {
            setPopup(prev => ({ ...prev, open: false }));
        }, 3000); // 3 seconds ke baad hide ho jaye
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
                    <WidgetCatalog
                        addedWidgetIds={addedWidgetIds}
                        handleAddWidget={handleAddWidget}
                        data={data}
                        handleRemove={handleRemove}
                    />
                </Box>
            </DialogBody>
            {popup.open && (
                <Box
                    sx={{
                        position: "fixed",
                        top: 20,
                        right: 20,
                        bgcolor: popup.type === "success" ? "neutral.primaryGreen" : "neutral.primaryGreen",
                        color: "white",
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        boxShadow: 3,
                        zIndex: 9999,
                        transition: "all 0.3s ease",
                    }}
                >
                    {popup.message}
                </Box>
            )}

            <DialogActionButtons
                onCancel={handleClose}
                onConfirm={() => {
                    console.log("Confirmed");
                    handleClose();
                }}
                showConfirmBtn={false}
            />
        </DialogContainer>

    );
});

export default AddWidgit;