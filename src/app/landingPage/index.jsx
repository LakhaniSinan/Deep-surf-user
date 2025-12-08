import { Box, Typography } from "@mui/material";
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
        <AiDrivenCard />
        <ProPerietaryTech />
        <InSideDeep />
        <JoinSection />
      </Box>
    </>
  );
};

export default LandingPage;
