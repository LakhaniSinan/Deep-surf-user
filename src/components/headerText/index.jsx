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
    border
}) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems={"center"}>

            <Box display="flex" gap="20px" alignItems="center">
                <Typography color={color || 'text.almostWhite'} fontSize={tittleFontSize || "21px"} fontWeight={titleFontWeight || 600}>
                    {title}
                </Typography>


                {subtile && (
                    <Box
                        bgcolor={backgroundColor || "background.carmineRed"}
                        textAlign="center"
                        width={width || "70px"}
                        borderRadius={borderRadius || "5px"}
                        padding={0.3}
                        border={border}
                    >
                        <Typography
                            color="neutral.Snowwhite"
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                        >
                            {subtile}
                        </Typography>
                    </Box>
                )}

            </Box>
            <Box display={"flex"} gap={"20px"}>
                <Box>
                    {icon}
                </Box>
                {btnText &&
                    <Box bgcolor={"neutral.vermilionOrange"} borderRadius={"10px"} p={1} width={"80px"} textAlign={"center"} color={"neutral.Snowwhite"} fontSize={"12px"}>
                        {btnText}
                    </Box>
                }
            </Box>
        </Box >
    )
}

export default HeaderText
