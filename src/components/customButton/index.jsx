import { Button, CircularProgress, Box } from "@mui/material";

const CustomButton = ({
  variant = "contained",
  handleClickBtn,
  title,
  loading = false,
  sx = {},
  icon,
  radius = 8,
  ...props
}) => {
  const borderRadiusValue = typeof radius === "number" ? `${radius}px` : radius;

  return (
    <Button
      variant={variant}
      onClick={handleClickBtn}
      disabled={loading}
      {...props}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        fontSize: "16px",
        borderRadius: borderRadiusValue, 
        py: 0.8,
        px : 10,
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: icon ? 1 : 0, 
        ...(loading && {
          cursor: "not-allowed",
          opacity: 0.8,
        }),
        ...sx, 
      }}
    >
      {loading ? (
        <CircularProgress size={22} color="inherit" />
      ) : (
        <>
          {icon && (
            <Box component="span" display="flex" alignItems="center">
              {icon}
            </Box>
          )}
          {title}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
