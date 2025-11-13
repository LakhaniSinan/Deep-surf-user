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
}) => {
  return (
    <Stack spacing={1}>
      {label && (
        <Typography
          variant="labelMd"
          fontSize="14px"
          sx={{ color: "#C7C7C7", letterSpacing: "0.02em" }}
        >
          {label}
        </Typography>
      )}
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          sx={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#F1F1F1",
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
          }}
          renderValue={(selected) => {
            if (!selected) {
              return (
                <Typography variant="body2" color="#8F8F8F">
                  {placeholder}
                </Typography>
              );
            }

            const option = options.find((opt) => opt.value === selected);

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
          }}
        >
          {options.map((opt) => (
            <MenuItem
              key={opt.value}
              value={opt.value}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
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
