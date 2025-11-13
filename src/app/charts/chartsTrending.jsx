import React, { useState, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
  LineController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import "chartjs-adapter-date-fns";
import { Box, Typography, Button, ButtonGroup, IconButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { format } from "date-fns";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
  LineController,
  CandlestickController,
  CandlestickElement
);

// Sample candlestick data generator
const generateCandlestickData = (days = 2.5, intervalMinutes = 15) => {
  const data = [];
  const now = new Date();
  const startTime = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  let basePrice = 15300;

  for (
    let time = startTime.getTime();
    time <= now.getTime();
    time += intervalMinutes * 60 * 1000
  ) {
    const open = basePrice + (Math.random() - 0.5) * 100;
    const volatility = 20 + Math.random() * 30;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * 20;
    const low = Math.min(open, close) - Math.random() * 20;

    basePrice = close;

    data.push({
      x: time,
      o: parseFloat(open.toFixed(2)),
      h: parseFloat(high.toFixed(2)),
      l: parseFloat(low.toFixed(2)),
      c: parseFloat(close.toFixed(2)),
    });
  }

  return data;
};

const ChartsTrending = () => {
  const [timeframe, setTimeframe] = useState("15m");
  const [chartData, setChartData] = useState(() =>
    generateCandlestickData(2.5, 15)
  );

  // Calculate current price and metrics
  const currentCandle = chartData[chartData.length - 1];
  const previousCandle = chartData[chartData.length - 2];
  const currentPrice = currentCandle.c;
  const priceChange = currentPrice - previousCandle.c;
  const priceChangePercent = ((priceChange / previousCandle.c) * 100).toFixed(2);
  const volume = (Math.random() * 50 + 20).toFixed(2);
  const high = Math.max(...chartData.map((d) => d.h));
  const low = Math.min(...chartData.map((d) => d.l));
  const close = currentCandle.c;

  // Support line (you can make this dynamic)
  const supportLine = 15385;

  const timeframes = ["1m", "5m", "15m", "30m", "1H", "4H", "1D"];

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
    // Convert timeframe to minutes
    const minutesMap = {
      "1m": 1,
      "5m": 5,
      "15m": 15,
      "30m": 30,
      "1H": 60,
      "4H": 240,
      "1D": 1440,
    };
    const intervalMinutes = minutesMap[tf] || 15;
    setChartData(generateCandlestickData(2.5, intervalMinutes));
  };

  const chartOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: "rgba(30, 30, 30, 0.95)",
          titleColor: "#FFFFFF",
          bodyColor: "#FFFFFF",
          borderColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          filter: function (tooltipItem) {
            // Only show tooltip for candlestick chart, not for support line
            return tooltipItem.datasetIndex === 0;
          },
          callbacks: {
            label: function (context) {
              const data = context.raw;
              // Check if it's candlestick data (has o, h, l, c properties)
              if (data && typeof data.o !== "undefined") {
                return [
                  `Open: ${data.o.toFixed(2)}`,
                  `High: ${data.h.toFixed(2)}`,
                  `Low: ${data.l.toFixed(2)}`,
                  `Close: ${data.c.toFixed(2)}`,
                ];
              }
              return [];
            },
          },
        },
      },
      scales: {
        x: {
          type: "time",
          time: {
            unit: timeframe === "1D" ? "day" : "hour",
            displayFormats: {
              hour: "HH:mm",
              day: "MMM dd",
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
            drawBorder: false,
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.5)",
            font: {
              size: 11,
            },
          },
        },
        y: {
          position: "right",
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
            drawBorder: false,
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.7)",
            font: {
              size: 11,
              weight: "bold",
            },
            callback: function (value) {
              return value.toFixed(2);
            },
          },
        },
      },
      elements: {
        candlestick: {
          color: {
            up: "#26a69a", // Green for bullish
            down: "#ef5350", // Red for bearish
            upBorder: "#26a69a",
            downBorder: "#ef5350",
          },
        },
      },
    }),
    [timeframe]
  );

  const data = useMemo(
    () => ({
      datasets: [
        {
          label: "BTC/USDT",
          data: chartData,
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
        // Support line
        {
          type: "line",
          label: "Support line",
          data: chartData.map((d) => ({ x: d.x, y: supportLine })),
          borderColor: "#26a69a",
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false,
          tension: 0,
        },
      ],
    }),
    [chartData, supportLine]
  );

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderRadius: "24px",
        padding: "20px",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Left Side - Trading Pair and Price Info */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              color: "text.primary",
              marginBottom: "8px",
            }}
          >
            BTC/USDT
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              {currentPrice.toFixed(2)} USDT
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: priceChange >= 0 ? "#26a69a" : "#ef5350",
              }}
            >
              {priceChange >= 0 ? "+" : ""}
              {priceChangePercent}%
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: "8px",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: priceChange < 0 ? "#ef5350" : "text.secondary",
              }}
            >
              Change {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
              Volume {volume}K
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#ef5350" }}>
              Low {low.toFixed(4)}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
              High {high.toFixed(4)}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
              Close {close.toFixed(4)}
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Timeframe Selector and Fullscreen */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ButtonGroup
            variant="outlined"
            sx={{
              "& .MuiButton-root": {
                minWidth: "40px",
                padding: "6px 12px",
                fontSize: "12px",
                color: "text.primary",
                borderColor: "neutral.line",
                backgroundColor:
                  timeframe === "1m"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                "&:hover": {
                  borderColor: "neutral.lineStrong",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              },
            }}
          >
            {timeframes.map((tf) => (
              <Button
                key={tf}
                onClick={() => handleTimeframeChange(tf)}
                sx={{
                  backgroundColor:
                    timeframe === tf
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                  "&:hover": {
                    backgroundColor:
                      timeframe === tf
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {tf}
              </Button>
            ))}
          </ButtonGroup>
          <IconButton
            sx={{
              color: "text.primary",
              border: "1px solid",
              borderColor: "neutral.line",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            <FullscreenIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Chart Area */}
      <Box sx={{ flex: 1, position: "relative", minHeight: 0 }}>
        <Chart
          key={`chart-${timeframe}`}
          type="candlestick"
          data={data}
          options={chartOptions}
          updateMode="resize"
        />
      </Box>

      {/* Bottom Time Display */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: "11px",
            color: "text.secondary",
          }}
        >
          {format(new Date(), "HH:mm:ss")} (UTC-8)
        </Typography>
      </Box>
    </Box>
  );
};

export default ChartsTrending;

