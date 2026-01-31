import { Box, Grid, Typography } from '@mui/material'
import StairsIcon from "../../assets/icons/stairs.svg"
import CustomSelect from '../../components/customSelect'
import StrategyCard from '../../components/strategyCard'
import ExtremeFunding from './extremeFunding'

const SmartScenoria = () => {
  const coinName = [
    {
      name: "BTC",
    },
    {
      name: "ETH",
    },
    {
      name: "SOL",
    },
    {
      name: "BNB",
    },
    {
      name: "ARB",
    },
    {
      name: "DOGE",
    }

  ]
  const smartCoindata = [
    {
      title: "Resweep (Double Sweep)",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      btnText: "ACTIVE",
      border: "1px solid rgba(16, 185, 129, 1)",
      backgroundColor: "rgba(41, 65, 52, 1)",
      titleColor: 'neutral.Snowwhite',
      descriptionColor: 'neutral.Snowwhite',
      percentageColor: 'neutral.lightGreen'
    },
    {
      title: "Order Block Long",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      border: "1px solid rgba(127, 127, 127, 1)",
      backgroundColor: "rgba(22, 22, 22, 1)",
      titleColor: 'neutral.neutralGrey',
      descriptionColor: 'neutral.neutralGrey',
      percentageColor: 'neutral.neutralGrey'
    },
    {
      title: "Range High Short",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      btnText: "ACTIVE",
      border: "1px solid rgba(239, 68, 68, 1)",
      backgroundColor: "rgba(62, 41, 41, 1)",
      titleColor: 'neutral.Snowwhite',
      descriptionColor: 'neutral.Snowwhite',
      percentageColor: 'neutral.Snowwhite',
      btnBackgroundColor: "rgba(239, 68, 68, 1)",
      btnBorderColor: "1px solid rgba(239, 68, 68, 1) ",
    },
    {
      title: "Alt Season Setup",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      border: "1px solid rgba(127, 127, 127, 1)",
      backgroundColor: "rgba(22, 22, 22, 1)",
      titleColor: 'neutral.neutralGrey',
      descriptionColor: 'neutral.neutralGrey',
      percentageColor: 'neutral.neutralGrey'
    },
    {
      title: "RSI Bullish Divergence",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      border: "1px solid rgba(127, 127, 127, 1)",
      titleColor: 'neutral.neutralGrey',
      descriptionColor: 'neutral.neutralGrey',
      percentageColor: 'neutral.neutralGrey',
      backgroundColor: "rgba(22, 22, 22, 1)",
    },
    {
      title: "Extreme Funding Reversal Long",
      description: "A repeat sweep after an unsuccessful first one — a strong signal",
      percentage: "65%",
      border: "1px solid rgba(127, 127, 127, 1)",
      titleColor: 'neutral.neutralGrey',
      descriptionColor: 'neutral.neutralGrey',
      percentageColor: 'neutral.neutralGrey',
      backgroundColor: "rgba(22, 22, 22, 1)",

    }
  ]
  return (
    <Box bgcolor={"background.charcoal"} p={3} mt={2} borderRadius={"10px"}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        gap={{ xs: 1.5, sm: 0 }}
      >

        <Typography
          color="neutral.Snowwhite"
          fontSize={{ xs: "20px", sm: "25px" }}
          fontWeight={600}
        >
          Smart Scenarios
        </Typography>
        <Box
          display="flex"
          gap="6px"
          alignItems="center"
          bgcolor="neutral.vermilionOrange"
          borderRadius="14px"
          p={1.5}
          width={{ xs: "100%", sm: "170px" }}
          justifyContent="center"
        >
          <img src={StairsIcon} alt="analyze" />
          <Typography
            color="neutral.Snowwhite"
            fontSize="15px"
            fontWeight={700}
          >
            Analyze
          </Typography>
        </Box>
      </Box>

      <Box mt={2}>
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 10 }}>
            <Box bgcolor={"neutral.darkGrey"} p={1.6} borderRadius={"20px"} border={"1px solid rgba(127, 127, 127, 1)"}>
              <Typography color='neutral.Snowwhite' fontSize={"12px"}>
                Long/Short liquidation concentration levels. Price often "hunts" for liquidity, reaching these levels.
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 2 }}>
            <Box>
              <CustomSelect
                placeholder='1hr'
              >

              </CustomSelect>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box display={"flex"} gap={"10px"} mt={2} alignItems={"center"}>
        <Box>
          <Typography color='neutral.Snowwhite' fontSize={"15px"}>
            Quick select:
          </Typography>
        </Box>
        {coinName.map((item, index) => (
          <Box key={index} textAlign={"center"} width={"70px"} p={0.5} borderRadius={"15px"} border={"1px solid rgba(127, 127, 127, 1)"} bgcolor={"rgba(28, 28, 28, 1)"}>
            <Typography color='neutral.Snowwhite' fontSize={"12px"}>
              {item.name}
            </Typography>

          </Box>

        ))}

      </Box>
      <Box mt={2}>
        <Grid container spacing={1}>
          {smartCoindata.map((item, index) => (
            <Grid size={{ xs: 12, md: 6 }}>
              <Box key={index}>
                <StrategyCard
                  title={item.title}
                  percentage={item.percentage}
                  description={item.description}
                  btnText={item.btnText}
                  bodrerColor={item.border}
                  bgcolor={item.backgroundColor}
                  titleColor={item.titleColor}
                  percentageColor={item.percentageColor}
                  descriptionColor={item.descriptionColor}
                  btnBackgroudnColor={item.btnBackgroundColor}
                  btnBorderColor={item.btnBorderColor}
                />
              </Box>
            </Grid>
          ))}

        </Grid>

      </Box>
      <ExtremeFunding />
    </Box>
  )
}

export default SmartScenoria