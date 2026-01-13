import React, { useState } from "react";

// Simple date formatter
const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const formatChartTime = (date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};


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
      date: new Date(time),
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
    });
  }

  return data;
};

// Candlestick SVG Chart Component
const CandlestickChart = ({ data, supportLine }) => {
  const [hoveredCandle, setHoveredCandle] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const padding = { top: 20, right: 60, bottom: 40, left: 20 };
  const chartWidth = dimensions.width - padding.left - padding.right;
  const chartHeight = dimensions.height - padding.top - padding.bottom;

  const prices = data.flatMap(d => [d.high, d.low]);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  const candleWidth = chartWidth / data.length;
  const barWidth = Math.max(candleWidth * 0.6, 2);

  const priceToY = (price) => {
    return chartHeight - ((price - minPrice) / priceRange) * chartHeight;
  };

  const handleMouseMove = (e, candle, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredCandle({ ...candle, index });
  };

  const handleMouseLeave = () => {
    setHoveredCandle(null);
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {dimensions.width > 0 && (
        <svg
          width={dimensions.width}
          height={dimensions.height}
          style={{ background: 'transparent' }}
          onMouseLeave={handleMouseLeave}
        >
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = chartHeight * ratio;
              const price = maxPrice - (priceRange * ratio);
              return (
                <g key={i}>
                  <line
                    x1={0}
                    y1={y}
                    x2={chartWidth}
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth={1}
                  />
                  <text
                    x={chartWidth + 10}
                    y={y + 4}
                    fill="rgba(255, 255, 255, 0.7)"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    {price.toFixed(2)}
                  </text>
                </g>
              );
            })}

            {/* Support line */}
            {supportLine && (
              <line
                x1={0}
                y1={priceToY(supportLine)}
                x2={chartWidth}
                y2={priceToY(supportLine)}
                stroke="#26a69a"
                strokeWidth={2}
                strokeDasharray="5,5"
              />
            )}

            {/* Candlesticks */}
            {data.map((d, i) => {
              const x = (i + 0.5) * candleWidth;
              const isGreen = d.close > d.open;
              const color = isGreen ? "#26a69a" : "#ef5350";

              const highY = priceToY(d.high);
              const lowY = priceToY(d.low);
              const openY = priceToY(d.open);
              const closeY = priceToY(d.close);

              const bodyTop = Math.min(openY, closeY);
              const bodyHeight = Math.abs(closeY - openY);

              return (
                <g
                  key={i}
                  onMouseMove={(e) => handleMouseMove(e, d, i)}
                  style={{ cursor: 'crosshair' }}
                >
                  {/* Invisible wider area for better hover detection */}
                  <rect
                    x={x - candleWidth / 2}
                    y={0}
                    width={candleWidth}
                    height={chartHeight}
                    fill="transparent"
                  />

                  {/* Wick */}
                  <line
                    x1={x}
                    y1={highY}
                    x2={x}
                    y2={lowY}
                    stroke={color}
                    strokeWidth={1}
                  />
                  {/* Body */}
                  <rect
                    x={x - barWidth / 2}
                    y={bodyTop}
                    width={barWidth}
                    height={Math.max(bodyHeight, 1)}
                    fill={color}
                    stroke={color}
                    strokeWidth={0.5}
                  />
                </g>
              );
            })}

            {/* X-axis time labels */}
            {[0, Math.floor(data.length / 4), Math.floor(data.length / 2), Math.floor(3 * data.length / 4), data.length - 1].map((i) => {
              if (i >= data.length) return null;
              const d = data[i];
              const x = (i + 0.5) * candleWidth;
              return (
                <text
                  key={i}
                  x={x}
                  y={chartHeight + 20}
                  fill="rgba(255, 255, 255, 0.5)"
                  fontSize="11"
                  textAnchor="middle"
                >
                  {formatChartTime(d.date)}
                </text>
              );
            })}
          </g>
        </svg>
      )}

      {/* Tooltip */}
      {hoveredCandle && (
        <div
          style={{
            position: 'absolute',
            left: mousePos.x + 15,
            top: mousePos.y - 80,
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            color: '#fff',
            padding: '12px',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '12px',
            pointerEvents: 'none',
            zIndex: 1000,
            minWidth: '120px',
          }}
        >
          <div>Open: {hoveredCandle.open.toFixed(2)}</div>
          <div>High: {hoveredCandle.high.toFixed(2)}</div>
          <div>Low: {hoveredCandle.low.toFixed(2)}</div>
          <div>Close: {hoveredCandle.close.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

const ChartsTrending = ({ chart = {} }) => {
  const [timeframe, setTimeframe] = useState("15m");
  const [chartData, setChartData] = useState(() =>
    generateCandlestickData(2.5, 15)
  );

  const currentCandle = chartData[chartData.length - 1];
  const previousCandle = chartData[chartData.length - 2];
  const currentPrice = currentCandle.close;
  const priceChange = currentPrice - previousCandle.close;
  const priceChangePercent = ((priceChange / previousCandle.close) * 100).toFixed(2);
  const volume = (Math.random() * 50 + 20).toFixed(2);
  const high = Math.max(...chartData.map((d) => d.high));
  const low = Math.min(...chartData.map((d) => d.low));
  const close = currentCandle.close;

  const supportLine = 15385;
  const timeframes = ["1m", "5m", "15m", "30m", "1H", "4H", "1D"];

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
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

  return (
    <div style={{
      backgroundColor: "#1a1a1a",
      borderRadius: "24px",
      padding: "20px",
      height: "95vh",
      display: "flex",
      flexDirection: "column",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "16px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: 600, margin: "0" }}>
              {chart?.binanceSymbol || "BTC/USDT"}
            </h2>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "20px", fontWeight: 700 }}>
              {chart?.currentPriceFormatted || currentPrice.toFixed(2)}
            </span>
            <span style={{
              fontSize: "16px",
              fontWeight: 600,
              color: priceChange >= 0 ? "#26a69a" : "#ef5350",
            }}>
              {priceChange >= 0 ? "+" : ""}{priceChangePercent}%
            </span>
          </div>

          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginLeft: "auto" }}>
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => handleTimeframeChange(tf)}
                style={{
                  minWidth: "40px",
                  padding: "6px 12px",
                  fontSize: "12px",
                  color: "#fff",
                  backgroundColor: timeframe === tf ? "rgba(255, 255, 255, 0.15)" : "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = timeframe === tf ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = timeframe === tf ? "rgba(255, 255, 255, 0.15)" : "transparent";
                }}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px" }}>
          <span style={{ color: priceChange >= 0 ? "#26a69a" : "#ef5350" }}>
            Change: {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(2)}
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Volume: {volume}K
          </span>
          <span style={{ color: "#ef5350" }}>
            Low: {low.toFixed(4)}
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            High: {high.toFixed(4)}
          </span>
          <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Close: {close.toFixed(4)}
          </span>
        </div>
      </div>

      {/* Chart Area */}
      <div style={{ flex: 1, minHeight: 0, position: "relative", width: '100%' }}>
        <CandlestickChart
          data={chartData}
          supportLine={supportLine}
        />
      </div>

      {/* Bottom Time Display */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
        <span style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.5)" }}>
          {formatTime(new Date())} (UTC-8)
        </span>
      </div>
    </div>
  );
};

export default ChartsTrending;