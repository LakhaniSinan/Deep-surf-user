import { Box, Grid, Typography } from '@mui/material'
import HeaderText from '../../components/headerText'
import VolumeCard from '../../components/volumeCard'

const HeatMapVolumeData = () => {
    const heatMapData = [
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "JELLYJELLY",
            percentage: "-2.0000%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят",
            bgcolor: "red"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },
        {
            symbolName: "ME",
            percentage: "-0.4026%",
            description: "Шорты платят"
        },

    ]
    return (
        <Box bgcolor={"background.charcoal"} p={4} borderRadius={"10px"} mt={2}>
            <Box bgcolor={"neutral.darkGrey"} p={2} borderRadius={"25px"}>
                <Box mt={0.5}>
                    <HeaderText
                        title={"Heatmap — Volume & Volatility"}
                        btnText={"Load"}
                        color={"neutral.Snowwhite"}
                        tittleFontSize={"22px"}
                    />
                </Box>
                <Box mt={2}>
                    <Grid container spacing={0.8}>
                        {heatMapData.map((item) => (
                            <Grid item size={{ xs: 12, md: 1.5 }}>
                                <VolumeCard
                                    name={item.symbolName}
                                    volume={item.percentage}
                                    percentChange={item.description}
                                    isPositive={true}
                                />
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box bgcolor={"neutral.darkGrey"} border={"1px solid rgba(127, 127, 127, 1)"} borderRadius={"10px"} mt={2} p={1.2} >
                    <Typography fontSize={"12px"} color='neutral.Snowwhite'>
                        Подсказка: Высокий положительный фандинг (0.05%) = много лонгов, потенциальный шорт-сквиз маловероятен. Отрицательный фандинг = потенциал для лонг-сквиза.
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default HeatMapVolumeData