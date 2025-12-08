import React, { useState } from "react";
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import CustomInput from "../customInput";
import theme from "../../theme";
import CustomButton from "../customButton";
import addToWaitList from "../../services/modules/addWaitList";
import { toast } from "react-toastify";

const WaitlistDialog = ({ open, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
    });

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
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle
                sx={{ fontWeight: 600, fontSize: "20px", textAlign: "center" }}
            >
                Join Waitlist
            </DialogTitle>

            <DialogContent sx={{ textAlign: "center", p: 3 }}>
                <Typography sx={{ opacity: 0.8 }}>
                    Please enter your details to join our waitlist.
                </Typography>

                <Box mt={2}>
                    <CustomInput
                        placeholder="Email"
                        defaultStyle={theme.palette.text.secondary}
                        value={formData.email}
                        name="email"
                        sx={{ borderRadius: "10px" }}
                        onChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                </Box>

                <Box mt={2}>
                    <CustomButton
                        title="Send"
                        variant="gradient"
                        width="100%"
                        handleClickBtn={handleAddToWaitList}
                        loading={isLoading}
                    />
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default WaitlistDialog;
