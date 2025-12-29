import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BitcoinIcon from "../../assets/icons/bitcoin-logo.svg";
import EthereumIcon from "../../assets/icons/eth-icon.svg";
import graphIcon from "../../assets/icons/graph-icon.svg";
import CoinCheck from "../../components/coinCheck";
import Header from "../../components/header";
import Macroeconomics from "../../components/macroeconomics";
import NeutralCard from "../../components/neutralCard";
import StatCard from "../../components/statCard";
import { statCardStyles } from "../../components/statCard/style";
import TopCoinsTable from "../../components/topCoinsTable";
import TopVolumeSection from "../../components/topVolumeSection";
import { getHomeData } from "../../services/modules/home";
import StatCardSkeleton from "../../components/skeleton/statesCardSkeleton";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../../store";
import CustomButton from "../../components/customButton";
import PlusIcon from "../../assets/icons/plus.svg";
import RelaodIcon from "../../assets/icons/relaod-Icon.svg";
import Speedometer from "../../components/speedMeter";
import { color } from "d3";
import { useTranslation } from "react-i18next";


const Home = () => {
  const [homeResponse, setHomeResponse] = useState(null);
  console.log("fufhufrfrfrfrf", homeResponse?.overallSentiment?.score);
  const [topCoins, setTopCoins] = useState([]);
  console.log("fjfhrufhrufrfrfrrfr", topCoins);
  const [sentiment, setSentiment] = useState(null);
  const [macroData, setMacroData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t  , i18n} = useTranslation();
  console.log("ffrfrfrfrfrf" , i18n.language);
  
  const { user } = useAuthStore();
  const username = user?.username || user?.name;
  const fetchHomeData = async () => {
    try {
      setIsLoading(true);
      const response = await getHomeData();
      if (response.data.status === "success") {
        const data = response.data.data;
        setHomeResponse(data);
        setTopCoins(data.topCoins);
        setSentiment(data.overallSentiment);
        setMacroData(data.macroeconomics);
      } else {
        console.log("Home API returned an error:", response.message);
      }
    } catch (error) {
      console.error("❌ Home API Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const iconMap = {
    ETH: EthereumIcon,
    BTC: BitcoinIcon,
  };

  const BITCOIN = topCoins?.find((x) => x.symbol === "BTC");
  const ETHEREUM = topCoins?.find((x) => x.symbol === "ETH");

  const statCardsData = [
    {
      id: 1,
      icon: "ETH",
      iconSrc: ETHEREUM?.logo,
      title: t("dashboard.ethereum"),
      subtitle: "ETH/USDT",
      price: ETHEREUM?.priceFormatted,
      percent: ETHEREUM?.change24h,
    },

    {
      id: 2,
      icon: "BTC",
      iconSrc: BITCOIN?.logo,
      title: t("dashboard.bitcoin"),
      subtitle: "BTC/USDT",
      price: BITCOIN?.priceFormatted,
      percent: BITCOIN?.change24h,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box mt={"30px"}>
            <Typography
              variant="h1"
              fontSize="30px"
              fontWeight={700}
              color="text.primary"
              fontFamily="Inter Tight"
            >
              {t("dashboard.wellcomeBack")},{" "}
              <span style={{ color: "#FF6421", fontFamily: "Inter Tight", fontSize: "30px" }}>
                {username}
              </span>
            </Typography>


          </Box>


          <Box display={"flex"} gap={2} alignItems={"center"} mt={"20px"}>
            <Box>
              <img src={RelaodIcon} width={"20px"} />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <CustomButton
                variant="calculatorSmall"
                title={t("dashboard.addTools")}
                icon={<img src={PlusIcon} />}
              // sx={{
              //   fontSize: "13px",
              //   backgroundColor: "#1A1A1A",
              //   border: "1px solid #1A1A1A",
              //   borderRadius: "15px",
              //   color: "#7B7B7B",

              // }}
              />
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2} mb={2}>
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <CoinCheck />
              {isLoading ? (
                <StatCardSkeleton />
              ) : (
                <Grid container spacing={2}>
                  {statCardsData.map((card) => (
                    <Grid item size={{ xs: 12, sm: 4 }} key={card.id}>
                      <StatCard
                        icon={
                          <img
                            style={statCardStyles.iconWrapper}
                            src={iconMap[card.icon]}
                            alt={card.icon}
                            width={20}
                            height={20}
                          />
                        }
                        imageSrc={graphIcon}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        subtitle={card.subtitle}
                        price={card.price}
                        percent={card.percent}
                        accentColor={card.accentColor}
                      />
                    </Grid>
                  ))}
                  <Grid item size={{ xs: 12, sm: 4 }}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      textAlign={"center"}
                      backgroundColor="#1C1C1C"
                      borderRadius={"20px"}
                      height={"203px"}
                      padding={"8px"}

                    >
                      <Box mt={2} >
                        <Typography color="#fff" fontSize={"15px"} lineHeight={0.8} fontWeight={400}>
                          {t("dashboard.overallSentiment")}
                        </Typography>
                        <Typography mt={0.5} color="text.yellowColor" fontSize={"14px"} fontWeight={500}>
                          {sentiment?.label || t("dashboard.neutral")}
                        </Typography>

                        <Box mt={"8px"}>
                          <Speedometer
                            size={50}
                            score={homeResponse?.overallSentiment?.score}
                          />
                        </Box>

                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              )}
              <Box mt={1}>
                <TopVolumeSection
                  data1={homeResponse?.topCoinsByVolume24h}
                  data2={homeResponse?.topCoinsByVolume7d}
                  isLoading={isLoading}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 7 }} mt={2}>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TopCoinsTable data={topCoins} isLoading={isLoading} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Macroeconomics data={macroData} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container >
    </Box >
  );
};

export default Home;
