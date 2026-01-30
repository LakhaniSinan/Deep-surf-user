import React from "react";
import ArrowIcon from "../../assets/icons/arrow-btn.svg"
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const CustomSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  children,
  renderValue,
  height,
  backgroundColor,
  width,
  border,
  borderRadius,
  placeholderColor,
  sx = {},          // ✅ ADD THIS

}) => {
  const hasCustomChildren = React.Children.count(children) > 0;

  const defaultRenderValue = (selected) => {
    if (!selected) {
      return (
        <Typography variant="body2" color={placeholderColor || "#8F8F8F"} >
          {placeholder}
        </Typography >
      );
    }

    const option = options.find((opt) => opt.value === selected);

    if (option) {
      return (
        <Stack direction="row" spacing={1} alignItems="center">
          {option?.icon && (
            <Box
              component="img"
              src={option.icon}
              alt={option.label}
              sx={{ width: 20, height: 20, borderRadius: "50%" }}
            />
          )}
          <Typography variant="body2">{option?.label}</Typography>
        </Stack>
      );
    }

    // Fallback when custom children are used without options
    return <Typography variant="body2">{selected}</Typography>;
  };

  return (
    <Stack spacing={1}>
      {label && (
        <Typography
          variant="labelMd"
          fontSize="14px"
          sx={{ color: "text.bluishGray", letterSpacing: "0.02em" }}
        >
          {label}
        </Typography>
      )}

      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          IconComponent={() => (
            <Box
              component="img"
              src={ArrowIcon}   // 👈 apni image
              sx={{
                width: 16,
                height: 16,
                mr: 1,
                cursor: "pointer",
                filter: "rgba(255, 255, 255, 1)",
              }}
            />
          )}

          /* 👇👇👇 MOST IMPORTANT FIX */
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                color: "#fff",
                borderRadius: "10px",
                mt: 1,
              },
            },
            sx: {
              zIndex: 99999,
            },
          }}
          /* ☝️ FIX END */

          sx={{
            backgroundColor: backgroundColor ? backgroundColor : "rgba(255,255,255,0.04)",
            borderRadius: borderRadius || "14px",
            border: border | "1px solid rgba(255,255,255,0.08)",
            color: "#F1F1F1",
            height: height ? height : "45px",
            width: width,
            "& .MuiSelect-icon": {
              color: "#C7C7C7",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            ".MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 1,
              py: 1,
            },
            ...sx,        // ✅ MOST IMPORTANT LINE

          }}
          renderValue={(selected) => {
            if (renderValue) return renderValue(selected);
            return defaultRenderValue(selected);
          }}
        >
          {hasCustomChildren
            ? children
            : options.map((opt) => (
              <MenuItem
                key={opt.value}
                value={opt.value}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#fff",
                  background: value === opt.value ? "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)" : "transparent",
                  "&.Mui-selected": {
                    background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                    color: "#fff",
                    borderRadius: "10px"
                  },
                  "&:hover": {
                    background: "linear-gradient(90deg, #FF1A00, #FF6C03, #FFA305)",
                    color: "#fff",
                    borderRadius: "10px"
                  },
                }}
              >
                {opt.icon && (
                  <Box
                    component="img"
                    src={opt.icon}
                    alt={opt.label}
                    sx={{ width: 18, height: 18, borderRadius: "50%" }}
                  />
                )}
                <Typography variant="body2">{opt.label}</Typography>
              </MenuItem>


            ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default CustomSelect;  