import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const CumulativeData = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "transparent" },
        textColor: "transparent", // ❌ hide numbers
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      crosshair: {
        vertLine: { visible: false },
        horzLine: { visible: false },
      },
      timeScale: {
        visible: false,
      },
      rightPriceScale: {
        visible: false,
      },
      leftPriceScale: {
        visible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#00C853",
      downColor: "#FF3B30",
      borderVisible: false,
      wickUpColor: "#00C853",
      wickDownColor: "#FF3B30",
    });

    // dummy candle data (replace later)
    candleSeries.setData([
      { time: "2024-01-01", open: 10, high: 15, low: 8, close: 12 },
      { time: "2024-01-02", open: 12, high: 18, low: 11, close: 17 },
      { time: "2024-01-03", open: 17, high: 20, low: 14, close: 15 },
      { time: "2024-01-04", open: 15, high: 22, low: 15, close: 21 },
      { time: "2024-01-05", open: 21, high: 25, low: 20, close: 23 },
    ]);

    chart.timeScale().fitContent();

    return () => chart.remove();
  }, []);

  return (
    <Box
      bgcolor={"neutral.darkGrey"}
      p={3}
      mt={2}
      borderRadius={"15px"}
      height={"462px"}
    >
      {/* Title (same as yours) */}
      <Typography
        color="neutral.Snowwhite"
        fontSize="16px"
        letterSpacing="1px"
      >
        Cumulative Delta
      </Typography>

      {/* Candle Chart ONLY */}
      <Box mt={2} height="380px">
        <Box ref={chartContainerRef} height="100%" />
      </Box>
    </Box>
  );
};

export default CumulativeData;
