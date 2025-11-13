import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import bg from "../../assets/images/background-Img.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import CustomButton from "../../components/customButton";
import {
  homeData,
  statCardsData,
  volumeData,
  topCoinsData,
  macroeconomicsData,
} from "../../data/home";
import theme from "../../theme";
import Header from "../../components/header";
import CoinCheck from "../../components/coinCheck";
import StatCard from "../../components/statCard";
import BitcoinIcon from "../../assets/icons/btc-icon.png";
import EthereumIcon from "../../assets/icons/eth-icon.svg";
import graphIcon from "../../assets/icons/graph-icon.svg";
import graphIcon2 from "../../assets/icons/graph-icon2.svg";
import { statCardStyles } from "../../components/statCard/style";
import NeutralCard from "../../components/neutralCard";
import TopVolumeSection from "../../components/topVolumeSection";
import TopCoinsTable from "../../components/topCoinsTable";
import Macroeconomics from "../../components/macroeconomics";

const Home = () => {
  // Icon mapping object - easily extendable
  const iconMap = {
    ETH: EthereumIcon,
    BTC: BitcoinIcon,
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container maxWidth="lg">
        <Box mt={2}>
          <Typography variant="h1" fontSize="24px" fontWeight={700} color="text.primary">
            Welcome back, <span style={{ color: "orange" }}>James</span>
          </Typography>
        </Box>

        <Grid container spacing={2} mb={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <CoinCheck />
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
                  <NeutralCard />
                </Grid>
              </Grid>
              <Box mt={2}>
                <TopVolumeSection data={volumeData} />
              </Box>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }} mt={2}>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <TopCoinsTable data={topCoinsData} />
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <Macroeconomics data={macroeconomicsData} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
