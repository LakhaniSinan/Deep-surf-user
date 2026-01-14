import { DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const DialogHeader = ({ title, secondaryHeading, onClose, icon }) => {
    return (
        <DialogTitle
            sx={{ m: 0, p: 2, fontWeight: 600, border: "none" }}
            border="none"
        >
            <Stack
                direction="row"
                alignItems="start"
                justifyContent={"space-between"}
                spacing={1}
            >
                <Stack>
                    <Typography variant="h6" fontSize={"20px"} fontFamily={"Inter Tight"}>{title}</Typography>
                    {secondaryHeading && (
                        <Typography
                            variant="body2"
                            color="customColor.coolGrey"
                            lineHeight={"normal"}
                        >
                            {secondaryHeading}
                        </Typography>
                    )}
                </Stack>
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            borderRadius: 2,
                            backgroundColor: "accent.main",
                            "&:hover": {
                                backgroundColor: "accent.main",
                            },
                        }}
                    >
                        <CloseIcon sx={{ color: "text.primary" }} />
                    </IconButton>
                ) : null}
            </Stack>
        </DialogTitle>
    );
};

export default DialogHeader;
