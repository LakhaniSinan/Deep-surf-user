import React from "react";
import { Checkbox, Box, Typography, FormControlLabel } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const CustomCheckbox = ({
    checked,
    onChange,
    label = "Default Text",
    icon,
    checkedIcon,

}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    icon={icon}
                    checkedIcon={checkedIcon}
                    sx={{
                        color: "#555",
                        "&.Mui-checked": {
                            color: "#fff",
                        },
                    }}
                />
            }
            label={
                <Typography fontSize="14px" color="neutral.Snowwhite">
                    {label}
                </Typography>
            }
        />
    );
};

export default CustomCheckbox;
