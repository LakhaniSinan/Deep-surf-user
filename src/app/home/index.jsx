import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import bg from "../../assets/images/background-Img.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import CustomButton from "../../components/customButton";
import { homeData } from "../../data/home";
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

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        // backgroundImage: `url(${bg})`,
        backgroundColor: theme.palette.background.default,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        m: 0,
        p: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Container maxWidth="lg">
        <Box mt={2}>
          <Typography variant="h1" color={theme.palette.text.primary}>
            Welcome back, <span style={{ color: "orange" }}>James</span>
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <CoinCheck />
              <Grid item xs={12} sm={4}>
                <Stack
                  direction="row"
                  flexWrap={"wrap"}
                  spacing={2}
                  gap={1}
                  alignItems={"center"}
                >
                  <StatCard
                    icon={
                      <img
                        style={statCardStyles.iconWrapper}
                        src={EthereumIcon}
                        alt="ETH"
                        width={20}
                        height={20}
                      />
                    }
                    imageSrc={graphIcon}
                    title="Ethereum"
                    subtitle="ETH/USDT"
                    price="$4,257"
                    percent={2.87}
                    accentColor="#00e676"
                  />

                  <StatCard
                    icon={
                      <img
                        style={statCardStyles.iconWrapper}
                        src={BitcoinIcon}
                        alt="BTC"
                        width={20}
                        height={20}
                      />
                    }
                    imageSrc={graphIcon}
                    imageAlt="Bitcoin"
                    title="Bitcoin"
                    subtitle="BTC/USDT"
                    price="$129,431"
                    percent={1.54}
                    accentColor="#ffc107"
                  />

                  <NeutralCard />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box width={"100%"} bgcolor={theme.palette.background.paper}>
                 <Box p={2}>
                   <Typography variant="h4" color={theme.palette.text.primary}>
                    Top 10 by volume
                  </Typography>
                  
                 </Box>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
