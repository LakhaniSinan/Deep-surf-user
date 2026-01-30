import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import DialogContainer from "../../components/dialog/dialogContainer";
import DialogHeader from "../../components/dialog/dialogHeader";
import DialogBody from "../../components/dialog/dialogBody";
import CustomInput from "../../components/customInput";
import CustomSelect from "../../components/customSelect";
import CustomButton from "../../components/customButton";
import CustomCheckbox from "../../components/cutomChecked";
import DialogActionButtons from "../../components/dialog/dialogAction";

const CreatePresent = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({
        openDialog() {
            setOpen(true);
        },
        closeDialog() {
            setOpen(false);
        },
    }));
    const presentBtn = [
        {
            name: "RSI Overload"
        },
        {
            name: "RSI Overbought"
        },
        {
            name: "Golden Cross"
        },
        {
            name: "Death Cross"
        },
        {
            name: "Volume Spike"
        },
        {
            name: "BB Squeeze"
        },
        {
            name: "Price Breakout"
        },
        {
            name: "Funding Extreme"
        },
    ]

    return (
        <DialogContainer open={open} onClose={handleClose}>
            <DialogHeader title="Creating Preset" onClose />
            <DialogBody>
                <Box>
                    <Typography color="neutral.Snowwhite" letterSpacing={"1px"} fontWeight={400}>
                        Preset name
                    </Typography>
                </Box>
                <Box mt={1}>
                    <CustomInput placeholder="Enter" sx={{
                        "& .MuiInputBase-input": {
                            backgroundColor: "rgba(41, 41, 41, 1)",
                        },
                        "&  .MuiInputBase-input": {
                            borderRadius: "10px",
                            py: "15px",
                            // border : "none"
                        },
                        "& .MuiOutlinedInput-root": {
                            border: "none"
                        }
                    }}
                    />
                </Box>
                <Grid container spacing={2} mt={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography>
                                Coin
                            </Typography>
                        </Box>
                        <Box>
                            <CustomInput placeholder="BTC" sx={{
                                "& .MuiInputBase-input": {
                                    backgroundColor: "rgba(41, 41, 41, 1)",
                                },
                                "&  .MuiInputBase-input": {
                                    borderRadius: "10px",
                                    py: "15px",
                                    // border : "none"
                                },
                                "& .MuiOutlinedInput-root": {
                                    border: "none"
                                }
                            }}
                            />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <Box>
                            <Typography>
                                Timeframe
                            </Typography>
                        </Box>
                        <Box mt={0.5}>
                            <CustomSelect placeholder="BTC" sx={{
                                "& .MuiInputBase-input": {
                                    backgroundColor: "rgba(41, 41, 41, 1)",
                                },
                                "&  .MuiInputBase-input": {
                                    borderRadius: "10px",
                                    py: "15px",
                                    // border : "none"
                                },
                                "& .MuiOutlinedInput-root": {
                                    border: "none"
                                }
                            }} >
                                <MenuItem value="1 Hour">1 Hour</MenuItem>
                                <MenuItem value="2 Hour">2 Hour</MenuItem>
                                <MenuItem value="3 Hour">3 Hour</MenuItem>
                            </CustomSelect>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Typography color="neutral.Snowwhite" fontSize={"18px"} fontWeight={600}>
                        Trigger conditions
                    </Typography>
                    <Box mt={1}>
                        <CustomButton title={"+Add Condition"} width="100%" sx={{ backgroundColor: "background.charcoalBlack", color: "text.mutedGray", fontSize: "16px", letterSpacing: "1px" }} />
                    </Box>
                </Box>
                <Box display={"flex"} gap={"10px"} mt={2}>
                    <Box>
                        <Typography
                            fontSize={13}
                            color="#9E9E9E"
                            mb={1}
                            fontWeight={500}
                        >
                            Quick templates:
                        </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box
                        display="flex"
                        gap={1}
                        flexWrap="wrap"
                    >
                        {presentBtn.map((item, index) => (
                            <Box
                                key={index}
                                px={1.5}
                                py={0.6}
                                border="1px solid #2C2C2C"
                                borderRadius="20px"
                                bgcolor="#121212"
                                sx={{
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        bgcolor: "#1E1E1E",
                                        borderColor: "#3A3A3A",
                                    },
                                }}
                            >
                                <Typography
                                    fontSize={12}
                                    color="#E0E0E0"
                                    whiteSpace="nowrap"
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box bgcolor={"neutral.richblack"} p={1.2} borderRadius={"10px"} mt={1}>
                    <Box>
                        <Typography fontSize={"12px"} color="neutral.Snowwhite">
                            Notification
                        </Typography>
                    </Box>
                    <Box display={"flex"} gap={"10px"}>
                        <Box>
                            <CustomCheckbox label={"Sound"} />
                        </Box>
                        <Box>
                            <CustomCheckbox label={"Popup"} />
                        </Box>
                        <Box>
                            <CustomCheckbox label={"Only Once"} />
                        </Box>
                    </Box>
                </Box>
            </DialogBody>
            <Box>
                <DialogActionButtons confirmText="Save" cancelText="Cancel" width="120px"
                />
            </Box>

        </DialogContainer >
    );
});

export default CreatePresent;
