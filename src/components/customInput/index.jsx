import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomInput({
  InputStartIcon,
  InputEndIcon,
  onEndIconClick,
  fullWidth = true,
  readonly,
  inputBgColor,
  error,
  helperText,
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
      error={error}
      helperText={helperText}
      InputProps={{
        readOnly: readonly,
        startAdornment: InputStartIcon && (
          <InputAdornment position="start">{InputStartIcon}</InputAdornment>
        ),
        endAdornment: type === "password" ? (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
              sx={{ padding: "6px", color: "#fff" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>

          </InputAdornment>
        ) : (
          InputEndIcon && (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={onEndIconClick} sx={{ padding: "6px", color: "#fff" }}
              >
                {InputEndIcon}
              </IconButton>
            </InputAdornment>
          )
        ),
      }}
      sx={(theme) => ({
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          background: inputBgColor || "#242424",

          "& fieldset": {
            border: "1px solid rgba(127, 127, 127, 1)",
          },

          "&:hover fieldset": {
            border: "1px solid rgba(127, 127, 127, 1)",
          },

          "&.Mui-focused fieldset": {
            border: "1px solid rgba(127, 127, 127, 1)",
          },
        },

        "& .MuiInputBase-input": {
          padding: "10px 10px",
          fontSize: "15px",
          color: theme.palette.text.primary,
          fontFamily: "'Inter Tight'",
          "&::placeholder": {
            color: "#808080",
            opacity: 1,
          },
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

export default CustomInput;
