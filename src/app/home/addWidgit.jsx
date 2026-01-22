import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useRef,
} from "react";
import DialogContainer from "../../components/dialog/dialogContainer";
import DialogHeader from "../../components/dialog/dialogHeader";
import DialogBody from "../../components/dialog/dialogBody";
import DialogActionButtons from "../../components/dialog/dialogAction";
import WidgetCatalog from "./widgetCatalog";
import { Box } from "@mui/material";
import {
  addWidget,
  fetchuserWidgets,
  fetchWidgets,
  removeWidget,
} from "../../services/modules/widget";

const AddWidgit = forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [addedWidgetIds, setAddedWidgetIds] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const paramsRef = useRef(null); 

  const [popup, setPopup] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useImperativeHandle(ref, () => ({
    openDialog(val) {
      paramsRef.current = val; 
      setOpen(true);
      fetchAllWidgets();
    },
    closeDialog() {
      setOpen(false);
    },
  }));

  const handleClose = () => {
    if (paramsRef.current?.fun) {
      paramsRef.current.fun();
    }
    setOpen(false);
  };

  const fetchAllWidgets = async () => {
    try {
      const [allRes, userRes] = await Promise.all([
        fetchWidgets(""),
        fetchuserWidgets(),
      ]);
      setData(allRes?.data?.data || []);
      const dd = userRes?.data?.data.map(item => item.widget_id) || [];
      setAddedWidgetIds(dd);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllWidgets();
  }, []);

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

  const showPopup = (message, type = "success") => {
    setPopup({ open: true, message, type });
    setTimeout(() => setPopup(prev => ({ ...prev, open: false })), 3000);
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
            search={search}
            onSearchChange={setSearch}
          />
        </Box>
      </DialogBody>

      {popup.open && (
        <Box
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            bgcolor:
              popup.type === "success"
                ? "neutral.primaryGreen"
                : "neutral.primaryGreen",
            color: "white",
            px: 3,
            py: 1.5,
            borderRadius: 2,
            boxShadow: 3,
            zIndex: 9999,
          }}
        >
          {popup.message}
        </Box>
      )}

      <DialogActionButtons onCancel={handleClose} showConfirmBtn={false} />
    </DialogContainer>
  );
});

export default AddWidgit;
