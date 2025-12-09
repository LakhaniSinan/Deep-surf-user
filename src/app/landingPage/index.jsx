import { Box, Container, Typography } from "@mui/material";
import Layout from "./authLayout";
import AiDriven from "./aiDrivenTrading";
import AiDrivenCard from "./aiDrivenCard.jsx";
import ProPerietaryTech from "./proprietaryTech/index.jsx";
import InSideDeep from "./inSideDeep.jsx/index.jsx";
import JoinSection from "./footer/index.jsx";


const LandingPage = () => {
  return (
    <>
      <Layout >
        <AiDriven />
      </Layout>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <AiDrivenCard />
          <ProPerietaryTech />
          <InSideDeep />
          <JoinSection />
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
