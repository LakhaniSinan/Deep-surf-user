import { Box, Typography } from '@mui/material'

const HeaderText = ({
    title,
    subtile,
    icon,
    btnText,
    color,
    backgroundColor,
    width,
    fontSize,
    fontWeight,
    tittleFontSize,
    titleFontWeight,
    borderRadius,
    border,
    btnFontSize,
    btnWidth,
    onClick
}) => {
    return (
        <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            gap={{ xs: "12px", md: 0 }}
        >

            {/* Left side */}
            <Box display="flex" gap="12px" alignItems="center" flexWrap="wrap">
                <Typography
                    color={color || 'text.almostWhite'}
                    fontSize={{ xs: "12px", md: tittleFontSize || "21px" }}
                    fontWeight={titleFontWeight || 600}
                >
                    {title}
                </Typography>

                {subtile && (
                    <Box
                        bgcolor={backgroundColor || "background.carmineRed"}
                        textAlign="center"
                        width={{ xs: "60px", md: width || "70px" }}
                        borderRadius={borderRadius || "5px"}
                        padding={0.3}
                        border={border}
                    >
                        <Typography
                            color="neutral.Snowwhite"
                            fontSize={{ xs: "10px", md: fontSize }}
                            fontWeight={fontWeight}
                        >
                            {subtile}
                        </Typography>
                    </Box>
                )}
            </Box>

            {/* Right side */}
            <Box
                display="flex"
                gap="12px"
                alignItems="center"
                width={{ xs: "100%", md: "auto" }}
                justifyContent={{ xs: "space-between", md: "flex-end" }}
            >
                {icon && <Box>{icon}</Box>}

                {btnText && (
                    <Box
                        bgcolor="neutral.vermilionOrange"
                        borderRadius="10px"
                        p={1}
                        width={{ xs: "100%", md: btnWidth || "90px" }}
                        textAlign="center"
                        color="neutral.Snowwhite"
                        fontSize={btnFontSize || "15px"}
                        onClick={onClick}
                    >
                        {btnText}
                    </Box>
                )}
            </Box>
        </Box >
    )
}

export default HeaderText
