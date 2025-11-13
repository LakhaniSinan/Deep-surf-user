import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField, useTheme, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomInput({
  InputStartIcon,
  InputEndIcon,
  onEndIconClick,
  fullWidth = true,
  readonly,
  defaultStyle,
  style,
  inputBgColor,
  inputWidth,
  type = "text",
  sx,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth={fullWidth}
      type={showPassword && type === "password" ? "text" : type}
      {...props}
      InputProps={{
        readOnly: readonly,
        startAdornment: InputStartIcon && (
          <InputAdornment position="start">{InputStartIcon}</InputAdornment>
        ),
        endAdornment: InputEndIcon && (
          <InputAdornment position="end">
            {type === "password" ? (
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff sx={{ color: "#C7C7C7  " }} />
                ) : (
                  <Visibility sx={{ color: "#C7C7C7" }} />
                )}
              </IconButton>
            ) : (
              <IconButton edge="end" onClick={onEndIconClick}>
                {InputEndIcon}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      sx={(theme) => ({
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          background: inputBgColor || theme.palette.neutral?.card || "#242424",
          border: "1px solid transparent",
          "& fieldset": {
            border: "none",
          },
          "&:hover": {
            background:
              inputBgColor || theme.palette.neutral?.hover || "#2F2F2F",
          },
          "&.Mui-focused": {
            background:
              inputBgColor || theme.palette.neutral?.surface || "#1f1f1f",
            borderColor: "#8F8F8F",
          },
        },

        "& .MuiInputBase-input": {
          padding: "10px 20px",
          fontSize: "15px",
          color: theme.palette.text.primary,
          "&::placeholder": {
            color: theme.palette.neutral?.mutedText || "#808080",
            opacity: 1,
          },
        },

        "& .MuiFormLabel-root": {
          display: "none",
        },

        "& .MuiFormHelperText-root": {
          display: "none",
        },

        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    />
  );
}

CustomInput.propTypes = {
  InputStartIcon: PropTypes.element,
  InputEndIcon: PropTypes.element,
  onEndIconClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  readonly: PropTypes.bool,
  type: PropTypes.string,
};

CustomInput.defaultProps = {
  fullWidth: true,
  readonly: false,
  type: "text",
};

export default CustomInput;
