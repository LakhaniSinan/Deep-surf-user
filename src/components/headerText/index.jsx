import { Box, Typography } from '@mui/material'

const HeaderText = ({
    title,
    subtile,
    icon,
    color,
    backgroundColor,
    width,
    fontSize,
    fontWeight,
    tittleFontSize,
    titleFontWeight
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
                        borderRadius="5px"
                        padding={0.3}
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


            <Box>
                {icon}
            </Box>
        </Box>
    )
}

export default HeaderText
