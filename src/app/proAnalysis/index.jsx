import { Typography, Container } from "@mui/material";
import Header from "../../components/header";
import MftScan from "./mftScan";
import HeatMap from "./heatMap";
import LiquidationMap from "./LiquidationMap.jsx";
import FuturesMetrics from "./FuturesMetrics";
import { getMftScanData } from "../../services/modules/home.js";
import { useEffect, useState } from "react";

const ProAnalysis = () => {
  const [mftData, setMftData] = useState(null);
  console.log("MftData:", mftData);

  useEffect(() => {
    const getMftScan = async () => {
      try {
        const response = await getMftScanData();
        console.log("getMftDataResponse:", response);

        // Check correct path based on API response
        if (response.data?.status === "success") {
          setMftData(response.data.data);
          console.log("MftScanData:", response.data.data);
        } else {
          console.warn("API returned an error:", response.data?.message);
        }
      } catch (error) {
        console.error("❌ API Error:", error);
      }
    };

    getMftScan();
  }, []);
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
        <Typography variant="h1" fontSize="24px">
          Pro Analytics
        </Typography>
        <MftScan />
        <HeatMap />
        <LiquidationMap />
        <FuturesMetrics />
      </Container>
    </>
  );
};

export default ProAnalysis;
