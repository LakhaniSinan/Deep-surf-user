import { Button, CircularProgress } from "@mui/material";

const GlobalButton = ({
    variant,
    handleClickBtn,
    hoverProperties,
    iconHoverColor,
    title,
    style,
    ...props
}) => {
    return (
        <Button
            variant={variant || "contained"}
            onClick={handleClickBtn}


            {...props}
            sx={{
                ...style,
                "&:hover": {
                    ...hoverProperties,
                },
                "&.MuiButtonBase-root:hover .MuiButton-startIcon svg": {
                    color: iconHoverColor,
                },
                "&.MuiButtonBase-root:hover .MuiButton-endIcon svg": {
                    color: iconHoverColor,
                },
            }}
        >
            {title}
        </Button>
    );
};

export default GlobalButton;
