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

const AddWidgit = forwardRef((props, ref) => {
    const [data, setData] = useState([])
   

    const [addedWidgetIds, setAddedWidgetIds] = useState([]);

    useEffect(() => {
        fetchAllWidgets()
    }, [])

    const fetchAllWidgets = async () => {
        const [allRes, userRes] = await Promise.all([
            fetchWidgets(),
            // console.log("efbfguygfyugffrfurf", category),

            fetchuserWidgets(),
            // setData(allRes?.data?.data)
        ]);
        // console.log("befhefgfgyfgyefgyefyeyef", fetchWidgets());

        // console.log("cccccccccccccccccccccc", allRes?.data?.data);


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
        alert("Widget Added successfully")
        setAddedWidgetIds(prev => [...prev, id]);
    };
    const handleRemove = async (id) => {
        await removeWidget(id);
        alert("Widget removed successfully")
        setAddedWidgetIds(prev => prev.filter(wid => wid !== id));
    };

    console.log(addedWidgetIds, "addedWidgetIdsaddedWidgetIdsaddedWidgetIds");


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
                showConfirmBtn={false}
            />
        </DialogContainer>
    );
});

export default AddWidgit;