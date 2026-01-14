import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const LightweightChart = ({ data }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  useEffect(() => {
    console.log("🟢 Chart component mounted");

    if (!chartContainerRef.current) {
      console.error("❌ Container ref is null!");
      return;
    }

    let chart = null;
    let candleSeries = null;
    let handleResize = null;
    let timeoutId = null;

    const initializeChartWithDims = (containerWidth, containerHeight) => {
      const container = chartContainerRef.current;
      if (!container) return;

      console.log("🟢 Container dimensions:", { width: containerWidth, height: containerHeight });

      try {
        console.log("🟢 Creating chart with container:", container);
        chart = createChart(container, {
          width: containerWidth,
          height: containerHeight,
          layout: {
            background: { color: "#1a1a1a" },
            textColor: "rgba(255,255,255,0.7)",
          },
          grid: {
            vertLines: { color: "rgba(255,255,255,0.05)" },
            horzLines: { color: "rgba(255,255,255,0.05)" },
          },
          crosshair: { mode: 1 },
          rightPriceScale: { borderColor: "rgba(255,255,255,0.1)" },
          timeScale: { 
            borderColor: "rgba(255,255,255,0.1)",
            timeVisible: true,
            secondsVisible: false,
          },
        });

        console.log("🟢 Chart created:", chart);

        if (!chart) {
          console.error("❌ Chart creation returned null/undefined!");
          return;
        }

        // ✅ VERSION 5 CORRECT METHOD - addCandlestickSeries() directly
        candleSeries = chart.addCandlestickSeries({
          upColor: "#26a69a",
          downColor: "#ef5350",
          borderUpColor: "#26a69a",
          borderDownColor: "#ef5350",
          wickUpColor: "#26a69a",
          wickDownColor: "#ef5350",
        });

        console.log("🟢 Candlestick series added:", candleSeries);

        chartRef.current = chart;
        seriesRef.current = candleSeries;

        handleResize = () => {
          if (!chartContainerRef.current || !chart) return;
          const width = chartContainerRef.current.clientWidth || containerWidth;
          const height = chartContainerRef.current.clientHeight || containerHeight;
          if (width > 0 && height > 0 && chart) {
            console.log("🔄 Resizing chart:", { width, height });
            chart.applyOptions({ width, height });
          }
        };

        window.addEventListener("resize", handleResize);

        setTimeout(() => {
          if (handleResize) handleResize();
        }, 100);

      } catch (error) {
        console.error("❌ Error creating chart:", error);
        if (chart && chart.remove) {
          chart.remove();
        }
      }
    };

    timeoutId = setTimeout(() => {
      const container = chartContainerRef.current;
      if (!container) {
        console.error("❌ Container ref is null in initializeChart!");
        return;
      }

      const getDimensions = () => {
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;

        if (containerWidth === 0 || containerHeight === 0) {
          const parent = container.parentElement;
          if (parent) {
            containerWidth = parent.clientWidth - 32 || 800;
            containerHeight = parent.clientHeight - 32 || 600;
          } else {
            containerWidth = 800;
            containerHeight = 600;
          }
          console.warn("⚠️ Container has zero dimensions, using:", { width: containerWidth, height: containerHeight });
        }

        return { containerWidth, containerHeight };
      };

      let { containerWidth, containerHeight } = getDimensions();

      if (containerWidth === 0 || containerHeight === 0) {
        setTimeout(() => {
          const dims = getDimensions();
          initializeChartWithDims(dims.containerWidth, dims.containerHeight);
        }, 100);
        return;
      }

      initializeChartWithDims(containerWidth, containerHeight);
    }, 0);

    return () => {
      console.log("🔴 Chart cleanup");
      clearTimeout(timeoutId);
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
      if (chart && chart.remove) {
        chart.remove();
      }
      chartRef.current = null;
      seriesRef.current = null;
    };
  }, []);

  useEffect(() => {
    console.log("🟡 Data effect triggered");
    console.log("🟡 Data prop:", data);
    console.log("🟡 Series ref:", seriesRef.current);

    if (!data || !data.chartData) {
      console.error("❌ No data or chartData is missing!");
      return;
    }

    if (!seriesRef.current) {
      console.error("❌ Series ref is null!");
      return;
    }

    console.log("🟡 Raw chartData array:", data.chartData);
    console.log("🟡 First raw candle:", data.chartData[0]);

    const candles = data.chartData.map((candle, index) => {
      const transformed = {
        time: candle.timestamp / 1000, 
        open: parseFloat(candle.open),
        high: parseFloat(candle.high),
        low: parseFloat(candle.low),
        close: parseFloat(candle.close),
      };

      if (index === 0) {
        console.log("🟡 First transformed candle:", transformed);
        console.log("🟡 Timestamp check:", {
          original: candle.timestamp,
          divided: candle.timestamp / 1000,
          date: new Date(candle.timestamp).toISOString(),
        });
      }

      return transformed;
    });

    console.log("🟡 Total candles to render:", candles.length);
    console.log("🟡 First 3 candles:", candles.slice(0, 3));

    candles.sort((a, b) => a.time - b.time);

    console.log("🟡 Calling setData...");
    seriesRef.current.setData(candles);
    console.log("✅ setData completed");

    chartRef.current?.timeScale().fitContent();
    console.log("✅ fitContent called");

  }, [data]);

  return (
    <div 
      ref={chartContainerRef} 
      style={{ 
        width: "100%", 
        height: "100%",
        position: "relative",
      }} 
    />
  );
};

export default LightweightChart;