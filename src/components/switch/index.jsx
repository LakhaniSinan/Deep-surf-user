import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import * as React from "react";

const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => {
  const accent = theme.palette.accent?.main || "#FF6421";
  const offTrack = theme.palette.neutral?.hover || "#3A3A3A";

  return {
    width: 52,
    height: 30,
    padding: 0,
    margin: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 3,
      transition: theme.transitions.create(["transform"], {
        duration: 240,
      }),
      "&.Mui-checked": {
        transform: "translateX(22px)",
        color: "#fff",
        "& .MuiSwitch-thumb": {
          backgroundColor: "#fff",
        },
        "& + .MuiSwitch-track": {
          backgroundColor: accent,
          opacity: 1,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        boxShadow: `0 0 0 3px ${accent}33`,
      },
      "&.Mui-disabled": {
        "& .MuiSwitch-thumb": {
          color: theme.palette.grey[400],
        },
        "& + .MuiSwitch-track": {
          opacity: 0.4,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: "#fff",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
    },
    "& .MuiSwitch-track": {
      borderRadius: 30,
      backgroundColor: offTrack,
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 240,
      }),
    },
  };
});

export default function CustomSwitch({
  label,
  onChange,
  checked = false,
  showLabel = false,
  ...props
}) {
  const switchControl = (
    <StyledSwitch size="small" checked={checked} onChange={onChange} {...props} />
  );

  if (showLabel && label) {
    return <FormControlLabel control={switchControl} label={label} />;
  }

  return switchControl;
}
