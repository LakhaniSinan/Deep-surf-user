import { Button, CircularProgress, Box } from "@mui/material";

const CustomButton = ({
  variant = "contained",
  handleClickBtn,
  title,
  loading = false,
  sx = {},
  icon,
  radius = 8,
  width = "fit-content",
  ...props
}) => {
  const borderRadiusValue = typeof radius === "number" ? `${radius}px` : radius;
  
  // Calculator variants should use theme styles, not default styles
  const isCalculatorVariant = 
    variant === "calculatorToggle" || variant === "calculatorSmall";

  return (
    <Button
      variant={variant}
      onClick={handleClickBtn}
      disabled={loading}
      {...props}
      sx={(theme) => ({
        textTransform: "none",
        borderRadius: borderRadiusValue,
        width: width,
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: icon ? theme.spacing(1) : 0,
        ...(isCalculatorVariant
          ? {} // Let theme variant handle styling (fontSize, padding, minHeight, colors)
          : {
              fontWeight: 600,
              color: "#fff",
              fontSize: "16px",
              py: 1.25,
              px: 3,
              minHeight: 48,
            }),
        ...(loading && {
          cursor: "not-allowed",
          opacity: 0.7,
        }),
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
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
