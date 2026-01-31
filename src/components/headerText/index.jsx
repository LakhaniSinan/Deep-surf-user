import { Box, Typography } from '@mui/material'
import DrowpDownIcon from "../../assets/icons/drowpIcon.svg"

const HeaderText = ({
    title,
    subtile,
    icon,
    color,
    backgroundColor,
    width,
    fontSize,
    fontWeight
}) => {
    return (
        <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap="20px" alignItems="center">
                <Typography color={color || 'text.almostWhite'} fontSize="21px" fontWeight={600}>
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
                        width={{ xs: "100%", md: "80px" }}
                        textAlign="center"
                        color="neutral.Snowwhite"
                        fontSize="12px"
                    >
                        {btnText}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default HeaderText
