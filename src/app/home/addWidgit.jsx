import React, {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect
} from "react";
import DialogContainer from "../../components/dialog/DialogContainer";
import DialogHeader from "../../components/dialog/DialogHeader";
import DialogBody from "../../components/dialog/DialogBody";
import DialogActionButtons from "../../components/dialog/dialogAction";
import WidgetCatalog from "./widgetCatalog";
import { Box } from "@mui/material";
import { addWidget, fetchWidgets, removeWidget } from "../../services/modules/widgets";

const AddWidgit = forwardRef((props, ref) => {

    const [data, setData] = useState([])
    const [addedWidgetIds, setAddedWidgetIds] = useState([]);

    useEffect(() => {
        fetchAllWidgets()
    }, [])

    const fetchAllWidgets = async () => {
        fetchWidgets()
            .then(response => {
                setData(response.data.data)
                console.log(response, "responseresponseresponse");
            })
            .catch(err => {
                console.log(err, "errerrerrerr");
            })
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
        setAddedWidgetIds(prev => [...prev, id]);
    };
    const handleRemove = async (id) => {
        await removeWidget(id);
        setAddedWidgetIds(prev => prev.filter(wid => wid !== id));
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
