import React, { useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField, useTheme, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import theme from "../../theme";

function CustomInput({
  InputStartIcon,
  InputEndIcon,
  fullWidth = true,
  readonly,
  defaultStyle,
  style,
  inputBgColor,
  inputWidth,
  type = "text", // 👈 new prop
  sx,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  // const useStyle = {
  //   width: inputWidth || "100%",
  //   "& .MuiOutlinedInput-root": {
  //     borderRadius: "8px !important",
  //     backgroundColor: inputBgColor || "#fff",
  //     "& .MuiOutlinedInput-input": {
  //       padding: "10px 14px !important", // 👈 nice padding
  //     },
  //     "& .MuiOutlinedInput-notchedOutline": {
  //       border: `1px solid ${theme.palette.text.secondary}`,
  //       backgroundColor: inputBgColor || "transparent",
  //     },
  //     "&:hover .MuiOutlinedInput-notchedOutline": {
  //       border: `1px solid ${theme.palette.text.secondary} !important`,
  //     },
  //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
  //       border: `1px solid ${theme.palette.text.secondary} !important`,
  //     },
  //   },
  // };

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
        endAdornment: (
          <InputAdornment position="end">
            {type === "password" ? (
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
                
                
              >
                {showPassword ? <VisibilityOff sx={{ color: "#C7C7C7  " }} /> : <Visibility sx={{ color: "#C7C7C7" }} />}
              </IconButton>
            ) : (
              InputEndIcon && (
                <IconButton edge="end">{InputEndIcon}</IconButton>
              )
            )}
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          background: inputBgColor ? inputBgColor : "#333333",
          border: "none",
          "& fieldset": {
            border: "none",
          },
          
          "&:hover fieldset": {
            border: "none",
          },
          
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },

        "& .MuiInputBase-input": {
          padding: "12px 20px",
          fontSize: "14px",
          color: "#fff",
          "&::placeholder": {
            color: "#808080",
            opacity: 1,
          },
        },

        "& .MuiFormLabel-root": {
          display: "none",
        },

        "& .MuiFormHelperText-root": {
          display: "none",
        },

        ...sx,
      }}
    />
  );
}

CustomInput.propTypes = {
  InputStartIcon: PropTypes.element,
  InputEndIcon: PropTypes.element,
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
