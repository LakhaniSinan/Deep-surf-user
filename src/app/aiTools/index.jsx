import { Container, Typography } from "@mui/material";
import Header from "../../components/header";
import AiProof from "./aiProof";

const AiTools = () => {
  
  return (
    <>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: "30px",
          color: "white",
        }}
      >
        <Typography variant="h1">AI Tools</Typography>
        <AiProof />
      </Container>
    </>
  );
};

export default AiTools;
