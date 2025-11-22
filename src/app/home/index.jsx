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

const Home = () => {
  const [homeResponse, setHomeResponse] = useState(null);
  const [topCoins, setTopCoins] = useState([]);
  const [sentiment, setSentiment] = useState(null);
  const [macroData, setMacroData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
        console.warn("Home API returned an error:", response.message);
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
      title: "Ethereum",
      subtitle: "ETH/USDT",
      price: ETHEREUM?.priceFormatted,
      percent: ETHEREUM?.change24h,
    },
    {
      id: 2,
      icon: "BTC",
      iconSrc: BITCOIN?.logo,
      title: "Bitcoin",
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
        <Box mt={2}>
          <Typography
            variant="h1"
            fontSize="24px"
            fontWeight={700}
            color="text.primary"
          >
            Welcome back,{" "}
            <span style={{ color: "orange" }}>
              {homeResponse?.username || "user"}
            </span>
          </Typography>
        </Box>

        <Grid container spacing={2} mb={2} >
          <Grid item size={{ xs: 12, md: 6 }}>
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
                    <NeutralCard data={sentiment} />
                  </Grid>
                </Grid>
              )}
              <Box mt={2}>
                <TopVolumeSection
                  data1={homeResponse?.topCoinsByVolume24h}
                  data2={homeResponse?.topCoinsByVolume7d}
                  isLoading={isLoading}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} mt={2}>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 7 }}>
                <TopCoinsTable data={topCoins} isLoading={isLoading} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 5 }}>
                <Macroeconomics data={macroData} isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
